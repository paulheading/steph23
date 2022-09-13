import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 3
const extras = {
  genre: 'dont-need-this',
  playlist_id: id,
  ...extra,
}

const path = (src) => `/demos/animation/stephanie-cannon-animation-${src}.mp3`

let animation = {
  title: 'Animation',
  id,
  main,
  tracks: [
    {
      title: 'Animation Reel',
      src: path('demo-us-female-comedy-adult-teen-toddler-boy-accents-energetic'),
      ...extras,
    },
    {
      title: '8 yr old boy, US',
      src: path('us-boy-alien-cheeky-sweet-enthusiastic'),
      ...extras,
    },
    {
      title: 'Superheroine girl, spunky',
      src: path('us-girl-spunky-energetic-heroine-funny-emotes'),
      ...extras,
    },
    {
      title: 'US entertainment reporter',
      src: path('us-comic-entertainment-reporter-lively'),
      ...extras,
    },
    {
      title: 'Spanish soap star',
      src: path('spanish-soap-star-hilarious-melodrama'),
      ...extras,
    },
    {
      title: 'Goth, sarcastic, young',
      src: path('us-goth-girl-sarcastic-dry-humour'),
      ...extras,
    },
    {
      title: 'UK Posh older lady',
      src: path('rp-english-posh-older-woman'),
      ...extras,
    },
    {
      title: 'Southern, chicken woman',
      src: path('us-southern-chicken-comic-woman'),
      ...extras,
    },
    {
      title: 'Teen boy, troublemaker',
      src: path('us-teen-boy-troublemaker-aggitated-bully'),
      ...extras,
    },
    {
      title: 'Transylvanian Vampiress',
      src: path('transylvanian-vampire-annoyed'),
      ...extras,
    },
    {
      title: 'Scottish, primary school',
      src: path('scottish-kids-bug-primary-school-elementary-school-adventure'),
      ...extras,
    },
    {
      title: 'Toddler, cute',
      src: path('us-toddler-bratty-sweet'),
      ...extras,
    },
    {
      title: 'Old Jewish woman',
      src: path('us-jewish-old-woman-comic'),
      ...extras,
    },
  ],
}

animation.tracks = mapIndexIDs(animation.tracks)
animation.main = animation.tracks[0]

export default animation
