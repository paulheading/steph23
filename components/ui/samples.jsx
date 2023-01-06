import { forwardRef, useState } from 'react'
import { Wrap } from 'components'
import { Sample } from 'components/ui'
import styles from 'styles/components/ui/samples.module.scss'
import { attachVariant } from 'scripts'

const Samples = forwardRef(({ data, variant = 'green', dark = false, active, setActive, animate }, ref) => {
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

  function Buttons({ title, id }, index) {
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
  }

  function Content(playlist, index) {
    const sampleProps = {
      series: playlist.groups,
      ...playlistProps,
      data: playlist,
      animate,
      variant,
      dark,
    }
    return <Sample key={'sample' + index} {...sampleProps} />
  }

  const containerProps = {
    className: styles.container,
    ref,
  }

  return (
    <div {...containerProps}>
      {needsButtons && (
        <Wrap className="margin-bottom-2">
          <div className={styles.buttons}>{samples.map(Buttons)}</div>
        </Wrap>
      )}
      {data.map(Content)}
    </div>
  )
})

Samples.displayName = 'Samples'

export { Samples }
