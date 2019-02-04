import React from 'react'
import './ContactForm.css'

const ContactForm = () => (
  <form
    action="https://formspree.io/marsel.gabdulov@gmail.com"
    method="POST"
    className="request-form"
  >
    <input
      className="input-name"
      type="text"
      name="name"
      placeholder="Ваше имя"
      required
    />
    <input
      className="input-email"
      type="email"
      name="email"
      placeholder="Ваш email"
      required
    />
    <textarea
      className="input-comment"
      type="text"
      name="comment"
      placeholder="Ваш комментарий"
    />
    <input type="submit" value="Отправить" className="form-button" />
  </form>
)

export default ContactForm
