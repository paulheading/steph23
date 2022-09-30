import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 7
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (title) => `/demos/audiobooks/${title}`

let audiobooks = {
  title: 'Audiobooks',
  id,
  main,
  tracks: [
    {
      title: 'suspense, 3rd person',
      src: path('stephanie-cannon-third-person-dialogue-suspense-strange-things-done-audiobook-sample.mp3'),
      ...extras,
    },
    {
      title: 'southern, drama, 1st person',
      src: path('stephanie-cannon-us-audiobook-narrator-fiction-southern-1st-person-south-carolina-sample-the-note.mp3'),
      ...extras,
    },
    {
      title: 'teen, 1st person, dialogue',
      src: path('stephanie-cannon-us-audiobook-narrator-ya-fiction-sample-teen-child-1st-person-dialogue-one.mp3'),
      ...extras,
    },
    {
      title: 'wry, sci fi, 3rd person',
      src: path('stephanie-cannon-us-audiobook-3rd-person-narration-science-fiction-bluebird-sample.mp3'),
      ...extras,
    },
    {
      title: 'classic, transatlantic, 3rd person',
      src: path('stephanie-cannon-transatlantic-audiobook-sample-classic-fiction-3rd-person-narration-dialogue-male-female-the-age-of-innocence.mp3'),
      ...extras,
    },
    {
      title: 'kids, bright, 3rd person',
      src: path('stephanie-cannon-children-us-narrator-audiobook-sample-on-the-shelf-toddler-fiction-3rd-person.mp3'),
      ...extras,
    },
    {
      title: 'non fiction, conversational',
      src: path('stephanie-cannon-non-fiction-us-branding-that-means-business-audiobook-sample.mp3'),
      ...extras,
    },
    {
      title: 'quirky, kids, 1st person',
      src: path('stephanie-cannon-us-audiobook-sample-narrator-childrens-fiction-1st-person-lucas-lost-voice-stella.mp3'),
      ...extras,
    },
    {
      title: 'comic, light, 1st person',
      src: path('stephanie-cannon-us-narration-romance-light-1st-person-sample-promises-at-indigo-bay-audiobook.mp3'),
      ...extras,
    },
  ],
}

audiobooks.tracks = mapIndexIDs(audiobooks.tracks)
audiobooks.main = audiobooks.tracks[0]

export default audiobooks
