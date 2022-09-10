import { useState } from 'react'
import { Page, Content } from 'components'
import { Playlist } from 'components/ui'
import { demos } from 'data/seo'
import styles from 'styles/components/templates/demos.module.scss'

export function Template({ data, children }) {
  const [active, setActive] = useState(data.main)
  const handleSetActive = (track) => setActive(track)
  const pageProps = {
    head: demos,
    menu: 'red',
    footer: 'cream',
  }
  const contentProps = {
    variant: 'red',
    top: true,
  }
  const playlistProps = {
    handleSetActive,
    variant: 'red',
    active,
    data,
  }

  return (
    <Page {...pageProps}>
      <Content {...contentProps}>
        <div className={styles.grid}>
          <div className={styles.column}>{children}</div>
          <div className={styles.column}>
            <Playlist {...playlistProps} />
          </div>
        </div>
      </Content>
    </Page>
  )
}
