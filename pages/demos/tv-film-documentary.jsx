import { documentary } from 'data/demos'
import { Title } from 'components'
import DemosLayout from 'components/layouts/demos'
import { demos } from 'data/seo'

function Documentary() {
  const { videos, audio } = documentary
  const layoutProps = {
    head: demos.documentary,
    videos,
    audio,
  }

  return (
    <DemosLayout {...layoutProps}>
      <Title>Documentary Narration</Title>
      <p>Looking for a smooth, engaging voice for your dramatic documentary? Or a friendly, youthful US sound for an upbeat biopic? Whether it&apos;s warm narration or a conversational style with comic timing, I have the skills you need to engage listeners and let your story blaze.</p>
    </DemosLayout>
  )
}

export default Documentary
