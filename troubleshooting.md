# Troubleshooting

## Companion Issues

### Status says "Not Running"
- Ensure UrsaWorks Companion is running
- Verify `http://localhost:8765/ping` returns `{"status":"ok"}`
- If it does not respond, follow the steps below (ping checks, then firewall/port conflicts)

#### Step 1: Confirm the ping endpoint locally

The Companion runs on your machine and the UI talks to it over `localhost`.

- Browser: open `http://localhost:8765/ping`
- Windows (PowerShell):
	- `Invoke-RestMethod http://localhost:8765/ping`
- macOS / Linux (Terminal):
	- `curl -s http://localhost:8765/ping`

If the response is not `{"status":"ok"}`, continue.

#### Step 2: Check whether anything is listening on port 8765

If the Companion is not listening, the UI cannot reach it.

- Windows (PowerShell):
	- `netstat -ano | findstr :8765`
	- If you see a LISTENING entry, note the PID and confirm it matches the Companion process in Task Manager.
- macOS (Terminal):
	- `lsof -nP -iTCP:8765 -sTCP:LISTEN`

If another process is using the port, stop it or change the Companion port (if supported).

#### Step 3: Firewall guidance (only if needed)

In many setups, `localhost` traffic does not require opening inbound firewall ports. However, some corporate endpoint controls and some Companion configurations may block local loopback HTTP.

Important: The Windows “Public/Private/Domain” profiles refer to the *current network you are connected to*, not whether the backend server is “internet based”. Since this service is local-to-your-machine, you generally do **not** want to enable it on Public networks.

Recommended:
- Allow on **Private** (home/office) and **Domain** (corporate) profiles
- Avoid enabling on **Public** unless you know you need it

##### Windows (Defender Firewall)

Option A: allow by app (preferred)
1) Open “Windows Defender Firewall with Advanced Security” (`wf.msc`)
2) Go to “Inbound Rules” → “New Rule…”
3) Choose “Program” → select the Companion executable
4) “Allow the connection”
5) Profiles: check **Private** and **Domain** (avoid **Public** unless required)
6) Name it e.g. “UrsaWorks Companion”

Option B: allow by port (if the executable path changes)
1) Open `wf.msc`
2) “Inbound Rules” → “New Rule…” → “Port”
3) TCP → Specific local ports: `8765`
4) “Allow the connection”
5) Profiles: **Private** + **Domain**
6) Name it e.g. “UrsaWorks Companion (8765)”

CLI alternative (PowerShell as Administrator):
- `netsh advfirewall firewall add rule name="UrsaWorks Companion 8765" dir=in action=allow protocol=TCP localport=8765 profile=domain,private`

##### macOS (Application Firewall)

macOS Firewall is typically application-based.
1) System Settings → Network → Firewall
2) Click “Options…” (or “Firewall Options…”)
3) Ensure the Companion app is listed and set to “Allow incoming connections”
4) If it’s blocked, remove/re-add it or toggle Firewall off/on after allowing the app

Terminal alternative (requires admin; optional):
- Check status: `sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate`
- List apps: `sudo /usr/libexec/ApplicationFirewall/socketfilterfw --listapps`

If you still cannot reach `localhost:8765`, it is usually one of:
- Companion not running
- Port conflict
- Endpoint security tool blocking local loopback HTTP

### Manual login fails
- Paste the full redirect URL or the code
- Google codes expire quickly; retry if needed

## Session Issues

### "Session mismatch" error
- Your URSA session email must match your UrsaWorks login
- Log out of URSA and re-authenticate with the correct user

### No configs available in Rules/Feature Toggle
- You must have an **active URSA session**
- Config lists come from URSA approval configs
- Verify your session and refresh the page

### Execute returns failures
- The request may already be handled in URSA
- Your URSA session may have expired
- Review per-item error messages in History

## Permission Issues

### Cannot see expected approvals
- Check your URSA approval pools
- Verify with admin that you are allowlisted and that your URSA approval pools include the relevant items

### Feature toggle fails
- Confirm the feature is executable (boolean flag)
- Check if already in requested state
- Verify tenant ID and config mapping

## General

### Page not loading
- Clear browser cache and cookies
- Try incognito/private mode
- Check network connectivity

### Contact Support
For issues not covered here, contact John Neerdael (best-effort support).