/**
 * Dedicated API / Service Endpoints for Mama Kitchen.
 * Separates public customer storefront operations from administrative menu management.
 */
export const API_ENDPOINTS = {
  /** Public customer endpoint to fetch the live active menu catalog */
  PUBLIC_MENU: '/api/menu',

  /** Administrative endpoint to manage, update, and compile server dishes.json */
  ADMIN_MENU: '/api/admin/menu',
} as const;

export type ApiEndpoints = typeof API_ENDPOINTS;

