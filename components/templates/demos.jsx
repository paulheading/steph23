import { useState } from 'react'
import { Page, Content, Split } from 'components'
import { Playlist } from 'components/ui'
import styles from 'styles/components/templates/demos.module.scss'

export function Template({ head, data, children }) {
  const [active, setActive] = useState(data.main)
  const handleSetActive = (track) => setActive(track)
  const variant = 'red'
  const pageProps = {
    footer: 'cream',
    menu: variant,
    head,
  }
  const contentProps = {
    top: true,
    variant,
  }
  const playlistProps = {
    handleSetActive,
    variant,
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
