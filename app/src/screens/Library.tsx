import { Card, Disclaimer, SectionTitle, SourceChips } from '../components/UI'
import { DISCLAIMER, LIBRARY } from '../data/content'

export default function Library() {
  return (
    <div className="space-y-5">
      <SectionTitle sub="Kurz, quellenbelegt, ohne Hype.">Wissen</SectionTitle>
      {LIBRARY.map((c) => (
        <Card key={c.title}>
          <h3 className="font-serif text-xl text-ink">{c.title}</h3>
          <p className="text-sm text-muted mt-2 leading-relaxed">{c.body}</p>
          <SourceChips ids={c.sources} />
        </Card>
      ))}
      <Disclaimer text={DISCLAIMER} />
    </div>
  )
}
