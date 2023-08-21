import { main, extra, mapIndexIDs } from 'data/playlist/setup'
import vimeo from 'data/vimeo'

const id = 2
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (src) => `/demos/e-learning/stephanie-cannon-us-e-learning-${src}.mp3`

let eLearning = {
  title: 'E-Learning',
  id,
  main,
  tracks: [
    {
      title: 'E-Learning Reel',
      src: `/demos/e-learning/stephanie-cannon-elearning-demo-modules-elt-conversational-teen-kid-us.mp3`,
      ...extras,
    },
    {
      title: 'Down to earth, 30s',
      src: path('down-to-earth-30s-environmental-real'),
      ...extras,
    },
    {
      title: 'Professional, engaging',
      src: path('professional-corporate-engaging-office-module'),
      ...extras,
    },
    {
      title: 'Cheeky, relatable, comic',
      src: path('cheeky-relatable-comic-food-hygiene'),
      ...extras,
    },
    {
      title: 'Reassuring, Calm, informative',
      src: path('medical-reassuring-calm-informative-knowledgable-covid'),
      ...extras,
    },
    {
      title: 'Motivating, upbeat',
      src: path('motivating-upbeat-wefit'),
      ...extras,
    },
    {
      title: 'Conversational, friendly',
      src: path('conversational-friendly-roleplay-rachel'),
      ...extras,
    },
    {
      title: 'Kids, fun, enthusiastic',
      src: path('kids-fun-enthusiastic-science'),
      ...extras,
    },
    {
      title: 'Teen character, mental health',
      src: path('teen-character-mental-health'),
      ...extras,
    },
    {
      title: 'Medical, authoritative',
      src: path('medical-authoritative-educated-anatomy'),
      ...extras,
    },
  ],
  videos: [
    {
      title: 'stephanie-cannon-us-e-learning-video-educational-theatre-secondary-school-high-school-digital-theatre',
      src: vimeo('759551069?h=98e58eba98'),
      caption: 'Friendly, Relatable',
    },
  ],
}

eLearning.tracks = mapIndexIDs(eLearning.tracks)
eLearning.main = eLearning.tracks[0]

export default eLearning
