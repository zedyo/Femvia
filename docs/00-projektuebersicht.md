# 00 – Projektübersicht (Single Source of Truth)

> Diese Wissensdatenbank ist so geschrieben, dass ein neuer Mitwirkender (oder
> eine KI nach Kontextverlust) das Projekt **vollständig allein aus diesen
> Dokumenten heraus fortführen** kann. Bei jeder relevanten Entscheidung wird
> hier bzw. im passenden Unterdokument ein Eintrag ergänzt.

## Projekt

- **Arbeitsname:** Femvia
- **Was:** Medizinisch evidenzbasierte Gesundheits-App für Frauen, Schwerpunkt
  Perimenopause/Wechseljahre, grundsätzlich für die weibliche Gesundheit über
  den Lebensverlauf.
- **Plattform-Reihenfolge:** Zuerst Web (mobil-optimierte PWA), später
  Portierung auf iOS und Android.
- **Haltung:** Seriös, ruhig, erwachsen. Kein klischeehaftes „Frauen-Pink“.
  Evidenzbasiert, transparent über Quellen, sicher (keine Diagnosestellung).
- **Soll Freude machen:** tägliche Nutzung soll sich leicht, motivierend und
  alltagstauglich anfühlen – nicht wie eine medizinische Akte.

## Kern-Idee in einem Satz

> Frau gibt Beschwerden ein → ein evidenzbasierter Algorithmus erklärt mögliche
> hormonelle/physiologische Zusammenhänge und schlägt **sinnvolle ärztliche
> Abklärung / Laborwerte** vor → nach Eingabe von Werten und Symptomen gibt es
> **edukative, evidenzbasierte** Empfehlungen zu Ernährung, Bewegung,
> Stressregulation und Arztbesuchen, plus laufendes Tracking & Verlauf.

## Dokument-Index

| Datei | Inhalt |
|-------|--------|
| `00-projektuebersicht.md` | Dieses Dokument – Einstieg & Statusüberblick |
| `01-vision-zielgruppe.md` | Vision, Zielgruppe, Personas, Prinzipien, Ethik |
| `02-medizinische-grundlagen.md` | Medizinisches Fundament (laienverständlich + Fachebene) |
| `03-quellen-evidenz.md` | Vollständige Quellenliste (aus beigelegtem PDF) + Evidenz-Policy |
| `04-feature-spezifikation.md` | Feature-Liste, MVP-Scope, Erweiterungsideen |
| `05-symptom-algorithmus.md` | Logik des Symptom→Abklärungs-Algorithmus (regelbasiert) |
| `06-design-system.md` | Design-Sprache, Farben, Typografie, Komponenten |
| `07-technische-architektur.md` | Tech-Stack, Architektur, Web→Mobile-Strategie |
| `08-roadmap.md` | Phasenplan & offene Entscheidungen |
| `09-konzept-langfassung.md` | Fließtext-Konzept – Quelle für das Konzept-PDF |

## Aktueller Stand (Changelog)

- **2026-05-17** – Projekt initialisiert. Wissensdatenbank angelegt,
  Quellen-PDF ausgewertet, erste deployfähige Web-Version (Konzept-Demo)
  gebaut, Konzept-PDF generiert, GitHub-Pages-Deployment via Actions
  eingerichtet. Branch: `claude/setup-webapp-project-GRQJQ`.

- **2026-05-17** – Branch zu `main` umbenannt; Git-Workflow auf Feature-Branch
  + Pull-Request umgestellt. Production-Deploy (GitHub Pages) läuft nur noch
  bei Push auf `main`; separate `ci.yml` prüft Build auf Pull Requests.

## Nicht verhandelbare Leitplanken

1. **Keine Diagnose, keine Therapieanweisung.** Die App informiert, ordnet ein
   und ermutigt zur ärztlichen Abklärung. Überall klare Disclaimer.
2. **Jede medizinische Aussage ist quellenbelegt** (siehe `03-quellen-evidenz.md`).
   Keine unbelegten Versprechen, keine Heilsversprechen.
3. **Datensparsamkeit & Privatsphäre.** Gesundheitsdaten sind hochsensibel.
   Erste Version: alles nur lokal im Browser (localStorage), keine Übertragung.
4. **Kein Klischee-Design.** Kein Pink als Leitfarbe, keine infantilisierende
   Sprache. Erwachsen, klar, respektvoll.
5. **Barrierefreiheit** (Kontrast, Schriftgröße, Tastaturbedienung) von Anfang an.
