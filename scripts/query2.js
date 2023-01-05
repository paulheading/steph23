import gsap from 'gsap'

const query2 = () =>
  gsap.matchMedia().add(
    {
      isDesktop: `(min-width: 1025px)`,
      isTablet: `(min-width: 768px)`,
    },
    (context) => {
      return context
    }
  )

export { query2 }
