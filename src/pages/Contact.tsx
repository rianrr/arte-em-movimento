import { useState } from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import emailjs from '@emailjs/browser'
import { Container, Wrapper, Form, Heading, Input, InputButton, TextArea } from '../styles/ContactStyles'

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
        alert('Obrigado pelo contato!')

        setName('')
        setEmail('')
        setMessage('');
      }, (err) => {
        alert('Por algum motivo, não conseguimos enviar o email. Tente novamente mais tarde.')
      })
  }

  return (
    <>
      <Navbar />

      <Container>
        <Heading>Mande uma Mensagem!</Heading>

        <Form onSubmit={sendEmail}>
          <Input type="text" placeholder="Meu Nome" onChange={(e) => setName(e.target.value)} value={name} />
          <Input type="email" placeholder="exemplo@exemplo.com" onChange={(e) => setEmail(e.target.value)} value={email} />
          <TextArea placeholder="Digite sua mensagem" onChange={(e) => setMessage(e.target.value)} value={message} />

          <InputButton type="submit" value="ENVIAR" />
        </Form>
      </Container>

      <Footer />
    </>
  )
}
