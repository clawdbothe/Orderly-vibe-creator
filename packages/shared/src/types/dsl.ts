/**
 * DSL Types - Core type definitions for O-L-B DSL
 */

/**
 * Behavior Rule - Single logic rule
 */
export interface BehaviorRule {
  trigger: Trigger;
  conditions?: Condition[];
  actions: Action[];
}

/**
 * Trigger - What to listen for
 */
export interface Trigger {
  type: "ui_event" | "data_change" | "system_event";
  target: string; // Component ID or data field name
  event: string; // "click" | "value_change" | "mount" | "error" | "update"
}

/**
 * Condition - When to execute (optional)
 */
export interface Condition {
  field: string; // e.g., "market.ticker.price"
  operator: "eq" | "gt" | "lt" | "contains" | "neq";
  value: unknown;
}

/**
 * Action - What to do
 */
export interface Action {
  type: string; // Action Registry key
  payload: Record<string, unknown>;
}

/**
 * DSL Schema - Complete DSL output
 */
export interface DSLSchema {
  layout: LayoutNode;
  behaviors: BehaviorRule[];
}

/**
 * Layout Node - Page layout structure
 */
export interface LayoutNode {
  type: string;
  id: string;
  props?: Record<string, unknown>;
  children?: LayoutNode[];
  // Layout-specific props
  gridSpan?: number;
  cols?: number;
  gap?: number;
}
