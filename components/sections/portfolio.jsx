import { Container, Wrap, Title, Button } from 'components'
import styles from 'styles/components/sections/portfolio.module.scss'
import portfolio from 'data/portfolio'
import { useState } from 'react'

function Links({ link, index, items }) {
  const { src, href } = link
  const backgroundImage = `url(${src})`
  const props = {
    className: styles.link,
    href,
  }
  if (index >= items) return null
  return <a {...props} style={{ backgroundImage }}></a>
}

export function Portfolio() {
  const [items, setItems] = useState(20)
  const increment = 5
  const moreItems = portfolio.length > items

  const containerProps = {
    id: 'portfolio',
    variant: 'red',
  }
  const buttonProps = {
    onClick: () => setItems(items + increment),
    className: styles.button,
    variant: 'red',
  }

  return (
    <Container {...containerProps}>
      <Wrap className={styles.wrap}>
        <Title>Portfolio</Title>
        <p>A selection of my audiobooks is available to buy. Find the one you&apos;re looking for here or visit audible.co.uk or audible.com.</p>
        <div className={styles.wrap}>
          {portfolio.map((link, index) => {
            const props = {
              key: `link${index}`,
              index,
              items,
              link,
            }
            return <Links {...props} />
          })}
        </div>
        {moreItems && <Button {...buttonProps}>More</Button>}
      </Wrap>
    </Container>
  )
}
