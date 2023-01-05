import { Fragment, useEffect } from 'react'
import { Head, Footer } from 'components'
import { Burger, Menu } from 'components/ui'
import useMediaQuery from 'hooks/useMediaQuery'
import { page } from 'scripts'

export function Page({ head, children, menu = 'green', footer = 'green' }) {
  const isTablet = useMediaQuery(`(min-width: 768px)`)

  useEffect(() => {
    const { reset } = page
    reset('body')
  }, [isTablet])

  return (
    <Fragment>
      <Head {...head} />
      {isTablet ? <Menu variant={menu} /> : <Burger variant={menu} />}
      {children}
      <Footer variant={footer} />
    </Fragment>
  )
}
