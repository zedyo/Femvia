import { useMemo, useState } from 'react'
import { Button, Card, Disclaimer, SectionTitle, SourceChips } from '../components/UI'
import { DISCLAIMER } from '../data/content'
import { SYMPTOMS, evaluate } from '../logic/algorithm'

export default function Check() {
  const [sel, setSel] = useState<string[]>([])
  const [done, setDone] = useState(false)
  const result = useMemo(() => evaluate(sel), [sel])

  const groups = useMemo(() => {
    const g: Record<string, typeof SYMPTOMS> = {}
    for (const s of SYMPTOMS) (g[s.group] ||= []).push(s)
    return g
  }, [])

  const toggle = (id: string) =>
    setSel((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))

  if (done) {
    return (
      <div className="space-y-5">
        <SectionTitle sub="Edukative Einordnung – keine Diagnose">Deine Einordnung</SectionTitle>

        {result.redFlags.map((r, i) => (
          <Card key={i} className="border-warn/40 bg-warn/5">
            <p className="text-sm font-medium text-warn">
              {r.urgent ? 'Bitte zeitnah / dringend abklären' : 'Bitte ärztlich abklären'}
            </p>
            <p className="text-sm text-ink mt-1">{r.message}</p>
          </Card>
        ))}

        {result.suggestions.map((s, i) => (
          <Card key={i}>
            <p className="text-ink">{s.insight}</p>
            <p className="text-sm text-muted mt-2">
              <span className="font-medium text-ink">Mögliche Abklärung: </span>
              {s.action}
            </p>
            <SourceChips ids={s.sources} />
          </Card>
        ))}

        {result.suggestions.length === 0 && result.redFlags.length === 0 && (
          <Card>
            <p className="text-ink">
              Aus den gewählten Angaben ergibt sich kein spezifischer Abklärungs-Hinweis.
              Der Verlauf hilft, Muster über die Zeit zu erkennen.
            </p>
          </Card>
        )}

        {result.lifestyle.length > 0 && (
          <Card>
            <p className="font-medium text-ink mb-2">Sichere Hebel im Alltag</p>
            <div className="space-y-3">
              {result.lifestyle.map((l) => (
                <div key={l.title}>
                  <p className="text-sm font-medium text-primary">{l.title}</p>
                  <p className="text-sm text-muted">{l.text}</p>
                  <SourceChips ids={l.sources} />
                </div>
              ))}
            </div>
          </Card>
        )}

        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => setDone(false)}>
            Auswahl anpassen
          </Button>
        </div>
        <Disclaimer text={DISCLAIMER} />
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <SectionTitle sub="Wähle, was auf dich zutrifft. Du kannst mehrere auswählen.">
        Symptom-Check
      </SectionTitle>

      {Object.entries(groups).map(([group, items]) => (
        <Card key={group}>
          <p className="text-xs uppercase tracking-wide text-muted mb-2">{group}</p>
          <div className="space-y-2">
            {items.map((s) => (
              <label
                key={s.id}
                className="flex items-center gap-3 py-1.5 cursor-pointer text-sm text-ink"
              >
                <input
                  type="checkbox"
                  checked={sel.includes(s.id)}
                  onChange={() => toggle(s.id)}
                  className="accent-primary w-4 h-4"
                />
                {s.label}
              </label>
            ))}
          </div>
        </Card>
      ))}

      <Button onClick={() => setDone(true)} disabled={sel.length === 0}>
        Einordnung anzeigen
      </Button>
      <Disclaimer text={DISCLAIMER} />
    </div>
  )
}
