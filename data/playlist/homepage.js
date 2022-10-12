import { eLearning, advertising, gaming, animation, studio } from 'data/demos'
import { mapIndexIDs } from 'data/playlist/setup'

let homepage = [{ ...eLearning.main }, { ...advertising.main }, { ...gaming.main }, { ...animation.main }, { ...studio.main }]

homepage = mapIndexIDs(homepage)

export default homepage
