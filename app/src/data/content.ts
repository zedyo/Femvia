// Zentrale Inhalte + Quellenbelege. Quelle: docs/02 & docs/03.

export interface Source {
  id: string
  short: string
}

export const SOURCES: Record<string, Source> = {
  'Q-BURGER-2008': { id: 'Q-BURGER-2008', short: 'Burger (2008), Endocrinology of the menopause, Best Pract Res Clin Obstet Gynaecol' },
  'Q-NAMS-2022': { id: 'Q-NAMS-2022', short: 'NAMS (2022), Menopause Practice: A Clinician’s Guide, 7. Aufl.' },
  'Q-VOELZKE-2007': { id: 'Q-VOELZKE-2007', short: 'Völzke et al. (2007), Schilddrüsenhormone und Stoffwechsel, Dtsch Arztebl' },
  'Q-TEEDE-PCOS-2018': { id: 'Q-TEEDE-PCOS-2018', short: 'Teede et al. (2018), International evidence-based guideline PCOS, Hum Reprod' },
  'Q-RCOG-PMS-2016': { id: 'Q-RCOG-PMS-2016', short: 'RCOG (2016), Management of Premenstrual Syndrome, Green-top No. 48' },
  'Q-DAVIS-TESTO-2015': { id: 'Q-DAVIS-TESTO-2015', short: 'Davis & Wahlin-Jacobsen (2015), Testosterone in women, Lancet Diab Endocrinol' },
  'Q-CHROUSOS-2009': { id: 'Q-CHROUSOS-2009', short: 'Chrousos (2009), Stress and disorders of the stress system, Nat Rev Endocrinol' },
  'Q-SCHWALFENBERG-2011': { id: 'Q-SCHWALFENBERG-2011', short: 'Schwalfenberg (2011), Vitamin D and immune function, Mol Nutr Food Res' },
  'Q-BUENO-2017': { id: 'Q-BUENO-2017', short: 'Bueno-Notivol et al. (2017), Exercise & insulin sensitivity (postmenopausal), Menopause' },
  'Q-ELSAYED-2022': { id: 'Q-ELSAYED-2022', short: 'Elsayed et al. (2022), Aerobic training + diet, J Steroid Biochem Mol Biol' },
  'Q-ENNOUR-2015': { id: 'Q-ENNOUR-2015', short: 'Ennour-Idrissi et al. (2015), Physical activity & sex hormones, Breast Cancer Res' },
  'Q-MAZZA-2024': { id: 'Q-MAZZA-2024', short: 'Mazza et al. (2024), Dietary patterns & hormonal balance, Nutrients' },
  'Q-PASCOE-2017': { id: 'Q-PASCOE-2017', short: 'Pascoe et al. (2017), Meditation & mindfulness meta-analysis, J Psychiatr Res' },
  'Q-DAVIS-EFFECTS-2015': { id: 'Q-DAVIS-EFFECTS-2015', short: 'Davis et al. (2015), Hormonal effects on women’s health, Lancet Diab Endocrinol' },
  'Q-PALACIOS-2022': { id: 'Q-PALACIOS-2022', short: 'Palacios et al. (2022), Menopause, quality of life & HRT, Climacteric' },
}

export interface Card {
  title: string
  body: string
  sources: string[]
}

export const LIBRARY: Card[] = [
  {
    title: 'Wechseljahre sind eine klinische Einordnung',
    body: 'Die Menopause wird primär klinisch eingeordnet (Alter, Zyklusmuster, Symptome). FSH kann ergänzen, schwankt in der Perimenopause aber stark und ist allein nicht beweisend.',
    sources: ['Q-NAMS-2022', 'Q-BURGER-2008'],
  },
  {
    title: 'Nicht alles ist „Wechseljahre“',
    body: 'Müdigkeit, Gewicht oder Stimmungstief können auch Schilddrüse, Eisenmangel, PCOS oder Stress widerspiegeln. Eine ärztliche Abklärung grenzt Ursachen ab.',
    sources: ['Q-VOELZKE-2007', 'Q-TEEDE-PCOS-2018', 'Q-CHROUSOS-2009'],
  },
  {
    title: 'Bewegung wirkt messbar',
    body: 'Programmiertes Training über mehrere Monate verbessert Insulinsensitivität und Körperkomposition; körperliche Aktivität verändert nachweislich Sexualhormonprofile.',
    sources: ['Q-BUENO-2017', 'Q-ELSAYED-2022', 'Q-ENNOUR-2015'],
  },
  {
    title: 'Ernährungsmuster modulieren Hormone',
    body: 'Ernährungsgewohnheiten beeinflussen u. a. Insulinresistenz, Leptin und Cortisol. Mediterran geprägte, ballaststoff- und proteinreiche Muster sind günstig.',
    sources: ['Q-MAZZA-2024'],
  },
  {
    title: 'Stressregulation ist ein echter Hebel',
    body: 'Achtsamkeit und Meditation wirken günstig auf Stressreaktion und Cortisol – ein sicherer, alltagstauglicher Ansatz.',
    sources: ['Q-PASCOE-2017', 'Q-CHROUSOS-2009'],
  },
  {
    title: 'Symptome sind real und behandelbar',
    body: 'Optionen reichen von Lebensstil bis zu ärztlich abzuwägender Hormontherapie. Femvia bewertet HRT nicht – das ist eine individuelle ärztliche Entscheidung.',
    sources: ['Q-PALACIOS-2022', 'Q-DAVIS-EFFECTS-2015', 'Q-NAMS-2022'],
  },
]

export const DISCLAIMER =
  'Femvia ersetzt keine ärztliche Diagnose oder Behandlung. Alle Inhalte sind edukativ und evidenzbasiert formuliert. Bei anhaltenden oder beunruhigenden Beschwerden bitte ärztlichen Rat einholen.'
