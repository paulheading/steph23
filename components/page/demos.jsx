import { Page, Container, Wrap } from 'components'

export default function DemosPage({ head, children }) {
  const variant = 'red'
  const pageProps = {
    footer: 'cream',
    menu: variant,
    head,
  }
  const containerProps = {
    top: true,
    variant,
  }
  return (
    <Page {...pageProps}>
      <Container {...containerProps}>
        <Wrap>{children}</Wrap>
      </Container>
    </Page>
  )
}
