import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'
import Header from '@/component/header/Header'
import React from 'react'
import styles from './WhyChooseUs.module.scss'
const WhyChooseUs = () => {
     let arr: any = [
          {
               title: 'Integrated Solutions',
               description:
                    'By combining workforce solutions with engineering services, we ensure that your team is perfectly aligned with project requirements and industry standards from the start.',
          },
          {
               title: 'Sustainability Commitment',
               description:
                    'From reducing carbon emissions to adopting energy-efficient technologies, our sustainability initiatives are integral to our service offerings and provide long-term benefits for both the environment and your business.',
          },
          {
               title: 'Expert Team',
               description:
                    'Our engineers, sustainability experts, and IT professionals collaborate closely to deliver innovative and effective solutions tailored to your specific needs.',
          },
          {
               title: 'Innovative Technology',
               description:
                    'Utilizing state-of-the-art engineering software and sustainable practices, we enhance project outcomes and contribute to a greener future.',
          },
          {
               title: 'Client-Centric Approach',
               description:
                    'Through detailed consultations and tailored strategies, we ensure that our solutions align with your business objectives and deliver maximum value.',
          },
     ]
     return (
          <section className={styles.main_container}>
               <Header
                    title={'Why choose us?'}
                    subTitle={
                         'Your goals are our priority—experience unparalleled service, tailored solutions, and a commitment to excellence.'
                    }
               />
               <AlternatingContentLayout content={arr} />
          </section>
     )
}

export default WhyChooseUs
