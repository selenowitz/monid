import { z } from "zod";
import { zDryRun } from "../../../schema/list.ts";

/**
 * GET /v1/linkedin/profile query. The parameter table lists `url`.
 * `dry_run` is the cost-preview flag the endpoint's own example tells
 * callers to add. Strict: this lane takes nothing else.
 */
export const zLinkedinProfileQuery = z.object({
    url: z.string().min(1).describe(
        "Full URL of the LinkedIn profile page.",
    ),
    dry_run: zDryRun.optional(),
}).strict();
