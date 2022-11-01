import { Fragment, useEffect } from 'react'
import { Head, Footer } from 'components'
import { Burger, Menu } from 'components/ui'
import useMediaQuery from 'hooks/useMediaQuery'
import gsap from 'gsap'

export function Page({ head, children, menu = 'green', footer = 'green' }) {
  const isDesktop = useMediaQuery(`(min-width: 768px)`)

  useEffect(() => {
    if (isDesktop) gsap.set('body', { clearProps: 'overflow' })
  }, [isDesktop])

  return (
    <Fragment>
      <Head {...head} />
      {isDesktop ? <Menu variant={menu} /> : <Burger variant={menu} />}
      {children}
      <Footer variant={footer} />
    </Fragment>
  )
}
