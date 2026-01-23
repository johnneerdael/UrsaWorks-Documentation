# Security

## Authentication

- **Google OAuth2** is required for application access
- Email validation against an approved-users allowlist
- Case-insensitive email matching
- OAuth secrets are server-side only

## URSA Session

- **Two separate logins**: UrsaWorks (Google) + URSA (cookie + user agent)
- URSA session data stored in browser sessionStorage
- Cleared when you log out or close the tab
- Manual session inputs saved in localStorage (you can clear it)

## Authorization

- **Approval pools** from URSA determine visible approvals
- **Approval groups** control config/feature permissions
- User permissions are the union of assigned groups
- Zero groups = no permissions

## Data Handling

- UrsaWorks does **not** store URSA session server-side
- Run history and rules stored in UrsaWorks database
- All actions forwarded to URSA with your session

## Companion Security

- OAuth redirect URIs allowlisted server-side
- Mobile companions use HTTPS-based deep links
- Desktop companion registers local OAuth scheme

## Admin Controls

- Admin role required for user management
- Group-based permission management
- Shared resources respect ownership and group membership