import { Fragment } from 'react'
import { Head, Menu, Footer } from 'components'

export function Page({ head, children, menu, footer }) {
  return (
    <Fragment>
      <Head {...head} />
      <Menu variant={menu} />
      {children}
      <Footer variant={footer} />
    </Fragment>
  )
}
