let id = 0
let progress = 0
let duration = 0
let playing = false

export const extra = {
  favourite: false,
  progress,
  duration,
  playing,
  id,
}

export const main = {
  src: '',
  title: '',
  ...extra,
}

export function indexID(thing, index) {
  thing.id = index
  return thing
}

export function mapIndexIDs(tracks) {
  tracks = tracks.map(indexID)
  return tracks
}

export function mapIndexGroupIDs(groups) {
  return groups.map((group, index) => {
    group.id = index
    group.tracks = mapIndexIDs(group.tracks)
    return group
  })
}
