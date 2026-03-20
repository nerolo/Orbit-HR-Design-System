// ─── Orbit HR Design System — Typography Tokens ──────────────────────────────

export interface TypeStep {
  name: string;
  token: string;
  size: number;       // px
  lineHeight: number; // px
  rem: string;
  description: string;
}

export interface FontWeight {
  name: string;
  value: number;
  cssClass: string;
}

export const fontFamily = 'Hanken Grotesk';
export const fontFamilyStack = "'Hanken Grotesk', system-ui, -apple-system, sans-serif";

// Type scale — extracted from Figma text styles
export const typeScale: TypeStep[] = [
  { name: 'text-xs',   token: '--font-size-xs',   size: 10.5, lineHeight: 18, rem: '0.656rem', description: 'Caption, fine print' },
  { name: 'text-sm',   token: '--font-size-sm',   size: 12,   lineHeight: 21, rem: '0.75rem',  description: 'Labels, helper text' },
  { name: 'text-base', token: '--font-size-base',  size: 14,   lineHeight: 21, rem: '0.875rem', description: 'Body / default' },
  { name: 'text-lg',   token: '--font-size-lg',   size: 16,   lineHeight: 27, rem: '1rem',     description: 'Emphasized body' },
  { name: 'text-xl',   token: '--font-size-xl',   size: 18,   lineHeight: 30, rem: '1.125rem', description: 'Subheadings' },
  { name: 'text-2xl',  token: '--font-size-2xl',  size: 21,   lineHeight: 36, rem: '1.313rem', description: 'Section titles' },
  { name: 'text-3xl',  token: '--font-size-3xl',  size: 24,   lineHeight: 36, rem: '1.5rem',   description: 'Page headings' },
  { name: 'text-4xl',  token: '--font-size-4xl',  size: 30,   lineHeight: 42, rem: '1.875rem', description: 'Display small' },
  { name: 'text-5xl',  token: '--font-size-5xl',  size: 36,   lineHeight: 48, rem: '2.25rem',  description: 'Display medium' },
  { name: 'text-6xl',  token: '--font-size-6xl',  size: 48,   lineHeight: 60, rem: '3rem',     description: 'Display large' },
];

export const fontWeights: FontWeight[] = [
  { name: 'Extra Light', value: 200, cssClass: 'font-extralight' },
  { name: 'Light',       value: 300, cssClass: 'font-light'      },
  { name: 'Regular',     value: 400, cssClass: 'font-normal'     },
  { name: 'Medium',      value: 500, cssClass: 'font-medium'     },
  { name: 'Bold',        value: 700, cssClass: 'font-bold'       },
  { name: 'Extra Bold',  value: 800, cssClass: 'font-extrabold'  },
  { name: 'Black',       value: 900, cssClass: 'font-black'      },
];
