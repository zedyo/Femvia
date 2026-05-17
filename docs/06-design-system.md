# 06 – Design-System

## Haltung

Seriös, ruhig, erwachsen, warm. Medizinische Glaubwürdigkeit + alltägliche
Leichtigkeit. **Kein Pink als Leitfarbe**, keine infantilisierende Bildsprache,
keine „Beauty“-Ästhetik. Inspiriert von ruhiger Klinik-Klarheit + warmem
Editorial-Look.

## Farbpalette

| Rolle | Hex | Einsatz |
|---|---|---|
| Background | `#F7F5F1` | App-Hintergrund (warmes Off-White) |
| Surface | `#FFFFFF` | Karten/Flächen |
| Ink (Text) | `#1B2422` | Primärtext |
| Muted | `#5C6B66` | Sekundärtext |
| Primary (Petrol) | `#1F5C57` | Hauptaktion, Marke |
| Primary-700 | `#16433F` | Hover/Tiefe |
| Accent (Clay) | `#C0714E` | Akzent, Highlights (sparsam) |
| Secondary (Plum) | `#5A4A63` | Sekundärakzent, Daten-Viz |
| Sage | `#8FA89B` | dezente Flächen, Erfolg-/Ruhe-Töne |
| Line | `#E4E0D8` | Rahmen/Trenner |
| Warn | `#B4502E` | Red-Flag/Warnhinweise (ernst, nicht schrill) |

Begründung: Petrol/Clay/Plum wirken kompetent, warm und geschlechtsneutral-
elegant, ohne Klischee. Hoher Kontrast für Barrierefreiheit (Ink auf BG/Surface).

## Typografie

- **Headings:** „Fraunces“ (variabler Serif, charaktervoll, vertrauenswürdig).
- **Body/UI:** „Inter“ (klar, sehr gut lesbar, mobil).
- Großzügige Zeilenhöhe, ruhige Größenskala, klare Hierarchie.
- Fonts via `@fontsource` gebündelt (kein externer Tracking-Request).

## Layout & Komponenten

- Mobile-first, max. Content-Breite ~ 480–560 px, zentriert (App-Feeling).
- Untere Tab-Navigation (Heute · Check · Verlauf · Wissen · Profil).
- Komponenten: Card, Stat, Pill/Tag, Button (primär/ghost), ProgressRing,
  Sheet/Modal, Disclaimer-Banner, SourceChip („Quelle“ aufklappbar).
- Ecken: weich (radius 16–24), aber nicht „bubbly“. Dezente Schatten.
- Bewegung: subtile Transitions, kein verspieltes Bouncing.

## Tonalität (Text)

- Respektvoll, klar, auf Augenhöhe. Erklärend, nie belehrend.
- Possibilistische, sichere Formulierungen (siehe `05`).
- Deutsch (DE) als Primärsprache; Strings zentral für spätere i18n.

## Barrierefreiheit

- Kontrast ≥ WCAG AA, fokussierbare Elemente, sinnvolle Tab-Reihenfolge.
- Tap-Ziele ≥ 44 px, skalierbare Schrift, reduzierte kognitive Last
  (Brain-Fog-freundlich: ein klarer Hauptfokus pro Screen).
