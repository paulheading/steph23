import { useState } from 'react'
import { Page, Content, Split } from 'components'
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
        <Split>
          <div className={styles.column}>{children}</div>
          <div className={styles.column}>
            <Playlist {...playlistProps} />
          </div>
        </Split>
      </Content>
    </Page>
  )
}
