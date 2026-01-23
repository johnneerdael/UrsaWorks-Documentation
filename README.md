# UrsaWorks User Guide

Welcome to **UrsaWorks** — an automation platform for managing Ursa feature/config approval requests. This guide is end‑user focused and reflects the current behavior of the UrsaWorks web app and companion tools.

UrsaWorks web app: `https://ursa.thepi.es`

***

## Contents

1. What UrsaWorks Is
2. Access Requirements
3. Authentication vs. URSA Session
4. Sign‑In Methods
5. Connect Your URSA Session
6. User Settings (Config Visibility)
7. Features
   * Dashboard
   * Rules
   * Manual Run
   * Feature Toggle
   * History
   * Admin
8. Security & Data Handling
9. Troubleshooting
10. FAQ

***

## 1) What UrsaWorks Is

UrsaWorks helps you automate approvals and rejections of **URSA config requests**.

You can:

* Build automation rules that match tenant type + config name
* Include or exclude specific requesters
* Execute rules in bulk (preview and run)
* Toggle feature flags for a tenant and auto‑approve the request
* View run history and results
* Manage approved users (admin only)

***

## 2) Access Requirements

To use UrsaWorks you must:

* Have a `@netskope.com` Google Workspace account
* Be added to the **Approved Users** list by an admin
* Authenticate via Google OAuth

**Important:** Authentication does not equal authorization.\
Even if Google sign‑in succeeds, you are blocked until your email is allow‑listed in UrsaWorks.

***

## 3) Authentication vs. URSA Session

There are **two separate logins**:

1. **UrsaWorks login (Google OAuth)**\
   Grants access to the UrsaWorks web app.

2. **URSA session (cookie + user agent)**\
   Allows UrsaWorks to perform actions **on your behalf** inside URSA.

You must complete both steps before rules, feature toggles, or runs will work.

***

## 4) Sign‑In Methods

### Method A — UrsaWorks Companion (Desktop, recommended)

UrsaWorks Companion is a tray app that:

* Registers a custom OAuth redirect scheme
* Exposes `http://localhost:8765/ping` so the web app can detect it
* Sends Google OAuth codes back to your browser automatically

When Companion is running, the login screen shows **“UrsaWorks Companion: Online.”**

**Steps**

1. Launch **UrsaWorks Companion** on your machine
2. Go to the UrsaWorks login page
3. Click **“Sign in with UrsaWorks Companion”**
4. Complete Google auth
5. You return to UrsaWorks automatically

If the status shows **Not Running**, start the companion and refresh.

### Method B — UrsaWorks Companion (Mobile, if configured)

On mobile devices, the login screen can offer a **mobile companion** flow.\
This appears only if the mobile redirect is configured in your deployment.

**Steps**

1. Tap **“Sign in with UrsaWorks Companion”**
2. Complete Google auth in the mobile companion
3. Return to UrsaWorks

If your deployment is not configured for mobile companion, use Manual Copy/Paste.

### Method C — Manual Copy/Paste (always available)

Use this method if you can’t install the companion.

**Steps**

1. Click **“Sign in manually (Copy/Paste)”**
2. Click **“Open Google Login Window”**
3. Complete Google auth
4. Copy the final redirect URL (or just the code)
5. Paste into UrsaWorks and click **Verify Code**

You can paste the full URL; UrsaWorks extracts `code=` automatically.

***

## 5) Connect Your URSA Session

After signing in, connect your **URSA session** on the **Dashboard** page.

**What you need:**

* URSA `session` cookie value
* Browser `User-Agent`

**Steps**

1. Open URSA in your browser
2. In DevTools → Application → Cookies, copy the `session` value
3. In DevTools → Console, run `navigator.userAgent`
4. Paste both values into UrsaWorks
5. Click **Verify & Connect**

When verified:

* Status changes to **ACTIVE**
* Your URSA email is displayed
* Rules, feature toggle, and runs become available

**Session checks**

* UrsaWorks validates your URSA session against URSA
* If the URSA email doesn’t match your UrsaWorks login, the session is rejected

***

## 6) User Settings (Config Visibility)

**User Settings** lets you control which config names appear in:

* **Rules**
* **Feature Toggle**

By default, all configs are visible.\
If you enable filtering, only selected configs appear in those pages.

To configure:

1. Go to **User Settings**
2. Toggle **Show all configs** on/off for each page
3. Select visible configs
4. Click **Save Settings**

An empty selection with filtering enabled hides all configs.

***

## 7) Features

### Dashboard

The Dashboard is where you connect your URSA session.

It shows:

* **URSA Session status**: ACTIVE / UNKNOWN / EXPIRED / ALLOCATING
* **Connected user** (when active)
* Manual inputs for URSA cookie and User‑Agent

### Rules

Rules are the core automation logic. Each rule defines **what to do** when an approval request matches.

**Rule fields**

* **Tenant Type(s)** (multi‑select)
* **Config Name** (from URSA approval configs)
* **Action**: Approve or Reject
* **Reason**: comment sent to URSA
* **Enabled**: on/off switch
* **Requester Requirements**:
  * **Include Requesters** (allowlist)
  * **Exclude Requesters** (denylist)

**Requester matching rules**

* If **Exclude** contains the requester → the rule does **not** match
* If **Include** is non‑empty → the requester **must** be in the include list
* If a requester appears in both lists, **exclude wins**
* Matching is case‑insensitive on email

**How rules are applied**

* UrsaWorks fetches **open approvals** from URSA using your session
* Each approval is matched against your **enabled rules**
* Rules are matched by tenant type + config name + requester requirements
* Only approvals that URSA returns for **your approval pools** are processed\
  (UrsaWorks does **not** enforce local RBAC; URSA does)

**Managing rules**

* Create: **New Rule**
* Edit: pencil icon
* Delete: trash icon
* Disable/enable: toggle in rule editor

**Shared rules**

Some environments may have **shared rules** managed by admins.\
These appear alongside your own rules but cannot be edited by non‑owners.

### Manual Run

Manual Run executes your rules against current open approvals.

**Preview**

* Fetches open approvals
* Shows how each request would be handled
* Summarizes counts: Approve / Reject / No‑Match

**Execute**

* Runs the actions from the preview
* Sends approve/reject calls to URSA
* Stores a run record and per‑item results

### Feature Toggle

Feature Toggle performs a two‑step workflow:

1. **Submit config change** in URSA
2. **Auto‑approve** the resulting request (when possible)

**Inputs**

* Tenant ID (numeric)
* Config name (from URSA approval configs)
* Enable / Disable toggle

**Step 1 — Config change**

* UrsaWorks submits a config change for the selected config
* It tracks `from` and `to` values if returned
* A request ID is returned if URSA created one

**Step 2 — Auto‑approve**

* UrsaWorks searches for an **open approval** that matches:
  * Same tenant ID
  * Same config name
  * Requested by **your URSA user**
* If found, it auto‑approves the request
* If not found, the config change still stands but approval is not automatic

### History

History lists your recent automation runs.

Each row shows:

* Run ID
* Mode (preview or execute)
* Status
* Total items
* Success / Failed count
* Start time

Expanding a run shows per‑request results, including:

* Tenant type
* Config
* Pool
* Action
* Success/failure + message

### Admin (Admin role only)

Admins manage the **Approved Users** list.

**Admin capabilities**

* Add/remove users
* Grant or revoke **admin-role**
* View observed **approval pools** for each user

**Approval pools**

* Pool assignments are captured when a user verifies a URSA session
* Until then, pools show as **“Unknown”**
* Pool data is **informational only**; URSA still enforces access control

***

## 8) Security & Data Handling

* **Authentication** is handled via Google OAuth\
  UrsaWorks never stores your Google password.

* **URSA session data** (cookie + user agent) is stored in your browser’s
  **sessionStorage** and cleared when you log out or close the tab.

* The Dashboard form remembers your last cookie/user‑agent in **localStorage**
  to save re‑typing (you can clear it any time).

* UrsaWorks does **not** store your URSA session server‑side.
  It only forwards it to URSA when you request actions.

* **Run history** and **rules** are stored in the UrsaWorks database.

***

## 9) Troubleshooting

### Companion status says “Not Running”

* Ensure UrsaWorks Companion is running
* Verify `http://localhost:8765/ping` returns `{"status":"ok"}`
* Check firewall or local port conflicts

### Manual login fails

* Paste the full redirect URL or the code
* The Google code expires quickly; retry if needed

### “Session mismatch” error

* Your URSA session email must match your UrsaWorks login
* Log out of URSA and re‑authenticate with the correct user

### No configs available in Rules/Feature Toggle

* You must have an **active URSA session**
* Config lists come from URSA approval configs
* Verify your session and refresh the page

### Execute returns failures

* The request may already be handled in URSA
* Your URSA session may have expired
* Review per‑item error messages in History

***

## 10) FAQ

**Q: Is UrsaWorks Companion required?**\
No. You can always use the manual copy/paste login.

**Q: Why do I need to connect a URSA session?**\
UrsaWorks uses your URSA session to act on your behalf.\
Google OAuth only logs you into the UrsaWorks web app.

**Q: Who controls which approvals I can see?**\
URSA does, via approval pools. UrsaWorks only processes approvals
returned by URSA for your session.

**Q: Can I use UrsaWorks on mobile?**\
The web app works on mobile. Companion login requires a configured
mobile companion redirect; otherwise use manual sign‑in.

**Q: Where can I get help?**\
Contact John Neerdael (best‑effort support).

***

*Last updated: January 22, 2026*
