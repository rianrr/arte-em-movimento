import { useState } from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import emailjs from '@emailjs/browser'

export function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

  function sendEmail(e: any) {
    e.preventDefault()

    if (name == '' || email == '' || message == '') {
      alert('Preencha todos os campos do formulário.')
      return
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    }

    emailjs.send('service_55ziuos', 'template_4si4p6l', templateParams, 'KdYjfBtauGev-Fwtu')
      .then((res) => {
        console.log('email enviado', res.status, res.text)

        setName('')
        setEmail('')
        setMessage('');
      }, (err) => {
          console.log('erro: ', err)
        })
  }

    return (
        <>
            <Navbar />
            <h1>Contato</h1>

            <form onSubmit={sendEmail}>
              <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name} />
              <input type="email" placeholder="Digite email" onChange={(e) => setEmail(e.target.value)} value={email} />
              <textarea placeholder="Digite sua mensagem" onChange={(e) => setMessage(e.target.value)} value={message} />

              <input type="submit" value="Enviar" />
            </form>
            <Footer />
        </>
    )
}
