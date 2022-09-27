import { eLearning, advertising, gaming, animation } from 'data/demos'
import { mapIndexIDs } from 'data/playlist/setup'

let intro = [{ ...eLearning.main }, { ...advertising.main }, { ...gaming.main }, { ...animation.main }]

intro = mapIndexIDs(intro)

export default intro
