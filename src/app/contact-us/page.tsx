import Address from '@/pages/contact-us/address/Address'
import ContactForm from '@/pages/contact-us/contactForm/ContactForm'
import FAQ from '@/pages/contact-us/faq/FAQ'
import Landing from '@/pages/contact-us/landing/Landing'

function page() {
     return (
          <>
               <Landing />
               <Address />
               <ContactForm />
               <FAQ />
          </>
     )
}

export default page
