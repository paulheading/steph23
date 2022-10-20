import NextLink from 'next/link'

export function Link({ href, children, bold = false, target = '_self' }) {
  return (
    <NextLink href={href}>
      <a target={target}>{bold ? <strong>{children}</strong> : children}</a>
    </NextLink>
  )
}
