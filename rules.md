# Rules

Rules are the core automation logic. Each rule defines **what to do** when an approval request matches.

## Rule Fields

- **Tenant Type(s)** (multi-select)
- **Config Selector**: Any config, specific config name, or config group
- **Action**: Approve or Reject
- **Reason**: comment sent to URSA
- **Enabled**: on/off switch
- **Requester Requirements**:
  - **Include Requesters** (allowlist)
  - **Exclude Requesters** (denylist)

## Requester Matching Rules

- If **Exclude** contains the requester → the rule does **not** match
- If **Include** is non-empty → the requester **must** be in the include list
- If a requester appears in both lists, **exclude wins**
- Matching is case-insensitive on email

## Config Selectors

### Any Config
Matches any configuration name. Useful for requester-based rules.

### Specific Config
Matches only the selected configuration name from URSA approval configs.

### Config Group
Matches when the approval config name is a member of a named config group. You can create and manage config groups on the Rules page.

## How Rules Are Applied

- UrsaWorks fetches **open approvals** from URSA using your session
- Each approval is matched against your **enabled rules**
- Rules are matched by tenant type + config selector + requester requirements
- Only approvals that URSA returns for **your approval pools** are processed (URSA enforces access control)

## Managing Rules

- **Create**: Click **New Rule**
- **Edit**: Click the pencil icon
- **Delete**: Click the trash icon
- **Disable/enable**: Toggle the switch

## Config Groups

Config groups allow you to organize related configurations:

- **Create**: Click **Manage Config Groups** on the Rules page
- **Add configs**: Select from available URSA configs
- **Use in rules**: Select "Config Group" and choose your group

## Shared Rules

Some environments may have **shared rules** managed by admins. These appear alongside your own rules but cannot be edited by non-owners.