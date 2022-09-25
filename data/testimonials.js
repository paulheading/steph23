import { FlightGirls, GirlUnderWater, One } from 'data/portfolio'

const link = (href, title) => `"<a target='_blank' href='${href}'>${title}</a>"`

const testimonials = [
  {
    quote: `"It is a great pleasure to work with an actor as talented, professional and versatile as Stephanie. Her versatility and creativity in voices and accents added a great variety to our award-winning video game."`,
    author: `Maija Kozlova`,
    role: `Senior Assessment Manager at Cambridge University Press & Assessment`,
  },
  {
    quote: `"You ROCK!!! You’re a STAR!! Everyone loves your voice. Great feedback from all my colleagues, friends and partners."`,
    author: `Alma Moya Losada`,
    role: `Founder of Aequaland`,
  },
  {
    quote: `"Stephanie responded excellently to feedback, had clearly done her research ahead of time and she came very prepared. The thorough approach and her calm, consistent manner was a really great experience for us. She worked quickly and efficiently, maintaining her quality as time went on. I would definitely recommend her to other prospective employers"`,
    author: `Shelby Derbyshire`,
    role: `Digital Theatre`,
  },
  {
    quote: `"You were incredible to work with and read seamlessly. I have heard some of the finished files and they sound awesome - exactly what we were hoping for!"`,
    author: `Ravina Bajwa`,
    role: `Head of Production, Yoto`,
  },
  {
    quote: `"I’m so thrilled to have you on the Mindwalker team! As soon as I was sent your sample I knew we’d found the perfect narrator!!!"`,
    author: `Kate Dylan`,
    role: `author of 'Mindwalker'`,
  },
  {
    quote: `"Stephanie has a wide range of characters in her. She is a pleasure to work with and I look forward to working with her again soon."`,
    author: `Mapi Lucchesi`,
    role: `Casting Director, Lucchesi TV`,
  },
  {
    quote: `"She really was excellent in many ways and could be seen as your 'exemplar' US artist"`,
    author: `Andrew Lea`,
    role: `Cambridge Assessment`,
  },
  {
    quote: `"Stephanie Cannon is something of a genius. She plays each character as if they were herself. Bravo."`,
    role: `Audible review for ${link(FlightGirls.href, 'The Flight Girls')}`,
    rating: true,
  },
  {
    quote: `"Thanks again for your great work and your commitment! The recordings turned out really well"`,
    author: `Andreas Frei`,
    role: `"Rubikon" Film Sound Editor, Frei Audio`,
  },
  {
    quote: `"In spoken word the depth of the novel really does change. The narrator does a brilliant job and I cannot recommend it enough."`,
    author: `Holly B`,
    role: `Audible review for ${link(One.href, 'One')}`,
    rating: true,
  },
  {
    quote: `"I can't fault the experience I've had. We were very pleased with your professionalism, manner and the quality of your voice."`,
    author: `Shelby Derbyshire`,
    role: `Digital Theatre`,
  },
  {
    quote: `"Stephanie Cannon is the absolute best to narrate these stories! Can't wait for the next one!"`,
    author: `Charla White`,
    role: `Audible review for ${link(GirlUnderWater.href, 'Girl Under Water')}`,
    rating: true,
  },
]

export default testimonials
