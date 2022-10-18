import { Container, Wrap } from 'components'
import styles from 'styles/components/sections/footer.module.scss'
import { Spotlight, Twitter, LinkedIn, Facebook, Instagram } from 'logos'
import Link from 'next/link'

export function Footer({ variant }) {
  const containerProps = {
    className: styles.container,
    section: false,
    padding: false,
    footer: true,
    variant,
  }
  return (
    <footer>
      <Container {...containerProps}>
        <Wrap className={styles.wrap}>
          <div className={styles.socials}>
            <Link href="https://www.spotlight.com/9493-9081-8617">
              <a target="_blank">
                <Spotlight />
              </a>
            </Link>
            <Link href="https://twitter.com/sparkthecannon">
              <a target="_blank">
                <Twitter />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/sparkthecannon/">
              <a target="_blank">
                <LinkedIn />
              </a>
            </Link>
            <Link href="https://www.facebook.com/stephanie.cannon.7927">
              <a target="_blank">
                <Facebook />
              </a>
            </Link>
            <Link href="https://www.facebook.com/stephanie.cannon.7927">
              <a target="_blank">
                <Instagram />
              </a>
            </Link>
          </div>
          <div className={styles.contact}>
            <div>
              <a href="mailto:steph@sparkthecannon.com">steph@sparkthecannon.com</a>
            </div>
            <div>
              <a href="tel:+447547795849">+44 7547 795849</a>
            </div>
          </div>
        </Wrap>
      </Container>
    </footer>
  )
}
