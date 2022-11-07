import { Container, Wrap, Link } from 'components'
import styles from 'styles/components/sections/footer.module.scss'
import { Spotlight, Twitter, LinkedIn, Facebook, Instagram } from 'logos'

export function Footer({ variant }) {
  const containerProps = {
    className: styles.container,
    padding: false,
    footer: true,
    variant,
  }
  return (
    <footer>
      <Container {...containerProps}>
        <Wrap className={styles.wrap}>
          <div className={styles.socials}>
            <Link target="_blank" href="https://www.spotlight.com/9493-9081-8617">
              <Spotlight />
            </Link>
            <Link target="_blank" href="https://twitter.com/sparkthecannon">
              <Twitter />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/sparkthecannon/">
              <LinkedIn />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/stephanie.cannon.7927">
              <Facebook />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/stephanie.cannon.7927">
              <Instagram />
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
