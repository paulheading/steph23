import { Fragment } from 'react'
import { Head, Footer } from 'components'
import { Menu } from 'components/ui'

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
