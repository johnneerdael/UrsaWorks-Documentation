# Troubleshooting

## Companion Issues

### Companion login doesn't work
- Ensure UrsaWorks Companion is installed and running
- For desktop companions, check that it starts on boot (configured during installation)
- Try launching the companion app manually and initiating sign-in from there
- Verify your browser allows pop-ups for OAuth redirects

### Mobile companion issues
- Ensure the app is installed from TestFlight (iOS) or APK (Android)
- Check that deep links are enabled in your device settings
- Try clearing app cache or reinstalling if redirects fail

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