/**
 * DSL Validator - Validate DSL schemas using Zod
 */
import { z } from "zod";
/**
 * Trigger Schema
 */
const TriggerSchema = z.object({
    type: z.enum(["ui_event", "data_change", "system_event"]),
    target: z.string(),
    event: z.string(),
});
/**
 * Condition Schema
 */
const ConditionSchema = z.object({
    field: z.string(),
    operator: z.enum(["eq", "gt", "lt", "contains", "neq"]),
    value: z.unknown(),
});
/**
 * Action Schema
 */
const ActionSchema = z.object({
    type: z.string(),
    payload: z.record(z.unknown()),
});
/**
 * Behavior Rule Schema
 */
export const BehaviorRuleSchema = z.object({
    trigger: TriggerSchema,
    conditions: z.array(ConditionSchema).optional(),
    actions: z.array(ActionSchema).min(1),
});
/**
 * Layout Node Schema
 */
const LayoutNodeSchema = z.lazy(() => z.object({
    type: z.string(),
    id: z.string(),
    props: z.record(z.unknown()).optional(),
    children: z.array(z.any()).optional(),
    gridSpan: z.number().optional(),
    cols: z.number().optional(),
    gap: z.number().optional(),
}));
/**
 * DSL Schema (Zod version)
 */
export const DSLSchemaZod = z.object({
    layout: LayoutNodeSchema,
    behaviors: z.array(BehaviorRuleSchema),
});
/**
 * Validate DSL
 */
export function validateDSL(data) {
    const result = DSLSchemaZod.safeParse(data);
    return {
        success: result.success,
        data: result.success ? result.data : undefined,
        error: result.success ? undefined : result.error,
    };
}
