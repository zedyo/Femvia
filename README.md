# Femvia

**Arbeitsname / Working title.** Eine medizinisch evidenzbasierte App für Frauen –
mit Fokus auf Perimenopause & Wechseljahre, aber grundsätzlich für die
weibliche Gesundheit über den gesamten Lebensverlauf.

> ⚕️ **Hinweis:** Femvia ist ein Informations- und Selbstmanagement-Werkzeug.
> Es ersetzt keine ärztliche Diagnose oder Behandlung. Alle Empfehlungen sind
> edukativ und evidenzbasiert formuliert.

## Was ist in diesem Repository?

| Ordner | Inhalt |
|--------|--------|
| [`docs/`](./docs) | **Wissensdatenbank** – das gesamte Projektwissen, damit bei Kontextverlust nichts verloren geht. Start: [`docs/00-projektuebersicht.md`](./docs/00-projektuebersicht.md) |
| [`app/`](./app) | Die Web-App (Vite + React + TypeScript + Tailwind), mobil-optimiert |
| [`scripts/`](./scripts) | Generator für das Konzept-PDF |
| [`konzept/`](./konzept) | Das generierte ausführliche Konzept als PDF |
| `.github/workflows/` | CI/CD: automatisches Deployment auf GitHub Pages |

## Schnellstart

```bash
cd app
npm install
npm run dev      # lokaler Entwicklungsserver
npm run build    # Produktions-Build
```

Konzept-PDF neu erzeugen:

```bash
cd scripts
npm install
npm run pdf      # erzeugt ../konzept/Femvia-Konzept.pdf
```

## Live-Demo

Nach dem ersten Push baut GitHub Actions die App und veröffentlicht sie auf
**GitHub Pages**: `https://zedyo.github.io/Femvia/`

(Einmalig in den Repo-Settings unter *Pages → Build and deployment → Source*
auf **GitHub Actions** stellen.)

## Status

Frühe Konzeptphase. Die erste Web-Version demonstriert die Kern-User-Journey
mit lokal gespeicherten Daten (kein Backend, keine Datenübertragung).
Architektur ist auf eine spätere Portierung nach iOS/Android ausgelegt.
