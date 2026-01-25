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
- Starts automatically on boot
- Initiates Google OAuth in your system browser
- Sends Google OAuth codes back to your browser automatically

**Download:**
- [Windows Installer](https://github.com/johnneerdael/UrsaWorks-Companion/releases/latest) (.exe installer with auto-start)
- [macOS Installer](https://github.com/johnneerdael/UrsaWorks-Companion/releases/latest) (.pkg installer with auto-start)
- [iOS TestFlight](https://testflight.apple.com/join/...) (for testers)
- [Android APK](https://github.com/johnneerdael/UrsaWorks-Mobile-Companion/releases/latest) (untested)

**Steps:**
1. Download and install **UrsaWorks Companion** for your platform
2. Launch the companion app (it will start automatically on future boots)
3. In the companion app, click **"Sign in to UrsaWorks"**
4. Complete Google auth in the opened browser
5. You return to UrsaWorks automatically

**Logs:** View logs from the tray icon menu on desktop platforms.

### Mobile Companion

The mobile companion supports OAuth flow via deep links on iOS and Android.

**Download:**
- [iOS TestFlight](https://testflight.apple.com/join/...) (for testers)
- [Android APK](https://github.com/johnneerdael/UrsaWorks-Mobile-Companion/releases/latest) (untested)

**Steps:**
1. Install the companion app
2. Open the companion app and tap **"Sign in to UrsaWorks"**
3. Complete Google auth in the system browser
4. Return to UrsaWorks automatically

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

**Steps:**
1. Open URSA in your browser
2. In DevTools → Application → Cookies, copy the `session` value
3. Paste the value into UrsaWorks
4. Click **Verify & Connect**

When verified:
- Status changes to **ACTIVE**
- Your URSA email is displayed
- Rules, feature toggle, and runs become available

**Session checks:**
- UrsaWorks validates your URSA session against URSA
- If the URSA email doesn't match your UrsaWorks login, the session is rejected