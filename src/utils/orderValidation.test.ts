import { describe, expect, it } from 'vitest';
import {
  NAME_REGEX,
  PHONE_REGEX,
  ADDRESS_REGEX,
  ADDRESS_HAS_LETTERS_REGEX,
  normalizeArabicNumerals,
  validateCustomerName,
  validateCustomerPhone,
  validateCustomerAddress,
  validateOrderDetails,
} from './orderValidation';

const mockTranslations = {
  nameErrorEmpty: 'Name cannot be empty',
  nameErrorInvalid: 'Invalid name format',
  phoneErrorEmpty: 'Phone cannot be empty',
  phoneErrorInvalid: 'Invalid phone format',
  addressErrorEmpty: 'Address cannot be empty',
  addressErrorInvalid: 'Invalid address format',
};

describe('orderValidation - Strict Regex & Arabic Letters/Numerals Validation', () => {
  describe('normalizeArabicNumerals', () => {
    it('converts Eastern Arabic-Indic numerals (٠-٩) to standard Western digits (0-9)', () => {
      expect(normalizeArabicNumerals('٠١٥٥٤٤٨٧٥٢٣')).toBe('01554487523');
      expect(normalizeArabicNumerals('٠١٠١٢٣٤٥٦٧٨')).toBe('01012345678');
      expect(normalizeArabicNumerals('+٢٠١٥٥٤٤٨٧٥٢٣')).toBe('+201554487523');
    });

    it('converts Persian/Extended Arabic numerals (۰-۹) to standard Western digits (0-9)', () => {
      expect(normalizeArabicNumerals('۰۱۲۳۴۵۶۷۸۹')).toBe('0123456789');
    });

    it('preserves text and already Western digits', () => {
      expect(normalizeArabicNumerals('01554487523')).toBe('01554487523');
      expect(normalizeArabicNumerals('شارع 15 عمارة 4')).toBe('شارع 15 عمارة 4');
    });
  });

  describe('NAME_REGEX with Arabic & Latin letters', () => {
    it('accepts valid Arabic names with all letter forms and spaces', () => {
      expect(NAME_REGEX.test('طارق عبد المحمود')).toBe(true);
      expect(NAME_REGEX.test('سارة عمر')).toBe(true);
      expect(NAME_REGEX.test('فاطمة الزهراء')).toBe(true);
      expect(NAME_REGEX.test('عبد الرحمن')).toBe(true);
      expect(NAME_REGEX.test('آية')).toBe(true);
      expect(NAME_REGEX.test('إسماعيل')).toBe(true);
    });

    it('accepts valid English/Latin names', () => {
      expect(NAME_REGEX.test('John Doe')).toBe(true);
      expect(NAME_REGEX.test("O'Connor")).toBe(true);
      expect(NAME_REGEX.test('Jean-Pierre')).toBe(true);
      expect(NAME_REGEX.test('Ali')).toBe(true);
    });

    it('strictly rejects names with Western or Arabic numerals', () => {
      expect(NAME_REGEX.test('Tariq123')).toBe(false);
      expect(NAME_REGEX.test('طارق١٢٣')).toBe(false); // Arabic digits not allowed in names
      expect(NAME_REGEX.test('123456')).toBe(false);
      expect(NAME_REGEX.test('١٢٣٤٥٦')).toBe(false);
      expect(NAME_REGEX.test('!@#$%^')).toBe(false);
      expect(NAME_REGEX.test('A')).toBe(false); // min 2 chars
      expect(NAME_REGEX.test('')).toBe(false);
    });
  });

  describe('PHONE_REGEX & validateCustomerPhone with Arabic & Western digits', () => {
    it('accepts valid Egyptian 11-digit mobile numbers with Western digits', () => {
      expect(PHONE_REGEX.test('01554487523')).toBe(true);
      expect(PHONE_REGEX.test('01012345678')).toBe(true);
      expect(PHONE_REGEX.test('01198765432')).toBe(true);
      expect(PHONE_REGEX.test('01234567890')).toBe(true);
    });

    it('accepts Egyptian phone numbers typed in Arabic numerals (٠١٥٥٤٤٨٧٥٢٣)', () => {
      expect(validateCustomerPhone('٠١٥٥٤٤٨٧٥٢٣', mockTranslations)).toBeUndefined();
      expect(validateCustomerPhone('٠١٠١٢٣٤٥٦٧٨', mockTranslations)).toBeUndefined();
      expect(validateCustomerPhone('+٢٠١٥٥٤٤٨٧٥٢٣', mockTranslations)).toBeUndefined();
      expect(validateCustomerPhone('٠٠٢٠١٠١٢٣٤٥٦٧٨', mockTranslations)).toBeUndefined();
    });

    it('accepts Sudanese mobile numbers in Western and Arabic numerals', () => {
      expect(PHONE_REGEX.test('0912345678')).toBe(true);
      expect(PHONE_REGEX.test('0123456789')).toBe(true);
      expect(PHONE_REGEX.test('+249912345678')).toBe(true);
      expect(validateCustomerPhone('٠٩١٢٣٤٥٦٧٨', mockTranslations)).toBeUndefined();
    });

    it('rejects invalid numbers whether Western or Arabic numerals', () => {
      expect(validateCustomerPhone('١٢٣٤٥', mockTranslations)).toBe(mockTranslations.phoneErrorInvalid);
      expect(validateCustomerPhone('01312345678', mockTranslations)).toBe(mockTranslations.phoneErrorInvalid); // 013 is landline
      expect(validateCustomerPhone('٠١٣١٢٣٤٥٦٧٨', mockTranslations)).toBe(mockTranslations.phoneErrorInvalid); // 013 in Arabic numerals
      expect(validateCustomerPhone('01412345678', mockTranslations)).toBe(mockTranslations.phoneErrorInvalid); // fake prefix
      expect(validateCustomerPhone('0155448752', mockTranslations)).toBe(mockTranslations.phoneErrorInvalid); // 10 digits
      expect(validateCustomerPhone('٠١٥٥٤٤٨٧٥٢', mockTranslations)).toBe(mockTranslations.phoneErrorInvalid); // 10 digits in Arabic numerals
      expect(validateCustomerPhone('', mockTranslations)).toBe(mockTranslations.phoneErrorEmpty);
    });
  });

  describe('ADDRESS_REGEX with Arabic letters and numerals', () => {
    it('accepts addresses containing Arabic letters, Arabic numbers (٠-٩), and Arabic comma (،)', () => {
      const arabicAddress = 'شارع التحرير، الدقي، عمارة ١٥، شقة ٤';
      expect(ADDRESS_REGEX.test(arabicAddress)).toBe(true);
      expect(ADDRESS_HAS_LETTERS_REGEX.test(arabicAddress)).toBe(true);
      expect(validateCustomerAddress(arabicAddress, 'delivery', mockTranslations)).toBeUndefined();
    });

    it('accepts addresses with Western numbers and Arabic letters', () => {
      const mixedAddress = 'مدينة نصر - الحي السابع - عمارة 14 - شقة 2';
      expect(ADDRESS_REGEX.test(mixedAddress)).toBe(true);
      expect(ADDRESS_HAS_LETTERS_REGEX.test(mixedAddress)).toBe(true);
      expect(validateCustomerAddress(mixedAddress, 'delivery', mockTranslations)).toBeUndefined();
    });

    it('rejects addresses composed entirely of numbers without letters', () => {
      expect(validateCustomerAddress('١٢٣٤٥٦٧٨', 'delivery', mockTranslations)).toBe(mockTranslations.addressErrorInvalid);
      expect(validateCustomerAddress('12345678', 'delivery', mockTranslations)).toBe(mockTranslations.addressErrorInvalid);
    });
  });

  describe('validateOrderDetails complete checkout', () => {
    it('validates a complete order entered fully in Arabic (Arabic letters & Arabic numerals)', () => {
      const result = validateOrderDetails({
        name: 'طارق عبد المحمود',
        phone: '٠١٥٥٤٤٨٧٥٢٣',
        address: 'مدينة نصر، الحي السابع، عمارة ١٤، شقة ٢',
        orderType: 'delivery',
        t: mockTranslations,
      });

      expect(result.isValid).toBe(true);
      expect(result.nameError).toBeUndefined();
      expect(result.phoneError).toBeUndefined();
      expect(result.addressError).toBeUndefined();
    });
  });
});
