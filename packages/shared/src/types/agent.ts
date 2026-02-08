/**
 * Agent Types - Agent interface definitions
 */

/**
 * Agent Request
 */
export interface AgentRequest {
  prompt: string;
  context?: AgentContext;
  options?: AgentOptions;
}

/**
 * Agent Context
 */
export interface AgentContext {
  userId?: string;
  sessionId?: string;
  componentRegistry?: Record<string, unknown>;
  actionRegistry?: Record<string, unknown>;
}

/**
 * Agent Options
 */
export interface AgentOptions {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  stream?: boolean;
}

/**
 * Agent Response
 */
export interface AgentResponse {
  content: string;
  dsl?: unknown;
  success: boolean;
  error?: string;
}

/**
 * Category Analysis Result (Phase 1)
 */
export interface CategoryAnalysis {
  requiredCategories: string[];
  reason: string;
}

/**
 * DSL Generation Result (Phase 2)
 */
export interface DSLGeneration {
  layout: unknown;
  behaviors: unknown[];
}
