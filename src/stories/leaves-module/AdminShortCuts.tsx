import ledMenu from '../../assets/figma/led-menu.svg';
import ledArrow from '../../assets/figma/led-arrow.svg';
import ledClock from '../../assets/figma/led-clock.svg';

export interface AdminShortCut {
  title: string;
  icon: 'menu' | 'arrow' | 'clock';
  onClick?: () => void;
}

export interface AdminShortCutsProps {
  shortcuts?: AdminShortCut[];
}

const ICONS = { menu: ledMenu, arrow: ledArrow, clock: ledClock } as const;

const DEFAULT_SHORTCUTS: AdminShortCut[] = [
  { title: 'Admin Task Queue', icon: 'menu' },
  { title: 'My Leave History', icon: 'arrow' },
  { title: 'Global Admin Log', icon: 'clock' },
];

/** Dashboard card of quick links for Leave admins. */
export function AdminShortCuts({ shortcuts = DEFAULT_SHORTCUTS }: AdminShortCutsProps) {
  return (
    <div
      style={{
        fontFamily: 'Hanken Grotesk, sans-serif',
        width: 417, minHeight: 457, boxSizing: 'border-box', padding: 24, borderRadius: 8, background: '#f8f8f8',
        display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center',
        boxShadow: 'inset 0px 1px 0px rgba(255,255,255,0.08)',
      }}
    >
      {shortcuts.map(shortcut => (
        <button
          key={shortcut.title}
          type="button"
          onClick={shortcut.onClick}
          style={{
            position: 'relative', width: '100%', height: 100, borderRadius: 8, overflow: 'hidden', cursor: 'pointer',
            background: '#efebe7', border: '1px solid rgba(255,255,255,0.24)', textAlign: 'left', padding: '0 23px',
            boxShadow: 'inset 0px 1px 0px rgba(255,255,255,0.95)',
            fontFamily: 'inherit', fontSize: 18, fontWeight: 500, lineHeight: '27px', color: '#2d2a2b',
            display: 'flex', alignItems: 'center',
          }}
        >
          <span style={{ width: 193 }}>{shortcut.title}</span>
          <img
            src={ICONS[shortcut.icon]}
            alt=""
            width={35}
            height={35}
            style={{ position: 'absolute', right: 28, top: '50%', transform: 'translateY(-50%)' }}
          />
        </button>
      ))}
    </div>
  );
}
