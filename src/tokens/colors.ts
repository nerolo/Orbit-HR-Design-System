// ─── Orbit HR Design System — Color Tokens ───────────────────────────────────
// Extracted from Figma Variables: 3.Brand Color/ → 2.Alias Color// → 1.Mapped Color///

export interface ColorSwatch {
  name: string;
  token: string;
  hex: string;
  textColor: 'light' | 'dark';
  /** The alias variable this token resolves through (if any) */
  alias?: string;
}

export interface ColorGroup {
  title: string;
  description?: string;
  swatches: ColorSwatch[];
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  TIER 1 — Primitives (3.Brand Color/)
//  The raw named colours that form the foundation of the Orbit palette.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const primitiveBrand: ColorGroup = {
  title: 'Brand Primitives',
  description: 'Core named colours from the Orbit brand — the raw palette that feeds into alias and mapped tokens.',
  swatches: [
    { name: 'Lipstick Berry', token: 'Theme/Lipstick Berry', hex: '#B60058', textColor: 'light' },
    { name: 'Coral Blush',    token: 'Theme/Coral Blush',    hex: '#F1528B', textColor: 'light' },
    { name: 'Peach Dream',    token: 'Theme/Peach Dream',    hex: '#FFB3BC', textColor: 'dark'  },
    { name: 'Nude Rose',      token: 'Theme/Nude Rose',      hex: '#F8E9ED', textColor: 'dark'  },
  ],
};

export const primitiveNeutral: ColorGroup = {
  title: 'Neutral Primitives',
  description: 'Neutral tones used across surfaces, text, and borders.',
  swatches: [
    { name: 'Midnight Charcoal', token: 'Theme/Midnight Charcoal', hex: '#2D2A2B', textColor: 'light' },
    { name: 'Graphite Glam',     token: 'Theme/Graphite Glam',     hex: '#625F64', textColor: 'light' },
    { name: 'Latte',             token: 'Theme/Latte',             hex: '#EFEBE7', textColor: 'dark'  },
    { name: 'Soft Cream',        token: 'Theme/Soft Cream',        hex: '#F4F2F1', textColor: 'dark'  },
    { name: 'Pearl White',       token: 'Theme/Pearl White',       hex: '#F8F8F8', textColor: 'dark'  },
  ],
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  TIER 2 — Alias Tokens (2.Alias Color//)
//  Semantic references that point to the primitives above.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const aliasPrimary: ColorGroup = {
  title: 'Primary Scale',
  description: 'Alias tokens for the brand primary ramp — maps to Theme primitives.',
  swatches: [
    { name: 'Primary 500', token: 'Primary/500', hex: '#B60058', textColor: 'light', alias: 'Theme/Lipstick Berry' },
    { name: 'Primary 400', token: 'Primary/400', hex: '#F1528B', textColor: 'light', alias: 'Theme/Coral Blush'   },
    { name: 'Primary 300', token: 'Primary/300', hex: '#FFB3BC', textColor: 'dark',  alias: 'Theme/Peach Dream'   },
    { name: 'Primary 200', token: 'Primary/200', hex: '#F8E9ED', textColor: 'dark',  alias: 'Theme/Nude Rose'     },
    { name: 'Primary 100', token: 'Primary/100', hex: '#F8F8F8', textColor: 'dark',  alias: 'Theme/Pearl White'   },
  ],
};

export const aliasText: ColorGroup = {
  title: 'Text',
  description: 'Alias tokens for text colours.',
  swatches: [
    { name: 'Text Strong',    token: 'Text/text-strong',    hex: '#2D2A2B', textColor: 'light', alias: 'Theme/Midnight Charcoal' },
    { name: 'Text Primary',   token: 'Text/text-primary',   hex: '#2D2A2B', textColor: 'light', alias: 'Theme/Midnight Charcoal' },
    { name: 'Text Secondary', token: 'Text/text-secondary', hex: '#625F64', textColor: 'light', alias: 'Theme/Graphite Glam'     },
    { name: 'Text Subtle',    token: 'Text/text-subtle',    hex: '#BDBDBD', textColor: 'dark'  },
    { name: 'Text Disabled',  token: 'Text/text-disabled',  hex: '#78909C', textColor: 'light' },
    { name: 'Text On-Brand',  token: 'Text/text-on-brand',  hex: '#F8F8F8', textColor: 'dark',  alias: 'Theme/Pearl White'       },
  ],
};

export const aliasBackground: ColorGroup = {
  title: 'Background',
  description: 'Alias tokens for surface and background colours.',
  swatches: [
    { name: 'Surface Primary',    token: 'Background/surface-primary',   hex: '#F4F2F1', textColor: 'dark', alias: 'Theme/Soft Cream'    },
    { name: 'Surface Secondary',  token: 'Background/surface-secondary', hex: '#F8F8F8', textColor: 'dark', alias: 'Theme/Pearl White'   },
    { name: 'Surface Tertiary',   token: 'Background/surface-tertiary',  hex: '#EFEBE7', textColor: 'dark', alias: 'Theme/Latte'         },
    { name: 'Surface Inverted',   token: 'Background/surface-inverted',  hex: '#424242', textColor: 'light' },
    { name: 'Surface Brand 200',  token: 'Background/surface-brand-200', hex: '#F8E9ED', textColor: 'dark', alias: 'Theme/Nude Rose'     },
    { name: 'Surface Brand 300',  token: 'Background/surface-brand-300', hex: '#FFB3BC', textColor: 'dark', alias: 'Theme/Peach Dream'   },
    { name: 'Surface Brand 400',  token: 'Background/surface-brand-400', hex: '#F1528B', textColor: 'light', alias: 'Theme/Coral Blush'  },
  ],
};

export const aliasBorder: ColorGroup = {
  title: 'Border',
  description: 'Alias tokens for border colours.',
  swatches: [
    { name: 'Border Subtle',      token: 'Border/border-subtle',      hex: '#F8F8F8', textColor: 'dark'  },
    { name: 'Border Light',       token: 'Border/border-light',       hex: '#EFEBE7', textColor: 'dark'  },
    { name: 'Border Default',     token: 'Border/border-default',     hex: '#FFB3BC', textColor: 'dark'  },
    { name: 'Border Strong',      token: 'Border/border-strong',      hex: '#F1528B', textColor: 'light' },
    { name: 'Border Interactive', token: 'Border/border-interactive', hex: '#B60058', textColor: 'light' },
  ],
};

export const aliasStatus: ColorGroup = {
  title: 'Status',
  description: 'Semantic status colours for feedback and alerts.',
  swatches: [
    { name: 'Success', token: 'Status/status-success', hex: '#AED581', textColor: 'dark'  },
    { name: 'Warning', token: 'Status/status-warning', hex: '#FFD54F', textColor: 'dark'  },
    { name: 'Error',   token: 'Status/status-error',   hex: '#E57373', textColor: 'dark'  },
    { name: 'Info',    token: 'Status/status-info',     hex: '#64B5F6', textColor: 'dark'  },
  ],
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  TIER 3 — Mapped Tokens (1.Mapped Color///)
//  Component-level tokens consumed directly in UI code.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const mappedText: ColorGroup = {
  title: 'Text (Mapped)',
  description: 'Component-level text colour tokens — used directly in code.',
  swatches: [
    { name: 'Headings',        token: 'Text/headings',        hex: '#2D2A2B', textColor: 'light', alias: 'Text/text-strong'    },
    { name: 'Body',            token: 'Text/body',            hex: '#2D2A2B', textColor: 'light', alias: 'Text/text-primary'   },
    { name: 'Secondary',       token: 'Text/secondary',       hex: '#625F64', textColor: 'light', alias: 'Text/text-secondary' },
    { name: 'Action',          token: 'Text/action',          hex: '#B60058', textColor: 'light', alias: 'Primary/500'         },
    { name: 'Disabled',        token: 'Text/disbaled',        hex: '#78909C', textColor: 'light', alias: 'Text/text-disabled'  },
    { name: 'Brand Primary',   token: 'Text/Brand Primary',   hex: '#F1528B', textColor: 'light', alias: 'Primary/400'         },
    { name: 'Brand Secondary', token: 'Text/Brand Secondary', hex: '#FFB3BC', textColor: 'dark',  alias: 'Primary/300'         },
    { name: 'On-Action',       token: 'Text/on-action',       hex: '#F8F8F8', textColor: 'dark',  alias: 'Text/text-on-brand'  },
    { name: 'Info',            token: 'Text/info',            hex: '#B60058', textColor: 'light', alias: 'Primary/500'         },
    { name: 'Warning',         token: 'Text/warning',         hex: '#FFD54F', textColor: 'dark',  alias: 'Status/status-warning' },
    { name: 'Success',         token: 'Text/success',         hex: '#AED581', textColor: 'dark',  alias: 'Status/status-success' },
    { name: 'Error',           token: 'Text/error',           hex: '#E57373', textColor: 'dark',  alias: 'Status/status-error'   },
  ],
};

export const mappedPageLayout: ColorGroup = {
  title: 'Page Layout (Mapped)',
  description: 'Surface, border, and layout tokens for page structure.',
  swatches: [
    { name: 'Page Background',  token: 'Page Layout/page-bg',         hex: '#F4F2F1', textColor: 'dark', alias: 'Background/surface-primary'   },
    { name: 'Card Background',  token: 'Page Layout/card-bg',         hex: '#F8F8F8', textColor: 'dark', alias: 'Background/surface-secondary' },
    { name: 'Fill',             token: 'Page Layout/Fill',            hex: '#EFEBE7', textColor: 'dark', alias: 'Background/surface-tertiary'  },
    { name: 'Active',           token: 'Page Layout/Active',          hex: '#F1528B', textColor: 'light', alias: 'Primary/400'                 },
    { name: 'Input',            token: 'Page Layout/Input',           hex: '#FAFAFA', textColor: 'dark'  },
    { name: 'Border Light',     token: 'Page Layout/border-light',    hex: '#F8F8F8', textColor: 'dark', alias: 'Border/border-subtle'         },
    { name: 'Border Primary',   token: 'Page Layout/border-primary',  hex: '#FFB3BC', textColor: 'dark'  },
    { name: 'Modal Overlay',    token: 'Page Layout/modal-overlay-bg', hex: '#000000', textColor: 'light' },
  ],
};

export const mappedButtons: ColorGroup = {
  title: 'Buttons (Mapped)',
  description: 'Button-specific colour tokens for primary, secondary, and tertiary variants.',
  swatches: [
    { name: 'Primary BG',        token: 'Buttons/button-primary-bg',        hex: '#F1528B', textColor: 'light' },
    { name: 'Primary Text',      token: 'Buttons/button-primary-text',      hex: '#F8F8F8', textColor: 'dark'  },
    { name: 'Primary Border',    token: 'Buttons/button-primary-border',    hex: '#FFB3BC', textColor: 'dark'  },
    { name: 'Secondary BG',      token: 'Buttons/button-secondary-bg',      hex: '#FFB3BC', textColor: 'dark'  },
    { name: 'Secondary Text',    token: 'Buttons/button-secondary-text',    hex: '#2D2A2B', textColor: 'light' },
    { name: 'Secondary Border',  token: 'Buttons/button-secondary-border',  hex: '#F8F8F8', textColor: 'dark'  },
    { name: 'Secondary Hover',   token: 'Buttons/button-secondary-hover-bg', hex: '#F8F8F8', textColor: 'dark' },
    { name: 'Tertiary BG',       token: 'Buttons/button-tertiary-bg',       hex: '#F5F5F5', textColor: 'dark'  },
    { name: 'Tertiary Text',     token: 'Buttons/button-tertiary-text',     hex: '#2D2A2B', textColor: 'light' },
  ],
};

export const mappedIcon: ColorGroup = {
  title: 'Icon (Mapped)',
  description: 'Icon colour tokens for different states and contexts.',
  swatches: [
    { name: 'Default',   token: 'Icon/default',   hex: '#212121', textColor: 'light' },
    { name: 'Primary',   token: 'Icon/primary',   hex: '#F1528B', textColor: 'light' },
    { name: 'Secondary', token: 'Icon/secondary', hex: '#757575', textColor: 'light' },
    { name: 'Disabled',  token: 'Icon/disbaled',  hex: '#F8E9ED', textColor: 'dark'  },
    { name: 'On-Action', token: 'Icon/on-action', hex: '#F8F8F8', textColor: 'dark'  },
    { name: 'Info',      token: 'Icon/info',      hex: '#B60058', textColor: 'light' },
    { name: 'Warning',   token: 'Icon/warning',   hex: '#FFD54F', textColor: 'dark'  },
    { name: 'Success',   token: 'Icon/success',   hex: '#AED581', textColor: 'dark'  },
    { name: 'Error',     token: 'Icon/error',     hex: '#E57373', textColor: 'dark'  },
  ],
};

export const mappedInputFields: ColorGroup = {
  title: 'Input Fields (Mapped)',
  description: 'Input field colour tokens for backgrounds, borders, and text.',
  swatches: [
    { name: 'BG Default',        token: 'Input Fields/input-bg-default',        hex: '#FAFAFA', textColor: 'dark'  },
    { name: 'BG Disabled',       token: 'Input Fields/input-bg-disabled',       hex: '#CFD8DC', textColor: 'dark'  },
    { name: 'Border Default',    token: 'Input Fields/input-border-default',    hex: '#B0BEC5', textColor: 'dark'  },
    { name: 'Border Active',     token: 'Input Fields/input-border-active',     hex: '#78909C', textColor: 'light' },
    { name: 'Border Error',      token: 'Input Fields/input-border-error',      hex: '#E57373', textColor: 'dark'  },
    { name: 'Text Placeholder',  token: 'Input Fields/input-text-placeholder',  hex: '#BDBDBD', textColor: 'dark'  },
  ],
};

// ─── Grouped exports for the Storybook page ──────────────────────────────────

/** Tier 1: Primitive brand + neutral colours */
export const primitiveGroups: ColorGroup[] = [primitiveBrand, primitiveNeutral];

/** Tier 2: Alias / semantic tokens */
export const aliasGroups: ColorGroup[] = [aliasPrimary, aliasText, aliasBackground, aliasBorder, aliasStatus];

/** Tier 3: Mapped / component-level tokens */
export const mappedGroups: ColorGroup[] = [mappedText, mappedPageLayout, mappedButtons, mappedIcon, mappedInputFields];

/** Flat list of every group (backwards-compatible) */
export const allColorGroups: ColorGroup[] = [...primitiveGroups, ...aliasGroups, ...mappedGroups];
