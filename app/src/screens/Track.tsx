import { useState } from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useStore } from '../App'
import { Button, Card, Disclaimer, SectionTitle } from '../components/UI'
import { DISCLAIMER } from '../data/content'
import { todayISO, type LogEntry } from '../lib/storage'

const SCALE = [1, 2, 3, 4, 5]
const SX = ['Hitzewallungen', 'Schlafstörung', 'Reizbarkeit', 'Erschöpfung', 'Kopfschmerz', 'Gelenkschmerz']

function Scale({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex gap-2">
      {SCALE.map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          className={`w-10 h-10 rounded-full border text-sm ${
            value === n ? 'bg-primary text-white border-primary' : 'border-line text-muted'
          }`}
        >
          {n}
        </button>
      ))}
    </div>
  )
}

export default function Track() {
  const { state, setState } = useStore()
  const existing = state.logs.find((l) => l.date === todayISO())
  const [mood, setMood] = useState(existing?.mood ?? 3)
  const [sleep, setSleep] = useState(existing?.sleep ?? 3)
  const [energy, setEnergy] = useState(existing?.energy ?? 3)
  const [symptoms, setSymptoms] = useState<string[]>(existing?.symptoms ?? [])
  const [movedMin, setMovedMin] = useState(existing?.movedMin ?? 0)
  const [saved, setSaved] = useState(false)

  function persist() {
    const entry: LogEntry = { date: todayISO(), mood, sleep, energy, symptoms, movedMin }
    setState((s) => ({
      ...s,
      logs: [...s.logs.filter((l) => l.date !== entry.date), entry].sort((a, b) =>
        a.date.localeCompare(b.date),
      ),
    }))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const chartData = state.logs.slice(-14).map((l) => ({
    date: l.date.slice(5),
    Stimmung: l.mood,
    Schlaf: l.sleep,
    Energie: l.energy,
  }))

  return (
    <div className="space-y-5">
      <SectionTitle sub="Tägliches Logging in unter einer Minute.">Verlauf</SectionTitle>

      <Card>
        <p className="font-medium text-ink mb-2">Stimmung</p>
        <Scale value={mood} onChange={setMood} />
        <p className="font-medium text-ink mt-4 mb-2">Schlafqualität</p>
        <Scale value={sleep} onChange={setSleep} />
        <p className="font-medium text-ink mt-4 mb-2">Energie</p>
        <Scale value={energy} onChange={setEnergy} />

        <p className="font-medium text-ink mt-4 mb-2">Symptome heute</p>
        <div className="flex flex-wrap gap-2">
          {SX.map((s) => (
            <button
              key={s}
              onClick={() =>
                setSymptoms((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]))
              }
              className={`rounded-full px-3 py-1.5 text-sm border ${
                symptoms.includes(s)
                  ? 'bg-primary text-white border-primary'
                  : 'border-line text-muted'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <p className="font-medium text-ink mt-4 mb-2">Bewegung: {movedMin} Min.</p>
        <input
          type="range"
          min={0}
          max={120}
          step={5}
          value={movedMin}
          onChange={(e) => setMovedMin(Number(e.target.value))}
          className="w-full accent-primary"
        />

        <div className="mt-5 flex items-center gap-3">
          <Button onClick={persist}>Speichern</Button>
          {saved && <span className="text-sm text-primary">Gespeichert ✓</span>}
        </div>
      </Card>

      <Card>
        <p className="font-medium text-ink mb-3">Letzte 14 Tage</p>
        {chartData.length < 2 ? (
          <p className="text-sm text-muted">
            Noch zu wenig Daten. Ab zwei Einträgen erscheint hier dein Verlauf.
          </p>
        ) : (
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ left: -20, right: 8, top: 8 }}>
                <CartesianGrid stroke="#E4E0D8" strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#5C6B66' }} />
                <YAxis domain={[1, 5]} tick={{ fontSize: 11, fill: '#5C6B66' }} />
                <Tooltip />
                <Line type="monotone" dataKey="Stimmung" stroke="#1F5C57" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Schlaf" stroke="#5A4A63" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Energie" stroke="#C0714E" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </Card>

      <Disclaimer text={DISCLAIMER} />
    </div>
  )
}
