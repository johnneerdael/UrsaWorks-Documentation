# Security

This document explains UrsaWorks security in plain language: what’s protected, what’s stored, and what you should expect as a user.

## URSA session (separate from UrsaWorks)

- URSA session data is kept in the browser (sessionStorage) and is cleared when you log out or close the tab.
- Manual session inputs are saved in the browser (localStorage) for convenience.

## What UrsaWorks stores

- UrsaWorks does not persist your URSA cookie/user-agent on the server.
- UrsaWorks does store application data like rules and run history in its own database.
- Actions against URSA are made using your URSA session when you initiate them.

## Browser and API protections

UrsaWorks uses multiple layers of protection for browser-based usage:

- Signed, `httpOnly` session cookie: the UrsaWorks session is stored in a cookie that JavaScript cannot read.
- CORS allowlist for credentialed requests: browsers are only allowed to send cookies from explicitly allowed UI origins.
- CSRF checks for unsafe requests: for authenticated `POST`/`PUT`/`PATCH`/`DELETE`, the server validates `Origin`/`Referer` to reduce the risk of cross-site request forgery.
- Security headers: the API sets baseline browser security headers (useful even when running behind a reverse proxy).
- Rate limiting: auth/session endpoints are rate-limited to reduce abuse and brute-force attempts.
