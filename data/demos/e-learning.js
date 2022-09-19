import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 0
const extras = {
  cover: '/dont-need-this.jpeg',
  genre: 'dont-need-this',
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
}

eLearning.tracks = mapIndexIDs(eLearning.tracks)
eLearning.main = eLearning.tracks[0]

export default eLearning
