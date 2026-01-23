# Feature Toggle

Feature Toggle performs a two-step workflow: submit config change in URSA and auto-approve the resulting request.

## Inputs

- **Tenant ID** (numeric)
- **Config name** (from URSA approval configs)
- **Enable / Disable** toggle

## Step 1 — Config Change

- UrsaWorks submits a config change for the selected config
- Tracks `from` and `to` values if returned
- A request ID is returned if URSA created one

## Step 2 — Auto-approve

- UrsaWorks searches for an **open approval** that matches:
  - Same tenant ID
  - Same config name
  - Requested by **your URSA user**
- If found, it auto-approves the request
- If not found, the config change still stands but approval is not automatic

## Current State Display

When you enter a Tenant ID, the page fetches and displays the current state of features for that tenant:

- **Enabled**: Green indicator
- **Disabled**: Red indicator
- **Unknown**: Neutral styling

## Error Handling

The page shows appropriate messages for:
- Invalid tenant ID
- Feature already in requested state
- Existing pending request
- Auto-approval failure (config change still succeeds)
- Network or session errors

If auto-approval fails because no matching approval is found:
- If feature is already in requested state: "Already enabled/disabled"
- If feature is not in requested state: "Approval may belong to another team"