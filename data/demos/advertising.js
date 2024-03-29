import { main, extra, mapIndexIDs } from 'data/playlist/setup'
import vimeo from 'data/vimeo'

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
  videos: [
    {
      title: '24 Hr Fitness Commercial',
      src: vimeo('759504478?h=91268d4bde'),
      caption: 'Cheerful, Conversational',
    },
    {
      title: 'Artfinder Commercial',
      src: vimeo('759489225?h=f4780e652b'),
      caption: 'Smooth, Hip, Enticing',
    },
  ],
}

advertising.tracks = mapIndexIDs(advertising.tracks)
advertising.main = advertising.tracks[0]

export default advertising
