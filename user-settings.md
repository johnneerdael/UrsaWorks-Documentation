# User Settings

**User Settings** controls:

- **Config visibility** (which configs show up in the UI)
- **Profiles** (snapshots you can save/apply/share)

## Config Visibility

By default, all configs are visible.
If you enable filtering, only selected configs appear in dropdowns/lists on that page.

This is a UI filter only:

- It helps you focus on the configs you actually work with.
- It does **not** grant additional access beyond what your URSA session allows.

**Recommended practice (Product Managers):**

- For **Feature Toggle**, only include feature flags/configs you own/control to reduce the risk of accidentally toggling something outside your area.

**To configure:**
1. Go to **User Settings**
2. Toggle **Show all configs** on/off for each page
3. Select visible configs
4. Click **Save Settings**

An empty selection with filtering enabled hides all configs.

## Profiles

### What is a profile?
A **profile** is a named snapshot of your configuration so you can quickly switch between different working setups.

Profiles include:

- Your **Rules** (including “Any config”, specific config, and Config Group-based rules)
- Your **Config Visibility** settings (for both the Rules page and Feature Toggle page)

Profiles do **not** change what you are allowed to see or execute in URSA.

### Save / Apply / Share
- **Save Profile**: Captures your current rules + visibility settings into a named snapshot.
- **Apply Profile**: Replaces your current rules and visibility settings with the profile’s snapshot (you will be asked to confirm because this is destructive).
- **Share Profile**: Makes the profile visible to other allowlisted users who share at least one URSA approval pool with you.

Shared profiles can be applied by users who share approval group membership with the profile owner.

### Config Groups and Profiles
Config Groups are a **Rules-only** feature: a Config Group is a named list of config names that you can target from a rule.

When you save a profile, Config Groups are included in the snapshot so group-based rules remain functional when the profile is applied.
When you apply a profile:

- Config Groups in the profile are copied into your account.
- Rules that reference Config Groups are updated to point at your copied groups.
- If you already have a Config Group with the same name, applying a profile will update that group’s membership to match the profile.

Applying a profile does not grant additional permissions; it only copies configuration.