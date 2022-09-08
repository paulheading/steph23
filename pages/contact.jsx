import { Page, Content } from 'components'
import { contact } from 'scripts/head'

export default function Contact() {
  const pageProps = {
    head: contact,
    menu: 'yellow',
    footer: 'yellow',
  }
  const contentProps = {
    variant: 'yellow',
    top: true,
  }
  return (
    <Page {...pageProps}>
      <Content {...contentProps}>content goes here</Content>
    </Page>
  )
}
