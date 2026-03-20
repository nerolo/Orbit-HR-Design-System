import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  primitiveGroups,
  aliasGroups,
  mappedGroups,
  type ColorSwatch,
  type ColorGroup,
} from '../../tokens/colors';

// ─── Swatch Card ──────────────────────────────────────────────────────────────
function SwatchCard({ swatch }: { swatch: ColorSwatch }) {
  const fg = swatch.textColor === 'light' ? '#ffffff' : '#2D2A2B';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 160, borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.10)' }}>
      {/* Color block */}
      <div
        style={{
          backgroundColor: swatch.hex,
          height: 100,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '8px 12px',
        }}
      >
        <span style={{ fontFamily: 'var(--font-family-base)', fontSize: '11px', fontWeight: 600, color: fg, opacity: 0.85, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          {swatch.name}
        </span>
      </div>
      {/* Meta */}
      <div style={{ background: '#fff', padding: '10px 12px', borderTop: '1px solid #f0f0f0' }}>
        <p style={{ margin: 0, fontFamily: 'var(--font-family-base)', fontSize: '12px', fontWeight: 600, color: '#2D2A2B', letterSpacing: '0.02em' }}>
          {swatch.hex.toUpperCase()}
        </p>
        <p style={{ margin: '2px 0 0', fontFamily: 'monospace', fontSize: '10px', color: '#625F64', wordBreak: 'break-all' }}>
          {swatch.token}
        </p>
        {swatch.alias && (
          <p style={{ margin: '2px 0 0', fontFamily: 'monospace', fontSize: '9px', color: '#B60058', opacity: 0.7 }}>
            → {swatch.alias}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Color Group Section ──────────────────────────────────────────────────────
function ColorGroupSection({ group }: { group: ColorGroup }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h3 style={{ fontFamily: 'var(--font-family-base)', fontSize: '16px', fontWeight: 700, color: '#2D2A2B', margin: '0 0 4px' }}>
        {group.title}
      </h3>
      {group.description && (
        <p style={{ fontFamily: 'var(--font-family-base)', fontSize: '13px', color: '#625F64', margin: '0 0 16px', lineHeight: 1.6 }}>
          {group.description}
        </p>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {group.swatches.map((swatch) => (
          <SwatchCard key={swatch.token} swatch={swatch} />
        ))}
      </div>
    </section>
  );
}

// ─── Tier Section ─────────────────────────────────────────────────────────────
function TierSection({ tier, label, description, groups }: { tier: number; label: string; description: string; groups: ColorGroup[] }) {
  return (
    <section style={{ marginBottom: 56 }}>
      {/* Tier header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 28, height: 28, borderRadius: '50%',
          background: tier === 1 ? '#B60058' : tier === 2 ? '#F1528B' : '#FFB3BC',
          color: tier === 3 ? '#2D2A2B' : '#fff',
          fontFamily: 'var(--font-family-base)', fontSize: '13px', fontWeight: 800,
        }}>
          {tier}
        </span>
        <h2 style={{ fontFamily: 'var(--font-family-base)', fontSize: '20px', fontWeight: 700, color: '#2D2A2B', margin: 0 }}>
          {label}
        </h2>
      </div>
      <p style={{ fontFamily: 'var(--font-family-base)', fontSize: '14px', color: '#625F64', margin: '0 0 24px', lineHeight: 1.6, paddingLeft: 40 }}>
        {description}
      </p>

      <div style={{ paddingLeft: 40 }}>
        {groups.map((group) => (
          <ColorGroupSection key={group.title} group={group} />
        ))}
      </div>
    </section>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────
function ColorsPage() {
  return (
    <div style={{ padding: '48px 56px', fontFamily: 'var(--font-family-base)', maxWidth: 1200 }}>
      {/* Header */}
      <div style={{ marginBottom: 48, paddingBottom: 32, borderBottom: '2px solid #F4F2F1' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <span style={{ fontSize: 28 }}>🟠</span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#B60058', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Orbit Design System
          </span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-family-base)', fontSize: '36px', fontWeight: 800, color: '#2D2A2B', margin: '0 0 12px', lineHeight: 1.2 }}>
          Colors
        </h1>
        <p style={{ fontSize: '16px', color: '#625F64', margin: 0, maxWidth: 640, lineHeight: 1.7 }}>
          The Orbit colour system uses a <strong style={{ color: '#2D2A2B' }}>three-tier variable architecture</strong> extracted from Figma: <em>Primitives</em> define the raw palette, <em>Alias tokens</em> assign semantic meaning, and <em>Mapped tokens</em> are consumed directly in components.
        </p>
      </div>

      {/* Architecture diagram */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 48, flexWrap: 'wrap' }}>
        {[
          { num: 1, label: 'Primitives', sub: '3.Brand Color/', color: '#B60058' },
          { num: 2, label: 'Alias Tokens', sub: '2.Alias Color//', color: '#F1528B' },
          { num: 3, label: 'Mapped Tokens', sub: '1.Mapped Color///', color: '#FFB3BC' },
        ].map((t) => (
          <div key={t.num} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 24, height: 24, borderRadius: '50%', background: t.color,
              color: t.num === 3 ? '#2D2A2B' : '#fff',
              fontFamily: 'var(--font-family-base)', fontSize: '12px', fontWeight: 800,
            }}>
              {t.num}
            </span>
            <div>
              <span style={{ fontFamily: 'var(--font-family-base)', fontSize: '13px', fontWeight: 700, color: '#2D2A2B' }}>{t.label}</span>
              <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#625F64', marginLeft: 6 }}>{t.sub}</span>
            </div>
            {t.num < 3 && <span style={{ fontSize: '16px', color: '#B60058', margin: '0 4px' }}>→</span>}
          </div>
        ))}
      </div>

      {/* Tiers */}
      <TierSection
        tier={1}
        label="Primitives"
        description="The raw named colours extracted from the Orbit brand — these are the foundation that all other tokens reference."
        groups={primitiveGroups}
      />

      <TierSection
        tier={2}
        label="Alias Tokens"
        description="Semantic references that map primitives to functional roles — primary scale, text, backgrounds, borders, and status."
        groups={aliasGroups}
      />

      <TierSection
        tier={3}
        label="Mapped Tokens"
        description="Component-level tokens consumed directly in UI code — text, page layout, buttons, icons, and input fields."
        groups={mappedGroups}
      />

      {/* Usage note */}
      <section style={{ background: '#FCF3F7', border: '1px solid #FFB3BC', borderRadius: 12, padding: '20px 24px', marginTop: 8 }}>
        <h3 style={{ fontFamily: 'var(--font-family-base)', fontSize: '14px', fontWeight: 700, color: '#B60058', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Usage
        </h3>
        <p style={{ fontFamily: 'monospace', fontSize: '13px', color: '#2D2A2B', margin: 0, lineHeight: 1.8 }}>
          {`/* Primitives */`}<br />
          color: var(--theme-lipstick-berry);&nbsp;&nbsp;{`/* #B60058 */`}<br /><br />
          {`/* Alias tokens */`}<br />
          color: var(--text-primary);&nbsp;&nbsp;{`/* → Midnight Charcoal #2D2A2B */`}<br />
          background: var(--surface-primary);&nbsp;&nbsp;{`/* → Soft Cream #F4F2F1 */`}<br /><br />
          {`/* Mapped tokens (use these in components) */`}<br />
          color: var(--text-headings);&nbsp;&nbsp;{`/* → text-strong → #2D2A2B */`}<br />
          background: var(--page-bg);&nbsp;&nbsp;{`/* → surface-primary → #F4F2F1 */`}<br />
          border-color: var(--border-primary);&nbsp;&nbsp;{`/* → #FFB3BC */`}
        </p>
      </section>
    </div>
  );
}

// ─── Storybook Meta ───────────────────────────────────────────────────────────
const meta: Meta = {
  title: 'Foundation/Colors',
  component: ColorsPage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Orbit HR colour system — three-tier variable architecture with primitives, alias tokens, and mapped component tokens.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {
  name: 'Color Palette',
  render: () => <ColorsPage />,
};
