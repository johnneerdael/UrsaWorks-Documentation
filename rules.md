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

Config groups let you give a name to a set of URSA approval configs (for example, “Core Feature Flags”), and then target that group from rules.

### Creating and Editing Config Groups

- **Open**: Click **Manage Config Groups** on the Rules page
- **Name**: Give the group a stable name (rules reference groups by name)
- **Config Names**: Add one or more config names

### Config Names Input (Autocomplete + “chips”)

The config name editor is designed to prevent typos and make bulk entry fast:

- As you type, you’ll see **autocomplete suggestions** from the URSA approval config catalog.
- Each selected config becomes a **chip** (similar to Gmail’s address entry).
- **Tab**, **Enter**, or **comma** commits the current token into a chip.
- **Paste** supports newline/comma-separated lists and will create multiple chips.
- Values are **deduplicated case-insensitively** (e.g. `Config A` and `config a` become one).

If the catalog is unavailable (for example, the app can’t load config suggestions), the UI will warn you and will allow free-form entry. In that mode, config names can’t be validated against URSA’s catalog.

### Using Config Groups in Rules

- When editing/creating a rule, choose **Config Selector → Config Group**.
- Select the group; the rule matches when the approval’s config name is a member of that group.

## Sharing Config Groups

Config groups have their own **Shared** toggle in the Config Groups dialog.

What “Shared” means:

- A shared config group can be **seen and used** by other users whose URSA sessions show approval pool overlap with yours
- Sharing is **not public**: the server restricts visibility to users whose **URSA approval pools overlap** with the owner's pools

Important details:

- The pool-overlap restriction is enforced based on URSA session data
- Non-owners can generally **use** shared groups in their rules, but **editing/deleting** is limited to the owner

## Profiles and Config Groups

Profiles are a way to package and reuse settings (rules, config groups, and user settings).

### Are config groups included in profiles?

Yes.

When you create a profile with **Capture current**, the profile payload includes:

- Your current config groups (name + config names)
- Your current rules (including rules that reference config groups)
- Your user settings relevant to rules/feature toggle visibility

### What happens when you apply a profile?

When you apply a profile, the app recreates/updates the profile’s config groups **in your account**, then inserts rules that reference those groups.

### Does the Config Group “Shared” toggle affect profiles?

No — it’s separate.

- A config group being marked **Shared** controls who can see that group directly.
- Profiles have their own **Shared** setting that controls who can view/apply the profile (also constrained by URSA approval pool overlap).
- Config group “Shared” is **not preserved inside the profile payload**; when a profile is applied, config groups created/updated by the profile are applied as **private groups** for the receiving user.

## Shared Rules

Some environments may have **shared rules** managed by admins. These appear alongside your own rules but cannot be edited by non-owners.