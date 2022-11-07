import { useState } from 'react'
import { Container, Wrap, Button } from 'components'
import styles from 'styles/components/sections/testimonials.module.scss'
import data from 'data/testimonials'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import { GoStar } from 'react-icons/go'
import parse from 'html-react-parser'

function Testimonial({ quote, author, role, rating }) {
  const hasAuthor = author ? `${author},` : ''
  const context = `${hasAuthor} ${role}`
  return (
    <div>
      <div className={styles.quote}>{quote}</div>
      {rating && (
        <div className={styles.rating}>
          <GoStar className={styles.star} />
          <GoStar className={styles.star} />
          <GoStar className={styles.star} />
          <GoStar className={styles.star} />
          <GoStar className={styles.star} />
        </div>
      )}
      <div className={styles.author}>{parse(context)}</div>
    </div>
  )
}

export function Testimonials() {
  const [quoteID, setQuoteID] = useState(0)
  const variant = 'yellow'
  const length = data.length - 1
  const containerProps = {
    variant,
  }
  const prevButtonProps = {
    onClick: prevItem,
    variant,
  }
  const nextButtonProps = {
    onClick: nextItem,
    variant,
  }
  function prevItem() {
    if (quoteID === 0) setQuoteID(length)
    else setQuoteID(quoteID - 1)
  }
  function nextItem() {
    if (quoteID === length) setQuoteID(0)
    else setQuoteID(quoteID + 1)
  }
  return (
    <Container {...containerProps}>
      <Wrap className={styles.wrap}>
        <Button {...prevButtonProps}>
          <HiOutlineArrowLeft />
        </Button>
        {data.map((testimonial, index) => {
          if (quoteID !== index) return
          return <Testimonial key={'testimonial' + index} {...testimonial} />
        })}
        <Button {...nextButtonProps}>
          <HiOutlineArrowRight />
        </Button>
      </Wrap>
    </Container>
  )
}
