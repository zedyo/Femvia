# 08 – Roadmap & offene Entscheidungen

## Phasen

### Phase 0 – Konzept & Demo (erledigt in diesem Branch)
- Wissensdatenbank, Quellenauswertung, Konzept-PDF.
- Deployfähige Web-Demo (Kern-Journey, lokale Daten) auf GitHub Pages.

### Phase 1 – MVP-Web (next)
- Inhalte vertiefen (mehr Wissenskarten, mehr Algorithmus-Regeln, alle mit Quelle).
- PWA (installierbar, offline), Datenexport/-löschung.
- Arztgespräch-Vorbereiter (PDF-Export), prospektives PMS/PMDS-Tagebuch.
- Usability-Tests mit Zielgruppe; medizinisches Review der Texte.

### Phase 2 – Konto & Sync (opt-in)
- Verschlüsselte Cloud-Sync, Multi-Device, Auth. DSGVO-Folgenabschätzung.

### Phase 3 – Mobile
- Capacitor-Verpackung (iOS/Android), native Notifications.
- Optional Health-Integrationen (Apple Health / Health Connect), opt-in.

### Phase 4 – Skalierung
- Mehrsprachigkeit, Fachpersonal-Modus, ggf. Studienkooperationen.

## Offene Entscheidungen (zu klären)

- **Medizinisches Review:** Wer prüft Inhalte fachlich (Gyn/Endokrinologie)?
  → erforderlich vor öffentlichem Launch.
- **Regulatorik:** Ist eine Funktion medizinprodukt-relevant (MDR)? Aktuell
  bewusst rein edukativ/Selbstmanagement gehalten, um MDR-Pflicht zu vermeiden;
  vor Feature-Erweiterung juristisch prüfen.
- **Geschäftsmodell:** werbefrei; Optionen: Freemium, B2B2C
  (Krankenkassen/Praxen), DiGA-Perspektive (langfristig, hohe Hürde).
- **Marke/Name:** „Femvia“ ist Arbeitsname – Marken-/Domainprüfung offen.
- **Sprache:** Start DE; EN als erste Erweiterung.

## Pflege der Wissensdatenbank

- Jede inhaltliche/architektonische Änderung → Eintrag im Changelog
  (`00-projektuebersicht.md`) und im betroffenen Dokument.
- Quellen mind. jährlich auf Aktualität/Leitlinien-Updates prüfen.
