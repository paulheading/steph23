import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 0
const extras = {
  genre: '3rd person, suspense',
  playlist_id: id,
  ...extra,
}

let eLearning = {
  title: 'E Learning',
  id,
  main,
  tracks: [
    {
      src: '/demos/stephanie-cannon-advertising-demo-us-comic-smooth-character-real-upbeat-hip.mp3',
      cover: '/audiobooks/stephanie-cannon-us-audiobook-narrator-childrens-fiction-lucas-lost-voice-cover-art.jpeg',
      title: 'one',
      ...extras,
    },
    {
      src: '/demos/stephanie-cannon-animation-demo-us-female-comedy-adult-teen-toddler-boy-accents-energetic.mp3',
      cover: '/audiobooks/stephanie-cannon-us-audiobook-narrator-fiction-southern-1st-person-south-carolina-the-note-cover-art.jpeg',
      title: 'two',
      ...extras,
    },
    {
      src: '/demos/stephanie-cannon-advertising-demo-us-comic-smooth-character-real-upbeat-hip.mp3',
      cover: '/audiobooks/stephanie-cannon-us-audiobook-narrator-the-coral-bride-cover-art.jpeg',
      title: 'three',
      ...extras,
    },
  ],
}

eLearning.tracks = mapIndexIDs(eLearning.tracks)
eLearning.main = eLearning.tracks[0]

export default eLearning
