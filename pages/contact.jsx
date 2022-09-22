import { Page, Container, Wrap, Split, Title, Image } from 'components'
import { contact as head } from 'data/seo'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from 'styles/pages/contact.module.scss'

function FormRow({ htmlFor, label, error, errorMessage, className, children, rules }) {
  const hasClassName = className ? className : ''
  const containerClasses = `${styles.form_row} ${hasClassName}`
  const required = !rules || !rules.required ? '(optional)' : '(required)'

  return (
    <div className={containerClasses}>
      <div>
        <label htmlFor={htmlFor}>{label}</label> <small>{label && required}</small>
      </div>
      <div>
        {children}
        {error && <div>{errorMessage}</div>}
      </div>
    </div>
  )
}

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

  const input = (title = '', placeholder = '', type = 'text') => ({ type, name: title, id: title, placeholder })
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

  const firstNameProps = {
    name: 'firstName',
    title: 'First name',
    rules: {
      required: true,
    },
  }

  firstNameProps.row = {
    errorMessage: 'Message works!',
    htmlFor: firstNameProps.name,
    label: firstNameProps.title,
    rules: firstNameProps.rules,
    error: errors.firstName,
  }

  const lastNameProps = {
    name: 'lastName',
    title: 'Last name',
  }

  lastNameProps.row = {
    htmlFor: lastNameProps.name,
    label: lastNameProps.title,
    error: errors.lastName,
    errorMessage: 'Message works!',
  }

  const messageProps = {
    name: 'message',
    title: 'Message',
  }

  messageProps.row = {
    htmlFor: messageProps.name,
    label: messageProps.title,
    error: errors.message,
    errorMessage: 'Message works!',
  }

  const emailProps = {
    name: 'email',
    title: 'Email',
    placeholder: 'friendly@visitor.org',
  }

  emailProps.row = {
    htmlFor: emailProps.name,
    label: emailProps.title,
    error: errors.email,
    errorMessage: 'Message works!',
  }

  const phoneProps = {
    name: 'phone',
    title: 'Phone',
    placeholder: '01234567891',
  }

  phoneProps.row = {
    htmlFor: phoneProps.name,
    label: phoneProps.title,
    error: errors.phone,
    errorMessage: 'Message works!',
  }

  const submitProps = {
    className: styles.submit,
    ref: submitRef,
    type: 'submit',
  }

  const contactImageProps = {
    src: 'stephanie-cannon-headshot-contact-page-stephanie-cannon.jpg',
    variant,
  }
  const mocapLogoProps = {
    src: 'the-mocap-agency-logo-stephanie-cannon-female-actor.jpg',
    className: styles.mocap_logo,
    height: 60,
    width: 157,
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
                  <input {...register(firstNameProps.name, firstNameProps.rules)} {...input(firstNameProps.name, firstNameProps.title)} />
                </FormRow>
                <FormRow {...lastNameProps.row}>
                  <input {...register(lastNameProps.name)} {...input(lastNameProps.name, lastNameProps.title)} />
                </FormRow>
                <FormRow {...messageProps.row}>
                  <textarea {...register(messageProps.name)} {...input(messageProps.name, messageProps.title, null)} />
                </FormRow>
                <FormRow {...emailProps.row}>
                  <input {...register(emailProps.name)} {...input(emailProps.name, emailProps.placeholder, 'email')} />
                </FormRow>
                <FormRow {...phoneProps.row}>
                  <input {...register(phoneProps.name)} {...input(phoneProps.name, phoneProps.placeholder, 'tel')} />
                </FormRow>
                <FormRow>
                  <button {...submitProps}>Submit</button>
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
            <br /> <a href="mailto:emily@themocapagency.com">emily@themocapagency.com</a>
            <br /> <a href="https://www.themocapagency.com/product/stephanie-cannon">themocapagency.com</a>
            <br /> <a href="tel:+44 7906905202">+44 7906905202</a>
            {/* <br /> <Image {...mocapLogoProps} alt={mocapLogoProps.src} /> */}
          </p>
        </Wrap>
      </Container>
    </Page>
  )
}
