/**
 * Error Constants - Standardized error codes
 */
export var ErrorCode;
(function (ErrorCode) {
    // DSL Errors
    ErrorCode["DSL_INVALID_SCHEMA"] = "DSL_INVALID_SCHEMA";
    ErrorCode["DSL_MISSING_FIELD"] = "DSL_MISSING_FIELD";
    ErrorCode["DSL_UNKNOWN_COMPONENT"] = "DSL_UNKNOWN_COMPONENT";
    ErrorCode["DSL_UNKNOWN_ACTION"] = "DSL_UNKNOWN_ACTION";
    // Agent Errors
    ErrorCode["AGENT_STREAM_FAILED"] = "AGENT_STREAM_FAILED";
    ErrorCode["AGENT_TIMEOUT"] = "AGENT_TIMEOUT";
    ErrorCode["AGENT_INVALID_RESPONSE"] = "AGENT_INVALID_RESPONSE";
    // Runtime Errors
    ErrorCode["RUNTIME_EVENT_NOT_FOUND"] = "RUNTIME_EVENT_NOT_FOUND";
    ErrorCode["RUNTIME_ACTION_FAILED"] = "RUNTIME_ACTION_FAILED";
    ErrorCode["RUNTIME_CONDITION_FAILED"] = "RUNTIME_CONDITION_FAILED";
    // Validation Errors
    ErrorCode["VALIDATION_MISSING_REQUIRED"] = "VALIDATION_MISSING_REQUIRED";
    ErrorCode["VALIDATION_INVALID_TYPE"] = "VALIDATION_INVALID_TYPE";
    ErrorCode["VALIDATION_INVALID_ENUM"] = "VALIDATION_INVALID_ENUM";
})(ErrorCode || (ErrorCode = {}));
export class OrderlyError extends Error {
    code;
    details;
    constructor(code, message, details) {
        super(message);
        this.name = "OrderlyError";
        this.code = code;
        this.details = details;
    }
}
