'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import Modal from '@/component/Modal/Modal'
import BASE_URL from '@/ulits/apiUrl'
import { TertiaryHeading, TertiaryPara } from '@/component/typography/Typography'
import WelcomeLanding from '@/pages/home/landingPage/WelcomeLanding'
import GlobalTrustSection from '@/pages/home/globalTrustSection/GlobalTrustSection'
import ServiceInnovation from '@/pages/home/serviceInnovation/ServiceInnovation'
import SustainableGoals from '@/pages/home/sustainableGoals/SustainableGoals'
import bgImage1 from '../../assets/images/double/img_bg_1.png'
import lyImage1 from '../../assets/images/double/img_ly_1.png'
import bgImage2 from '../../assets/images/double/img_bg_2.png'
import lyImage2 from '../../assets/images/double/img_ly_2.png'
import bgImage3 from '../../assets/images/double/img_bg_3.png'
import lyImage3 from '../../assets/images/double/img_ly_3.png'
import bgImage4 from '../../assets/images/double/img_bg_4.png'
import lyImage4 from '../../assets/images/double/img_ly_4.png'
import bgImage5 from '../../assets/images/double/img_bg_5.png'
import lyImage5 from '../../assets/images/double/img_ly_5.png'
import ImageDescriptionPanel from '@/component/imageDescriptionPanel/ImageDescriptionPanel'
import FloatingButton from '@/component/floatingButton/FloatingButton'
import ClientTestimonials from '@/pages/home/clientTestimonials/ClientTestimonials'
import Loading from '../loading'
import styles from './token.module.scss'
import SpanText from '@/component/Modal/component/spantext/Spantext'
import Image from 'next/image'
import iconLow from '../../assets/icons/ic_low_range.svg'
import iconlowRobot from '../../assets/icons/ic_low_range_robot.svg'
import iconMid from '../../assets/icons/ic_mid_range.svg'
import iconMidRobot from '../../assets/icons/ic_mid_range_robot.svg'
import bgLowrange from '../../assets/images/img_bg_low.svg'
import bgMidrange from '../../assets/images/img_bg_mid.svg'
import bgHigrange from '../../assets/images/img_bg_hig.svg'
import iconGolabel from '../../assets/icons/ic_golabel.svg'
import iconLeaves from '../../assets/icons/ic_leaves.svg'
import imgRecyle from '../../assets/images/modal_Img/img_recycle.png'
import ImageTransport from '../../assets/images/modal_Img/img_transport.png'
import ImageEmission from '../../assets/images/modal_Img/img_emission.png'
import ImageTraget from '../../assets/images/modal_Img/img_traget.png'

const TokenPage = () => {
  const searchParams = useSearchParams()
     const token = searchParams?.get('token');// Get the token from URL params
     const [isModalOpen, setIsModalOpen] = useState(false)
     const [isLoading, setIsLoading] = useState(true)
     const [windowWidth, setWindowWidth] = useState(1)

     const [overData, setOverData]: any = useState({
          annual_co2e_tons: 8.37453,
          ch4_percent: 0.016,
          challenges: {
               challenge_summary: 14.33,
               suggestions: [
                    {
                         category: 'transport_car',
                         percent: 6.54,
                         savings: '547.5 kg',
                         text: 'Drive 6.0 km less per day ',
                    },
                    {
                         category: 'appliances_ac',
                         percent: 2.42,
                         savings: '202.57 kg',
                         text: 'Use AC 30% less',
                    },
                    {
                         category: 'diet',
                         percent: 2.63,
                         savings: '220.0 kg',
                         text: 'Consider going fully vegan',
                    },
                    {
                         category: 'waste',
                         percent: 2.75,
                         savings: '230.0 kg',
                         text: 'Recycle and compost to save about 2.7% of your total footprint, which is 2.7% of your emissions.',
                    },
               ],
          },
          co2_percent: 99.976,
          fromYear: 1995,
          higher_than_average: 60,
          lifetime_ch4_tons: '38.49 kgs',
          lifetime_co2_tons: '236.6835 tons',
          lifetime_co2e_tons: '236.741 tons',
          lifetime_n2o_tons: '19.25 kgs',
          n2o_percent: 0.008,
          rank: 'top 20%',
          suggestions: {
               flight_suggestion: null,
               public_transport_savings: '1.46 tons',
          },
          sustainability_score: 37,
     })
     useEffect(() => {
          if (token) {
               setIsLoading(true)
               // Call the API with the token
               fetch(`${BASE_URL}api/emission/report/token?token=${token}`)
                    .then((res) => res.json())
                    .then((data) => {
                         setOverData(data)
                         setIsModalOpen(true)
                         setIsLoading(false)
                    })
                    .catch((err) => {
                         console.error('❌ Token verification failed:', err)
                         setIsLoading(false)
                    })
          } else {
               setIsLoading(false)
          }
     }, [token])

     const handleCloseModal = () => {
          setIsModalOpen(false)
     }

     if (isLoading) {
          return <Loading />
     }

     const panelData = [
          {
               bgImage: bgImage1,
               lyImage: lyImage1,
               heading: 'Empowering Businesses with Skilled Manpower to Mitigate Labour Risks',
               subHeading:
                    'Get to a decision faster by bringing requests into chat. Allow your teams to file, track and resolve tickets in Slack.',
               bgColor: '#F3F5FC',
               btnColor: '#003366',
               link: '/manpower-services',
          },
          {
               bgImage: bgImage2,
               lyImage: lyImage2,
               heading: 'Sustainable Growth through Innovative Engineering Solutions',
               subHeading:
                    'Committed to delivering cutting-edge engineering services that drive project success and operational efficiency.',
               bgColor: '#F3FDFD',
               btnColor: '#008080',
               link: '/engineering-services',
          },
          {
               bgImage: bgImage3,
               lyImage: lyImage3,
               heading: 'Smart Fleet Management through Innovative Engineering Solutions',
               subHeading:
                    'Dedicated to optimizing your fleet operations, reducing costs, and enhancing safety.',
               bgColor: '#FBF3F4',
               btnColor: '#B91722',
               link: '/fleet-management',
          },

          {
               bgImage: bgImage4,
               lyImage: lyImage4,
               heading: 'Our Commitment to a Sustainable Future',
               subHeading:
                    'Dedicated to reducing carbon emissions and enhancing environmental responsibility.',
               bgColor: '#F4FAF5',
               btnColor: '#28A745',
               link: '/esg-sustainability',
          },
          {
               bgImage: bgImage5,
               lyImage: lyImage5,
               heading: 'Transforming Businesses through Strategic Consulting',
               subHeading:
                    'Focused on providing tailored consulting solutions that empower organizations to achieve their goals and thrive in a competitive landscape.',
               bgColor: '#F7F3FB',
               btnColor: '#8E2FD2',
               link: '/business-consult',
          },
     ]

     return (
          <div>
               <WelcomeLanding />
               <GlobalTrustSection />
               <ServiceInnovation />
               <SustainableGoals />
               {panelData.map((panel, index) => (
                    <ImageDescriptionPanel
                         key={index}
                         heading={panel.heading}
                         subHeading={panel.subHeading}
                         bgColor={panel.bgColor}
                         btnColor={panel.btnColor}
                         bgImage={panel.bgImage}
                         lyImage={panel.lyImage}
                         link={panel.link}
                         index={index}
                    />
               ))}
               <ClientTestimonials />
               <FloatingButton />

               {isModalOpen && (
                    <Modal
                         style={{ width: '90%', height: '80%' }}
                         isOpen={isModalOpen}
                         closeModal={handleCloseModal}
                    >
                         <div className={styles.fieldset} style={{ height: '100%', width: '100%' }}>
                              <div className={styles.grid_layout}>
                                   <div className={styles.header}>
                                        <div className={styles.left}>
                                             <div className={styles.image_wrapper}>
                                                  <Image
                                                       src={iconGolabel}
                                                       alt=''
                                                       className={styles.icon}
                                                  />
                                             </div>
                                             <TertiaryPara className={styles.merticLabel}>
                                                  Since 1990, you’ve emitted around{' '}
                                                  <SpanText
                                                       size='large'
                                                       fontWeight='500'
                                                       color='#F24949'
                                                       fontSize='1.3rem'
                                                  >
                                                       120 metric tons
                                                  </SpanText>{' '}
                                                  of CO₂e (
                                                  <SpanText
                                                       size='large'
                                                       fontWeight='500'
                                                       color='#7ACF4D'
                                                       fontSize='1.3rem'
                                                  >
                                                       CO₂, CH4, N2O
                                                  </SpanText>
                                                  ).
                                             </TertiaryPara>
                                        </div>
                                        <div
                                             className={styles.parentContainer}
                                             style={{
                                                  backgroundImage: `url(${overData?.sustainability_score < 49 ? bgLowrange.src : overData?.sustainability_score <= 74 ? bgMidrange.src : bgHigrange.src})`,
                                                  backgroundSize: 'cover',
                                                  backgroundPosition: 'center',
                                                  borderRadius: '10px',
                                             }}
                                        >
                                             <div className={styles.right}>
                                                  <div className={styles.image_wrapper}>
                                                       <Image
                                                            alt=''
                                                            src={
                                                                 overData?.sustainability_score < 49
                                                                      ? iconLow
                                                                      : overData?.sustainability_score <=
                                                                          74
                                                                        ? iconMid
                                                                        : iconLeaves
                                                            }
                                                            className={styles.icon}
                                                       />
                                                  </div>
                                                  <div
                                                       className={styles.bg_value}
                                                       style={{
                                                            color:
                                                                 overData?.sustainability_score < 49
                                                                      ? '#4C1717'
                                                                      : overData?.sustainability_score <=
                                                                          74
                                                                        ? '#483A06'
                                                                        : '#0D4319',
                                                       }}
                                                  >
                                                       45/100
                                                  </div>
                                                  {windowWidth <= 600 ? (
                                                       <div className={styles.sustainability_rank}>
                                                            <div className={styles.rank}>
                                                                 You rank among the top{' '}
                                                                 <SpanText
                                                                      size='large'
                                                                      fontWeight='500'
                                                                      color='#CCBE09'
                                                                 >
                                                                      30%{' '}
                                                                 </SpanText>{' '}
                                                                 for eco-friendly habits.
                                                            </div>
                                                            <div
                                                                 className={styles.score}
                                                                 style={{
                                                                      textAlign: 'center',
                                                                 }}
                                                            >
                                                                 Your sustainability score is{' '}
                                                                 <SpanText
                                                                      size='large'
                                                                      fontWeight='500'
                                                                      color='#0CFF3F'
                                                                 >
                                                                      45/100{' '}
                                                                 </SpanText>
                                                                 .
                                                            </div>
                                                       </div>
                                                  ) : (
                                                       <div className={styles.sustainability_rank}>
                                                            <TertiaryPara className={styles.score}>
                                                                 Your sustainability score is{' '}
                                                                 <SpanText
                                                                      size='large'
                                                                      fontWeight='500'
                                                                      color={
                                                                           overData?.sustainability_score <
                                                                           49
                                                                                ? '#F24141'
                                                                                : overData?.sustainability_score <=
                                                                                    74
                                                                                  ? '#FFCE0C'
                                                                                  : '#0CFF3F'
                                                                      }
                                                                      fontSize='2rem'
                                                                 >
                                                                      {
                                                                           overData.sustainability_score
                                                                      }
                                                                      /100{' '}
                                                                 </SpanText>
                                                                 .
                                                            </TertiaryPara>
                                                            <TertiaryPara className={styles.rank}>
                                                                 You rank among the &nbsp;
                                                                 <SpanText
                                                                      size='large'
                                                                      fontWeight='500'
                                                                      color='#CCBE09'
                                                                      fontSize='1.3rem'
                                                                 >
                                                                      {overData.rank}
                                                                 </SpanText>{' '}
                                                                 for eco-friendly habits.
                                                            </TertiaryPara>
                                                       </div>
                                                  )}
                                             </div>
                                             <div className={styles.image_wrapper_recycle}>
                                                  <Image
                                                       alt=''
                                                       src={
                                                            overData?.sustainability_score < 49
                                                                 ? iconlowRobot
                                                                 : overData?.sustainability_score <=
                                                                     74
                                                                   ? iconMidRobot
                                                                   : imgRecyle
                                                       }
                                                       className={styles.icon}
                                                  />
                                             </div>
                                        </div>
                                   </div>
                                   <div className={styles.maingrid}>
                                        <div className={styles.right}>
                                             <div
                                                  className={styles.top}
                                                  style={{
                                                       backgroundImage: `url(${ImageTransport.src})`,
                                                  }}
                                             >
                                                  <TertiaryPara className={styles.savingsMessage}>
                                                       Using public transport instead of a car would
                                                       have saved tons of{' '}
                                                       <SpanText
                                                            size='large'
                                                            fontWeight='500'
                                                            color='#F3C12C'
                                                       >
                                                            CO₂
                                                       </SpanText>
                                                  </TertiaryPara>
                                             </div>
                                             <div
                                                  className={styles.bottom}
                                                  style={{
                                                       backgroundImage: `url(${ImageEmission.src})`,
                                                  }}
                                             >
                                                  <p className={styles.emissionLabel}>
                                                       Your emissions are{' '}
                                                       <SpanText
                                                            size='large'
                                                            fontWeight='500'
                                                            color='#FF4545'
                                                       >
                                                            40% higher
                                                       </SpanText>{' '}
                                                       than an average person in your region.
                                                  </p>
                                             </div>
                                        </div>
                                        <div className={styles.center}>
                                             <TertiaryPara className={styles.emissions}>
                                                  Your emissions include{' '}
                                                  <SpanText
                                                       size='large'
                                                       fontWeight='500'
                                                       color='#00CC09'
                                                  >
                                                       100 tons of CO2{' '}
                                                  </SpanText>{' '}
                                                  (Carbon-di-oxide),{' '}
                                                  <SpanText
                                                       size='large'
                                                       fontWeight='500'
                                                       color='#F56565'
                                                  >
                                                       15 tons of CH4{' '}
                                                  </SpanText>{' '}
                                                  (methane), &{' '}
                                                  <SpanText
                                                       size='large'
                                                       fontWeight='500'
                                                       color='#CCBE09'
                                                  >
                                                       5 tons of N2O{' '}
                                                  </SpanText>{' '}
                                                  (nitrous oxide.)
                                             </TertiaryPara>
                                             <div className={styles.centerInner}>
                                                  <div className={styles.large_circle}>
                                                       <div className={styles.flex_content}>
                                                            <label className={styles.lager_header}>
                                                                 CO<sub>2</sub>
                                                            </label>
                                                            <p className={styles.lager_value}>
                                                                 {overData.co2_percent}
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <div className={styles.medium_circle}>
                                                       <div className={styles.flex_content}>
                                                            <label className={styles.medium_header}>
                                                                 CH<sub>4</sub>
                                                            </label>
                                                            <p className={styles.medium_value}>
                                                                 {overData.ch4_percent}
                                                            </p>
                                                       </div>
                                                  </div>
                                                  <div className={styles.small_circle}>
                                                       <div className={styles.flex_content}>
                                                            <label className={styles.small_header}>
                                                                 N<sub>2</sub>o
                                                            </label>
                                                            <p className={styles.small_value}>
                                                                 {overData.n2o_percent}%
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className={styles.left_con}>
                                             <div className={styles.flex_container}>
                                                  <div className={styles.challenge_con}>
                                                       <div className={styles.challenge_title}>
                                                            Challenge yourself
                                                       </div>
                                                       <p className={styles.co2ReductionTip}>
                                                            Reduce your <span>CO₂</span> by
                                                            10%—here’s how,
                                                       </p>
                                                  </div>
                                                  <div className={styles.image_wrapper}>
                                                       <Image
                                                            alt=''
                                                            src={ImageTraget}
                                                            className={styles.icon}
                                                       />
                                                  </div>
                                             </div>

                                             <div className={styles.scrollbar}>
                                                  {overData.challenges.suggestions.map(
                                                       (suggestion: any, index: any) => (
                                                            <li
                                                                 key={index}
                                                                 style={{
                                                                      fontSize: '14px',
                                                                      lineHeight: '20px',
                                                                      color: '#fff',
                                                                 }}
                                                            >
                                                                 {suggestion.text ||
                                                                      suggestion.item}{' '}
                                                                 <span
                                                                      style={{
                                                                           fontWeight: 500,
                                                                           color: '#CCBE09',
                                                                      }}
                                                                 >
                                                                      {suggestion.savings} (
                                                                      {suggestion.percent}%)
                                                                 </span>
                                                            </li>
                                                       ),
                                                  )}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </Modal>
               )}
          </div>
     )
}

export default TokenPage
