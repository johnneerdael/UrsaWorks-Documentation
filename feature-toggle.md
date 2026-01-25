# Feature Toggle

Feature Toggle performs a two-step workflow: submit config change in URSA and auto-approve the resulting request.

## Why this exists
In URSA, submitting a config change and approving the resulting request are separate steps.
Even if you are the approver for that request, URSA does not “know” to automatically approve it for you — you still have to open approvals, find the matching request, and click through the approve flow.

In practice, that can be a multi-screen, ~10-click workflow.
UrsaWorks reduces this to a **single action** by chaining the change + approval steps and returning status immediately.

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

When auto-approval is not possible (for example, URSA doesn’t return a matching open approval), you can still approve the request manually in URSA.

## Current State Display

When you enter a Tenant ID, the page fetches and displays the current state of features for that tenant:

- **Enabled**: Green indicator
- **Disabled**: Red indicator
- **Unknown**: Neutral styling

The page also shows tenant identity information:
- Tenant URL
- Tenant Type

This helps confirm you're working with the correct tenant before making changes.

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