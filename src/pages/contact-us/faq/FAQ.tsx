import Header from '@/component/header/Header'
import styles from './FAQ.module.scss'
import FAQCard from '../component/faqCard/FAQCard'

function FAQ() {
     const arr = [
          {
               question: 'How do I apply for a job at A2 Technologies?',
               answer: 'Yes! Please use the contact form above to request a consultation, and our team will get back to you shortly.',
          },
          {
               question: 'Can I schedule a consultation?',
               answer: 'Yes! Please use the contact form above to request a consultation, and our team will get back to you shortly.',
          },
          {
               question: 'Do you offer support services for your solutions?',
               answer: 'Yes! Please use the contact form above to request a consultation, and our team will get back to you shortly.',
          },
     ]
     return (
          <section className={styles.maincon}>
               <Header
                    title={
                         <>
                              Get to know about <br /> Frequently Asked Questions
                         </>
                    }
                    containerStyle={styles.header}
               />
               <div>
                    {arr.map((question, index) => {
                         return <FAQCard key={index} data={question} />
                    })}
               </div>
          </section>
     )
}

export default FAQ
