const href = ''

const createLink = (title) => ({ title, href })

let menu = [
  createLink('Home'),
  {
    title: 'Demos',
    href,
    items: [createLink('View all'), createLink('E-Learning')],
  },
  createLink('Audiobooks'),
  createLink('Acting'),
  createLink('About'),
  createLink('Contact'),
]

function mapHrefs(menu) {
  return menu.map((item) => {
    const isHome = item.title === 'Home'
    const hasItems = item.items
    const createHref = (title) => `/${title.toLowerCase().replace(' ', '-')}`

    if (!isHome || !hasItems) item.href = createHref(item.title)
    if (isHome) item.href = '/'
    if (hasItems) {
      item.href = createHref(item.title)
      item.items.map((anchor, index) => {
        if (index === 0) anchor.href = item.href
        else anchor.href = item.href + createHref(anchor.title)
        return anchor
      })
    }
    return item
  })
}

menu = mapHrefs(menu)

export default menu
