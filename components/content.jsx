import { Container, Wrap } from 'components'

export function Content({ variant, children, top = false, section = false, dark = false, wrap = true, className, id }) {
  const containerProps = {
    className,
    section,
    variant,
    dark,
    top,
    id,
  }
  return <Container {...containerProps}>{wrap ? <Wrap>{children}</Wrap> : children}</Container>
}
