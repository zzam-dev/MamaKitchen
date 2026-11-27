/**
 * Strict Order Details Validation with Arabic & Latin letters and numerals
 */

// Arabic letter ranges (excluding Arabic-Indic numerals \u0660-\u0669):
// \u0621-\u064A: Hamza, Alif, Baa ... Yaa
// \u064B-\u065F: Tashkeel / Harakat (diacritics)
// \u0671-\u06D3: Extended letters (Alif Wasla, Taa Marbuta, etc.)
export const ARABIC_LETTERS = '\u0621-\u064A\u064B-\u065F\u0671-\u06D3';

// Arabic-Indic numerals (\u0660-\u0669: ٠١٢٣٤٥٦٧٨٩) and Extended / Persian numerals (\u06F0-\u06F9: ۰۱۲۳۴۵۶۷۸۹)
export const ARABIC_NUMERALS = '\u0660-\u0669\u06F0-\u06F9';

/**
 * Normalizes Eastern Arabic-Indic numerals (٠-٩) and Persian numerals (۰-۹) to standard Western digits (0-9).
 */
export function normalizeArabicNumerals(input: string): string {
  if (!input) {return '';}
  return input
    .replace(/[\u0660-\u0669]/g, (c) => String(c.charCodeAt(0) - 0x0660))
    .replace(/[\u06F0-\u06F9]/g, (c) => String(c.charCodeAt(0) - 0x06F0));
}

// Name regex: Arabic and Latin letters, spaces, hyphens, apostrophes (2 to 60 characters).
// Numbers (both Western 0-9 and Arabic ٠-٩) and punctuation are strictly disallowed.
export const NAME_REGEX = new RegExp(
  `^[${ARABIC_LETTERS}A-Za-z][${ARABIC_LETTERS}A-Za-z\\s'-]{1,59}$`
);

// Phone regex (operates on normalized digits):
// Egyptian mobiles: 01[0125]xxxxxxxx (11 digits), or with +20 / 0020 prefix
// Sudanese mobiles: 09xxxxxxxx or 01[012]xxxxxxx (10 digits), or with +249 / 00249 prefix
export const PHONE_REGEX =
  /^(?:(?:(?:\+20|0020)?0?1[0125]\d{8})|(?:(?:\+249|00249)?(?:0?9\d{8}|0?1[012]\d{7})))$/;

// Delivery Address regex:
// 6 to 150 characters, letters (Arabic & English), numbers (Arabic ٠-٩ & Western 0-9), spaces,
// and address punctuation (including Arabic comma ، \u060C, periods, slashes, hyphens, hashes)
export const ADDRESS_REGEX = new RegExp(
  `^[${ARABIC_LETTERS}A-Za-z0-9${ARABIC_NUMERALS}\\s,،./#\\-–]{6,150}$`
);

// Address must contain at least 2 actual letters (Arabic or English), not just digits
export const ADDRESS_HAS_LETTERS_REGEX = new RegExp(`[${ARABIC_LETTERS}A-Za-z]{2,}`);

export interface ValidationResult {
  isValid: boolean;
  nameError?: string;
  phoneError?: string;
  addressError?: string;
}

export interface ValidateOrderParams {
  name: string;
  phone: string;
  address: string;
  orderType: 'delivery' | 'takeout';
  t: {
    nameErrorEmpty: string;
    nameErrorInvalid: string;
    phoneErrorEmpty: string;
    phoneErrorInvalid: string;
    addressErrorEmpty: string;
    addressErrorInvalid: string;
  };
}

export function validateCustomerName(
  name: string,
  t: { nameErrorEmpty: string; nameErrorInvalid: string }
): string | undefined {
  const trimmed = name.trim();
  if (!trimmed) {
    return t.nameErrorEmpty;
  }
  if (!NAME_REGEX.test(trimmed)) {
    return t.nameErrorInvalid;
  }
  return undefined;
}

export function validateCustomerPhone(
  phone: string,
  t: { phoneErrorEmpty: string; phoneErrorInvalid: string }
): string | undefined {
  const normalized = normalizeArabicNumerals(phone).replace(/[\s\-()]/g, '');
  if (!normalized) {
    return t.phoneErrorEmpty;
  }
  if (!PHONE_REGEX.test(normalized)) {
    return t.phoneErrorInvalid;
  }
  return undefined;
}

export function validateCustomerAddress(
  address: string,
  orderType: 'delivery' | 'takeout',
  t: { addressErrorEmpty: string; addressErrorInvalid: string }
): string | undefined {
  if (orderType === 'takeout') {
    return undefined; // Address is not required for pickup/takeout
  }

  const trimmed = address.trim();
  if (!trimmed) {
    return t.addressErrorEmpty;
  }
  if (!ADDRESS_REGEX.test(trimmed) || !ADDRESS_HAS_LETTERS_REGEX.test(trimmed)) {
    return t.addressErrorInvalid;
  }
  return undefined;
}

export function validateOrderDetails(params: ValidateOrderParams): ValidationResult {
  const nameError = validateCustomerName(params.name, params.t);
  const phoneError = validateCustomerPhone(params.phone, params.t);
  const addressError = validateCustomerAddress(params.address, params.orderType, params.t);

  const isValid = !nameError && !phoneError && !addressError;

  return {
    isValid,
    nameError,
    phoneError,
    addressError,
  };
}
