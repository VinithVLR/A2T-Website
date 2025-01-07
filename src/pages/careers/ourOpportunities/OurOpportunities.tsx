'use client'

import React, { useState, useRef, useEffect } from 'react'
import styles from './OurOpportunities.module.scss'
import Header from '@/component/header/Header'
import SearchInput from '@/component/searchInput/SearchInput'
import Filter from '@/component/filter/Filter'
import OpportunityCard from '../components/opportunityCard/OpportunityCard'
import Pagination from '@/component/pagination/Pagination'

const OurOpportunities = () => {
     const [options, setOptions] = useState([
          {
               title: 'All',
               value: 'all',
               active: true,
          },
          {
               title: 'Technical',
               value: 'technical',
               active: false,
          },
          {
               title: 'Non-technical',
               value: 'nontechnical',
               active: false,
          },
          {
               title: 'Sales',
               value: 'sales',
               active: false,
          },
          {
               title: 'Marketing',
               value: 'marketing',
               active: false,
          },
          {
               title: 'Customer Service',
               value: 'customerService',
               active: false,
          },
     ])

     const jobsList = [
          {
               title: 'Mechanical Engineer',
               location: 'Mumbai',
               description:
                    'Seeking a skilled Mechanical Engineer with experience in vehicle integration and design.',
               applyLink: 'link-to-apply-mechanical-engineer',
          },
          {
               title: 'Project Manager',
               location: 'Mumbai',
               description:
                    'Looking for an experienced Project Manager to lead complex engineering projects.',
               applyLink: 'link-to-apply-project-manager',
          },
          {
               title: 'Sustainability Consultant',
               location: 'Mumbai',
               description:
                    'We are hiring a Sustainability Consultant to develop and implement ESG strategies.',
               applyLink: 'link-to-apply-sustainability-consultant',
          },
     ]

     const [totalPage, setTotalPage] = useState(8)
     const [currentPage, setCurrentPage] = useState(1)

     const cardRefs = useRef<(HTMLDivElement | null)[]>([])
     const listContainerRef = useRef<HTMLDivElement | null>(null)

     useEffect(() => {
          const initAnimation = async () => {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)

               if (!listContainerRef.current || cardRefs.current.length === 0) return

               // Reset any existing animations
               gsap.set(cardRefs.current, {
                    clearProps: 'all',
               })

               const firstCardRect = cardRefs.current[0]?.getBoundingClientRect()
               const firstCardTop = firstCardRect?.top || 0

               cardRefs.current.forEach((card, index) => {
                    if (!card) return

                    if (index === 0) {
                         gsap.set(card, {
                              opacity: 0,
                              y: 0,
                         })
                    } else {
                         gsap.set(card, {
                              opacity: 0,
                              y: -(index * card.offsetHeight),
                         })
                    }
               })

               const tl = gsap.timeline({
                    scrollTrigger: {
                         trigger: listContainerRef.current,
                         start: 'top center+=100',
                    },
               })

               cardRefs.current.forEach((card, index) => {
                    tl.to(
                         card,
                         {
                              opacity: 1,
                              y: 0,
                              duration: 0.6,
                              ease: 'power2.out',
                         },
                         0,
                    )
               })
          }

          initAnimation()
     }, [])

     return (
          <section className={styles.mainContainer}>
               <Header title={'Our Current Opportunities'} titleStyle={{ width: '65%' }} />
               <section>
                    <div>
                         <Filter options={options} onChange={(value: any) => setOptions(value)} />
                         <SearchInput
                              placeHolder={'Search for Position, Location'}
                              style={styles.searchInput}
                         />
                    </div>
                    <div className={styles.listContainer} ref={listContainerRef}>
                         {jobsList.map((job: any, index: number) => (
                              <React.Fragment key={index}>
                                   <OpportunityCard
                                        data={job}
                                        ref={(el) => {
                                             cardRefs.current[index] = el
                                        }}
                                   />
                                   {index !== jobsList.length - 1 && (
                                        <div className={styles.horizontalRule}></div>
                                   )}
                              </React.Fragment>
                         ))}
                    </div>
                    <div className={styles.paginationContainer}>
                         <Pagination
                              totalPage={totalPage}
                              current={currentPage}
                              onChange={setCurrentPage}
                         />
                    </div>
               </section>
          </section>
     )
}

export default OurOpportunities
