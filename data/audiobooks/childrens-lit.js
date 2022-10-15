import { extra, mapIndexIDs } from 'data/playlist/setup'

const id = 5
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (title) => `/audiobooks/childrens-lit/${title}`

let childrensLit = {
  title: `Childrens Lit`,
  id,
  tracks: [
    {
      title: [`Nursery`, `3rd person`],
      cover: path(`stephanie-cannon-us-audiobook-narrator-childrens-first-fairy-tales-cover-art.webp`),
      src: path(`stephanie-cannon-childrens-us-audiobook--narrator-3rd-person-little-red-riding-hood-fairytale-sample.mp3`),
      ...extras,
    },
    {
      title: [`Quirky`, `1st person`],
      cover: path(`stephanie-cannon-us-audiobook-narrator-kids-fiction-stella-has-enough-cover-art.webp`),
      src: path(`stephanie-cannon-us-audiobook-kids-fiction-narration-upbeat-quirky-angry-birds-sample.mp3`),
      ...extras,
    },
    {
      title: [`Southern`, `1st person`],
      cover: path(`stephanie-cannon-us-audiobook-narrator-childrens-ya-the-great-unexpected-cover-art.webp`),
      src: path(`stephanie-cannon-children-us-narrator-fiction-audiobook-ya-1st-person-the-great-unexpected-southern-accent-sample.mp3`),
      ...extras,
    },
  ],
}

childrensLit.tracks = mapIndexIDs(childrensLit.tracks)

export default childrensLit
