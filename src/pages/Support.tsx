import { DonationCard } from "../components/DonationCard"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Heading } from '../styles/SupportStyles'

export function Support() {
  return (
    <>
      <Navbar />
      <Heading>Apoie o Instituto!</Heading>

      <DonationCard
        heading="Nos apoie aqui"
        message="blablablabla"
      />

      <DonationCard
        heading="PayPal"
        message="blablablabla"
      />

      <DonationCard
        heading="PIX"
        message="blablablabla"
      />

      <Footer />
    </>
  )
}
