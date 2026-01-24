# Security

## Authentication

- **Google OAuth2** is required for application access
- Email validation against an approved-users allowlist
- Case-insensitive email matching
- OAuth secrets are server-side only
- The server does **not** store any URSA session values (URSA cookie/user-agent) long-term; those are provided by the client when needed

## URSA Session

- **Two separate logins**: UrsaWorks (Google) + URSA (cookie + user agent)
- URSA session data stored in browser sessionStorage
- Cleared when you log out or close the tab
- Manual session inputs saved in localStorage (you can clear it)
- URSA login **must match** the Google-authenticated email; mismatches are rejected during session verification

## Authorization

- **Approval pools** from URSA determine which approvals/configs you can see (URSA is the source of truth)
- UrsaWorks does not maintain separate “approval groups” for authorization; it uses URSA-derived catalogs and per-user visibility settings in the UI
- Shared resources (e.g., shared profiles) are readable when there is URSA approval-pool overlap between users

## Data Handling

- UrsaWorks does **not** store URSA session server-side
- Run history and rules stored in UrsaWorks database
- All actions forwarded to URSA with your session

## CSRF & Browser Protections

- Google OAuth uses a signed `state` cookie and verifies it on callback (CSRF protection for the OAuth flow)
- UrsaWorks API authentication uses a signed, `httpOnly` session cookie
- For state-changing API requests, UrsaWorks relies primarily on browser cookie protections (SameSite defaults) and same-site deployments
- If UrsaWorks is hosted cross-site or embedded, consider hardening with explicit `SameSite` cookie settings, strict CORS allowlists, and/or Origin/Referer checks (and a CSRF token if needed)

### Server hardening configuration

These settings are most relevant when running behind a TLS reverse proxy (e.g., Caddy) and serving the UI from a known origin.

- `CORS_ALLOWED_ORIGINS`: comma-separated list of allowed browser origins for credentialed requests (recommended in production)
	- Example: `https://ursaworks.example.com`
- `CSRF_REQUIRE_ORIGIN`: when `true`, reject unsafe authenticated requests (POST/PUT/PATCH/DELETE) if both `Origin` and `Referer` headers are missing
	- Recommended: `true` in production (set to `false` only if required by non-browser clients)
- `AUTH_COOKIE_SAMESITE`: cookie `SameSite` policy for auth-related cookies (`lax` | `strict` | `none`)
	- Recommended: `lax` for same-site deployments
- `AUTH_COOKIE_SECURE`: override cookie Secure behavior (`true`/`false`); default follows `NODE_ENV === 'production'`
- `AUTH_RATE_LIMIT_MAX`, `AUTH_RATE_LIMIT_WINDOW`: rate limiting for auth endpoints (defaults: `30` per `1 minute`)
- `SESSION_RATE_LIMIT_MAX`, `SESSION_RATE_LIMIT_WINDOW`: rate limiting for session endpoints (defaults: `30` per `1 minute`)

## Companion Security

- OAuth redirect URIs allowlisted server-side
- Mobile companions use HTTPS-based deep links
- Desktop companion registers local OAuth scheme

## Admin Controls

- Admin role required for user management
- Admins manage the approved-users allowlist and can delete profiles (metadata-only)
- Shared resources respect ownership and URSA approval-pool overlap visibility