# 07 – Technische Architektur

## Tech-Stack (erste Web-Version)

- **Build:** Vite
- **UI:** React 18 + TypeScript
- **Styling:** Tailwind CSS (Design-Tokens aus `06-design-system.md`)
- **Routing:** react-router-dom (HashRouter – GitHub-Pages-kompatibel)
- **Charts:** Recharts (Verlauf)
- **Fonts:** @fontsource (Fraunces, Inter) – lokal gebündelt
- **State/Storage:** React State + `localStorage` (Modul `src/lib/storage.ts`).
  Keine Datenübertragung, kein Backend in der ersten Version.

## Warum dieser Stack

- Statisch hostbar → ideal für GitHub Pages, kein Server nötig.
- React/TS-Komponenten sind die beste Basis für spätere Wiederverwendung in
  React Native (Logik) bzw. Capacitor (gleiche Web-Codebasis nativ verpackt).
- Datenschutz by default: lokal, offline-fähig (PWA-Ausbau möglich).

## Projektstruktur (`app/`)

```
app/
  index.html
  vite.config.ts          # base: '/Femvia/' für Project-Pages
  tailwind.config.js
  postcss.config.js
  tsconfig.json
  src/
    main.tsx
    App.tsx               # Router + Tab-Layout
    index.css             # Tailwind + Tokens + Fonts
    lib/storage.ts        # localStorage-Helper, typsicher
    data/content.ts       # Wissensinhalte + Quellen (zentral)
    logic/algorithm.ts    # Symptom→Abklärungs-Algorithmus (docs/05)
    components/            # UI-Bausteine (Card, Button, ...)
    screens/               # Onboarding, Today, Check, Labs, Plans,
                           # Track, Library, Profile
```

## Web → Mobile-Strategie (später)

1. **Phase Web:** PWA-Ausbau (installierbar, offline). Geringster Aufwand,
   sofort „mobil“.
2. **Phase Hybrid:** Capacitor um die bestehende Web-App → echte iOS/Android-
   Builds mit nativen APIs (Notifications, Health-Kit/Connect optional).
3. **Phase Native (optional):** React-Native-Client, der die geteilte
   Domänen-/Algorithmus-Logik (TypeScript) wiederverwendet.

Konsequenz für jetzt: **Logik von UI trennen** (`logic/`, `data/`,
`lib/` framework-arm halten), damit sie portierbar bleibt.

## Deployment

- GitHub Actions Workflow `.github/workflows/deploy.yml`:
  Build von `app/` → Upload als Pages-Artefakt → Deploy auf GitHub Pages.
- `vite.config.ts` `base: '/Femvia/'` (Project Pages unter
  `https://zedyo.github.io/Femvia/`).
- HashRouter, damit Deep-Links ohne Server-Rewrites funktionieren.
- Einmalig: Repo-Settings → Pages → Source = „GitHub Actions“.

## Sicherheit/Datenschutz technisch

- Keine externen Tracking-Skripte, keine Fonts-CDN-Requests.
- Daten ausschließlich lokal; Export/Löschen-Funktion vorgesehen (Post-MVP).
