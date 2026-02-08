/**
 * Error Constants - Standardized error codes
 */

export enum ErrorCode {
  // DSL Errors
  DSL_INVALID_SCHEMA = "DSL_INVALID_SCHEMA",
  DSL_MISSING_FIELD = "DSL_MISSING_FIELD",
  DSL_UNKNOWN_COMPONENT = "DSL_UNKNOWN_COMPONENT",
  DSL_UNKNOWN_ACTION = "DSL_UNKNOWN_ACTION",

  // Agent Errors
  AGENT_STREAM_FAILED = "AGENT_STREAM_FAILED",
  AGENT_TIMEOUT = "AGENT_TIMEOUT",
  AGENT_INVALID_RESPONSE = "AGENT_INVALID_RESPONSE",

  // Runtime Errors
  RUNTIME_EVENT_NOT_FOUND = "RUNTIME_EVENT_NOT_FOUND",
  RUNTIME_ACTION_FAILED = "RUNTIME_ACTION_FAILED",
  RUNTIME_CONDITION_FAILED = "RUNTIME_CONDITION_FAILED",

  // Validation Errors
  VALIDATION_MISSING_REQUIRED = "VALIDATION_MISSING_REQUIRED",
  VALIDATION_INVALID_TYPE = "VALIDATION_INVALID_TYPE",
  VALIDATION_INVALID_ENUM = "VALIDATION_INVALID_ENUM",
}

export class OrderlyError extends Error {
  code: ErrorCode;
  details?: unknown;

  constructor(code: ErrorCode, message: string, details?: unknown) {
    super(message);
    this.name = "OrderlyError";
    this.code = code;
    this.details = details;
  }
}
