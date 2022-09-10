import { Page, Content, Title } from 'components'
import { acting } from 'scripts/head'
import styles from 'styles/pages/acting.module.scss'
import Image from 'next/image'

export default function Acting() {
  const pageProps = {
    head: acting,
    menu: 'cream',
    footer: 'cream',
  }
  const contentProps = {
    variant: 'cream',
    top: true,
  }
  const title = `stephanie-cannon-headshot-acting-page`
  const imageProps = {
    src: `/${title}.jpg`,
    height: 112,
    width: 80,
  }
  return (
    <Page {...pageProps}>
      <Content {...contentProps}>
        <div className={styles.grid}>
          <div>
            <Title>Acting</Title>
            <p>I’m an award nominated voice actor with over 20 years experience, working in almost every area of the industry. I have a smooth, engaging voice with a US/transatlantic accent.</p>
            <p>As a trained actor, I’m proficient with crafting characters and accents. I’m also a skilled improviser, but am equally comfortable taking direction.</p>
            <p>I can deliver professional and friendly voices for e-learning or corporate reads, characters for radio drama and games, or child voices for animation and audiobooks.</p>
          </div>
          <div className={styles.image}>
            <Image {...imageProps} alt={title} layout="responsive" />
          </div>
        </div>
      </Content>
    </Page>
  )
}
