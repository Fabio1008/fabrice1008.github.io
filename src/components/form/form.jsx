import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import ButtonStyle from '../../utils/style/boutonstyle'
import '../../sass/components/_form.scss'



export const Form = () => {
  const form = useRef()
  const dialog = useRef()

  const handleSendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_kecnprq',
        'template_brohb24',
        form.current,
        '7WM9agBmHEj7W6tuG',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.error(error.text)
        },
      )
    document.forms['form'].reset()
    dialog.current.showModal()
  }

  const closeHandler = () => {
    dialog.current.close()
  }

  return (
    <div className="container">
      <dialog className="dialog" ref={dialog}>
        <button className="dialog__button" type="button" onClick={closeHandler}>
          X
        </button>
        <p>Votre message a bien été envoyé.</p>
      </dialog>
      <form name="form" className="form" ref={form} onSubmit={handleSendEmail}>
        <label className="form__label" htmlFor="lastname" aria-label="lastname">
          Nom
        </label>
        <input
          className="form__input"
          type="text"
          id="lastname"
          aria-labelledby="lastname"
          name="lastname"
          placeholder="Votre nom"
          aria-required="true"
          required
          onInvalid={(F) =>
            F.target.setCustomValidity('Veuillez entrer votre nom')
          }
          onInput={(F) => F.target.setCustomValidity('')}
        />
        <label className="form__label" htmlFor="firstname">
          Prénom
        </label>
        <input
          className="form__input"
          type="text"
          id="firstname"
          aria-labelledby="firstname"
          name="firstname"
          placeholder="Votre prénom"
          aria-required="true"
          required
          onInvalid={(F) =>
            F.target.setCustomValidity('Veuillez entrer votre prénom')
          }
          onInput={(F) => F.target.setCustomValidity('')}
        />
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          type="email"
          id="email"
          aria-labelledby="email"
          name="email"
          placeholder="Votre email"
          aria-required="true"
          required
          onInvalid={(F) =>
            F.target.setCustomValidity('Veuillez entrer votre adresse email')
          }
          onInput={(F) => F.target.setCustomValidity('')}
        />
        <label className="form__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form__textarea"
          id="message"
          aria-labelledby="message"
          name="message"
          placeholder="Votre message"
          aria-required="true"
          required
          onInvalid={(F) =>
            F.target.setCustomValidity('Veuillez entrer votre message')
          }
          onInput={(F) => F.target.setCustomValidity('')}
          rows="10"
        />
        <ButtonStyle />
        <button
          className="form__button theme-color"
          aria-pressed="true"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  )
}

export default Form
