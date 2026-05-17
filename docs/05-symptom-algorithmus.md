# 05 – Symptom → Abklärungs-Algorithmus

> **Prinzip:** Regelbasiert, transparent, sicher. Der Algorithmus stellt
> **keine Diagnose**. Er ordnet Symptommuster edukativ ein und schlägt
> **sinnvolle ärztliche Abklärung / Laborwerte** vor – immer mit Begründung,
> Quelle und Disclaimer. Implementiert in `app/src/logic/algorithm.ts`.

## Ablauf

1. **Red-Flag-Check zuerst.** Bei Red-Flags wird *kein* Lifestyle-Output
   gegeben, sondern ein klarer Hinweis auf zeitnahe/notfallmäßige ärztliche
   Abklärung.
2. **Phasen-Kontext** (aus Onboarding: Alter, Zyklusmuster).
3. **Symptom-Cluster** auswerten → mögliche Zusammenhänge (possibilistisch
   formuliert) → **Abklärungsvorschläge** (Labor/ärztlich).
4. **Lebensstil-Hebel** (nur wenn keine Red-Flags) evidenzbasiert ergänzen.

## Red-Flags (immer Vorrang)

- Postmenopausale Blutung; sehr starke/ungewöhnlich lange Blutung.
- Neuer Brustknoten, blutige Mamillensekretion.
- Brustschmerz/Atemnot/neurologische Ausfälle (Akut → Notruf).
- Suizidale Gedanken / schwere depressive Symptomatik → Krisenhilfe.
- Unerklärter starker Gewichtsverlust, Fieber unklarer Genese.

→ Output: „Bitte zeitnah ärztlich abklären lassen“ (bzw. Notruf-Hinweis),
keine weitere Selbstmanagement-Empfehlung für dieses Symptom.

## Regelbeispiele (Symptom-Cluster → Vorschlag)

| Cluster (Beispiele) | Mögliche Einordnung (edukativ) | Abklärungsvorschlag | Quelle |
|---|---|---|---|
| Zyklus unregelmäßig + Hitzewallungen + Schlafstörung, Alter 45–55 | Perimenopausale Transition möglich | Ärztl. Einordnung; ggf. FSH/Estradiol im Kontext (nicht beweisend) | [Q-BURGER-2008], [Q-NAMS-2022] |
| Müdigkeit + Kälteempfinden + Gewichtszunahme + Haarausfall | Schilddrüse als Differenzialdiagnose | TSH (ggf. fT3/fT4) | [Q-VOELZKE-2007] |
| Erschöpfung + Haarausfall + Blässe + starke Regelblutung | Eisenmangel/Anämie möglich | Ferritin, Blutbild | [Q-DAVIS-EFFECTS-2015] |
| Zyklus unregelmäßig + Akne + Haarwuchs + Gewicht | PCOS abklären | Leitliniengerechte PCOS-Diagnostik (Androgene, Sono) | [Q-TEEDE-PCOS-2018] |
| Stimmungstief/Reizbarkeit zyklusgebunden, prämenstruell | PMS/PMDS möglich | Prospektives Symptomtagebuch ≥ 2 Zyklen | [Q-RCOG-PMS-2016], [Q-ISPMD] |
| Libido↓ + Müdigkeit + Muskelkraft↓ | Androgen-/Gesamtkontext | Ärztl. Bewertung (Testosteron-Kontext) | [Q-DAVIS-TESTO-2015] |
| Schlaf schlecht + Stress + Erschöpfung dauerhaft | Stressachse mitbeteiligt | Ärztl. Abklärung; Stressregulation als Hebel | [Q-CHROUSOS-2009] |
| Niedrige Stimmung, wenig Sonne, Erschöpfung | Vitamin-D-Status prüfen | 25-OH-Vitamin-D | [Q-SCHWALFENBERG-2011] |

> Erweiterbar. Jede Regel braucht: Trigger-Bedingung, possibilistische
> Einordnung, Abklärungsvorschlag, Quelle, Sicherheits-Disclaimer.

## Lebensstil-Hebel (Output-Bausteine, evidenzbasiert)

- **Bewegung:** Kraft + Ausdauer; programmiertes Training verbessert
  Insulinsensitivität/Körperkomposition. [Q-BUENO-2017], [Q-ELSAYED-2022],
  [Q-ENNOUR-2015]
- **Ernährung:** mediterranes Muster, Protein/Ballaststoffe, Blutzucker-
  Stabilität. [Q-MAZZA-2024]
- **Stress/Schlaf:** Achtsamkeit/Meditation, Schlafhygiene. [Q-PASCOE-2017],
  [Q-PACE-2009]
- **Mikronährstoffe:** Vitamin D bei Mangel (ärztlich). [Q-SCHWALFENBERG-2011]

## Formulierungsregeln (UX-Sicherheit)

- Immer Möglichkeitsform: „könnte … – bitte ärztlich abklären lassen“.
- Nie „Du hast …“. Nie konkrete Medikamenten-/Dosierungsempfehlung.
- HRT nur neutral als ärztlich abzuwägende Option benennen. [Q-NAMS-2022]
- Laborwerte: „Orientierung, laborabhängig, ärztlich interpretieren lassen“.
