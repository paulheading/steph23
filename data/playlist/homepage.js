import { eLearning, advertising, gaming, animation, studio } from 'data/demos'
import { mapIndexIDs } from 'data/playlist/setup'

let homepage = [{ ...eLearning.audio.main }, { ...advertising.audio.main }, { ...gaming.audio.main }, { ...animation.audio.main }, { ...studio.audio.main }]

homepage = mapIndexIDs(homepage)

export default homepage
