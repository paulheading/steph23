import { Page, Content } from 'components'
import { acting } from 'scripts/head'

export default function Acting() {
  const pageProps = {
    head: acting,
    menu: 'cream',
    footer: 'cream',
  }
  const contentProps = {
    variant: 'cream',
    top: true,
  }
  return (
    <Page {...pageProps}>
      <Content {...contentProps}>content goes here</Content>
    </Page>
  )
}
