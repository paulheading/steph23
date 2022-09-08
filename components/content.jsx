import { Container, Wrap } from 'components'

export function Content({ variant, children, top = false, section = false, dark = false, wrap = true, className }) {
  const containerProps = {
    className,
    section,
    variant,
    dark,
    top,
  }
  return <Container {...containerProps}>{wrap ? <Wrap>{children}</Wrap> : children}</Container>
}
