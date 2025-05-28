import FloatingButton from '@/component/floatingButton/FloatingButton'
import Address from '@/pages/contact-us/address/Address'
import ContactForm from '@/pages/contact-us/contactForm/ContactForm'
import FAQ from '@/pages/contact-us/faq/FAQ'
import Landing from '@/pages/contact-us/landing/Landing'

import { Metadata } from 'next'

export const metadata: Metadata = {
     title: 'Contact',
     description: 'We’re here to Connect, Collaborate & Assist.',
     alternates: {
          canonical: 'https://prakashrg09.github.io/a2t-technologies/contact',
     },
}

function page() {
     return (
          <>
               <Landing />
               <Address />
               <ContactForm />
               <FAQ />
               <FloatingButton />
          </>
     )
}

export default page
