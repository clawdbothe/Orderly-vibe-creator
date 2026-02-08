/**
 * Registry Types - Component and Action registry definitions
 */

/**
 * Component Registry Item
 */
export interface ComponentRegistryItem {
  id: string;
  category: string;
  description: string;
  props: Record<string, PropDefinition>;
  events?: string[];
}

/**
 * Prop Definition
 */
export interface PropDefinition {
  type: "string" | "number" | "boolean" | "array" | "object" | "function" | "enum";
  required?: boolean;
  default?: unknown;
  desc?: string;
  options?: string[]; // For enum type
}

/**
 * Action Registry Item
 */
export interface ActionRegistryItem {
  id: string;
  description: string;
  params: Record<string, ParamDefinition>;
}

/**
 * Param Definition
 */
export interface ParamDefinition {
  type: string;
  required?: boolean;
  desc?: string;
}

/**
 * Category Registry Item
 */
export interface CategoryRegistryItem {
  id: string;
  name: string;
  description: string;
  components: string[];
  icon?: string;
}
