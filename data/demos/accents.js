import { main, extra, mapIndexIDs } from 'data/playlist/setup'

const id = 10
const extras = {
  playlist_id: id,
  ...extra,
}

const path = (src) => `/demos/accents/stephanie-cannon-${src}.mp3`

let accents = {
  audio: {
    title: 'UK / International Accents',
    id,
    main,
    tracks: [
      {
        title: 'Foreign Accent Reel',
        src: path('foreign-accent-demo-animation-e-learning-audiobooks-corporate-radio-drama-gaming-rp-scottish-spanish-eastern-europe'),
        ...extras,
      },
      {
        title: 'RP Villain, Gaming, Drama',
        src: path('rp-gaming-villain-serious-big-boss'),
        ...extras,
      },
      {
        title: 'Scottish, Animation, Kids',
        src: path('animation-scottish-kids-bug-primary-school-elementary-school-adventure'),
        ...extras,
      },
      {
        title: 'Spanish, Comic, Animation',
        src: path('animation-spanish-soap-star-hilarious-melodrama'),
        ...extras,
      },
      {
        title: 'Transylvanian, Animation',
        src: path('animation-transylvanian-vampire-annoyed'),
        ...extras,
      },
      {
        title: `RP Corporate, Friendly`,
        src: path('corporate-rp-young-friendly-online-assistant-barbican'),
        ...extras,
      },
      {
        title: `UK Audiobook, Kids' Fiction`,
        src: path('teen-uk-children-audiobook-narration-dialogue-girl-boy-rp'),
        ...extras,
      },
      {
        title: `RP Posh Older Lady, Animation`,
        src: path('animation-rp-english-posh-older-woman'),
        ...extras,
      },
      {
        title: `RP E-Learning Character, ELT`,
        src: path('rp-e-learning-quirky-friendly-comic-character'),
        ...extras,
      },
      {
        title: `Spanish Language, Preschool Book`,
        src: path('spanish-language-preschool-audiobook'),
        ...extras,
      },
    ],
  },
}

accents.audio.tracks = mapIndexIDs(accents.audio.tracks)
accents.audio.main = accents.audio.tracks[0]

export default accents
