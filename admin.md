# Admin

Admins manage the **Approved Users** allowlist and provide basic operational controls (like removing problematic profiles).

UrsaWorks does not implement its own permission model for configs/features.
URSA enforces access via approval pools; UrsaWorks only helps you automate within what URSA shows you.

## Approved Users

- **Add/remove users** from the allowlist
- **Grant or revoke admin-role**
- **View observed approval pools** for each user

Approval pools are captured when a user verifies a URSA session. Until then, pools show as "Unknown". Pool data is informational only; URSA still enforces access control.

## Profiles (Admin tools)

Admins can:

- **List profiles** (metadata only; payload contents are not shown)
- **Delete any profile** (useful for cleanup if a bad profile name/payload is causing issues)

Admins cannot:

- Create profiles on behalf of other users
- Edit profile contents
- “Force-share” profiles to all users

## Sharing model (Profiles, Rules, Config Groups)

Sharing is controlled by the content owner (the user who created the profile/rule/config group).
When something is marked **Shared**, it becomes visible to allowlisted users who share at least one URSA approval pool with the owner.

There is no concept of admin-managed “approval groups” inside UrsaWorks; URSA approval pools drive visibility.