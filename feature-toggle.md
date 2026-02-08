# Feature Toggle

Feature Toggle performs a two-step workflow: submit a config change in URSA and auto-approve the resulting request.

## Why this exists
In URSA, submitting a config change and approving the resulting request are separate steps.
Even if you are the approver for that request, URSA does not "know" to automatically approve it for you — you still have to open approvals, find the matching request, and click through the approve flow.

In practice, that can be a multi-screen, ~10-click workflow.
UrsaWorks reduces this to a **single action** by chaining the change + approval steps and returning status immediately.

## Inputs

- **Tenant ID** (numeric)
- **Config name** (from URSA approval configs)
- **Value input** (depends on config type):
  - **Toggle configs**: Enable / Disable switch
  - **Numeric configs**: Number input field

## Step 1 — Config Change

- UrsaWorks submits a config change for the selected config
- For **toggles**: switches between enabled/disabled
- For **numeric configs**: sets the new numeric value you provide
- Tracks `from` and `to` values if returned
- A request ID is returned if URSA created one

## Step 2 — Auto-approve

- UrsaWorks searches for an **open approval** that matches:
  - Same tenant ID
  - Same config name
  - Requested by **your URSA user** (identified by your session cookie)
- If found, it auto-approves the request
- If not found, the config change still stands but approval is not automatic

When auto-approval is not possible (for example, URSA doesn’t return a matching open approval), you can still approve the request manually in URSA.

## Current State Display

When you enter a Tenant ID, the page fetches and displays the current state of configs for that tenant:

- **Toggle configs**:
  - **Enabled**: Green indicator
  - **Disabled**: Red indicator
- **Numeric configs**: Shows the current numeric value
- **Unknown**: Neutral styling

The page also shows tenant identity information:
- Tenant URL
- Tenant Type

This helps confirm you're working with the correct tenant before making changes.

## Error Handling

The page shows appropriate messages for:
- Invalid tenant ID
- Config already has the requested value
- Existing pending request
- Auto-approval failure (config change still succeeds)
- Invalid numeric input (for numeric configs)
- Network or session errors

If auto-approval fails because no matching approval is found:
- If config already has the requested value: "Already set to this value"
- If config value was changed: "Approval may belong to another team"