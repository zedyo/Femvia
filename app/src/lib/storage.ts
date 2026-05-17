// Lokale, datensparsame Speicherung. Keine Übertragung, kein Backend.
const KEY = 'femvia.v1'

export type Phase = 'unknown' | 'pre' | 'peri' | 'post'

export interface Profile {
  ageBand?: '<40' | '40-44' | '45-49' | '50-54' | '55-59' | '60+'
  cycle?: 'regular' | 'irregular' | 'stopped12m' | 'none'
  focus?: string[]
  phase: Phase
  onboarded: boolean
}

export interface LogEntry {
  date: string // YYYY-MM-DD
  mood: number // 1-5
  sleep: number // 1-5
  energy: number // 1-5
  symptoms: string[]
  movedMin: number
  note?: string
}

export interface Labs { [k: string]: number }

export interface AppState {
  profile: Profile
  logs: LogEntry[]
  labs: Labs
}

const initial: AppState = {
  profile: { phase: 'unknown', onboarded: false },
  logs: [],
  labs: {},
}

export function load(): AppState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return structuredClone(initial)
    return { ...structuredClone(initial), ...JSON.parse(raw) }
  } catch {
    return structuredClone(initial)
  }
}

export function save(state: AppState) {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export function clearAll() {
  localStorage.removeItem(KEY)
}

export function todayISO(): string {
  return new Date().toISOString().slice(0, 10)
}
