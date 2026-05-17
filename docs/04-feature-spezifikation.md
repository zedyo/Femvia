# 04 – Feature-Spezifikation

## MVP (erste Web-Version – in diesem Repo umgesetzt)

Demo mit lokaler Speicherung (localStorage), kein Backend, keine Datenübertragung.

1. **Onboarding & Lebensphase-Einordnung**
   - Kurze Fragen (Alter, Zyklusstatus, Hauptanliegen).
   - Ergebnis: grobe Phasen-Einordnung (prämenopausal / Perimenopause /
     Postmenopause – *edukativ, keine Diagnose*).
2. **Heute-Dashboard**
   - Phasen-Kontext, Tagesfokus, Quick-Log (≤ 60 Sek.), Tagesempfehlung mit
     „Warum + Quelle“.
3. **Symptom-Check & Abklärungs-Algorithmus**
   - Strukturierte Symptomauswahl → regelbasierte Einordnung →
     **Vorschläge für ärztliche Abklärung / Laborwerte** (z. B. FSH, Estradiol,
     TSH, Ferritin) mit Begründung & Quelle. Red-Flag-Erkennung.
4. **Laborwerte erfassen & einordnen**
   - Eingabe von Werten (FSH, Estradiol, TSH, Ferritin, Vitamin D, HbA1c …),
     edukative Einordnung in Orientierungsbereiche + klarer Disclaimer
     („laborabhängig, ärztlich interpretieren lassen“).
5. **Ernährung & Bewegung (evidenzbasiert)**
   - Prinzipien statt starrer Pläne: mediterranes Muster, Protein/Ballaststoffe,
     Kraft + Ausdauer, Beispiel-Tagesgerüst. Jede Empfehlung mit Quelle.
6. **Symptom-Tracking & Verlauf**
   - Tägliches Logging (Symptome, Schlaf, Stimmung, Energie, Zyklus, Bewegung,
     Ernährung). Verlaufs-Charts, einfache Mustererkennung.
7. **Wissensbibliothek**
   - Kurze, quellenbelegte Erklär-Karten zu Kernthemen.
8. **Sicherheit & Recht**
   - Durchgängige Disclaimer, Red-Flag-Hinweise, Datenschutz-Erklärung.

## Post-MVP (geplant)

- Account & verschlüsselte Cloud-Sync (optional, opt-in), Multi-Device.
- Zyklus-/Symptom-Vorhersage, personalisierte Trendanalysen.
- Arzt-Report-Export (PDF) für das Sprechstundengespräch.
- Erinnerungen/Reminders, Habit-Streaks (dezent, nicht laut).
- Mehrsprachigkeit (DE/EN zuerst).
- Native Apps (iOS/Android) – siehe `07-technische-architektur.md`.

## Zusätzliche Ideen (über die ursprüngliche Beschreibung hinaus)

> Auf Wunsch des Auftraggebers: Vorschläge, was die App zusätzlich enthalten
> könnte. Priorisierung offen – siehe `08-roadmap.md`.

- **Arztgespräch-Vorbereiter:** generiert aus Verlauf eine strukturierte
  1-Seiten-Zusammenfassung + Fragenliste für die Sprechstunde
  (stärkt informierte Entscheidung, Bezug NAMS/RCOG-Dokumentationslogik).
- **Zyklus-/Symptomtagebuch nach Leitlinienstandard:** prospektives Tagebuch
  über ≥ 2 Zyklen (PMS/PMDS-konform, RCOG/ISPMD) – direkter klinischer Nutzen.
- **Differenzialdiagnose-Lotse:** weist aktiv auf nicht-hormonelle Ursachen hin
  (Schilddrüse, Ferritin/Anämie, PCOS, Depression) statt alles „Wechseljahre“
  zuzuschreiben.
- **HRT-Entscheidungshilfe (neutral):** strukturierte, nicht wertende
  Nutzen-Risiko-Aufklärung als Gesprächsvorbereitung (nie Empfehlung).
- **Schlaf- & Hitzewallungs-Modul:** gezieltes Tracking + evidenzbasierte
  nicht-medikamentöse Strategien.
- **Knochen- & Herz-Gesundheits-Check:** Langzeitfokus postmenopausal
  (Bewegung/Ernährung/Risikofaktoren, Verweis auf Vorsorge).
- **Krafttraining-Coach für Frauen 40+:** progressiver, sicherer
  Einstieg (Evidenz: Insulinsensitivität/Körperkomposition).
- **Wissens-Mikrolernen:** 2-Minuten-Karten, optional, mit Quellen –
  „verstehen statt nur tracken“.
- **Wertebasierte Ziele statt Gamification-Lärm:** ruhige Fortschrittsanzeige,
  Selbstwirksamkeit statt Punktejagd.
- **Datenexport & Datenhoheit:** vollständiger Export/Löschung jederzeit
  (Vertrauensbildung, DSGVO-Stärke).
- **Begleitpersonen-/Partnermodus (später):** Aufklärung für das Umfeld.
- **Fachpersonal-Modus (später):** anonymisierte Verlaufsansicht für die Praxis.
- **Barrierefreiheit & Perimenopause-Brain-Fog-freundliches UX:** große
  Tap-Ziele, reduzierte kognitive Last, „heute nur 1 Sache“-Modus.
- **Mehrsprachige, kultursensible Inhalte** (späterer Ausbau).
