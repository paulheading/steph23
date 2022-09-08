import { eLearning, advertising, gaming, series } from 'data/playlist'
import { Samples } from 'components'

export default function UI_Samples() {
  return <Samples data={[eLearning, advertising, gaming, series]} />
}
