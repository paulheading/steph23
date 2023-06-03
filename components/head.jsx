import NextHead from 'next/head'
import { twitter } from 'data/seo'

export function Head({ title, keywords, desc }) {
  title = title ? title : 'Stephanie Cannon / Home page / Female Voiceover Artist'
  return (
    <NextHead>
      <title>{title}</title>
      {keywords && <meta name="keywords" content={keywords} />}
      {desc && <meta name="description" content={desc} />}
      <meta name="author" content="Stephanie Cannon" />
      <link rel="icon" href="/favicon.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter.handle} />
      <meta name="twitter:title" content={twitter.title} />
      <meta name="twitter:description" content={twitter.desc} />
      <meta name="twitter:image" content={twitter.image} />
    </NextHead>
  )
}
