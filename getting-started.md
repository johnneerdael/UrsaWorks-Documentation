# Getting Started

## Prerequisites

To use UrsaWorks you need:
- Docker installed on your machine
- An active URSA account with access to approvals
- Your URSA session cookie

## Installation

### Step 1: Run the Docker Container

UrsaWorks runs as a Docker container on your localhost. To start it:

```bash
docker compose up -d --build
```

Once running, open your browser and navigate to:
```
http://localhost:5173
```

### Step 2: Get Your URSA Session Cookie

You need to extract your URSA session cookie to authenticate with UrsaWorks:

1. Open **URSA** in your browser and log in
2. Open **DevTools** (F12 or right-click → Inspect)
3. Go to **Application** → **Cookies** → select the URSA domain
4. Find the cookie named `session`
5. Copy the **Value** (it will be a long string)

### Step 3: Connect Your Session

Back in UrsaWorks:

1. Paste your URSA session cookie into the input field
2. Click **Verify & Connect**

When verified successfully:
- Your URSA email is displayed
- The interface unlocks and you can access all features
- UrsaWorks will use your URSA identity for all operations

## What Happens Next

UrsaWorks identifies you through your URSA session cookie. This means:
- You can only see approvals your URSA account has access to
- All actions are performed as your URSA user
- When your URSA session expires, you'll need to provide a new cookie

## Ready to Use

Once connected, you can:
- Create **Rules** to automate approvals
- Use **Manual Run** to preview and execute rules
- Use **Feature Toggle** to change config values and auto-approve
- Manage your settings and profiles
