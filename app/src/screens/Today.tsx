import { useNavigate } from 'react-router-dom'
import { useStore } from '../App'
import { Button, Card, Disclaimer, SectionTitle, SourceChips } from '../components/UI'
import { DISCLAIMER } from '../data/content'
import { todayISO } from '../lib/storage'

const PHASE_TEXT: Record<string, string> = {
  unknown: 'Deine Phase ist noch nicht eindeutig – Verlauf hilft, Muster zu erkennen.',
  pre: 'Prämenopausale Orientierung – ein guter Zeitpunkt, Routinen aufzubauen.',
  peri: 'Perimenopausale Hinweise – Schwankungen sind in dieser Phase typisch.',
  post: 'Postmenopausale Orientierung – Fokus auf Knochen, Herz & Stoffwechsel lohnt sich.',
}

const TIPS = [
  {
    t: 'Heute 20 Minuten Bewegung',
    d: 'Schon moderates, regelmäßiges Training verbessert über Wochen die Insulinsensitivität.',
    s: ['Q-BUENO-2017'],
  },
  {
    t: 'Eine ballaststoffreiche Mahlzeit',
    d: 'Ein mediterran geprägtes Muster wirkt günstig auf den Hormonhaushalt.',
    s: ['Q-MAZZA-2024'],
  },
  {
    t: '5 Minuten Atem-/Achtsamkeitspause',
    d: 'Achtsamkeit wirkt günstig auf Stressreaktion und Cortisol.',
    s: ['Q-PASCOE-2017'],
  },
]

export default function Today() {
  const { state } = useStore()
  const nav = useNavigate()
  const tip = TIPS[new Date().getDate() % TIPS.length]
  const loggedToday = state.logs.some((l) => l.date === todayISO())

  return (
    <div className="space-y-5">
      <SectionTitle sub={new Date().toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })}>
        Heute
      </SectionTitle>

      <Card>
        <p className="text-sm text-muted">Deine Orientierung</p>
        <p className="mt-1 text-ink">{PHASE_TEXT[state.profile.phase]}</p>
      </Card>

      <Card className="bg-primary text-white border-primary">
        <p className="text-sm/relaxed opacity-90">Tagesfokus</p>
        <p className="font-serif text-2xl mt-1">{tip.t}</p>
        <p className="text-sm opacity-90 mt-2">{tip.d}</p>
        <div className="mt-3 [&_button]:!text-white/90 [&_a]:!text-white">
          <SourceChips ids={tip.s} />
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-ink">Schnell-Eintrag</p>
            <p className="text-sm text-muted">
              {loggedToday ? 'Für heute bereits erfasst – danke.' : 'In unter einer Minute erledigt.'}
            </p>
          </div>
          <Button onClick={() => nav('/track')}>{loggedToday ? 'Ansehen' : 'Eintragen'}</Button>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-ink">Beschwerden einordnen</p>
            <p className="text-sm text-muted">Symptom-Check mit Abklärungs-Vorschlägen.</p>
          </div>
          <Button variant="ghost" onClick={() => nav('/check')}>
            Starten
          </Button>
        </div>
      </Card>

      <Disclaimer text={DISCLAIMER} />
    </div>
  )
}
