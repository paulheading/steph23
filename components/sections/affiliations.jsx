import styles from 'styles/components/sections/affiliations.module.scss'
import { Content, Title } from 'components'

function Link({ href, children }) {
  const props = {
    target: '_blank',
    href,
  }
  return (
    <a {...props}>
      <strong>{children}</strong>
    </a>
  )
}

export function Affiliations() {
  const contentProps = {
    className: 'text-align-center',
    variant: 'yellow',
    wrap: false,
  }
  return (
    <Content {...contentProps}>
      <Title>Affiliations</Title>
      <p className="margin-bottom-1">I am a proud member of</p>
      <ul className={styles.list}>
        <li>
          <Link href="https://www.equity.org.uk/">British Actors Equity</Link>
        </li>
        <li>
          <Link href="https://www.audiopub.org/">Audio Publishers Association</Link>
        </li>
        <li>
          <Link href="https://www.pronarrators.org/">Professional Audiobooks Narrators Association</Link>
        </li>
      </ul>
    </Content>
  )
}
