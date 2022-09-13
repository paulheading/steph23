import { useState } from 'react'
import { eLearning, advertising, gaming, series } from 'data/demos'
import { Samples } from 'components/ui'

export default function UI_Samples() {
  const [active, setActive] = useState(eLearning.main)
  const props = {
    data: [eLearning, advertising, gaming, series],
    setActive,
    active,
  }
  return <Samples {...props} />
}
