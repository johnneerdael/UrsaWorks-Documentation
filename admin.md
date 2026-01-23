# Admin

Admins manage the **Approved Users** list and approval groups.

## Approved Users

- **Add/remove users** from the allowlist
- **Grant or revoke admin-role**
- **View observed approval pools** for each user

Approval pools are captured when a user verifies a URSA session. Until then, pools show as "Unknown". Pool data is informational only; URSA still enforces access control.

## Approval Groups

Approval groups control permissions for configs and features:

- **Create groups** with specific config/feature permissions
- **Assign users** to multiple groups
- **User permissions** are the union of all assigned groups
- **Group deletion** automatically removes user memberships

## Shared Rules and Profiles

Admins can create shared rules and profiles that are visible to all authenticated users or specific groups.