import { extra, mapIndexGroupIDs } from 'data/playlist/setup'

const id = 1
const extras = {
  playlist_id: id,
  ...extra,
}

const path = {
  winters: (title) => `/audiobooks/series/charlotte-winters/${title}`,
  stella: (title) => `/audiobooks/series/stella-diaries/${title}`,
  saga: (title) => `/audiobooks/series/riley-saga/${title}`,
  margaret: (title) => `/audiobooks/series/margarets-journey/${title}`,
}

let series = {
  title: `Series`,
  id,
  groups: [
    {
      author: `Charlotte Winters Series`,
      genre: `Suspense, 3rd person`,
      id,
      tracks: [
        {
          title: `First Girl Gone`,
          cover: path.winters(`stephanie-cannon-audiobook-narration-3rd-person-charlotte-winters-series-thriller-first-girl-gone-cover-art.webp`),
          src: path.winters(`stephanie-cannon-audiobook-narration-3rd-person-charlotte-winters-series-thriller-first-girl-gone-sample.mp3`),
          ...extras,
        },
        {
          title: `Girl Under Water`,
          cover: path.winters(`stephanie-cannon-audiobook-narration-3rd-person-charlotte-winters-series-thriller-girl-under-water-cover-art.webp`),
          src: path.winters(`stephanie-cannon-audiobook-narration-3rd-person-charlotte-winters-series-thriller-girl-under-water-sample.mp3`),
          ...extras,
        },
        {
          title: `Watch Her Sleep`,
          cover: path.winters(`stephanie-cannon-audiobook-narration-3rd-person-charlotte-winters-series-thriller-watch-her-sleep-cover-art.webp`),
          src: path.winters(`stephanie-cannon-audiobook-narration-3rd-person-charlotte-winters-series-thriller-watch-her-sleep-sample.mp3`),
          ...extras,
        },
      ],
    },
    {
      author: `Angry Birds: Stella Diaries`,
      genre: `Quirky Kids, 1st person`,
      id,
      tracks: [
        {
          title: `Stella Has Enough`,
          cover: path.stella(`stephanie-cannon-us-audiobook-narrator-kids-fiction-angry-birds-stella-diaries-stella-has-enough-cover-art.webp`),
          src: path.stella(`stephanie-cannon-us-audiobook-narration-1st-person-kids-fiction-angry-birds-stella-diaries-stella-has-enough-sample.mp3`),
          ...extras,
        },
        {
          title: `Poppy and the Prank Too Far`,
          cover: path.stella(`stephanie-cannon-us-audiobook-narrator-kids-fiction-angry-birds-stella-diaries-poppy-and-the-prank-too-far-cover-art.webp`),
          src: path.stella(`stephanie-cannon-us-audiobook-1st-person-childrens-narration-fun-angry-birds-stella-diaries-poppy-and-the-prank-too-far-sample.mp3`),
          ...extras,
        },
        {
          title: `Willow Takes the Stage`,
          cover: path.stella(`stephanie-cannon-us-audiobook-narrator-kids-fiction-angry-birds-stella-diaries-willow-takes-the-stage-cover-art.webp`),
          src: path.stella(`stephanie-cannon-us-audiobook-1st-person-narration-kids-fiction-angry-birds-stella-diaries-willow-takes-the-stage-sample.mp3`),
          ...extras,
        },
        {
          title: `Dahlia and the Ultimate Invention`,
          cover: path.stella(`stephanie-cannon-us-audiobook-narrator-kids-fiction-angry-birds-stella-diaries-dahlia-and-the-ultimate-invention-cover-art.webp`),
          src: path.stella(`stephanie-cannon-us-audiobook-narration-1st-person-kids-fiction-angry-birds-stella-diaries-dahlia-and-the-ultimate-invention-sample.mp3`),
          ...extras,
        },
        {
          title: `Luca's Lost Voice`,
          cover: path.stella(`stephanie-cannon-us-audiobook-narrator-childrens-fiction-lucas-lost-voice-cover-art.webp`),
          src: path.stella(`stephanie-cannon-us-audiobook-sample-narrator-childrens-fiction-1st-person-lucas-lost-voice-stella.mp3`),
          ...extras,
        },
      ],
    },
    {
      author: `Riley Sager Novels`,
      genre: `Thriller,  1st person`,
      id,
      tracks: [
        {
          title: `Final Girls`,
          cover: path.saga(`stephanie-cannon-us-audiobook-narration-1st-person-riley-sager-thrillers-final-girls-cover-art.webp`),
          src: path.saga(`stephanie-cannon-us-audiobook-narration-1st-person-riley-sager-thrillers-final-girls-sample.mp3`),
          ...extras,
        },
        {
          title: `The House Across the Lake`,
          cover: path.saga(`stephanie-cannon-audiobook-narrator-1st-person-thriller-riley-sager-the-house-across-the-lake-cover-art.webp`),
          src: path.saga(`stephanie-cannon-audiobook-narrator-thriller-riley-sager-the-house-across-the-lake-sample.mp3`),
          ...extras,
        },
        {
          title: `Lock Every Door`,
          cover: path.saga(`stephanie-cannon-us-audiobook-narration-1st-person-riley-sager-thrillers-lock-every-door-cover-art.webp`),
          src: path.saga(`stephanie-cannon-us-audiobook-narration-1st-person-riley-sager-thrillers-lock-every-door-sample.mp3`),
          ...extras,
        },
        {
          title: `Last Time I Lied`,
          cover: path.saga(`stephanie-cannon-us-audiobook-narration-1st-person-riley-sager-thrillers-the-last-time-i-lied-cover-art.webp`),
          src: path.saga(`stephanie-cannon-us-audiobook-narration-1st-person-riley-sager-thrillers-the-last-time-i-lied-sample.mp3`),
          ...extras,
        },
      ],
    },
    {
      author: `Margaret's Journey Series`,
      genre: `Historical Fiction, 3rd person`,
      id,
      tracks: [
        {
          title: `A Light in the Window`,
          cover: path.margaret(`stephanie-cannon-audiobook-us-narrator-3rd-person-historical-fiction-marion-kummerow-a-light-in-the-window-cover-art.webp`),
          src: path.margaret(`stephanie-cannon-audiobook-us-narration-3rd-person-historical-fiction-marion-kummerow-a-light-in-the-window-sample.mp3`),
          ...extras,
        },
        {
          title: `From the Dark We Rise`,
          cover: path.margaret(`stephanie-cannon-audiobook-us-narrator-historical-fiction-marion-kummerow-from-the-dark-we-rise-cover-art.webp`),
          src: path.margaret(`stephanie-cannon-audiobook-us-narration-3rd-person-marion-kummerow-historical-fiction-from-the-dark-we-rise.mp3`),
          ...extras,
        },
        {
          title: `The Girl in the Shadows`,
          cover: path.margaret(`stephanie-cannon-audiobook-us-narrator-marion-kummerow-the-girl-in-the-shadows-cover-art.webp`),
          src: path.margaret(`stephanie-cannon-audiobook-us-narration-3rd-person-marion-kummerow-historial-fiction-the-girl-in-the-shadows-sample.mp3`),
          ...extras,
        },
      ],
    },
  ],
}

series.groups = mapIndexGroupIDs(series.groups)

export default series
