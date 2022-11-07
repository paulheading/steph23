import styles from 'styles/components/sections/affiliations.module.scss'
import { Container, Wrap, Title, Link } from 'components'

export function Affiliations() {
  const containerProps = {
    className: styles.container,
    variant: 'yellow',
  }

  const linkProps = {
    target: '_blank',
    bold: true,
  }

  return (
    <Container {...containerProps}>
      <Wrap className="margin-bottom-1">
        <Title>Affiliations</Title>
        <p>I am a proud member of</p>
      </Wrap>
      <ul className={styles.list}>
        <li>
          <Link {...linkProps} href="https://www.equity.org.uk/">
            British Actors Equity
          </Link>
        </li>
        <li>
          <Link {...linkProps} href="https://www.audiopub.org/">
            Audio Publishers Association
          </Link>
        </li>
        <li>
          <Link {...linkProps} href="https://www.pronarrators.org/">
            Professional Audiobooks Narrators Association
          </Link>
        </li>
      </ul>
    </Container>
  )
}
