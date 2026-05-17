import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { load, save, type AppState } from './lib/storage'
import Onboarding from './screens/Onboarding'
import Today from './screens/Today'
import Check from './screens/Check'
import Track from './screens/Track'
import Library from './screens/Library'
import Profile from './screens/Profile'

interface Ctx {
  state: AppState
  setState: (updater: (s: AppState) => AppState) => void
}
const StoreCtx = createContext<Ctx | null>(null)
export const useStore = () => useContext(StoreCtx)!

function Store({ children }: { children: ReactNode }) {
  const [state, setRaw] = useState<AppState>(() => load())
  const setState = (updater: (s: AppState) => AppState) =>
    setRaw((prev) => {
      const next = updater(prev)
      save(next)
      return next
    })
  const value = useMemo(() => ({ state, setState }), [state])
  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>
}

const TABS = [
  { to: '/today', label: 'Heute', icon: '◑' },
  { to: '/check', label: 'Check', icon: '◇' },
  { to: '/track', label: 'Verlauf', icon: '∿' },
  { to: '/library', label: 'Wissen', icon: '✦' },
  { to: '/profile', label: 'Profil', icon: '◍' },
]

function TabBar() {
  return (
    <nav className="sticky bottom-0 bg-surface/95 backdrop-blur border-t border-line">
      <div className="mx-auto max-w-[560px] grid grid-cols-5">
        {TABS.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 py-2.5 text-[11px] ${
                isActive ? 'text-primary' : 'text-muted'
              }`
            }
          >
            <span className="text-lg leading-none">{t.icon}</span>
            {t.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

function Shell() {
  const { state } = useStore()
  const loc = useLocation()
  if (!state.profile.onboarded && loc.pathname !== '/onboarding')
    return <Navigate to="/onboarding" replace />

  const showTabs = loc.pathname !== '/onboarding'
  return (
    <div className="min-h-full flex flex-col mx-auto max-w-[560px] bg-bg">
      <header className="px-5 pt-6 pb-3">
        <div className="font-serif text-xl tracking-tight text-primary">Femvia</div>
      </header>
      <main className="flex-1 px-5 pb-8 space-y-5">
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/today" element={<Today />} />
          <Route path="/check" element={<Check />} />
          <Route path="/track" element={<Track />} />
          <Route path="/library" element={<Library />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/today" replace />} />
        </Routes>
      </main>
      {showTabs && <TabBar />}
    </div>
  )
}

export default function App() {
  useEffect(() => {
    document.title = 'Femvia'
  }, [])
  return (
    <Store>
      <Shell />
    </Store>
  )
}
