'use client'

import React, { useRef, useState } from 'react'
import styles from './WelcomeLanding.module.scss'
import Navbar from '@/component/navbar/Navbar'
import { Inter } from 'next/font/google'
import Button from '@/component/button/Button'
import logoIcon from '../../../assets/icons/ic_logo.svg'
import icon_arrow from '../../../assets/icons/ic_btn_arrow.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
     MainHeading,
     MainPara,
     SecondaryHeading,
     TertiaryHeading,
} from '@/component/typography/Typography'
import Modal from '@/component/Modal/Modal'
import bgModalFirst from '../../../assets/images/modal_Img/img_modal_1.png'
import bgModalSecond from '../../../assets/images/modal_Img/img_modal_2.png'
import calendarIcon from '../../../assets/images/modal_Img/ic_calendar.svg'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import MultiStepForm from '@/component/Modal/component/MultiStepForm'
import { dmSans } from '../../../../public/fonts/inter'
// import { FaCalendarAlt } from 'react-icons/fa' // Import your icon here
const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})
const WelcomeLanding = () => {
     const router = useRouter()
     const [isModalOpen, setIsModalOpen] = useState(false)

     const openModal = () => setIsModalOpen(true)
     const closeModal = () => setIsModalOpen(false)
     const [selectedDate, setSelectedDate] = useState<any>(null)
     const [step, setStep] = useState(1)
     const datePickerRef: any = useRef(null)

     const handleDateChange = (date: Date | null) => {
          setSelectedDate(date)
     }

     return (
          <section className={`${styles.main_container}`}>
               <video className={`${styles.video_background}`} autoPlay loop muted playsInline>
                    <source
                         src='https://cdn.pixabay.com/video/2020/06/23/42923-434300950_large.mp4'
                         type='video/mp4'
                    />
                    Your browser does not support the video tag.
               </video>
               <div className={`${styles.container}`}>
                    <MainHeading className={`${styles.heading}`}>
                         Pioneering Engineering Solutions for a <span>Greener Tomorrow</span>
                    </MainHeading>
                    <MainPara className={`${styles.para}`}>
                         Delivering innovative engineering solutions that minimize environmental
                         impact and foster sustainable growth for a cleaner, greener future.
                    </MainPara>
                    <div className={`${styles.flex_con}`}>
                         <Button
                              label={'Contact us'}
                              disabled={false}
                              style={{
                                   backgroundColor: '#0E7B68',
                                   gap: '1rem',
                                   borderRadius: '7px',
                                   alignItems: 'center',
                                   justifyContent: 'center',
                              }}
                              loading={false}
                              iconleft={logoIcon}
                              onClick={() => {
                                   // router.push('contact-us')
                                   openModal()
                              }}
                              labestyle={{ marginLeft: '0px', fontSize: '1rem' }}
                         />
                         <Link href={'/about-us'}>
                              <label style={{ cursor: 'pointer' }}>
                                   Know more about us
                                   <Image
                                        src={icon_arrow}
                                        alt='arrow-icon'
                                        className={`${styles.icon}`}
                                   />
                              </label>
                         </Link>
                    </div>
               </div>
               <Modal
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    bgImageUrl={
                         step === 3 ? undefined : step ? bgModalFirst.src : bgModalSecond.src
                    }
                    // style={{ minHeight: step === 3 ? undefined : '400px' }}
               >
                    <div
                         className={
                              step === 1
                                   ? styles.main_con_first
                                   : step === 2
                                     ? styles.main_con_second
                                     : styles.formStyle
                         }
                    >
                         {step === 1 ? (
                              <>
                                   <SecondaryHeading className={styles.title}>
                                        Get to know <span>Carbon Impact</span> on Your Birthdate
                                   </SecondaryHeading>
                                   <div className={styles.flex_con}>
                                        <label className={styles.label}>Date of birth</label>
                                        <DatePicker
                                             selected={selectedDate}
                                             onChange={handleDateChange}
                                             dateFormat='yyyy-MM-dd'
                                             placeholderText='Click to select a date'
                                             isClearable
                                             ref={datePickerRef}
                                             customInput={
                                                  <div
                                                       style={{
                                                            position: 'relative',
                                                            paddingBlock: '0.7rem',
                                                       }}
                                                  >
                                                       <input
                                                            className={styles.my_custom_input}
                                                            value={
                                                                 selectedDate
                                                                      ? selectedDate.toLocaleDateString()
                                                                      : ''
                                                            }
                                                            placeholder='Select date'
                                                            readOnly
                                                       />
                                                       {!selectedDate && (
                                                            <img
                                                                 src={calendarIcon.src}
                                                                 style={{
                                                                      position: 'absolute',
                                                                      top: '50%',
                                                                      right: '10px',
                                                                      transform: 'translateY(-50%)',
                                                                      cursor: 'pointer',
                                                                      backgroundColor: '#0e7b68',
                                                                      padding: '3px',
                                                                      borderRadius: '4px',
                                                                 }}
                                                                 onClick={() =>
                                                                      datePickerRef.current?.setOpen(
                                                                           true,
                                                                      )
                                                                 }
                                                            />
                                                       )}
                                                  </div>
                                             }
                                        />
                                   </div>
                                   <Button
                                        label={'Measure your impact'}
                                        onClick={() => setStep(2)}
                                        style={{
                                             backgroundColor: '#0E7B68',
                                             gap: '1rem',
                                             borderRadius: '20px',
                                             alignItems: 'center',
                                             justifyContent: 'center',
                                        }}
                                        labestyle={{
                                             marginLeft: '0px',
                                             fontSize: '0.9rem',
                                             color: '#fff',
                                        }}
                                   />
                              </>
                         ) : step === 2 ? (
                              <>
                                   <TertiaryHeading className={styles.title}>
                                        <span>Carbon impact</span> on your birth date is
                                   </TertiaryHeading>
                                   <SecondaryHeading className={styles.rate_value}>
                                        332.1 PPM
                                   </SecondaryHeading>
                                   <Button
                                        label={'Track Your Lifetime Emissions'}
                                        onClick={() => setStep(3)}
                                        style={{
                                             backgroundColor: '#0E7B68',
                                             gap: '1rem',
                                             borderRadius: '20px',
                                             alignItems: 'center',
                                             justifyContent: 'center',
                                        }}
                                        labestyle={{
                                             marginLeft: '0px',
                                             fontSize: '0.9rem',
                                             color: '#fff',
                                        }}
                                   />
                              </>
                         ) : (
                              // <div className={styles.formStyle}>
                              <MultiStepForm />
                              // </div>
                         )}
                    </div>
               </Modal>
          </section>
     )
}

export default WelcomeLanding
