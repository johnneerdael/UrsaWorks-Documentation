# Security

This document explains UrsaWorks security in plain language: what’s protected, what’s stored, and what you should expect as a user.

## Authentication and identity

- UrsaWorks uses Google OAuth2 to sign you in.
- Your email must be on the approved-users allowlist.
- Email matching is case-insensitive.
- OAuth client secrets live only on the server.

## URSA session (separate from UrsaWorks)

- UrsaWorks login (Google) and URSA login (cookie + user agent) are two different things.
- URSA session data is kept in the browser (sessionStorage) and is cleared when you log out or close the tab.
- Manual session inputs are saved in the browser (localStorage) for convenience.
- UrsaWorks rejects URSA sessions that don’t match the Google-authenticated email.

## What UrsaWorks stores

- UrsaWorks does not persist your URSA cookie/user-agent on the server.
- UrsaWorks does store application data like rules and run history in its own database.
- Actions against URSA are made using your URSA session when you initiate them.

## Browser and API protections

UrsaWorks uses multiple layers of protection for browser-based usage:

- OAuth flow CSRF protection: Google OAuth uses a signed `state` cookie and verifies it on callback.
- Signed, `httpOnly` session cookie: the UrsaWorks session is stored in a cookie that JavaScript cannot read.
- CORS allowlist for credentialed requests: browsers are only allowed to send cookies from explicitly allowed UI origins.
- CSRF checks for unsafe requests: for authenticated `POST`/`PUT`/`PATCH`/`DELETE`, the server validates `Origin`/`Referer` to reduce the risk of cross-site request forgery.
- Security headers: the API sets baseline browser security headers (useful even when running behind a reverse proxy).
- Rate limiting: auth/session endpoints are rate-limited to reduce abuse and brute-force attempts.

## Companion security

- Companion flows still rely on OAuth redirect URIs that are allowlisted on the Google OAuth client.
- If you don’t control the Google Cloud Console for the OAuth client, you may be forced to use whatever redirect URI is already registered (often a `localhost` callback).

## Admin controls (high-level)

- Admins manage the approved-users allowlist.
- Admins can delete profiles (metadata-only).
- Shared resources are readable when there is URSA approval-pool overlap and ownership allows it.