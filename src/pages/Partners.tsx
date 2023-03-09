import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import { Heading, Section, Image } from '../styles/PartnersStyles'

export function Partners() {
  return (
    <>
      <Navbar />

      <Heading>Parceiros</Heading>

      <Section>
        <Image src="/images/prefeitura.png" />
        <Image src="/images/cmdca.png" />
        <Image src="/images/logo_escola.png" />
        <Image src="/images/nae.png" />
        <Image src="/images/secretaria-de-cultura.png" />
      </Section>

      <Footer />
    </>
  )
}
