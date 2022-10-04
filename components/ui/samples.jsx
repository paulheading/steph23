import { useState } from 'react'
import { Wrap } from 'components'
import { Sample } from 'components/ui'
import styles from 'styles/components/ui/samples.module.scss'
import { attachVariant } from 'scripts'

export function Samples({ data, variant, dark = false, active, setActive }) {
  const [samples, setSamples] = useState(data)
  const [openID, setOpenID] = useState(data[0].id)
  const handleSetActive = (track) => setActive(track)
  const needsButtons = data.length > 1
  function handleSetOpenID(id) {
    setActive({ ...active, playing: false })
    setOpenID(id)
  }
  const playlistProps = {
    handleSetActive,
    handleSetOpenID,
    toggle: true,
    variant,
    active,
    openID,
  }

  return (
    <div className={styles.container}>
      {needsButtons && (
        <Wrap>
          <div className={styles.buttons}>
            {samples.map(({ title, id }, index) => {
              const openClass = openID === id ? styles.open : ''
              const darkClass = dark ? styles.dark : ''
              const classes = `${styles.button} ${attachVariant(variant, styles)} ${openClass} ${darkClass}`
              const props = {
                onClick: () => handleSetOpenID(id),
                className: classes,
              }
              return (
                <button key={'button' + index} {...props}>
                  {title}
                </button>
              )
            })}
          </div>
        </Wrap>
      )}
      {data.map((playlist, index) => {
        const sampleProps = {
          series: playlist.groups,
          ...playlistProps,
          data: playlist,
          variant,
          dark,
        }
        return <Sample key={'sample' + index} {...sampleProps} />
      })}
    </div>
  )
}
