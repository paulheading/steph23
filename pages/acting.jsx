import { Page, Content, Split, Title, Image } from 'components'
import { acting as head } from 'data/seo'

export default function Acting() {
  const variant = 'cream'
  const pageProps = {
    footer: variant,
    menu: variant,
    head,
  }
  const contentProps = {
    top: true,
    variant,
  }
  const imageProps = {
    src: 'stephanie-cannon-headshot-acting-page.jpg',
    variant,
  }
  return (
    <Page {...pageProps}>
      <Content {...contentProps}>
        <Split>
          <div>
            <Title>Acting</Title>
            <p>I’m an award nominated voice actor with over 20 years experience, working in almost every area of the industry. I have a smooth, engaging voice with a US/transatlantic accent.</p>
            <p>As a trained actor, I’m proficient with crafting characters and accents. I’m also a skilled improviser, but am equally comfortable taking direction.</p>
            <p>I can deliver professional and friendly voices for e-learning or corporate reads, characters for radio drama and games, or child voices for animation and audiobooks.</p>
          </div>
          <div>
            <Image {...imageProps} alt={imageProps.src} />
          </div>
        </Split>
      </Content>
    </Page>
  )
}
