import { eLearning, advertising, gaming } from 'data/demos'
import { mapIndexIDs } from 'data/playlist/setup'

let intro = [{ ...eLearning.main }, { ...advertising.main }, { ...gaming.main }]

intro = mapIndexIDs(intro)

export default intro
