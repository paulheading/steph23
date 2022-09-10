import { Page, Content } from 'components'
import { acting } from 'data/seo'

export default function About() {
  return (
    <Page head={acting}>
      <Content top>content goes here</Content>
    </Page>
  )
}
