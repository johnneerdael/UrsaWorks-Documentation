# Troubleshooting

## Docker Issues

### Container won't start
- Verify Docker is installed and running
- Check if port 3000 is already in use: `lsof -i :3000` (macOS/Linux) or `netstat -ano | findstr :3000` (Windows)
- Try a different port: `docker run -p 8080:3000 ursaworks/ursaworks:latest` and access at `http://localhost:8080`
- Check Docker logs: `docker logs <container-id>`

### Cannot access localhost:3000
- Verify the container is running: `docker ps`
- Check firewall settings
- Try accessing `127.0.0.1:3000` instead
- Restart the Docker container

## Session Issues

### Session cookie validation fails
- Make sure you copied the entire cookie value
- The cookie may have expired — get a fresh one from URSA
- Verify you're logged into URSA in the same browser
- Try logging out of URSA and back in, then get a new cookie

### Session expired during use
- Your URSA session has timed out
- Get a new session cookie from URSA
- Paste it into UrsaWorks and click Verify & Connect again

### No configs available in Rules/Feature Toggle
- You must have an **active URSA session** connected
- Config lists come from URSA approval configs
- Refresh your session cookie if it expired
- Verify your URSA account has access to approval configs

## Execution Issues

### Execute returns failures
- The request may already be handled in URSA
- Your URSA session may have expired (refresh it)
- Review per-item error messages in History
- Check if you have permission to approve the request in URSA

### Feature toggle fails
- Check if the config is already set to the requested value
- Verify tenant ID is correct
- For numeric configs, ensure the value is valid
- Your URSA session may have expired

## Permission Issues

### Cannot see expected approvals
- Check your URSA approval pools
- Verify your URSA account has access to the approvals
- Only approvals visible to your URSA session appear in UrsaWorks
- Try refreshing your session cookie

### Cannot modify certain rules or profiles
- Shared resources may be read-only if you're not the owner
- Check if the resource requires specific URSA approval pool access

## General

### Page not loading
- Verify the Docker container is running
- Clear browser cache and cookies
- Try incognito/private mode
- Check browser console for errors (F12 → Console)

### Data seems missing after restart
- If you removed the Docker container, local data may be lost
- Use Docker volumes to persist data: `docker run -v ursaworks-data:/app/data -p 3000:3000 ursaworks/ursaworks:latest`

### Contact Support
For issues not covered here, contact John Neerdael (best-effort support).