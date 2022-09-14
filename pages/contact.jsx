import { Page, Container, Wrap, Split, Title, Image } from 'components'
import { contact as head } from 'data/seo'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from 'styles/pages/contact.module.scss'

export default function Contact() {
  const [formSuccess, setFormSuccess] = useState(false)
  const formRef = useRef(null)
  const submitRef = useRef(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  function onSubmit(form) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => setFormSuccess(true))
      .catch((error) => alert(error))
  }

  const variant = 'yellow'
  const pageProps = {
    footer: variant,
    menu: variant,
    head,
  }
  const containerProps = {
    section: false,
    top: true,
    variant,
  }
  const formProps = {
    onSubmit: handleSubmit(onSubmit),
    'data-netlify': true,
    name: 'contact',
    method: 'post',
    ref: formRef,
  }
  const subjectProps = {
    type: 'text',
    name: 'subject',
    id: 'subject',
    placeholder: 'Hey there!',
  }
  const fromProps = {
    type: 'email',
    name: 'from',
    id: 'from',
    placeholder: 'friendly@visitor.org',
  }
  const messageProps = {
    placeholder: 'Message',
    name: 'message',
    id: 'message',
  }
  const submitProps = {
    ref: submitRef,
    type: 'submit',
  }
  const imageProps = {
    src: 'stephanie-cannon-headshot-acting-page',
    variant,
  }
  return (
    <Page {...pageProps}>
      <Container {...containerProps}>
        <Wrap className={styles.wrap}>
          <Title>Contact</Title>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam mollitia ipsam repellat voluptates ullam at impedit architecto commodi, vero nihil expedita cum nam asperiores, nostrum quis saepe ea sapiente cupiditate?</p>
          <Split className={styles.split}>
            <div>
              <form {...formProps}>
                <div>
                  <label htmlFor="subject">Subject</label>
                  <input {...register('subject')} {...subjectProps} />
                </div>
                <div>
                  <label htmlFor="from">From</label>
                  <input {...register('from')} {...fromProps} />
                </div>
                <div>
                  <textarea {...register('message')} {...messageProps} />
                </div>
                <div>
                  <button {...submitProps}>Submit</button>
                </div>
              </form>
            </div>
            <div>
              <Image {...imageProps} alt={imageProps.src} />
            </div>
          </Split>
        </Wrap>
      </Container>
    </Page>
  )
}
