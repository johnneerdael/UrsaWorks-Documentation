# Getting Started

## Access Requirements

To use UrsaWorks you must:
- Have a `@netskope.com` Google Workspace account
- Be added to the **Approved Users** list by an admin
- Authenticate via Google OAuth

**Important:** Authentication does not equal authorization. Even if Google sign-in succeeds, you are blocked until your email is allowlisted in UrsaWorks.

## Sign-In Methods

### Desktop Companion (Recommended)

UrsaWorks Companion is a tray app that:
- Registers a custom OAuth redirect scheme
- Exposes `http://localhost:8765/ping` so the web app can detect it
- Sends Google OAuth codes back to your browser automatically

**Steps:**
1. Launch **UrsaWorks Companion** on your machine
2. Go to the UrsaWorks login page
3. Click **"Sign in with UrsaWorks Companion"**
4. Complete Google auth
5. You return to UrsaWorks automatically

### Manual Copy/Paste

Use this method if you can't install the companion.

**Steps:**
1. Click **"Sign in manually (Copy/Paste)"**
2. Click **"Open Google Login Window"**
3. Complete Google auth
4. Copy the final redirect URL (or just the code)
5. Paste into UrsaWorks and click **Verify Code**

## Connect Your URSA Session

After signing in, connect your **URSA session** on the **Dashboard** page.

**What you need:**
- URSA `session` cookie value
- Browser `User-Agent`

**Steps:**
1. Open URSA in your browser
2. In DevTools → Application → Cookies, copy the `session` value
3. In DevTools → Console, run `navigator.userAgent`
4. Paste both values into UrsaWorks
5. Click **Verify & Connect**

When verified:
- Status changes to **ACTIVE**
- Your URSA email is displayed
- Rules, feature toggle, and runs become available

**Session checks:**
- UrsaWorks validates your URSA session against URSA
- If the URSA email doesn't match your UrsaWorks login, the session is rejected