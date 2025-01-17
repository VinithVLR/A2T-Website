'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './LatestNewsSection.module.scss'
import { MainHeading, MainPara, SecondaryHeading } from '@/component/typography/Typography'
import Filter from '@/component/filter/Filter'
import SearchInput from '@/component/searchInput/SearchInput'
import UpdateCard from '@/component/updateCard/UpdateCard'
import img_electric from '../../../assets/images/img_electric.png'
import InfoCard from '../component/InfoCard/InfoCard'
import Loading from '@/app/loading'
import NewsCardSkeleton from '../component/skeleton/NewsCardSkeleton'
import { Inter } from 'next/font/google'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})

const LatestNewsSection = () => {
     const [isLoading, setIsLoading] = useState(true)

     useEffect(() => {
          setTimeout(() => {
               setIsLoading(false)
          }, 1000)
     }, [])

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

     let arr = [
          {
               img: img_electric,
               date: '24, March 23',
               title: 'Renewable Energy Demand Fuels Skilled Workforce Needs',
               para: 'Top automakers announce plans to transition towards fully electric vehicle production by 2030.',
          },
     ]
     let listItem = [
          {
               img: img_electric,
               date: '24, March 23',
               title: 'Automakers Shift to Electric Vehicle Production',
               para: 'New AI technology promises faster data processing for businesses across various industries.',
          },
          {
               img: img_electric,
               date: '24, March 23',
               title: 'Automakers Shift to Electric Vehicle Production',
               para: 'New AI technology promises faster data processing for businesses across various industries.',
          },

          {
               img: img_electric,
               date: '24, March 23',
               title: 'Automakers Shift to Electric Vehicle Production',
               para: 'New AI technology promises faster data processing for businesses across various industries.',
          },
     ]
     const [posts, setPosts]: any = useState([])
     const [page, setPage] = useState(1)
     const [loading, setLoading] = useState(false)
     const [isToggle, setIsToggle] = useState(true)
     const pageSize = 9

     const fetchPosts = async (pageNumber: number) => {
          setLoading(true)
          try {
               const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${pageSize}`,
               )
               const data = await response.json()
               setPosts((prevPosts: any) => [...prevPosts, ...data])
          } catch (error) {
               console.error('Error fetching posts:', error)
          } finally {
               setLoading(false)
          }
     }

     useEffect(() => {
          fetchPosts(page)
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

     const loadMore = () => {
          const nextPage = page + 1
          setPage(nextPage)
          fetchPosts(nextPage)
     }

     const cardRefs = useRef<HTMLDivElement | null>(null)
     const updateCardRef = useRef<HTMLDivElement | null>(null)
     const listContainerRef = useRef<HTMLDivElement[] | null[]>([])

     const initialFunc = async () => {
          if (typeof window != 'undefined') {
               const { gsap } = await import('gsap')
               const { ScrollTrigger } = await import('gsap/ScrollTrigger')
               gsap.registerPlugin(ScrollTrigger)
               const timeline = gsap.timeline({
                    scrollTrigger: {
                         trigger: cardRefs.current,
                         start: () => (window.innerWidth < 768 ? 'top 100%' : 'top center+=100'),
                         toggleActions: 'play none none none',
                         // invalidateOnRefresh: true,
                    },
               })
               timeline.fromTo(
                    updateCardRef.current,
                    { opacity: 0, y: 100 },
                    {
                         opacity: 1,
                         y: 0,
                         duration: 1,
                         ease: 'power3.out',
                    },
                    0,
               )
               listContainerRef.current.forEach((card, index) => {
                    timeline.fromTo(
                         card,
                         { opacity: 0, y: 100 },
                         {
                              opacity: 1,
                              y: 0,
                              duration: 1,
                              ease: 'power3.out',
                         },
                         index == 0 ? 0 : index == 1 ? 0.1 : index == 2 ? 0.2 : 1,
                    )
               })
          }
     }

     useEffect(() => {
          initialFunc()
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

     return (
          <section className={`${styles.maincon}`}>
               <div className={styles.land_sec}>
                    <div className={styles.centerContent}>
                         <span className={styles.title}>News</span>
                         <MainHeading className={`${styles.header} ${styles.blackText}`}>
                              Stay Informed with our <span>Latest Industry News</span> and Company
                              Updates
                         </MainHeading>
                         <MainPara className={`${inter.className} ${styles.regularText}`}>
                              Explore our latest announcements, industry insights, and company
                              updates.
                         </MainPara>
                    </div>
                    <SearchInput
                         placeHolder={'Search for Position, Location'}
                         style={styles.searchInput}
                    />
                    <Filter
                         options={options}
                         style={{
                              margin: '0%',
                              minHeight: '100px',
                         }}
                         shadowStyle={{
                              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                              marginBlock: '0.1rem',
                         }}
                         onChange={(value: any) => setOptions(value)}
                    />
               </div>
               <div className={styles.header}>
                    <SecondaryHeading className={styles.title}>Featured news</SecondaryHeading>
               </div>

               <div className={styles.details_con} ref={cardRefs} style={{}}>
                    <div className={styles.single_card_con}>
                         {false ? (
                              <NewsCardSkeleton style={{ width: '37rem' }} />
                         ) : (
                              arr.map((item, index) => (
                                   <UpdateCard
                                        flexCon={{
                                             display: 'flex',
                                             flexDirection: 'column',
                                             height: 'auto',
                                             minHeight: '122px',
                                             gap: '1rem',
                                        }}
                                        key={index}
                                        imageUrl={item.img}
                                        date={item.date}
                                        ref={updateCardRef}
                                        title={item.title}
                                        description={item.para}
                                        tags={['Automotive', 'Technology']}
                                        index={index}
                                        sectionStyle={{ height: '100%' }}
                                   />
                              ))
                         )}
                    </div>
                    <div className={styles.three_card_con}>
                         <div className={styles.list_card}>
                              <InfoCard
                                   ref={listContainerRef}
                                   data={listItem}
                                   isLoading={isLoading}
                              />
                         </div>
                    </div>
               </div>
               <div className={styles.latest_news}>
                    {isLoading ? (
                         <Loading />
                    ) : (
                         <React.Fragment>
                              <SecondaryHeading className={styles.title}>
                                   Latest news
                              </SecondaryHeading>
                              <div className={styles.card_con_wrapper}>
                                   {posts.map((post: any, index: any) => (
                                        <UpdateCard
                                             key={index}
                                             ref={updateCardRef}
                                             tagStyle={{ padding: '10px 14px', fontSize: '0.7rem' }}
                                             imageUrl={img_electric}
                                             date={'24, March 23'}
                                             title={post.title}
                                             description={
                                                  'New AI technology promises faster data processing for businesses across various industries.'
                                             }
                                             isFlag={true}
                                             tags={['Automotive', 'Technology']}
                                             index={index}
                                             sectionStyle={{ height: '100%' }}
                                        />
                                   ))}
                              </div>
                              {loading && <Loading />}
                              {!loading && (
                                   <button onClick={loadMore} className={styles.btn_con}>
                                        Older posts
                                   </button>
                              )}
                         </React.Fragment>
                    )}
               </div>
          </section>
     )
}

export default LatestNewsSection
