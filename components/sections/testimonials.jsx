import styles from 'styles/components/sections/testimonials.module.scss'
import { Container, Wrap, Button } from 'components'
import { useRef, useEffect, useState, forwardRef } from 'react'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import { GoStar } from 'react-icons/go'
import parse from 'html-react-parser'
import data from 'data/testimonials'
import { testimonials, query } from 'scripts'

function Testimonial({ className, quote, author, role, rating }) {
  rating = rating ? Array(rating).fill(0) : null

  const hasAuthor = author ? `${author},` : ''
  const context = `${hasAuthor} ${role}`
  const customClass = {
    className: className ? className : null,
  }

  const Rating = () => (
    <div className={styles.rating}>
      {rating.map((_, index) => (
        <GoStar key={'star' + index} className={styles.star} />
      ))}
    </div>
  )

  return (
    <div {...customClass}>
      <div className={styles.quote}>{quote}</div>
      {rating && <Rating />}
      <div className={styles.author}>{parse(context)}</div>
    </div>
  )
}

function Testimonials() {
  const { clear, animatePrev, animateNext } = testimonials
  const [quoteID, setQuoteID] = useState(0)
  const targetRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const variant = 'yellow'
  const length = data.length - 1

  const prevButtonProps = {
    onClick: () => animatePrev(targetRef.current, null, prevQuote),
    ref: prevRef,
    variant,
  }

  const nextButtonProps = {
    onClick: () => animateNext(targetRef.current, null, nextQuote),
    ref: nextRef,
    variant,
  }

  const prevQuote = () => (quoteID === 0 ? setQuoteID(length) : setQuoteID((quoteID) => quoteID - 1))

  const nextQuote = () => (quoteID === length ? setQuoteID(0) : setQuoteID((quoteID) => quoteID + 1))

  function Data(testimonial, index) {
    if (quoteID !== index) return
    return <Testimonial key={'testimonial' + index} {...testimonial} />
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!nextRef || !targetRef) return

      const { desktop } = query

      desktop.down(() => clear(targetRef.current))

      desktop.up(() => {
        function start() {
          nextRef.current.style.backgroundColor = '#341919'
          nextRef.current.style.color = '#ffb866'
        }
        function end() {
          if (quoteID === length) setQuoteID(0)
          else setQuoteID((quoteID) => quoteID + 1)
          nextRef.current.removeAttribute('style')
        }

        animateNext(targetRef.current, start, end)
      })
    }, 3000)

    return () => clearInterval(interval)
  })

  return (
    <Container variant={variant}>
      <Wrap className={styles.wrap}>
        <Button {...prevButtonProps}>
          <HiOutlineArrowLeft />
        </Button>
        <div ref={targetRef}>{data.map(Data)}</div>
        <Button {...nextButtonProps}>
          <HiOutlineArrowRight />
        </Button>
      </Wrap>
    </Container>
  )
}

export { Testimonials }
