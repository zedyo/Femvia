import { useState, type ReactNode } from 'react'
import { SOURCES } from '../data/content'

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-surface rounded-xl2 shadow-soft border border-line p-5 ${className}`}>
      {children}
    </div>
  )
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled,
}: {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  type?: 'button' | 'submit'
  disabled?: boolean
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition disabled:opacity-50'
  const styles =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-primary-700'
      : 'bg-transparent text-primary border border-primary/30 hover:bg-primary/5'
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${styles}`}>
      {children}
    </button>
  )
}

export function Pill({
  children,
  active,
  onClick,
}: {
  children: ReactNode
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm border transition ${
        active
          ? 'bg-primary text-white border-primary'
          : 'bg-surface text-ink border-line hover:border-primary/40'
      }`}
    >
      {children}
    </button>
  )
}

export function SourceChips({ ids }: { ids: string[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mt-3">
      <button
        onClick={() => setOpen((o) => !o)}
        className="text-xs text-primary underline underline-offset-2"
      >
        {open ? 'Quellen ausblenden' : `Quelle${ids.length > 1 ? 'n' : ''} anzeigen`}
      </button>
      {open && (
        <ul className="mt-2 space-y-1">
          {ids.map((id) => (
            <li key={id} className="text-xs text-muted leading-snug">
              • {SOURCES[id]?.short ?? id}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Disclaimer({ text }: { text: string }) {
  return (
    <div className="rounded-xl2 border border-line bg-sage/10 px-4 py-3 text-xs text-muted leading-relaxed">
      <span className="font-medium text-ink">Hinweis: </span>
      {text}
    </div>
  )
}

export function SectionTitle({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <div className="mb-4">
      <h2 className="font-serif text-2xl text-ink">{children}</h2>
      {sub && <p className="text-sm text-muted mt-1">{sub}</p>}
    </div>
  )
}
