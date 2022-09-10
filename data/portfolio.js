const path = (src) => `/portfolio/stephanie-cannon-audiobook-narration-${src}-cover-art.jpeg`

const link = (src, href) => ({ src: path(src), href })

const portfolio = [
  link(`3rd-person-charlotte-winters-series-thriller-girl-under-water`, `https://www.google.com`),
  link(`3rd-person-charlotte-winters-series-thriller-watch-her-sleep`, `https://www.google.com`),
  link(`3rd-person-thriller-charlotte-winters-series-first-girl-gone`, `https://www.google.com`),
  link(`science-fiction-bluebird`, `https://www.google.com`),
  link(`3rd-person-historical-fiction-marion-kummerow-a-light-in-the-window`, `https://www.google.com`),
  link(`historical-fiction-marion-kummerow-from-the-dark-we-rise`, `https://www.google.com`),
  link(`marion-kummerow-the-girl-in-the-shadows`, `https://www.google.com`),
  link(`non-fiction-reality-no-reality`, `https://www.google.com`),
  link(`historical-fiction-not-without-my-sister`, `https://www.google.com`),
  link(`3rd-person-riley-sager-thrillers-final-girls`, `https://www.google.com`),
  link(`3rd-person-riley-sager-thrillers-lock-every-door`, `https://www.google.com`),
  link(`3rd-person-riley-sager-thrillers-the-last-time-i-lied`, `https://www.google.com`),
  link(`young-adult-one`, `https://www.google.com`),
  link(`apex`, `https://www.google.com`),
  link(`black-widows`, `https://www.google.com`),
  link(`blackwood`, `https://www.google.com`),
  link(`buried`, `https://www.google.com`),
  link(`childrens-fiction-lucas-lost-voice`, `https://www.google.com`),
  link(`childrens-fiction-on-the-shelf`, `https://www.google.com`),
  link(`childrens-ya-the-great-unexpected`, `https://www.google.com`),
  link(`everybody-lies`, `https://www.google.com`),
  link(`fiction-contemporary-the-origins-of-iris`, `https://www.google.com`),
  link(`fiction-southern-1st-person-south-carolina-the-note`, `https://www.google.com`),
  link(`hes-at-your-door`, `https://www.google.com`),
  link(`historical-fiction-flight-girls`, `https://www.google.com`),
  link(`how-it-ends`, `https://www.google.com`),
  link(`indecent`, `https://www.google.com`),
  link(`kids-fiction-angry-birds-stella-diaries-dahlia-and-the-ultimate-invention`, `https://www.google.com`),
  link(`kids-fiction-angry-birds-stella-diaries-poppy-and-the-prank-too-far`, `https://www.google.com`),
  link(`kids-fiction-angry-birds-stella-diaries-stella-has-enough`, `https://www.google.com`),
  link(`kids-fiction-angry-birds-stella-diaries-willow-takes-the-stage`, `https://www.google.com`),
  link(`kids-fiction-stella-has-enough`, `https://www.google.com`),
  link(`landing`, `https://www.google.com`),
  link(`love-between-the-lines`, `https://www.google.com`),
  link(`monsoon-season`, `https://www.google.com`),
  link(`my-daughters-mistake`, `https://www.google.com`),
  link(`navel-gazing`, `https://www.google.com`),
  link(`non-fiction-getting-it-done-when-youre-depressed`, `https://www.google.com`),
  link(`romance-promises-at-indigo-bay`, `https://www.google.com`),
  link(`science-fiction-dreams-the-sarah-midnight-trilogy`, `https://www.google.com`),
  link(`science-fiction-dreamspinner`, `https://www.google.com`),
  link(`science-fiction-the-poison-eater`, `https://www.google.com`),
  link(`somebody-to-love`, `https://www.google.com`),
  link(`strange-truth`, `https://www.google.com`),
  link(`suspense-one-night-new-york`, `https://www.google.com`),
  link(`the-boys-club`, `https://www.google.com`),
  link(`the-coral-bride`, `https://www.google.com`),
  link(`the-fall-of-deadworld`, `https://www.google.com`),
  link(`the-marriage-lie`, `https://www.google.com`),
  link(`the-marriage-secret`, `https://www.google.com`),
  link(`the-night-before`, `https://www.google.com`),
  link(`the-one-who-wrote-destiny`, `https://www.google.com`),
  link(`the-holiday-swap`, `https://www.google.com`),
  link(`thriller-a-knock-at-the-door`, `https://www.google.com`),
  link(`ya-lgbtq-pulp`, `https://www.google.com`),
  link(`zombies-at-tiffanies`, `https://www.google.com`),
  link(`zombies-in-new-york`, `https://www.google.com`),
  link(`the-bench`, `https://www.google.com`),
  link(`historical-fiction-the-lost-mother`, `https://www.google.com`),
]

export default portfolio