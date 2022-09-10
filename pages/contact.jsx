import { Page, Content } from 'components'
import { contact } from 'scripts/head'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

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

  const pageProps = {
    head: contact,
    menu: 'yellow',
    footer: 'yellow',
  }
  const contentProps = {
    variant: 'yellow',
    top: true,
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
  return (
    <Page {...pageProps}>
      <Content {...contentProps}>
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
      </Content>
    </Page>
  )
}
