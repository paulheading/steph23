import { useState } from 'react'
import { eLearning, advertising, gaming, series } from 'data/playlist'
import { Head, Sample } from 'components'
import styles from 'styles/pages/samples.module.scss'
import { attachVariant } from 'scripts'

export default function UI_Samples() {
  const [samples, setSamples] = useState([eLearning, advertising, gaming, series])
  const [active, setActive] = useState(eLearning.main)
  const [openID, setOpenID] = useState(eLearning.id)
  const handleSetActive = (track) => setActive(track)
  function handleSetOpenID(id) {
    setActive({ ...active, playing: false })
    setOpenID(id)
  }
  const playlistProps = {
    variant: 'red',
    handleSetActive,
    handleSetOpenID,
    toggle: true,
    active,
    openID,
  }

  return (
    <div className={styles.container}>
      <Head />
      <div className={styles.buttons}>
        {samples.map(({ title, id }, index) => {
          const variant = 'red'
          const openClass = openID === id ? styles.open : ''
          const buttonClasses = `${styles.button} ${attachVariant(variant, styles)} ${openClass}`
          return (
            <button key={`button${index}`} onClick={() => handleSetOpenID(id)} className={buttonClasses}>
              {title}
            </button>
          )
        })}
      </div>
      <div className={styles.grid}>
        <Sample data={eLearning} {...playlistProps} />
        <Sample data={advertising} {...playlistProps} />
        <Sample data={gaming} {...playlistProps} />
        <Sample data={series} {...playlistProps} series />
      </div>
    </div>
  )
}
