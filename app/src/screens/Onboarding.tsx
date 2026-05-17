import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../App'
import { Button, Card, Disclaimer, Pill } from '../components/UI'
import { DISCLAIMER } from '../data/content'
import type { Phase } from '../lib/storage'

const AGE = ['<40', '40-44', '45-49', '50-54', '55-59', '60+'] as const
const CYCLE = [
  { id: 'regular', label: 'Regelmäßig' },
  { id: 'irregular', label: 'Unregelmäßig geworden' },
  { id: 'stopped12m', label: 'Seit > 12 Monaten keine Periode' },
  { id: 'none', label: 'Keine Angabe' },
] as const
const FOCUS = ['Schlaf', 'Stimmung', 'Hitzewallungen', 'Energie', 'Gewicht', 'Zyklus', 'Libido', 'Vorbeugen']

function derivePhase(age?: string, cycle?: string): Phase {
  if (cycle === 'stopped12m') return 'post'
  if (cycle === 'irregular' && (age === '45-49' || age === '50-54' || age === '55-59')) return 'peri'
  if (age === '60+') return 'post'
  if (cycle === 'regular' && (age === '<40' || age === '40-44')) return 'pre'
  return 'unknown'
}

const PHASE_LABEL: Record<Phase, string> = {
  unknown: 'noch nicht eindeutig einzuordnen',
  pre: 'eher prämenopausal',
  peri: 'Hinweise auf eine perimenopausale Phase',
  post: 'eher postmenopausal',
}

export default function Onboarding() {
  const { setState } = useStore()
  const nav = useNavigate()
  const [step, setStep] = useState(0)
  const [age, setAge] = useState<string>()
  const [cycle, setCycle] = useState<string>()
  const [focus, setFocus] = useState<string[]>([])

  const phase = derivePhase(age, cycle)

  function finish() {
    setState((s) => ({
      ...s,
      profile: {
        ...s.profile,
        ageBand: age as never,
        cycle: cycle as never,
        focus,
        phase,
        onboarded: true,
      },
    }))
    nav('/today')
  }

  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-serif text-3xl text-ink leading-tight">
          Verstehen, einordnen,
          <br />
          gut begleitet sein.
        </h1>
        <p className="text-muted mt-2 text-sm">
          Femvia ist eine evidenzbasierte Begleitung für deine Gesundheit – ruhig,
          seriös, ohne Bewertung. Alles bleibt lokal auf deinem Gerät.
        </p>
      </div>

      {step === 0 && (
        <Card>
          <p className="font-medium mb-3">In welcher Altersspanne bist du?</p>
          <div className="flex flex-wrap gap-2">
            {AGE.map((a) => (
              <Pill key={a} active={age === a} onClick={() => setAge(a)}>
                {a}
              </Pill>
            ))}
          </div>
          <div className="mt-5">
            <Button onClick={() => setStep(1)} disabled={!age}>
              Weiter
            </Button>
          </div>
        </Card>
      )}

      {step === 1 && (
        <Card>
          <p className="font-medium mb-3">Wie ist dein Zyklus aktuell?</p>
          <div className="flex flex-wrap gap-2">
            {CYCLE.map((c) => (
              <Pill key={c.id} active={cycle === c.id} onClick={() => setCycle(c.id)}>
                {c.label}
              </Pill>
            ))}
          </div>
          <div className="mt-5 flex gap-2">
            <Button variant="ghost" onClick={() => setStep(0)}>
              Zurück
            </Button>
            <Button onClick={() => setStep(2)} disabled={!cycle}>
              Weiter
            </Button>
          </div>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <p className="font-medium mb-3">Was möchtest du im Blick behalten?</p>
          <div className="flex flex-wrap gap-2">
            {FOCUS.map((f) => (
              <Pill
                key={f}
                active={focus.includes(f)}
                onClick={() =>
                  setFocus((p) => (p.includes(f) ? p.filter((x) => x !== f) : [...p, f]))
                }
              >
                {f}
              </Pill>
            ))}
          </div>
          <div className="mt-5 rounded-xl2 bg-sage/10 border border-line p-4 text-sm">
            <span className="text-muted">Erste, edukative Einordnung: </span>
            <span className="text-ink font-medium">{PHASE_LABEL[phase]}</span>
            <span className="text-muted">
              {' '}
              – das ist keine Diagnose, sondern Orientierung.
            </span>
          </div>
          <div className="mt-5 flex gap-2">
            <Button variant="ghost" onClick={() => setStep(1)}>
              Zurück
            </Button>
            <Button onClick={finish}>Los geht’s</Button>
          </div>
        </Card>
      )}

      <Disclaimer text={DISCLAIMER} />
    </div>
  )
}
