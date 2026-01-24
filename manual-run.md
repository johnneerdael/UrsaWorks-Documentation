# Manual Run

Manual Run executes your Rules against the **currently open** URSA approvals that are visible to your URSA session.

This is designed to be safe and predictable:

- Approvals are fetched live from URSA at the time you Preview/Execute.
- You can only act on approvals that URSA shows you (typically limited by your approval pools).
- The UI requires a Preview before you can Execute.

## Preview

Preview is a **dry run**.

- Fetches **fresh open approvals** from URSA.
- URSA returns approvals that apply to your session (for example: approvals in your approval pools).
- Matches each approval against your enabled Rules and proposes an action:
	- **Approve**
	- **Reject**
	- **No-Match** (no rule matched, so no action would be taken)
- Displays helpful context per approval (tenant, config, requester, current value, requested value).

Preview does not change anything in URSA.

## Execute

Execute performs the actual approvals/rejections in URSA.

Important behavior:

- The UI requires you to Preview first (Execute stays disabled until you have Preview results).
- Execute fetches open approvals from URSA again at execution time, so the exact set may differ from your Preview if approvals changed.
- Only approvals that match a rule (Approve/Reject) are acted on. **No-Match items are skipped.**

### Bulk execution (two independent batches)
Execute groups matched approvals into two batches and sends them to URSA separately:

- An **Approve** batch
- A **Reject** batch

These batches execute independently. If the Approve batch fails, the Reject batch is still attempted (and vice-versa).

Each executed item is sent with a comment (typically your rule’s Reason) so the action is understandable in URSA.

## History

The History page shows an audit trail of executed runs.

Notes:

- History is currently **shared across all users** of this app (it is not filtered per-user).
- These actions are also visible in URSA’s own audit/history views because the approvals/rejections are executed in URSA.

View recent automation runs:

- Run ID
- Mode (currently: execute)
- Status
- Total items
- Success / Failed count
- Start time

Expand a run to see per-request results including tenant type, config, pool, action, and success/failure details.