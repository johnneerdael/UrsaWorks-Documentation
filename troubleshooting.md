# Troubleshooting

## Companion Issues

### Status says "Not Running"
- Ensure UrsaWorks Companion is running
- Verify `http://localhost:8765/ping` returns `{"status":"ok"}`
- Check firewall or local port conflicts

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
- Verify with admin if your groups grant access

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
For issues not covered here, contact John Neerdael (best-effort support).</content>
<parameter name="path">documentation/troubleshooting.md