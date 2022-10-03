import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 0
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (src) => `/demos/advertising/stephanie-cannon-us-commercial-${src}.mp3`

let advertising = {
  title: 'Advertising',
  id,
  main,
  tracks: [
    {
      title: 'Advertising Reel',
      src: `/demos/advertising/stephanie-cannon-advertising-demo-us-comic-smooth-character-real-upbeat-hip.mp3`,
      ...extras,
    },
    {
      title: 'Upbeat, funny, girly',
      src: path('upbeat-funny-girly-gordons-gin'),
      ...extras,
    },
    {
      title: 'Smooth, enticing, warm',
      src: path('smooth-enticing-warm-engaging-samsung'),
      ...extras,
    },
    {
      title: 'Drama/Comedy, everywoman',
      src: path('comedy-drama-everywoman-audible-transatlantic'),
      ...extras,
    },
    {
      title: 'Sultry, midatlantic, alluring',
      src: path('sultry-midatlantic-alluring-mitsubishi'),
      ...extras,
    },
    {
      title: 'Bright, young, exciting',
      src: path('bright-young-exciting-kids-kinder-surprise'),
      ...extras,
    },
    {
      title: 'Cool, teen, confident',
      src: path('cool-teen-confident-young-hip-revlon'),
      ...extras,
    },
  ],
}

advertising.tracks = mapIndexIDs(advertising.tracks)
advertising.main = advertising.tracks[0]

export default advertising
