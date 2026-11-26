import React from 'react';

/**
 * ============================================================================
 * MAMAKITCHEN CENTRALIZED DESIGN SYSTEM & NEUMORPHIC TOKENS
 * ============================================================================
 * Single Source of Truth for all shadows, surfaces, borders, radii, and styles.
 *
 * DESIGN PHILOSOPHY & ELEMENT IDENTITIES:
 * 1. Warm Culinary Branding:
 *    MamaKitchen honors traditional Sudanese home-cooked culinary heritage.
 *    The palette pairs rich Deep Maroon (#8C1C13) and Caramel Gold (#A67C52)
 *    against Warm Cream (#F9EDD8) in Light mode, and Deep Cocoa (#231812) in Dark mode.
 *
 * 2. Omnidirectional Symmetrical Neumorphism:
 *    Instead of directional diagonal drop-shadows (e.g. 4px 4px), all neumorphic
 *    elements utilize zero-offset symmetrical diffusion (0 0 Xpx Ypx ...).
 *    This ensures elements look softly extruded, balanced from every angle, and
 *    naturally harmonious in both LTR (English) and RTL (Arabic) layouts.
 *
 * 3. Light vs Dark Mode Surface Identity:
 *    - Light Mode: Uses subtle 1px hairline borders (rgba(0, 0, 0, 0.06)) to crisply
 *      delineate extruded surfaces against the warm cream background.
 *    - Dark Mode: Uses STRICTLY borderless surfaces ('none'). In dark mode, harsh
 *      strokes ruin the neumorphic illusion of continuous, clay-like extrusion.
 *
 * 4. Order Buttons (Primary CTAs) Exemption Rule:
 *    Primary Action & Order CTA buttons ("Add to Order", "View Order", Floating Cart)
 *    are INTENTIONALLY kept non-neumorphic. They maintain high-contrast, saturated
 *    maroon styling to guarantee visual hierarchy, accessibility, and high conversion.
 * ============================================================================
 */

/**
 * Core Brand Color Palette
 * Used across icons, typography, badges, and active element states.
 */
export const brandTokens = {
  /** Warm cream background tone used in light theme */
  cream: '#F9EDD8',
  /** Signature deep maroon CTA and primary accent */
  red: '#8C1C13',
  /** Warm caramel gold secondary accent */
  gold: '#A67C52',
  /** Deep cocoa background equivalent for dark theme */
  creamDark: '#2a1f14',
} as const;

/**
 * Complete Collection of Neumorphic Tokens
 * Edit values here to propagate styling updates across every screen and component.
 */
export const neumorphicTokens = {
  // --------------------------------------------------------------------------
  // 1. SHADOW TOKENS (Omnidirectional 0 0 ... diffusion)
  // --------------------------------------------------------------------------
  shadows: {
    /**
     * Element: Dish Card
     * Role: The primary food item card displayed in the main storefront grid & list.
     * States:
     *   - resting: Gentle ambient extrusion lifting the card off the page background.
     *   - hover: Deepened, expansive diffuse glow creating an elevated floating lift.
     */
    card: {
      light: {
        resting:
          '0 0 2px rgba(130, 85, 55, 0.4), 0 0 18px rgba(130, 85, 55, 0.3), 0 0 10px rgba(255, 255, 255, 0.3)',
        hover: '0 0 28px rgba(130, 85, 55, 0.2), 0 0 55px rgba(130, 85, 55, 0.1)',
      },
      dark: {
        resting: '0 0 2px rgba(38, 15, 0, 1), 0 0 18px rgba(0, 0, 0, 0.42)',
        hover: '0 0 28px rgba(15, 8, 5, 1), 0 0 55px rgba(0, 0, 0, 0.1)',
      },
    },

    /**
     * Element: Dish Detail Modal
     * Role: The large dialog window opening upon card click to show ingredients,
     *       portion sizes, piece counters, and customization options.
     * Identity: Highest-elevation surface with deep, soft ambient occlusion.
     */
    modal: {
      light: '0 0 35px rgba(130, 85, 55, 0.18), 0 0 70px rgba(130, 85, 55, 0.08)',
      dark: '0 0 50px rgba(0, 0, 0, 0.9), 0 0 100px rgba(0, 0, 0, 0.6)',
    },

    /**
     * Element: Interactive Controls & Action Icons
     * Role: Utility and navigation buttons across the interface:
     *       - TopBar Language Switcher (EN / AR)
     *       - TopBar Shopping Cart Icon Button
     *       - TopBar Theme Toggle (Sun / Moon)
     *       - Storefront View Mode Switcher (Grid View vs List View)
     *       - Quantity Stepper Increment (+) and Decrement (-) buttons
     * States:
     *   - resting: Subtle raised button feel.
     *   - active: Focused / selected state with colored radiance.
     */
    control: {
      light: {
        resting: '0 0 4px rgba(141, 95, 61, 0.4), 0 0 4px rgba(255, 255, 255, 0.77)',
        active: '0 0 12px rgba(140, 28, 19, 0.25)',
      },
      dark: {
        resting: '0 0 10px rgba(0, 0, 0, 0.06)',
        active: '0 0 14px rgba(224, 49, 49, 0.09)',
      },
    },

    /**
     * Element: Selection Chips & Option Pills
     * Role: Interactive selection pills used for meal configuration:
     *       - Portion size selectors (e.g. Small / Medium / Large)
     *       - Per-piece mode toggle ("By Piece")
     * States:
     *   - resting: Cream-tinted extruded capsule.
     *   - selected: Brand maroon surface with radiant warm glow.
     */
    chip: {
      light: {
        resting: '0 0 8px rgba(130, 85, 55, 0.08), 0 0 4px rgba(255, 255, 255, 0.9)',
        selected: '0 0 14px rgba(140, 28, 19, 0.25)',
      },
      dark: {
        resting: '0 0 10px rgba(0, 0, 0, 0.5)',
        selected: '0 0 14px rgba(224, 49, 49, 0.11)',
      },
    },

    /**
     * Element: Price Tag Capsule
     * Role: Compact price label displaying standard or discounted meal price
     *       on both cards and list items.
     * Identity: Subtle inset/raised pill with gentle grounding diffusion.
     */
    priceTag: {
      light: '0 0 8px rgba(130, 85, 55, 0.08), 0 0 4px rgba(255, 255, 255, 0.9)',
      dark: '0 0 2px rgba(0, 0, 0, 0.33)',
    },

    /**
     * Element: Dish Photography Container
     * Role: The circular and rounded food photography container on cards and modals.
     * Identity: Symmetrical soft halo that visually separates the food photography
     *           from the underlying card surface.
     */
    image: {
      light: '0 0 18px rgba(130, 85, 55, 0.12), 0 0 8px rgba(255, 255, 255, 0.8)',
      dark: '0 0 20px rgba(0, 0, 0, 0.7)',
    },

    /**
     * Element: Quantity Stepper Tray
     * Role: The sunken container holding [-], numeric quantity, and [+] controls.
     * Identity:
     *   - light: Soft raised counter tray.
     *   - dark: Inset recessed tray (carved-in appearance).
     */
    stepper: {
      light: '0 0 8px rgba(82, 54, 35, 1), 0 0 4px rgba(255, 255, 255, 0.8)',
      dark: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
    },

    /**
     * Element: Badges & Status Indicators (SaleBadge)
     * Role: Floating badges communicating promotional discounts and availability:
     *       - sale: Scalable promotional badge (e.g. "SALE -20%").
     *       - dark: Neutral status badge (e.g. "Unavailable" dish overlay).
     */
    badge: {
      sale: {
        light: '0 0 8px rgba(140, 28, 19, 0.35)',
        dark: '0 0 10px rgba(224, 49, 49, 0.45)',
      },
      dark: {
        light: '0 0 14px rgba(0, 0, 0, 0.5)',
        dark: '0 0 14px rgba(0, 0, 0, 0.6)',
      },
    },
  },

  // --------------------------------------------------------------------------
  // 2. SURFACE & BACKGROUND TOKENS
  // --------------------------------------------------------------------------
  surfaces: {
    /** Main card surface fill (White in light mode, Dark Roasted Cocoa in dark mode) */
    card: {
      light: '#ffffff',
      dark: '#1b100fff',
    },
    /** Interactive control button surface fill */
    control: {
      light: '#ffffff',
      dark: '#2e2019',
    },
    /** Portion size & piece option pill surfaces */
    chip: {
      light: {
        normal: '#FFF9F0',
        selected: brandTokens.red,
        sale: '#FFF0F0',
      },
      dark: {
        normal: '#2c1e17',
        selected: brandTokens.red,
        sale: 'rgba(232, 60, 60, 0.22)',
      },
    },
    /** Stepper tray background */
    stepper: {
      light: 'rgba(140, 27, 19, 1)',
      dark: 'rgba(0, 0, 0, 0.35)',
    },
  },

  // --------------------------------------------------------------------------
  // 3. BORDER & STROKE TOKENS
  // --------------------------------------------------------------------------
  /**
   * Border System:
   * Light mode employs delicate 1px semi-transparent borders for crispness.
   * Dark mode strictly eliminates border outlines ('none') to maintain pure
   * neumorphic depth without artificial high-contrast stroke artifacts.
   */
  borders: {
    /** Subtle hairline border for cards, modal containers, and default states */
    subtle: {
      light: '1px solid rgba(0, 0, 0, 0.03)',
      dark: 'none',
    },
    /** Outline for interactive action icons and utility buttons */
    control: {
      light: '1px solid rgba(0, 0, 0, 0.08)',
      dark: 'none',
    },
    /** Outline for selected/active chips */
    selected: {
      light: `1px solid ${brandTokens.red}`,
      dark: 'none',
    },
    /** Outline for active discount / sale tags */
    sale: {
      light: `1px solid ${brandTokens.red}`,
      dark: 'none',
    },
    /** Borderless token */
    none: 'none',
  },

  // --------------------------------------------------------------------------
  // 4. CORNER RADII TOKENS
  // --------------------------------------------------------------------------
  radii: {
    /** Dish cards & list wrappers */
    card: 16,
    /** Detail modal container */
    modal: 20,
    /** Buttons, icons, and stepper buttons */
    control: 8,
    /** Portion size & piece chips */
    chip: 8,
    /** Scalable sale and status badges */
    badge: 8,
  },
} as const;

// ============================================================================
// COMPONENT STYLE GENERATORS
// ============================================================================

/**
 * Generates the container style for DishCard elements.
 *
 * @param isDark - True when the application is rendered in Dark Mode
 * @param hovered - True when the user is hovering over the card
 * @param available - False when the dish is out of stock / unavailable
 * @returns React.CSSProperties object with background, border, shadow, and lift transitions
 */
export function getNeumorphicCardStyle(
  isDark: boolean,
  hovered = false,
  available = true
): React.CSSProperties {
  const mode = isDark ? 'dark' : 'light';
  return {
    position: 'relative',
    overflow: 'hidden',
    cursor: available ? 'pointer' : 'not-allowed',
    filter: available ? undefined : 'grayscale(0.85)',
    opacity: available ? 1 : 0.65,
    background: neumorphicTokens.surfaces.card[mode],
    border: neumorphicTokens.borders.subtle[mode],
    boxShadow:
      hovered && available
        ? neumorphicTokens.shadows.card[mode].hover
        : neumorphicTokens.shadows.card[mode].resting,
    transform: hovered && available ? 'translateY(-6px)' : 'translateY(0)',
    transition:
      'transform 180ms ease, box-shadow 180ms ease, filter 150ms ease, opacity 150ms ease',
  };
}

/**
 * Generates the price tag container style for DishCard and DishListItem.
 *
 * @param isDark - True when the application is rendered in Dark Mode
 * @param isOnSale - True when the dish has an active discount
 * @param available - False when the dish is unavailable
 * @returns React.CSSProperties object for the price capsule
 */
export function getNeumorphicPriceTagStyle(
  isDark: boolean,
  isOnSale = false,
  available = true
): React.CSSProperties {
  const mode = isDark ? 'dark' : 'light';
  return {
    padding: '4px 10px',
    borderRadius: neumorphicTokens.radii.chip,
    backgroundColor: !available
      ? isDark
        ? '#2d1d14ff'
        : '#e0cfbe'
      : isOnSale
        ? neumorphicTokens.surfaces.chip[mode].sale
        : neumorphicTokens.surfaces.chip[mode].normal,
    border: !available
      ? 'none'
      : isOnSale
        ? neumorphicTokens.borders.sale[mode]
        : neumorphicTokens.borders.subtle[mode],
    boxShadow: !available ? undefined : neumorphicTokens.shadows.priceTag[mode],
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    transition: 'all 120ms ease',
  };
}

/**
 * Generates the chip / pill button style for portion sizes and per-piece toggles.
 *
 * @param isDark - True when the application is rendered in Dark Mode
 * @param isSelected - True when the portion or piece option is actively chosen
 * @returns React.CSSProperties object with active or resting pill neumorphism
 */
export function getNeumorphicChipStyle(isDark: boolean, isSelected = false): React.CSSProperties {
  const mode = isDark ? 'dark' : 'light';
  return {
    padding: '8px 14px',
    borderRadius: neumorphicTokens.radii.chip,
    cursor: 'pointer',
    background: isSelected
      ? neumorphicTokens.surfaces.chip[mode].selected
      : neumorphicTokens.surfaces.chip[mode].normal,
    border: isSelected
      ? neumorphicTokens.borders.selected[mode]
      : neumorphicTokens.borders.control[mode],
    boxShadow: isSelected
      ? neumorphicTokens.shadows.chip[mode].selected
      : neumorphicTokens.shadows.chip[mode].resting,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    transition: 'all 120ms ease',
    userSelect: 'none',
  };
}

/**
 * Generates the control style for utility action buttons and icon buttons.
 * Used for: TopBar buttons, View Mode toggles (Grid/List), and Stepper (+ / -).
 *
 * @param isDark - True when the application is rendered in Dark Mode
 * @param isActive - True when the button represents an active state (e.g. active view mode)
 * @returns React.CSSProperties object with soft extrusion or active maroon fill
 */
export function getNeumorphicControlStyle(isDark: boolean, isActive = false): React.CSSProperties {
  const mode = isDark ? 'dark' : 'light';
  return {
    backgroundColor: isActive ? brandTokens.red : neumorphicTokens.surfaces.control[mode],
    border: isActive ? 'none' : neumorphicTokens.borders.control[mode],
    boxShadow: isActive
      ? neumorphicTokens.shadows.control[mode].active
      : neumorphicTokens.shadows.control[mode].resting,
    color: isActive ? '#ffffff' : isDark ? '#FFE066' : brandTokens.red,
    transition: 'background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease',
  };
}

/**
 * Generates the container style for the quantity adjustment stepper tray.
 * Houses the [-] button, numeric counter, and [+] button.
 *
 * @param isDark - True when the application is rendered in Dark Mode
 * @returns React.CSSProperties object with soft tray or inset carved look
 */
export function getNeumorphicStepperContainerStyle(isDark: boolean): React.CSSProperties {
  const mode = isDark ? 'dark' : 'light';
  return {
    backgroundColor: neumorphicTokens.surfaces.stepper[mode],
    borderRadius: neumorphicTokens.radii.control,
    border: neumorphicTokens.borders.subtle[mode],
    boxShadow: neumorphicTokens.shadows.stepper[mode],
  };
}

/**
 * Generates Mantine Modal styles for the dish details dialog.
 *
 * @param isDark - True when the application is rendered in Dark Mode
 * @returns Styles configuration object for Mantine Modal (content, header, body)
 */
export function getNeumorphicModalStyles(isDark: boolean) {
  const mode = isDark ? 'dark' : 'light';
  return {
    content: {
      background: neumorphicTokens.surfaces.card[mode],
      border: neumorphicTokens.borders.subtle[mode],
      boxShadow: neumorphicTokens.shadows.modal[mode],
    },
    header: {
      background: 'transparent',
      borderBottom: isDark ? 'none' : neumorphicTokens.borders.subtle.light,
      padding: '16px 20px',
    },
    body: {
      padding: '20px',
    },
  };
}
