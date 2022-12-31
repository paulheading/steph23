import { useEffect, useState } from 'react'
import { Container, Wrap, Button } from 'components'
import styles from 'styles/components/sections/testimonials.module.scss'
import data from 'data/testimonials'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import { GoStar } from 'react-icons/go'
import parse from 'html-react-parser'
import { testimonials, query } from 'scripts'

function Testimonial({ className, quote, author, role, rating }) {
  const hasAuthor = author ? `${author},` : ''
  const context = `${hasAuthor} ${role}`
  const customClass = {
    className: className ? className : null,
  }
  return (
    <div {...customClass}>
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
  const { clear, animatePrev, animateNext } = testimonials
  const variant = 'yellow'
  const length = data.length - 1
  const containerProps = {
    variant,
  }
  const prevButtonProps = {
    onClick: () => {
      animatePrev(null, prevQuote)
    },
    variant,
  }
  const nextButtonProps = {
    onClick: () => {
      animateNext(null, nextQuote)
    },
    id: 'next',
    variant,
  }

  function prevQuote() {
    if (quoteID === 0) setQuoteID(length)
    else setQuoteID((quoteID) => quoteID - 1)
  }

  function nextQuote() {
    if (quoteID === length) setQuoteID(0)
    else setQuoteID((quoteID) => quoteID + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const { desktop } = query

      desktop.down(clear)

      desktop.up(() => {
        const nextButton = document.getElementById('next')

        function start() {
          nextButton.style.backgroundColor = '#341919'
          nextButton.style.color = '#ffb866'
        }
        function end() {
          if (quoteID === length) setQuoteID(0)
          else setQuoteID((quoteID) => quoteID + 1)
          nextButton.removeAttribute('style')
        }

        animateNext(start, end)
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [quoteID, length, animateNext, clear])

  return (
    <Container {...containerProps}>
      <Wrap className={styles.wrap}>
        <Button {...prevButtonProps}>
          <HiOutlineArrowLeft />
        </Button>
        <div id="testimonial">
          {data.map((testimonial, index) => {
            if (quoteID !== index) return
            return <Testimonial key={'testimonial' + index} {...testimonial} />
          })}
        </div>
        <Button {...nextButtonProps}>
          <HiOutlineArrowRight />
        </Button>
      </Wrap>
    </Container>
  )
}
