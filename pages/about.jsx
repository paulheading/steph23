import { Page, Content, Split, Title } from 'components'
import { about } from 'data/seo'
import Image from 'next/image'

export default function About() {
  return (
    <Page head={about}>
      <Content top>
        <Split>
          <div>
            <Title>About</Title>
          </div>
          <div>{/* <Image {...imageProps} alt={title} layout="responsive" /> */}</div>
        </Split>
      </Content>
    </Page>
  )
}
