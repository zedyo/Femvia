# 09 – Konzept (Langfassung, Quelle für das Konzept-PDF)

> Dieses Dokument ist die redaktionelle Quelle für `konzept/Femvia-Konzept.pdf`
> (Generator: `scripts/generate-concept-pdf.mjs`). Änderungen hier → PDF neu
> erzeugen.

## 1. Zusammenfassung

Femvia ist eine medizinisch evidenzbasierte App für Frauen mit Schwerpunkt
Perimenopause und Wechseljahre. Sie übersetzt aktuelle Evidenz in
verständliche, alltagstaugliche Schritte: Beschwerden eingeben → mögliche
Zusammenhänge verstehen → sinnvolle ärztliche Abklärung/Laborwerte vorgeschlagen
bekommen → evidenzbasierte Empfehlungen zu Ernährung, Bewegung,
Stressregulation und Arztbesuchen → Symptome im Verlauf dokumentieren. Femvia
diagnostiziert nicht, sondern befähigt und begleitet – seriös, ruhig, ohne
Klischees.

## 2. Problem

Frauen in der Lebensmitte erleben vielfältige hormonell bedingte Veränderungen,
finden online aber überwiegend widersprüchliche, kommerziell gefärbte oder
verharmlosende Information. Symptome werden entweder pathologisiert oder
abgetan. Es fehlt ein ruhiger, vertrauenswürdiger Begleiter, der Evidenz
einordnet und das Arztgespräch stärkt.

## 3. Lösung & Kern-Journey

1. Onboarding: grobe Lebensphasen-Einordnung (edukativ).
2. Symptom-Check: regelbasierte, possibilistische Einordnung + konkrete
   Vorschläge zur ärztlichen Abklärung/Laborwerten (mit Begründung & Quelle).
3. Laborwerte erfassen: edukative Orientierung, klarer Disclaimer.
4. Empfehlungen: Ernährung, Bewegung, Stress – evidenzbasiert, mit „Warum“.
5. Tracking & Verlauf: Muster sichtbar machen, Arztgespräch vorbereiten.

## 4. Medizinisches Fundament

Vollständig in `docs/02-medizinische-grundlagen.md` mit Quellenbelegen
(`docs/03-quellen-evidenz.md`, basierend auf dem beigelegten Quellen-PDF):
HPO-Achse & Regelkreise, Sexualhormone, Menopause-Endokrinologie
(klinische Diagnose, FSH als Kontext), PMS/PMDS, Differenzialdiagnosen
(Schilddrüse, PCOS, Eisenmangel, Stress) und der evidenzbasierte
Lebensstil-Hebel (Bewegung & Ernährung mit messbaren metabolischen/hormonellen
Effekten).

## 5. Vergleich zu ähnlichen Apps

> Nur im Konzept zur strategischen Einordnung. Keine Wertung der Anbieter;
> Stand: allgemein bekannte Marktpositionierung, kein Funktionsaudit.

- **Balance (Newson Health) / „Menopause“-Apps:** stark auf Wechseljahre und
  Symptom-Tracking fokussiert, teils mit Arzt-Report. Stärke: Fokus.
  Lücke: variiert in Quellentransparenz und reicht selten konsequent in
  Differenzialdiagnostik/Labor-Einordnung hinein.
- **Clue / Flo (Zyklus-Tracker):** sehr starke Tracking-UX, große
  Reichweite. Fokus liegt auf Zyklus/Fruchtbarkeit; Perimenopause/Menopause
  und evidenzbasierte ärztliche Abklärung sind nicht der Kern; Flo wurde
  zudem öffentlich für Datenschutzthemen kritisiert.
- **Allgemeine Symptom-Checker (z. B. Ada):** breite Differenzialdiagnostik,
  aber nicht frauen-/menopause-spezifisch und nicht auf kontinuierliche
  Lebensstil-Begleitung ausgelegt.
- **Ernährungs-/Fitness-Apps (z. B. Noom/Yazio/Oviva-artig):** gutes
  Verhaltens-Coaching, aber kein hormonell-medizinischer Einordnungskern und
  keine frauenspezifische Evidenzbasis.

**Marktlücke:** Es fehlt ein Produkt, das (a) frauen-/menopause-spezifisch,
(b) konsequent quellenbelegt, (c) bis in die ärztliche Abklärung/Labor-
Einordnung reicht und (d) das Ganze mit ruhiger, nicht-klischeehafter,
alltagstauglicher UX und echter Datenhoheit verbindet.

## 6. Unique Selling Point (USP)

**„Vom Symptom zur richtigen ärztlichen Frage – evidenzbasiert, transparent,
ohne Klischee.“**

Differenzierende Säulen:

1. **Evidenz-Transparenz an jeder Aussage** – jede Empfehlung mit „Warum“ und
   aufklappbarer Quelle (Leitlinie/Review > Lehrbuch > Studie).
2. **Brücke zur Medizin statt Pseudo-Diagnose** – Femvia ersetzt Ärzt:innen
   nicht, sondern macht das Gespräch besser: konkrete Abklärungs-/Labor-
   Vorschläge + Arztgespräch-Vorbereiter, inkl. Differenzialdiagnose-Lotse
   (Schilddrüse/PCOS/Eisen/Stress) statt „alles ist Wechseljahre“.
3. **Sicherheit & Seriosität by design** – Red-Flag-Logik, possibilistische
   Sprache, neutrale HRT-Aufklärung, kein Hype, kein Pink, kein Shop.
4. **Datenhoheit** – lokal-first, Export/Löschung jederzeit; Vertrauen als
   Produktmerkmal.
5. **Alltagstauglich & ruhig** – tägliche Nutzung in unter einer Minute,
   wertebasierter Fortschritt statt lautem Gamification.

## 7. Zusätzliche Vorschläge (über die ursprüngliche Idee hinaus)

Siehe `docs/04-feature-spezifikation.md` (Abschnitt „Zusätzliche Ideen“):
u. a. Arztgespräch-Vorbereiter mit PDF-Export, leitlinienkonformes
prospektives PMS/PMDS-Tagebuch, Differenzialdiagnose-Lotse, neutrale
HRT-Entscheidungshilfe, Schlaf-/Hitzewallungs-Modul, Knochen-/Herz-
Langzeitfokus, sicheres Krafttraining 40+, Wissens-Mikrolernen,
Brain-Fog-freundliches UX, vollständiger Datenexport, perspektivisch
Begleitpersonen- und Fachpersonal-Modus.

## 8. Design

Seriös, ruhig, warm, erwachsen. Petrol/Clay/Plum-Palette, Serif+Sans-
Typografie, mobile-first, barrierearm, **kein Pink, keine Klischees**
(Details in `docs/06-design-system.md`).

## 9. Technik & Plattform-Strategie

Web zuerst (Vite/React/TS, statisch auf GitHub Pages, lokale Daten), Logik von
UI getrennt für spätere Portierung via PWA → Capacitor (iOS/Android) → optional
React Native (Details in `docs/07-technische-architektur.md`).

## 10. Sicherheit, Ethik, Recht

Keine Diagnose/Therapie; durchgängige Disclaimer; Red-Flags mit klarer
Eskalation; neutrale HRT-Darstellung; Datensparsamkeit/DSGVO; medizinisches
Fachreview vor öffentlichem Launch; MDR-Abgrenzung bewusst beachtet.

## 11. Roadmap (Kurz)

Phase 0 Konzept+Demo (jetzt) → Phase 1 MVP-Web (PWA, Arzt-Report, Tagebuch,
Fachreview) → Phase 2 Konto/Sync → Phase 3 Mobile → Phase 4 Skalierung
(Details in `docs/08-roadmap.md`).

## 12. Hinweis

Erstkonzept, bewusst iterativ. Änderungen im Projektverlauf sind erwartet und
werden in der Wissensdatenbank fortgeschrieben.
