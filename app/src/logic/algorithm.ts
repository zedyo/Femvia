// Symptom -> Abklärungs-Algorithmus. Regelbasiert, possibilistisch, sicher.
// Spezifikation: docs/05-symptom-algorithmus.md

export interface Symptom { id: string; label: string; group: string }

export const SYMPTOMS: Symptom[] = [
  { id: 'cycle_irregular', label: 'Unregelmäßiger Zyklus', group: 'Zyklus' },
  { id: 'heavy_bleeding', label: 'Sehr starke / lange Blutung', group: 'Zyklus' },
  { id: 'postmeno_bleeding', label: 'Blutung nach 12 Monaten ohne Periode', group: 'Zyklus' },
  { id: 'hot_flashes', label: 'Hitzewallungen / Schweißausbrüche', group: 'Vasomotorisch' },
  { id: 'sleep', label: 'Schlafstörungen', group: 'Schlaf' },
  { id: 'mood', label: 'Reizbarkeit / niedrige Stimmung', group: 'Psyche' },
  { id: 'mood_cyclic', label: 'Stimmungstief v. a. vor der Periode', group: 'Psyche' },
  { id: 'fatigue', label: 'Anhaltende Erschöpfung', group: 'Energie' },
  { id: 'cold', label: 'Kälteempfindlich, Gewichtszunahme', group: 'Stoffwechsel' },
  { id: 'hair_loss', label: 'Haarausfall', group: 'Haut/Haar' },
  { id: 'pallor', label: 'Blässe', group: 'Allgemein' },
  { id: 'acne_hair', label: 'Akne / vermehrter Haarwuchs', group: 'Haut/Haar' },
  { id: 'libido', label: 'Verminderte Libido', group: 'Sexualität' },
  { id: 'stress', label: 'Dauerstress / Überforderung', group: 'Psyche' },
  { id: 'low_sun', label: 'Wenig Sonnenlicht / Antriebslosigkeit', group: 'Allgemein' },
  { id: 'breast_lump', label: 'Neuer Knoten in der Brust', group: 'Red-Flag' },
  { id: 'suicidal', label: 'Gedanken, nicht mehr leben zu wollen', group: 'Red-Flag' },
]

export interface Suggestion {
  insight: string
  action: string
  sources: string[]
}

export interface RedFlag { message: string; urgent: boolean }

export interface Result {
  redFlags: RedFlag[]
  suggestions: Suggestion[]
  lifestyle: { title: string; text: string; sources: string[] }[]
}

const has = (s: Set<string>, ...ids: string[]) => ids.every((i) => s.has(i))
const any = (s: Set<string>, ...ids: string[]) => ids.some((i) => s.has(i))

export function evaluate(selected: string[]): Result {
  const s = new Set(selected)
  const redFlags: RedFlag[] = []
  const suggestions: Suggestion[] = []

  if (s.has('suicidal'))
    redFlags.push({
      message:
        'Bitte hol dir jetzt Unterstützung. In Deutschland: Telefonseelsorge 0800 111 0 111 / 0800 111 0 222 (kostenlos, 24 h), im Notfall 112.',
      urgent: true,
    })
  if (s.has('postmeno_bleeding'))
    redFlags.push({
      message:
        'Eine Blutung nach 12 Monaten ohne Periode sollte zeitnah ärztlich (gynäkologisch) abgeklärt werden.',
      urgent: true,
    })
  if (s.has('breast_lump'))
    redFlags.push({
      message: 'Ein neuer Knoten in der Brust sollte zeitnah ärztlich abgeklärt werden.',
      urgent: true,
    })
  if (s.has('heavy_bleeding'))
    redFlags.push({
      message:
        'Sehr starke oder ungewöhnlich lange Blutungen sollten ärztlich abgeklärt werden.',
      urgent: false,
    })

  if (any(s, 'cycle_irregular', 'hot_flashes') && has(s, 'hot_flashes'))
    suggestions.push({
      insight:
        'Unregelmäßiger Zyklus zusammen mit Hitzewallungen/Schlafstörungen kann auf eine perimenopausale Transition hindeuten.',
      action:
        'Ärztliche Einordnung empfehlenswert. FSH/Estradiol können den Kontext ergänzen, sind allein aber nicht beweisend.',
      sources: ['Q-BURGER-2008', 'Q-NAMS-2022'],
    })

  if (has(s, 'fatigue', 'cold') || has(s, 'cold', 'hair_loss'))
    suggestions.push({
      insight:
        'Erschöpfung mit Kälteempfinden, Gewichtszunahme oder Haarausfall kann auch auf die Schilddrüse hindeuten.',
      action: 'Mögliche Abklärung: TSH (ggf. fT3/fT4) ärztlich besprechen.',
      sources: ['Q-VOELZKE-2007'],
    })

  if (has(s, 'fatigue', 'pallor') || has(s, 'hair_loss', 'heavy_bleeding'))
    suggestions.push({
      insight:
        'Erschöpfung, Blässe und/oder starke Blutungen können auf einen Eisenmangel hindeuten.',
      action: 'Mögliche Abklärung: Ferritin und Blutbild ärztlich besprechen.',
      sources: ['Q-DAVIS-EFFECTS-2015'],
    })

  if (has(s, 'cycle_irregular', 'acne_hair'))
    suggestions.push({
      insight: 'Unregelmäßiger Zyklus mit Akne/vermehrtem Haarwuchs kann auf PCOS hindeuten.',
      action: 'Leitliniengerechte PCOS-Abklärung ärztlich besprechen.',
      sources: ['Q-TEEDE-PCOS-2018'],
    })

  if (s.has('mood_cyclic'))
    suggestions.push({
      insight: 'Zyklusgebundene Stimmungstiefs können auf PMS/PMDS hindeuten.',
      action:
        'Empfohlen: prospektives Symptomtagebuch über mindestens 2 Zyklen als Grundlage für das Arztgespräch.',
      sources: ['Q-RCOG-PMS-2016'],
    })

  if (has(s, 'libido', 'fatigue'))
    suggestions.push({
      insight: 'Verminderte Libido mit Erschöpfung sollte im Gesamtkontext betrachtet werden.',
      action: 'Ärztliche Bewertung empfehlenswert (u. a. Androgen-/Gesamtkontext).',
      sources: ['Q-DAVIS-TESTO-2015'],
    })

  if (has(s, 'stress', 'sleep') || has(s, 'stress', 'fatigue'))
    suggestions.push({
      insight: 'Dauerstress mit Schlaf-/Erschöpfungsproblemen kann die Stressachse mitbetreffen.',
      action: 'Ärztliche Abklärung sinnvoll; Stressregulation als sicherer Hebel.',
      sources: ['Q-CHROUSOS-2009'],
    })

  if (s.has('low_sun'))
    suggestions.push({
      insight: 'Antriebslosigkeit bei wenig Sonnenlicht kann mit dem Vitamin-D-Status zusammenhängen.',
      action: 'Mögliche Abklärung: 25-OH-Vitamin-D ärztlich besprechen.',
      sources: ['Q-SCHWALFENBERG-2011'],
    })

  const lifestyle =
    redFlags.some((r) => r.urgent)
      ? []
      : [
          {
            title: 'Bewegung',
            text: 'Kombination aus Krafttraining und Ausdauer; programmiertes Training über mehrere Monate verbessert Insulinsensitivität und Körperkomposition.',
            sources: ['Q-BUENO-2017', 'Q-ELSAYED-2022'],
          },
          {
            title: 'Ernährung',
            text: 'Mediterran geprägt, ausreichend Protein und Ballaststoffe, stabiler Blutzucker – günstig für den Hormonhaushalt.',
            sources: ['Q-MAZZA-2024'],
          },
          {
            title: 'Stress & Schlaf',
            text: 'Regelmäßige Achtsamkeits-/Entspannungspraxis und Schlafhygiene wirken günstig auf Stressreaktion und Cortisol.',
            sources: ['Q-PASCOE-2017'],
          },
        ]

  return { redFlags, suggestions, lifestyle }
}
