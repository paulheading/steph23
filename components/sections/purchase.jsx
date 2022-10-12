import { Container, Wrap, Title, Button } from 'components'
import styles from 'styles/components/sections/purchase.module.scss'
import purchase from 'data/purchase'
import { useState } from 'react'
import { attachVariant } from 'scripts'
import { RiExternalLinkLine } from 'react-icons/ri'

function Links({ link, index, items, variant }) {
  const { src, href } = link
  const backgroundImage = `url(${src})`
  const variantStyle = attachVariant(variant, styles)
  const linkStyles = `${styles.link} ${variantStyle}`
  const overlayStyles = `${styles.overlay} ${variantStyle}`
  const logoStyles = `${styles.logo} ${variantStyle}`
  const props = {
    className: linkStyles,
    target: '_blank',
    href,
  }
  if (index >= items) return null
  return (
    <a {...props} style={{ backgroundImage }}>
      <span className={overlayStyles}>
        <RiExternalLinkLine className={logoStyles} />
      </span>
    </a>
  )
}

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

export function Purchase() {
  const [items, setItems] = useState(20)
  const increment = 5
  const moreItems = purchase.length > items
  const variant = 'red'
  const containerProps = {
    id: 'purchase',
    variant,
  }
  const buttonProps = {
    onClick: () => setItems(items + increment),
    className: styles.button,
    variant,
  }

  return (
    <Container {...containerProps}>
      <Wrap className={styles.wrap}>
        <Title>Purchase</Title>
        <Wrap className="margin-bottom-2">
          <p>
            Add to your audiobook listening collection by selecting any of the below titles, or visit <Link href="https://audible.co.uk">audible.co.uk</Link> or <Link href="https://audible.com">audible.com</Link> to buy.
          </p>
        </Wrap>
        <div className={styles.wrap}>
          {purchase.map((link, index) => {
            const props = {
              variant,
              index,
              items,
              link,
            }
            return <Links key={'links' + index} {...props} />
          })}
        </div>
        {moreItems && <Button {...buttonProps}>More</Button>}
      </Wrap>
    </Container>
  )
}
