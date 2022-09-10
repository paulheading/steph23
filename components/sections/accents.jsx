import accents from 'data/accents'
import { Content, Title } from 'components'
import styles from 'styles/components/sections/accents.module.scss'

function Place(place, index) {
  const props = {
    className: styles.place,
    key: `place${index}`,
  }
  return <li {...props}>{place}</li>
}

function Area({ area, places }, index) {
  const props = {
    className: styles.area,
    key: `area${index}`,
  }
  return (
    <ul {...props}>
      <li className={styles.area_name}>{area}</li>
      {places.map(Place)}
    </ul>
  )
}

function Region({ region, areas }, index) {
  const props = {
    className: styles.region,
    key: `region${index}`,
  }
  return (
    <div {...props}>
      <div className={styles.region_inner}>
        <div className={styles.region_name}>{region}</div>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.areas}>{areas.map(Area)}</div>
    </div>
  )
}

export function Accents() {
  const props = {
    className: 'text-align-center',
    id: 'accents',
    dark: true,
  }
  return (
    <Content {...props}>
      <Title>Accents</Title>
      <p>I&apos;ve got a great ear and passion for accents.</p>
      <p>
        Born in Alaska, my native accent is Standard American or West Coast. Having lived in London half my life, I also speak with a neutral Transatlantic accent. I&apos;ve been fortunate to live all over the world from Mexico to Sydney and in that time have collected a lot of brilliant accents.
        Here&apos;s a selection of accents I perform regularly. If you don&apos;t see the one you&apos;re after, let&apos;s talk! I love an excuse for research and full immersion!
      </p>
      {accents.map(Region)}
    </Content>
  )
}
