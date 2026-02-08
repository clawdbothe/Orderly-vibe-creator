/**
 * Action Constants - Predefined action types
 */

export const UI_ACTIONS = {
  NAVIGATE: "navigate",
  TOAST: "toast",
  MODAL: "modal",
  UPDATE_STATE: "update_state",
} as const;

export const ORDERLY_ACTIONS = {
  PLACE_ORDER: "orderly_place_order",
  CANCEL_ALL: "orderly_cancel_all",
  CANCEL_ORDER: "orderly_cancel_order",
  SET_SYMBOL: "orderly_set_symbol",
  GET_BALANCE: "orderly_get_balance",
} as const;

export const EXTENSION_ACTIONS = {
  INVOKE_EXTENSION: "invoke_extension",
} as const;

export const ALL_ACTIONS = {
  ...UI_ACTIONS,
  ...ORDERLY_ACTIONS,
  ...EXTENSION_ACTIONS,
} as const;

export type ActionType = (typeof ALL_ACTIONS)[keyof typeof ALL_ACTIONS];
