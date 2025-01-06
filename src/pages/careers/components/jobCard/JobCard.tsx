import Button from '@/component/button/Button'
import styles from './JobCard.module.scss'
import { TertiaryHeading, TertiaryPara } from '@/component/typography/Typography'
import { useEffect } from 'react'

function JobCard({ data }: any) {
     const initialFunc = async () => {
          if (typeof window !== 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               gsap.fromTo(
                    `.${styles.cardContainer}`,
                    { x: '10%', y: '30%', opacity: 0, rotate: -10 },
                    {
                         y: '0%',
                         opacity: 1,
                         x: '0%',
                         rotate: 0,
                         duration: 0.7,
                         ease: 'power2.out',
                         scrollTrigger: {
                              trigger: `.${styles.four_card_layout}`,
                              start: 'top 50%',
                              end: 'bottom 20%',
                              toggleActions: 'play none none none',
                         },
                    },
               )
          }
     }

     useEffect(() => {
          initialFunc()
     }, [data])
     return (
          <div className={styles.cardContainer}>
               <h2>
                    <TertiaryHeading>{data?.title}</TertiaryHeading>
               </h2>
               <p>
                    <TertiaryPara>{data?.description}</TertiaryPara>
               </p>
               <Button
                    label='Apply now'
                    disabled={false}
                    icon
                    className={styles.applyBtn}
                    loading={false}
                    labestyle={{
                         fontSize: '0.925rem',
                    }}
               />
          </div>
     )
}

export default JobCard
