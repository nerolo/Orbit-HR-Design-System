import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { typeScale, fontWeights, fontFamily, fontFamilyStack } from '../../tokens/typography';

// ─── Type Scale Row ───────────────────────────────────────────────────────────
function TypeScaleRow({ step }: { step: typeof typeScale[0] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '110px 1fr 200px',
        alignItems: 'center',
        gap: 24,
        padding: '20px 0',
        borderBottom: '1px solid #F4F2F1',
      }}
    >
      {/* Token info */}
      <div>
        <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '12px', fontWeight: 600, color: '#B60058' }}>
          {step.name}
        </p>
        <p style={{ margin: '2px 0 0', fontFamily: 'monospace', fontSize: '10px', color: '#625F64' }}>
          {step.size}px / {step.lineHeight}px
        </p>
      </div>

      {/* Live specimen */}
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--font-family-base)',
          fontSize: step.size,
          lineHeight: `${step.lineHeight}px`,
          fontWeight: 400,
          color: '#2D2A2B',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        The quick brown fox jumps over the lazy dog
      </p>

      {/* Description */}
      <p style={{ margin: 0, fontFamily: 'var(--font-family-base)', fontSize: '12px', color: '#625F64' }}>
        {step.description}
      </p>
    </div>
  );
}

// ─── Font Weight Row ──────────────────────────────────────────────────────────
function FontWeightRow({ weight }: { weight: typeof fontWeights[0] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '150px 80px 1fr',
        alignItems: 'center',
        gap: 24,
        padding: '16px 0',
        borderBottom: '1px solid #F4F2F1',
      }}
    >
      <div>
        <p style={{ margin: 0, fontFamily: 'var(--font-family-base)', fontSize: '13px', fontWeight: weight.value, color: '#2D2A2B' }}>
          {weight.name}
        </p>
        <p style={{ margin: '2px 0 0', fontFamily: 'monospace', fontSize: '10px', color: '#625F64' }}>
          .{weight.cssClass}
        </p>
      </div>
      <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '12px', color: '#625F64' }}>
        {weight.value}
      </p>
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--font-family-base)',
          fontSize: 18,
          fontWeight: weight.value,
          color: '#2D2A2B',
          lineHeight: '30px',
        }}
      >
        Orbit HR — People first, always.
      </p>
    </div>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────
function TypographyPage() {
  return (
    <div style={{ padding: '48px 56px', fontFamily: 'var(--font-family-base)', maxWidth: 1100 }}>
      {/* Header */}
      <div style={{ marginBottom: 48, paddingBottom: 32, borderBottom: '2px solid #F4F2F1' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <span style={{ fontSize: 28 }}>🟠</span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#B60058', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Orbit Design System
          </span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-family-base)', fontSize: '36px', fontWeight: 800, color: '#2D2A2B', margin: '0 0 12px', lineHeight: 1.2 }}>
          Typography
        </h1>
        <p style={{ fontSize: '16px', color: '#625F64', margin: 0, maxWidth: 560, lineHeight: 1.7 }}>
          Orbit HR uses <strong style={{ color: '#2D2A2B' }}>{fontFamily}</strong> as its primary typeface — a humanist sans-serif optimised for readability across all HR interface contexts.
        </p>
      </div>

      {/* Font Family Card */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontFamily: 'var(--font-family-base)', fontSize: '20px', fontWeight: 700, color: '#2D2A2B', margin: '0 0 20px' }}>
          Font Family
        </h2>
        <div style={{ background: '#F4F2F1', borderRadius: 16, padding: '32px 40px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32 }}>
          <div>
            <p style={{ margin: '0 0 8px', fontFamily: 'var(--font-family-base)', fontSize: '64px', fontWeight: 700, color: '#2D2A2B', lineHeight: 1 }}>
              Aa
            </p>
            <p style={{ margin: '4px 0 0', fontFamily: 'monospace', fontSize: '12px', color: '#625F64' }}>
              {fontFamilyStack}
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, fontFamily: 'var(--font-family-base)', fontSize: '14px', color: '#625F64', lineHeight: 1.8 }}>
              A B C D E F G H I J K L M N O<br />
              P Q R S T U V W X Y Z<br />
              a b c d e f g h i j k l m n o<br />
              p q r s t u v w x y z<br />
              0 1 2 3 4 5 6 7 8 9 ! @ # $ %
            </p>
          </div>
        </div>
      </section>

      {/* Type Scale */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontFamily: 'var(--font-family-base)', fontSize: '20px', fontWeight: 700, color: '#2D2A2B', margin: '0 0 4px' }}>
          Type Scale
        </h2>
        <p style={{ fontFamily: 'var(--font-family-base)', fontSize: '14px', color: '#625F64', margin: '0 0 20px', lineHeight: 1.6 }}>
          Custom scale extracted from Figma — sized in px with corresponding line-height.
        </p>

        {/* Column headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr 200px', gap: 24, padding: '0 0 8px', borderBottom: '2px solid #2D2A2B' }}>
          {['Token', 'Specimen', 'Usage'].map((h) => (
            <span key={h} style={{ fontFamily: 'var(--font-family-base)', fontSize: '11px', fontWeight: 700, color: '#625F64', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {h}
            </span>
          ))}
        </div>

        {typeScale.map((step) => (
          <TypeScaleRow key={step.name} step={step} />
        ))}
      </section>

      {/* Font Weights */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontFamily: 'var(--font-family-base)', fontSize: '20px', fontWeight: 700, color: '#2D2A2B', margin: '0 0 4px' }}>
          Font Weights
        </h2>
        <p style={{ fontFamily: 'var(--font-family-base)', fontSize: '14px', color: '#625F64', margin: '0 0 20px', lineHeight: 1.6 }}>
          Hanken Grotesk supports 7 weights from Extra Light (200) through Black (900).
        </p>

        {/* Column headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '150px 80px 1fr', gap: 24, padding: '0 0 8px', borderBottom: '2px solid #2D2A2B' }}>
          {['Weight', 'Value', 'Specimen'].map((h) => (
            <span key={h} style={{ fontFamily: 'var(--font-family-base)', fontSize: '11px', fontWeight: 700, color: '#625F64', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {h}
            </span>
          ))}
        </div>

        {fontWeights.map((w) => (
          <FontWeightRow key={w.value} weight={w} />
        ))}
      </section>

      {/* Usage note */}
      <section style={{ background: '#FCF3F7', border: '1px solid #FFB3BC', borderRadius: 12, padding: '20px 24px' }}>
        <h3 style={{ fontFamily: 'var(--font-family-base)', fontSize: '14px', fontWeight: 700, color: '#B60058', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Usage
        </h3>
        <p style={{ fontFamily: 'monospace', fontSize: '13px', color: '#2D2A2B', margin: 0, lineHeight: 1.8 }}>
          font-family: var(--font-family-base);<br />
          font-size: var(--font-size-base);  /* 14px */<br />
          font-size: var(--font-size-xl);    /* 18px */
        </p>
      </section>
    </div>
  );
}

// ─── Storybook Meta ───────────────────────────────────────────────────────────
const meta: Meta = {
  title: 'Foundation/Typography',
  component: TypographyPage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Orbit HR typography system — Hanken Grotesk, type scale, and font weights.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTypography: Story = {
  name: 'Typography Scale',
  render: () => <TypographyPage />,
};
