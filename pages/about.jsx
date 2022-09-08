import { Page, Content } from 'components'
import { acting } from 'scripts/head'

export default function About() {
  return (
    <Page head={acting}>
      <Content top>content goes here</Content>
    </Page>
  )
}
