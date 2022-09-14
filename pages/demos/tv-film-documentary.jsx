import { documentary as data } from 'data/demos'
import { Title } from 'components'
import { Template } from 'components/templates/demos'
import { demos } from 'data/seo'

export default function Documentary() {
  const props = {
    head: demos.documentaries,
    data,
  }
  return (
    <Template {...props}>
      <Title>Documentary Narration</Title>
      <p>Looking for a smooth, engaging voice for your dramatic documentary? Or a friendly, youthful US sound for an upbeat biopic? Whether it&apos;s warm narration or a conversational style with comic timing, I have the skills you need to engage listeners and let your story blaze.</p>
    </Template>
  )
}
