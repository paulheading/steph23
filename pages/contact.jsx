import { Page, Container, Wrap, Split, Title, Image } from 'components'
import { contact as head } from 'data/seo'
import { useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { FormRow } from 'components/ui'
import styles from 'styles/pages/contact.module.scss'

export default function Contact() {
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

  const input = (title = '', type = 'text') => ({ type, name: title, id: title })
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

  function row(data, error, errorMessage = '') {
    const { name, title, rules } = data
    return {
      errorMessage,
      htmlFor: name,
      label: title,
      error,
      rules,
    }
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

  firstNameProps.row = row(firstNameProps, errors.firstName, 'Please enter your first name')

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

  messageProps.row = row(messageProps, errors.message, 'Please enter your message')

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

  emailProps.row = row(emailProps, errors.email, 'Please enter your email')

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

  const contactImageProps = {
    src: 'stephanie-cannon-headshot-contact-page-stephanie-cannon.jpg',
    border: true,
    variant,
  }
  const mocapLinkProps = {
    href: 'https://www.themocapagency.com/product/stephanie-cannon',
    target: '_blank',
  }
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
            <div>
              <Image {...contactImageProps} alt={contactImageProps.src} />
            </div>
          </Split>
          <p>For Motion Capture Projects contact Emily at:</p>
          <p>
            The Mocap Agency
            <br />
            <a {...mocapLinkProps}>
              <strong>themocapagency.com</strong>
            </a>
            <br />
            <a href="mailto:emily@themocapagency.com">emily@themocapagency.com</a>
            <br />
            <a href="tel:+44 7906905202">+44 7906905202</a>
          </p>
        </Wrap>
      </Container>
    </Page>
  )
}
