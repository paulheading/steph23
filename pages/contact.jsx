import contactImage from 'public/stephanie-cannon-headshot-contact-page-stephanie-cannon.webp'
import { Page, Container, Wrap, Split, Title, ImageWrap, Link } from 'components'
import styles from 'styles/pages/contact.module.scss'
import { useEffect, useState, useRef } from 'react'
import { imageProps, contact } from 'scripts'
import { contact as head } from 'data/seo'
import { useForm } from 'react-hook-form'
import { FormRow } from 'components/ui'
import Image from 'next/image'

export default function Contact() {
  const { input, row } = contact
  const formRef = useRef(null)
  const [inProgress, setInProgress] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm()

  useEffect(() => {
    if (isSubmitSuccessful)
      setTimeout(() => {
        setInProgress(false)
        reset()
      }, 1000)
  }, [isSubmitSuccessful, reset])

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  function onSubmit(form) {
    setInProgress(true)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    }).catch((error) => alert(error))
  }

  const variant = 'yellow'

  const pageProps = {
    footer: variant,
    menu: variant,
    head,
  }
  const containerProps = {
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

  const firstNameProps = {
    name: 'firstName',
    title: 'First name',
    rules: {
      required: true,
    },
  }

  firstNameProps.input = {
    ...input(firstNameProps.name, firstNameProps.title),
    className: styles.firstName,
  }

  firstNameProps.row = row(firstNameProps, errors.firstName, 'Don’t be shy now!')

  const lastNameProps = {
    name: 'lastName',
    title: 'Last name',
  }

  lastNameProps.input = {
    ...input(lastNameProps.name, lastNameProps.title),
    className: styles.lastName,
  }

  lastNameProps.row = row(lastNameProps, errors.lastName)

  const messageProps = {
    name: 'message',
    title: 'Message',
    rules: {
      required: true,
    },
  }

  messageProps.row = row(messageProps, errors.message, 'Tell me about your project.')

  messageProps.input = {
    ...input(messageProps.name, null),
    className: styles.message,
  }

  const emailProps = {
    name: 'email',
    title: 'Email',
    rules: {
      required: true,
    },
  }

  emailProps.input = {
    ...input(emailProps.name, 'email'),
    className: styles.email,
  }

  emailProps.row = row(emailProps, errors.email, 'Be great to chat!')

  const phoneProps = {
    name: 'phone',
    title: 'Phone',
    placeholder: '01234567891',
  }

  phoneProps.input = {
    ...input(phoneProps.name, phoneProps.placeholder, 'tel'),
    className: styles.phone,
  }

  phoneProps.row = row(phoneProps, errors.phone)

  const submitProps = {
    className: styles.submit,
    type: 'submit',
  }

  const mocapProps = {
    link: {
      href: `https://www.voicefox.co.uk/artist/mocap-stephanie-cannon`,
      target: `_blank`,
      bold: true,
    },
    phone: `+44 7906905202`,
    email: `info@voicefox.co.uk`,
  }

  imageProps.src = contactImage

  return (
    <Page {...pageProps}>
      <Container {...containerProps}>
        <Wrap className={styles.wrap}>
          <Title>Contact</Title>
          <p>Please get in touch if you have a query or you’d like a quote!</p>
          <p>Tell me a bit about your project so I can make it sparkle! I’m always happy to supply a custom demo if needed.</p>
          <p>
            <small>
              <em>Not sure about which details to provide? It’s helpful for me to know about the style, tone & rough length of your project. Also where it’s going (TV, Web, Radio) and whether you have a specific deadline.</em>
            </small>
          </p>
          <Split className={styles.split}>
            <div>
              <form {...formProps}>
                <FormRow {...firstNameProps.row}>
                  <input {...register(firstNameProps.name, firstNameProps.rules)} {...firstNameProps.input} />
                </FormRow>
                <FormRow {...lastNameProps.row}>
                  <input {...register(lastNameProps.name)} {...lastNameProps.input} />
                </FormRow>
                <FormRow {...messageProps.row}>
                  <textarea {...register(messageProps.name, messageProps.rules)} {...messageProps.input} />
                </FormRow>
                <FormRow {...emailProps.row}>
                  <input {...register(emailProps.name, emailProps.rules)} {...emailProps.input} />
                </FormRow>
                <FormRow {...phoneProps.row}>
                  <input {...register(phoneProps.name)} {...phoneProps.input} />
                </FormRow>
                <FormRow>
                  <button {...submitProps}>{inProgress ? 'Sending' : 'Submit'}</button>
                </FormRow>
              </form>
            </div>
            <ImageWrap>
              <Image {...imageProps} alt="Stephanie Cannon friendly contact image, head tilted slightly to the right" />
            </ImageWrap>
          </Split>
          <p>For Motion Capture Projects contact Emily at:</p>
          <p>
            <Link {...mocapProps.link}>Voicefox.co.uk</Link>
            <br />
            <Link href={'mailto:' + mocapProps.email}>{mocapProps.email}</Link>
            <br />
            <Link href={'tel:' + mocapProps.phone}>{mocapProps.phone}</Link>
          </p>
        </Wrap>
      </Container>
    </Page>
  )
}
