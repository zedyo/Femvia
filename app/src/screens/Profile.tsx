import { useStore } from '../App'
import { Button, Card, Disclaimer, SectionTitle } from '../components/UI'
import { DISCLAIMER } from '../data/content'
import { clearAll } from '../lib/storage'

const PHASE: Record<string, string> = {
  unknown: 'Noch nicht eindeutig',
  pre: 'Prämenopausal (Orientierung)',
  peri: 'Perimenopausal (Orientierung)',
  post: 'Postmenopausal (Orientierung)',
}

export default function Profile() {
  const { state } = useStore()

  function exportData() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'femvia-daten.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  function reset() {
    if (confirm('Wirklich alle lokal gespeicherten Daten löschen?')) {
      clearAll()
      location.reload()
    }
  }

  return (
    <div className="space-y-5">
      <SectionTitle sub="Deine Daten gehören dir.">Profil</SectionTitle>

      <Card>
        <p className="text-sm text-muted">Aktuelle Orientierung</p>
        <p className="text-ink font-medium mt-1">{PHASE[state.profile.phase]}</p>
        <p className="text-sm text-muted mt-3">
          Alter: {state.profile.ageBand ?? '–'} · Einträge: {state.logs.length}
        </p>
        {state.profile.focus && state.profile.focus.length > 0 && (
          <p className="text-sm text-muted mt-1">Fokus: {state.profile.focus.join(', ')}</p>
        )}
      </Card>

      <Card>
        <p className="font-medium text-ink">Datenhoheit</p>
        <p className="text-sm text-muted mt-1">
          Alle Daten liegen ausschließlich lokal in diesem Browser. Es findet keine
          Übertragung statt.
        </p>
        <div className="mt-4 flex gap-2 flex-wrap">
          <Button variant="ghost" onClick={exportData}>
            Daten exportieren
          </Button>
          <Button variant="ghost" onClick={reset}>
            Alles löschen
          </Button>
        </div>
      </Card>

      <Card>
        <p className="font-medium text-ink">Über Femvia</p>
        <p className="text-sm text-muted mt-1">
          Femvia (Arbeitsname) ist ein medizinisch evidenzbasiertes Informations- und
          Selbstmanagement-Werkzeug für Frauen – Schwerpunkt Perimenopause und
          Wechseljahre. Frühe Konzeptversion.
        </p>
      </Card>

      <Disclaimer text={DISCLAIMER} />
    </div>
  )
}
