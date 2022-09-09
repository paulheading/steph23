import styles from 'styles/components/sections/affiliations.module.scss'
import { Content, Title } from 'components'

export function Affiliations() {
  const contentProps = {
    className: 'text-align-center',
    variant: 'yellow',
    wrap: false,
  }
  return (
    <Content {...contentProps}>
      <Title>Affiliations</Title>
      <p>I am a proud member of</p>
      <ul className={styles.list}>
        <li>
          <a href="https://google.com">British Actors Equity</a>
        </li>
        <li>
          <a href="https://google.com">Audio Publishers Association</a>
        </li>
        <li>
          <a href="https://google.com">Professional Audiobook Narrators Association</a>
        </li>
      </ul>
    </Content>
  )
}
