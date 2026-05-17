// Erzeugt konzept/Femvia-Konzept.pdf (pure JS, kein Browser nötig).
// Quelle des Inhalts: docs/09-konzept-langfassung.md
import PDFDocument from 'pdfkit'
import { createWriteStream, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'konzept', 'Femvia-Konzept.pdf')
mkdirSync(dirname(OUT), { recursive: true })

const C = {
  ink: '#1B2422',
  muted: '#5C6B66',
  primary: '#1F5C57',
  accent: '#C0714E',
  plum: '#5A4A63',
  line: '#E4E0D8',
  bg: '#F7F5F1',
}

const doc = new PDFDocument({ size: 'A4', margin: 56, bufferPages: true })
doc.pipe(createWriteStream(OUT))

const PAGE_W = doc.page.width
const M = 56
const CW = PAGE_W - M * 2

function cover() {
  doc.rect(0, 0, PAGE_W, doc.page.height).fill(C.bg)
  doc.rect(0, 0, PAGE_W, 8).fill(C.primary)
  doc.fillColor(C.primary).font('Helvetica-Bold').fontSize(46).text('Femvia', M, 150)
  doc
    .fillColor(C.ink)
    .font('Helvetica')
    .fontSize(16)
    .text('Konzept – medizinisch evidenzbasierte App für Frauen', M, 215, { width: CW })
  doc
    .fillColor(C.muted)
    .fontSize(12)
    .text('Schwerpunkt Perimenopause & Wechseljahre · Erstkonzept', M, 245)
  doc.moveTo(M, 290).lineTo(M + CW, 290).strokeColor(C.line).stroke()
  doc
    .fillColor(C.muted)
    .fontSize(10)
    .text('Arbeitsname: Femvia', M, 310)
    .text('Status: frühe Konzeptphase – iterativ, Änderungen erwartet', M, 326)
    .text('Plattform: Web zuerst (mobil-optimiert), später iOS/Android', M, 342)
    .text('Erstellt: ' + new Date().toLocaleDateString('de-DE'), M, 358)
  doc
    .fillColor(C.muted)
    .fontSize(9)
    .text(
      'Hinweis: Femvia ersetzt keine ärztliche Diagnose oder Behandlung. Alle Inhalte sind edukativ und evidenzbasiert formuliert.',
      M,
      720,
      { width: CW },
    )
  doc.addPage()
}

function h1(t) {
  ensure(70)
  doc.moveDown(0.4)
  doc.fillColor(C.primary).font('Helvetica-Bold').fontSize(20).text(t, { width: CW })
  const y = doc.y + 4
  doc.moveTo(M, y).lineTo(M + 48, y).lineWidth(2).strokeColor(C.accent).stroke()
  doc.moveDown(0.8)
}

function h2(t) {
  ensure(50)
  doc.moveDown(0.3)
  doc.fillColor(C.ink).font('Helvetica-Bold').fontSize(13).text(t, { width: CW })
  doc.moveDown(0.3)
}

function p(t) {
  ensure(40)
  doc.fillColor(C.ink).font('Helvetica').fontSize(10.5).text(t, { width: CW, align: 'left', lineGap: 2 })
  doc.moveDown(0.5)
}

function bullets(items) {
  doc.fillColor(C.ink).font('Helvetica').fontSize(10.5)
  for (const it of items) {
    ensure(30)
    const startY = doc.y
    doc.fillColor(C.accent).text('•', M, startY, { continued: false })
    doc.fillColor(C.ink).text(it, M + 14, startY, { width: CW - 14, lineGap: 2 })
    doc.moveDown(0.3)
  }
  doc.moveDown(0.3)
}

function ensure(space) {
  if (doc.y + space > doc.page.height - 60) doc.addPage()
}

function footer() {
  const range = doc.bufferedPageRange()
  for (let i = 0; i < range.count; i++) {
    doc.switchToPage(range.start + i)
    if (i === 0) continue
    doc
      .fillColor(C.muted)
      .font('Helvetica')
      .fontSize(8)
      .text(`Femvia – Konzept · Seite ${i} / ${range.count - 1}`, M, doc.page.height - 42, {
        width: CW,
        align: 'center',
      })
  }
}

cover()

h1('1 · Zusammenfassung')
p(
  'Femvia ist eine medizinisch evidenzbasierte App für Frauen mit Schwerpunkt Perimenopause und Wechseljahre, grundsätzlich für die weibliche Gesundheit über den Lebensverlauf. Sie übersetzt aktuelle Evidenz in verständliche, alltagstaugliche Schritte: Beschwerden eingeben, mögliche Zusammenhänge verstehen, sinnvolle ärztliche Abklärung und Laborwerte vorgeschlagen bekommen, evidenzbasierte Empfehlungen zu Ernährung, Bewegung, Stressregulation und Arztbesuchen erhalten sowie Symptome im Verlauf dokumentieren. Femvia diagnostiziert nicht, sondern befähigt und begleitet – seriös, ruhig, ohne Klischees und ohne klischeehaftes Frauen-Pink.',
)

h1('2 · Problem')
p(
  'Frauen in der Lebensmitte erleben vielfältige hormonell bedingte Veränderungen, finden online aber überwiegend widersprüchliche, kommerziell gefärbte oder verharmlosende Information. Symptome werden entweder pathologisiert oder abgetan. Es fehlt ein ruhiger, vertrauenswürdiger Begleiter, der Evidenz einordnet und das Arztgespräch stärkt.',
)

h1('3 · Lösung & Kern-Journey')
bullets([
  'Onboarding: grobe, edukative Lebensphasen-Einordnung (keine Diagnose).',
  'Symptom-Check: regelbasierte, possibilistische Einordnung mit konkreten Vorschlägen zur ärztlichen Abklärung / zu Laborwerten – jeweils mit Begründung und Quelle.',
  'Laborwerte erfassen: edukative Orientierung mit klarem Disclaimer.',
  'Empfehlungen: Ernährung, Bewegung, Stressregulation – evidenzbasiert, mit „Warum“.',
  'Tracking & Verlauf: Muster sichtbar machen, Arztgespräch vorbereiten.',
])

h1('4 · Medizinisches Fundament')
p(
  'Das fachliche Fundament ist vollständig in der Wissensdatenbank dokumentiert (docs/02 mit Quellenbelegen aus docs/03, basierend auf dem beigelegten Quellen-PDF): HPO-Achse und Regelkreise, Sexualhormone der Frau, Menopause-Endokrinologie (klinische Diagnose, FSH als Kontext, nicht als Schalter), PMS/PMDS, Differenzialdiagnosen (Schilddrüse, PCOS, Eisenmangel, Stress) sowie der evidenzbasierte Lebensstil-Hebel mit messbaren metabolischen und hormonellen Effekten von Bewegung und Ernährung.',
)

h1('5 · Vergleich zu ähnlichen Apps')
p(
  'Zur strategischen Einordnung; keine Wertung der Anbieter, kein Funktionsaudit, allgemein bekannte Marktpositionierung.',
)
h2('Balance / „Menopause“-Apps')
p(
  'Stark auf Wechseljahre und Symptom-Tracking fokussiert, teils mit Arzt-Report. Stärke: thematischer Fokus. Lücke: Quellentransparenz variiert; reicht selten konsequent in Differenzialdiagnostik und Labor-Einordnung hinein.',
)
h2('Clue / Flo (Zyklus-Tracker)')
p(
  'Sehr starke Tracking-UX und große Reichweite, Fokus aber auf Zyklus/Fruchtbarkeit. Perimenopause/Menopause und evidenzbasierte ärztliche Abklärung sind nicht der Kern; bei Flo gab es zudem öffentliche Datenschutzkritik.',
)
h2('Allgemeine Symptom-Checker (z. B. Ada)')
p(
  'Breite Differenzialdiagnostik, aber nicht frauen-/menopausespezifisch und nicht auf kontinuierliche Lebensstil-Begleitung ausgelegt.',
)
h2('Ernährungs-/Fitness-Apps (z. B. Noom/Yazio-artig)')
p(
  'Gutes Verhaltens-Coaching, aber kein hormonell-medizinischer Einordnungskern und keine frauenspezifische Evidenzbasis.',
)
h2('Marktlücke')
p(
  'Es fehlt ein Produkt, das (a) frauen-/menopausespezifisch, (b) konsequent quellenbelegt, (c) bis in die ärztliche Abklärung und Labor-Einordnung reicht und (d) dies mit ruhiger, nicht-klischeehafter, alltagstauglicher UX und echter Datenhoheit verbindet.',
)

h1('6 · Unique Selling Point')
p('„Vom Symptom zur richtigen ärztlichen Frage – evidenzbasiert, transparent, ohne Klischee.“')
bullets([
  'Evidenz-Transparenz an jeder Aussage: jede Empfehlung mit „Warum“ und aufklappbarer Quelle (Leitlinie/Review > Lehrbuch > Studie).',
  'Brücke zur Medizin statt Pseudo-Diagnose: konkrete Abklärungs-/Laborvorschläge, Arztgespräch-Vorbereiter und Differenzialdiagnose-Lotse statt „alles ist Wechseljahre“.',
  'Sicherheit & Seriosität by design: Red-Flag-Logik, possibilistische Sprache, neutrale HRT-Aufklärung, kein Hype, kein Pink, kein Shop.',
  'Datenhoheit: lokal-first, Export und Löschung jederzeit – Vertrauen als Produktmerkmal.',
  'Alltagstauglich & ruhig: tägliche Nutzung in unter einer Minute, wertebasierter Fortschritt statt lautem Gamification.',
])

h1('7 · Zusätzliche Vorschläge (über die ursprüngliche Idee hinaus)')
bullets([
  'Arztgespräch-Vorbereiter: strukturierte 1-Seiten-Zusammenfassung + Fragenliste als PDF-Export.',
  'Leitlinienkonformes prospektives PMS/PMDS-Tagebuch über mindestens 2 Zyklen.',
  'Differenzialdiagnose-Lotse: aktiver Hinweis auf Schilddrüse, Eisenmangel, PCOS, Depression.',
  'Neutrale HRT-Entscheidungshilfe als Gesprächsvorbereitung (nie Empfehlung).',
  'Schlaf- & Hitzewallungs-Modul mit gezieltem Tracking und nicht-medikamentösen Strategien.',
  'Knochen- & Herz-Langzeitfokus für die Postmenopause.',
  'Sicherer Krafttrainings-Einstieg für Frauen 40+.',
  'Wissens-Mikrolernen (2-Minuten-Karten, optional, mit Quellen).',
  'Brain-Fog-freundliches UX: große Tap-Ziele, „heute nur eine Sache“-Modus.',
  'Vollständiger Datenexport/-löschung; perspektivisch Begleitpersonen- und Fachpersonal-Modus.',
])

h1('8 · Design')
p(
  'Seriös, ruhig, warm, erwachsen. Palette aus Petrol, Clay und Plum auf warmem Off-White; Serif-/Sans-Typografie (Fraunces + Inter); mobile-first; barrierearm (Kontrast, Tap-Ziele, reduzierte kognitive Last). Bewusst kein Pink, keine infantilisierende Bildsprache, keine Beauty-Ästhetik.',
)

h1('9 · Technik & Plattform-Strategie')
p(
  'Web zuerst (Vite, React, TypeScript, Tailwind), statisch auf GitHub Pages, Daten ausschließlich lokal (localStorage), kein Backend. Logik ist von der UI getrennt, um eine spätere Portierung zu erleichtern: PWA → Capacitor (iOS/Android) → optional React Native, das die geteilte TypeScript-Logik wiederverwendet.',
)

h1('10 · Sicherheit, Ethik & Recht')
bullets([
  'Keine Diagnose, keine Therapieanweisung; durchgängige Disclaimer.',
  'Red-Flag-Erkennung mit klarer Eskalation (zeitnahe/notfallmäßige Abklärung).',
  'HRT neutral und evidenzbasiert – individuelle ärztliche Nutzen-Risiko-Abwägung.',
  'Datensparsamkeit, DSGVO als Leitlinie, lokale Speicherung in der ersten Version.',
  'Medizinisches Fachreview vor öffentlichem Launch; bewusste MDR-Abgrenzung.',
])

h1('11 · Roadmap')
bullets([
  'Phase 0 – Konzept & Demo (jetzt): Wissensdatenbank, Konzept-PDF, deployfähige Web-Demo.',
  'Phase 1 – MVP-Web: PWA, Arzt-Report, Symptomtagebuch, medizinisches Review.',
  'Phase 2 – Konto & verschlüsselte Sync (opt-in).',
  'Phase 3 – Mobile: Capacitor (iOS/Android), native Notifications.',
  'Phase 4 – Skalierung: Mehrsprachigkeit, Fachpersonal-Modus.',
])

h1('12 · Evidenzbasis')
p(
  'Die App stützt sich auf den im Quellen-PDF (MenoCert, Webinar 2) gelieferten Rahmen: u. a. Burger (2008) und NAMS (2022) zur Menopause-Endokrinologie und klinischen Diagnose; Davis et al. (2015) zu hormonellen Effekten; Teede et al. (2018) zu PCOS; RCOG (2016) zu PMS/PMDS; Völzke et al. (2007) zur Schilddrüse; Bueno-Notivol et al. (2017) und Elsayed et al. (2022) zu Bewegung/Insulinsensitivität; Mazza et al. (2024) zu Ernährung; Pascoe et al. (2017) zu Achtsamkeit. Die vollständige, mit IDs versehene Liste und die Evidenz-Policy stehen in docs/03-quellen-evidenz.md.',
)

h1('13 · Hinweis')
p(
  'Dies ist ein Erstkonzept und bewusst iterativ. Änderungen im Projektverlauf sind erwartet und werden in der Wissensdatenbank (docs/) fortgeschrieben, damit auch bei Kontextverlust kein Wissen verloren geht.',
)

footer()
doc.end()
console.log('PDF geschrieben:', OUT)
