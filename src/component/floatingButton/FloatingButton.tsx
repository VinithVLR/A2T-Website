'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './FloatingButton.module.scss'
import logo from '../../assets/images/modal_Img/img_recycle.png'
import calendarIcon from '../../assets/images/modal_Img/ic_calendar.svg'
import Image from 'next/image'
import MultiStepForm from '../Modal/component/MultiStepForm'
import { SecondaryHeading, TertiaryHeading } from '../typography/Typography'
import DatePicker from 'react-datepicker'
import Modal from '../Modal/Modal'
import Button from '../button/Button'
import bgModalFirst from '../../assets/images/modal_Img/img_modal_1.png'
import bgModalSecond from '../../assets/images/modal_Img/img_modal_2.png'
function FloatingButton() {
     //  const [isVisible, setIsVisible] = useState(false)

     useEffect(() => {
          const handleScroll = () => {
               const scrollPosition = window.scrollY
               const windowHeight = window.innerHeight / 2

               //    if (scrollPosition > windowHeight) {
               //         setIsVisible(true)
               //    } else {
               //         setIsVisible(false)
               //    }
          }

          window.addEventListener('scroll', handleScroll)

          return () => {
               window.removeEventListener('scroll', handleScroll)
          }
     }, [])

     const [isModalOpen, setIsModalOpen] = useState(false)

     const openModal = () => setIsModalOpen(true)
     const closeModal = () => setIsModalOpen(false)
     const [selectedDate, setSelectedDate] = useState<any>(null)
     const [step, setStep] = useState(1)
     const datePickerRef: any = useRef(null)

     const handleDateChange = (date: Date | null) => {
          setSelectedDate(date)
     }
     console.log('step', step)
     const [isActive, setIsActive] = useState(false)

     const handleClick = () => {
          setIsActive(!isActive)
          setTimeout(() => {
               setStep(2)
          }, 1000)
     }

     return (
          <React.Fragment>
               <div className={`${styles.floatingButtonContainer} `} onClick={() => openModal()}>
                    <div className={styles.imageContainer}>
                         <Image
                              src={logo}
                              alt='wrapper'
                              style={{ width: '80px', height: '80px' }}
                         />
                    </div>
               </div>
               <div className={`${styles.main_container}`}>
                    <Modal
                         isOpen={isModalOpen}
                         closeModal={closeModal}
                         bgImageUrl={
                              step === 3
                                   ? undefined
                                   : step == 1
                                     ? bgModalFirst.src
                                     : bgModalSecond.src
                         }
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
                                             Get to know <span>Carbon Impact</span> on Your
                                             Birthdate
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
                                                                 minWidth: '270px',
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
                                                                           right: '5px',
                                                                           transform:
                                                                                'translateY(-50%)',
                                                                           cursor: 'pointer',
                                                                           backgroundColor:
                                                                                '#0e7b68',
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
                                        {/* <div
                                             className={`${styles.box} ${isActive ? styles['transform-active'] : ''}`}
                                        ></div> */}
                                        <Button
                                             label={'Measure your impact'}
                                             onClick={() => {
                                                  handleClick()
                                             }}
                                             style={{
                                                  backgroundColor: '#0E7B68',
                                                  gap: '1rem',
                                                  borderRadius: '25px',
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                  padding: '12px 20px',
                                             }}
                                             labestyle={{
                                                  marginLeft: '0px',
                                                  fontSize: '0.9rem',
                                                  color: '#F3F5FC',
                                                  fontWeight: '400',
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
                                                  borderRadius: '25px',
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                  padding: '12px 20px',
                                             }}
                                             labestyle={{
                                                  marginLeft: '0px',
                                                  fontSize: '0.9rem',
                                                  fontWeight: '500',
                                                  color: '#fff',
                                                  padding: '14px 20px;',
                                             }}
                                        />
                                   </>
                              ) : (
                                   <div className={styles.formStyle}>
                                        <MultiStepForm />
                                   </div>
                              )}
                         </div>
                    </Modal>
               </div>
          </React.Fragment>
     )
}

export default FloatingButton
