import NextHead from 'next/head'
import { home } from 'data/seo'

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
      <meta name="twitter:site" content="@sparkthecannon" />
      <meta name="twitter:title" content={home.title} />
      <meta name="twitter:description" content={home.desc} />
      <meta name="twitter:image" content="/twitter_image.jpg" />
    </NextHead>
  )
}
