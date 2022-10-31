import { Fragment } from 'react'
import { Head, Footer } from 'components'
import { Menu } from 'components/ui'
import useMediaQuery from 'hooks/useMediaQuery'
import { Burger } from 'components/ui/menu/burger'

export function Page({ head, children, menu = 'green', footer = 'green' }) {
  const isDesktop = useMediaQuery(`(min-width: 768px)`)
  const menuProps = {
    variant: menu,
  }

  return (
    <Fragment>
      <Head {...head} />
      {isDesktop ? <Menu {...menuProps} /> : <Burger {...menuProps} />}
      {children}
      <Footer variant={footer} />
    </Fragment>
  )
}
