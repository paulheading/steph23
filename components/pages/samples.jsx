import { Content, Title } from 'components'
import { Samples as SamplesUI } from 'components/ui'
import styles from 'styles/components/pages/samples.module.scss'

export function Samples({ data, variant, dark = false, active, setActive }) {
  const contentProps = {
    className: styles.content,
    section: true,
    variant,
    dark,
  }
  const samplesProps = {
    setActive,
    variant,
    active,
    data,
    dark,
  }
  return (
    <Content {...contentProps}>
      <Title>Samples</Title>
      <SamplesUI {...samplesProps} />
    </Content>
  )
}
