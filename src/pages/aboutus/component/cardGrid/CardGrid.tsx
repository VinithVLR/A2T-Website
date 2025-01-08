'use client'
import React, { useEffect } from 'react'
import styles from './CardGrid.module.scss'
import Image from 'next/image'
import globalIcon from '../../../../assets/icons/ic_global.svg'
import skillIcon from '../../../../assets/icons/ic_skill.svg'
import humanCapitalIcon from '../../../../assets/icons/ic_human_capital.svg'
import trustIcon from '../../../../assets/icons/ic_trust.svg'

const CardGrid = () => {
     const cards = [
          {
               title: 'Global Workforce Solutions',
               description: 'Provide effective workforce in India and Europe.',
               icon: globalIcon,
               color: '#FFFFFF',
               bgColor: '#1CB977',
               borderColor: '#29CA86',
               titleColor: '#FFFFFF',
               desColor: '#D6E8FC',
          },
          {
               title: 'Skilled Talent Across Domains',
               description:
                    'Support key business drivers by providing skilled talents across all vertical domains.',
               icon: skillIcon,
               color: '#FFFFFF',
               bgColor: '#348AEF',
               borderColor: '#FAFAFA',
               titleColor: '#FFFFFF',
               desColor: '#D6E8FC',
          },
          {
               title: 'Innovative Human Capital Practices',
               description:
                    'Continuously seek innovative practices for effective human capital solutions to organizations.',
               icon: humanCapitalIcon,
               color: '#FFFFFF',
               bgColor: '#8535EB',
               borderColor: '#A367EF',
               titleColor: '#FFFFFF',
               desColor: '#D6E8FC',
          },
          {
               title: 'Trusted Workforce Partnership',
               description:
                    'Establish as a trusted business partner towards clients workforce strategy and manpower needs.',
               icon: trustIcon,
               color: '#FFFFFF',
               bgColor: '#FF613F',
               borderColor: '#FFA592',
               titleColor: '#FFFFFF',
               desColor: '#D6E8FC',
          },
     ]

     const initialFunc = async () => {
          if (typeof window !== 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               gsap.fromTo(
                    `.${styles.card}`,
                    { x: '10%', y: '30%', opacity: 0, rotate: -10 },
                    {
                         x: '0%',
                         y: 0,
                         opacity: 1,
                         rotate: 0,
                         duration: 0.7,
                         ease: 'power2.out',
                         // stagger: 0.2,
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
     }, [])

     return (
          <div className={styles.four_card_layout}>
               {cards.map((card: any, index: any) => (
                    <div
                         className={styles.card}
                         key={index}
                         style={{
                              border: `1px solid ${card.borderColor}`,
                              backgroundColor: card.bgColor,
                         }}
                    >
                         <Image src={card.icon} alt={card.title} className={styles.icon} />
                         <h3
                              className={`${styles.semiBoldText}`}
                              style={{ color: card.titleColor }}
                         >
                              {card.title}
                         </h3>
                         <hr style={{ border: `1px solid ${card.borderColor}` }}></hr>
                         <p className={`${styles.regularText}`} style={{ color: card.desColor }}>
                              {card.description}
                         </p>
                    </div>
               ))}
          </div>
     )
}

export default CardGrid
