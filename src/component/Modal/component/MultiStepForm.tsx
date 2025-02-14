import React, { useState, useEffect, useRef, useReducer } from 'react'
import styles from './MultiStepForm.module.scss'
import { TertiaryHeading, TertiaryPara } from '@/component/typography/Typography'
import TextInput from './textinput/TextInput'
import CounterInput from './countinput/CountInput'
import iconGolabel from '../../../assets/icons/ic_golabel.svg'
import iconLeaves from '../../../assets/icons/ic_leaves.svg'
import Image from 'next/image'
import ImageTransport from '../../../assets/images/modal_Img/img_transport.png'
import ImageEmission from '../../../assets/images/modal_Img/img_emission.png'
import ImageTraget from '../../../assets/images/modal_Img/img_traget.png'
import SpanText from './spantext/Spantext'

const totalSteps = 8

// ✅ Initial form state
const initialFormState = {
     size: '',
     EVCar: '',
     EVBike: '',
     EVCarkilometers: '',
     EVBikekilometers: '',
     car: 0,
     bike: 0,
     walking: 0,
     train: 0,
     flight: 0,
     houseHold: '',
     air_conditioner: 0,
     refrigerators: 0,
     washing_machine: 0,
     laptop: 0,
     mobile_phones: 0,
     television: 0,
     SolarRoofInstalled: '',
     dietType: '',
}

// ✅ Reducer function to manage form state
const formReducer = (state: any, action: any) => {
     const newState = { ...state, [action.name]: action.value }
     console.log(`Updated Form Data:`, newState)
     return newState
}

const MultiStepForm = () => {
     const [step, setStep] = useState(1)
     const [formData, dispatch] = useReducer(formReducer, initialFormState)
     const progressRef = useRef<HTMLUListElement>(null)
     const [windowWidth, setWindowWidth] = useState(1)

     useEffect(() => {
          setWindowWidth(window.innerWidth)

          const handleResize = () => setWindowWidth(window.innerWidth)
          window.addEventListener('resize', handleResize)

          return () => window.removeEventListener('resize', handleResize)
     }, [])

     useEffect(() => {
          if (progressRef.current) {
               const progressWidth = ((step - 1) / (totalSteps - 1)) * 100 + '%'
               progressRef.current.style.setProperty('--progress-width', progressWidth)
          }
     }, [step])

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({ name: e.target.name, value: e.target.value })
     }

     const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps))
     const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

     return (
          <form
               id='msform'
               className={styles.msform}
               style={{
                    paddingBlockStart: windowWidth <= 768 ? '10rem' : '0rem',
                    width: step == 8 ? '100%' : '80%',
                    height: step == 8 ? '95%' : 'auto',
               }}
               onSubmit={(e) => e.preventDefault()}
          >
               {/* ✅ Title */}
               <TertiaryHeading className={styles.title}>
                    {step === 8 ? (
                         <>
                              Discover Your Total <span> Greenhouse Gas </span> Emissions
                         </>
                    ) : (
                         <>
                              Track Lifetime <span> CO2 emission</span>
                         </>
                    )}
               </TertiaryHeading>

               {/* ✅ Progress Bar */}
               {step != 8 && (
                    <ul ref={progressRef} className={styles.progressbar}>
                         {[...Array(totalSteps)].map((_, index) => (
                              <li key={index} className={step >= index + 1 ? styles.active : ''}>
                                   <div className={styles.borderLine}>
                                        <span></span>
                                   </div>
                              </li>
                         ))}
                    </ul>
               )}

               {/* ✅ Step 1 - Family Size */}
               {step === 1 && (
                    <fieldset className={styles.fieldset}>
                         <TertiaryPara className={styles.fsTitle}>
                              Family size <span>(members)</span>
                         </TertiaryPara>
                         <div className={styles.firstform}>
                              {[...Array(10)].map((_, index) => {
                                   const number = index + 1
                                   return (
                                        <div
                                             key={number}
                                             className={`${styles.count} ${formData.size === number.toString() ? styles.selected : ''}`}
                                             onClick={() =>
                                                  dispatch({
                                                       name: 'size',
                                                       value: number.toString(),
                                                  })
                                             }
                                             style={{
                                                  background:
                                                       formData.size === number.toString()
                                                            ? '#0E7B68'
                                                            : 'transparent',
                                                  color:
                                                       formData.size === number.toString()
                                                            ? '#fff'
                                                            : '#0E7B68',
                                                  border: `2px solid ${formData.size === number.toString() ? '#0E7B68' : '#092019'}`,
                                             }}
                                        >
                                             {number}
                                        </div>
                                   )
                              })}
                         </div>
                    </fieldset>
               )}

               {/* ✅ Step 2 - EV Selection */}
               {step === 2 && (
                    <fieldset className={styles.fieldset}>
                         <h2 className={styles.fsTitle}>Do you own an electric vehicle?</h2>
                         <div className={styles.radioCon}>
                              {['EVCar', 'EVBike'].map((type) => (
                                   <div key={type} className={styles.type_con}>
                                        <label className={styles.input_label}>
                                             {type === 'EVCar' ? 'EV Car' : 'EV Bike'}
                                        </label>
                                        <div className={styles.flex}>
                                             {['Yes', 'No'].map((option) => (
                                                  <label key={option} className={styles.flex}>
                                                       <input
                                                            type='radio'
                                                            name={type}
                                                            value={option}
                                                            checked={formData[type] === option}
                                                            onChange={handleChange}
                                                       />
                                                       <span
                                                            className='trsTpLbl'
                                                            style={{
                                                                 color:
                                                                      formData[type] === option
                                                                           ? '#fff'
                                                                           : '#728380',
                                                            }}
                                                       >
                                                            {option}
                                                       </span>
                                                  </label>
                                             ))}
                                        </div>
                                   </div>
                              ))}
                         </div>
                         <div className={styles.flex_con}>
                              {formData.EVCar === 'Yes' && (
                                   <div className={styles.inputCar}>
                                        <label>How many kilometers do you travel per day?</label>
                                        <input
                                             name='EVCarkilometers'
                                             className={styles.input_kilometer}
                                             placeholder='Enter the distance'
                                             value={formData.EVCarkilometers || ''}
                                             onChange={(e) =>
                                                  dispatch({
                                                       name: 'EVCarkilometers',
                                                       value: e.target.value,
                                                  })
                                             }
                                        />
                                   </div>
                              )}
                              {formData.EVBike === 'Yes' && (
                                   <div className={styles.inputBike}>
                                        <label>How many kilometers do you travel per day?</label>
                                        <input
                                             name='EVBikekilometers'
                                             className={styles.input_kilometer}
                                             placeholder='Enter the distance'
                                             value={formData.EVBikekilometers || ''}
                                             onChange={(e) =>
                                                  dispatch({
                                                       name: 'EVBikekilometers',
                                                       value: e.target.value,
                                                  })
                                             }
                                        />
                                   </div>
                              )}
                         </div>
                    </fieldset>
               )}

               {/* ✅ Step 3 - Commute Type */}
               {step === 3 && (
                    <fieldset className={styles.fieldset}>
                         <h2 className={styles.fsTitle}>
                              Commute type <span>(Non-renewable energy)</span>
                         </h2>
                         <div className={styles.Commute_container}>
                              {['Car', 'Bike', 'Walking', 'Train', 'Flight'].map((mode, index) => (
                                   <TextInput
                                        key={index}
                                        label={mode}
                                        name={mode.toLowerCase()}
                                        value={formData[mode.toLowerCase()]}
                                        onChange={handleChange}
                                        placeholder='Enter distance'
                                        suffix={mode === 'Flight' ? 'times/month' : 'Km/day'}
                                   />
                              ))}
                         </div>
                    </fieldset>
               )}

               {/* ✅ Step 4 - Household Waste */}
               {step === 4 && (
                    <fieldset className={styles.fieldset}>
                         <h2 className={styles.fsTitle}>
                              Do you manage your household waste responsibly?
                         </h2>
                         <div className={styles.fourthform}>
                              {['Yes', 'No'].map((option) => (
                                   <div
                                        key={option}
                                        className={`${styles.count} ${formData.houseHold === option ? styles.selected : ''}`}
                                        onClick={() =>
                                             dispatch({ name: 'houseHold', value: option })
                                        }
                                        style={{
                                             background:
                                                  formData.houseHold === option
                                                       ? '#0E7B68'
                                                       : 'transparent',
                                             color:
                                                  formData.houseHold === option
                                                       ? '#fff'
                                                       : '#0E7B68',
                                             border: `2px solid ${formData.houseHold === option ? '#0E7B68' : '#092019'}`,
                                        }}
                                   >
                                        {option}
                                   </div>
                              ))}
                         </div>
                    </fieldset>
               )}

               {/* ✅ Step 5, 6, 7 */}
               {step === 5 && (
                    <fieldset className={styles.fieldset} onClick={(e) => e.stopPropagation()}>
                         <h2 className={styles.fsTitle}>
                              What household utilities do you use, and how many of each do you have?
                         </h2>
                         <div className={styles.Commute_container}>
                              {[
                                   'Air Conditioner',
                                   'Refrigerators',
                                   'Washing Machine',
                                   'Laptop',
                                   'Mobile Phones',
                                   'Television',
                              ].map((mode, index) => {
                                   const keyName = mode.toLowerCase().replace(/\s+/g, '_') // Convert to valid object key

                                   return (
                                        <CounterInput
                                             key={index}
                                             label={mode} // Display readable name
                                             value={formData[keyName] || 0} // Use transformed key
                                             onChange={(value: any) =>
                                                  dispatch({ name: keyName, value })
                                             } // Dispatch correctly
                                        />
                                   )
                              })}
                         </div>
                    </fieldset>
               )}
               {step === 6 && (
                    <fieldset className={styles.fieldset}>
                         <h2 className={styles.fsTitle}>
                              Do you have a solar roof installed in your household?
                         </h2>
                         <div className={styles.fourthform}>
                              {['Yes', 'No'].map((option) => (
                                   <div
                                        key={option}
                                        className={`${styles.count} ${formData.SolarRoofInstalled === option ? styles.selected : ''}`}
                                        onClick={() =>
                                             dispatch({ name: 'SolarRoofInstalled', value: option })
                                        }
                                        style={{
                                             background:
                                                  formData.SolarRoofInstalled === option
                                                       ? '#0E7B68'
                                                       : 'transparent',
                                             color:
                                                  formData.SolarRoofInstalled === option
                                                       ? '#fff'
                                                       : '#0E7B68',
                                             border: `2px solid ${formData.SolarRoofInstalled === option ? '#0E7B68' : '#092019'}`,
                                        }}
                                   >
                                        {option}
                                   </div>
                              ))}
                         </div>
                    </fieldset>
               )}
               {step === 7 && (
                    <fieldset className={styles.fieldset}>
                         <h2 className={styles.fsTitle}>What is your diet type?</h2>

                         <div className={styles.fourthform}>
                              {['Vegan', 'Vegetarian', 'Meat eater'].map((option) => (
                                   <div
                                        key={option}
                                        className={`${styles.count} ${formData.dietType === option ? styles.selected : ''}`}
                                        onClick={() =>
                                             dispatch({ name: 'dietType', value: option })
                                        }
                                        style={{
                                             background:
                                                  formData.dietType === option
                                                       ? '#0E7B68'
                                                       : 'transparent',
                                             color:
                                                  formData.dietType === option ? '#fff' : '#0E7B68',
                                             border: `2px solid ${formData.dietType === option ? '#0E7B68' : '#092019'}`,
                                        }}
                                   >
                                        {option}
                                   </div>
                              ))}
                         </div>
                    </fieldset>
               )}
               {step === 8 && (
                    <fieldset className={styles.fieldset} style={{ height: '100%' }}>
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
                                        <label className={styles.merticLabel}>
                                             Since 1990, you’ve emitted around{' '}
                                             <SpanText
                                                  size='large'
                                                  fontWeight='500'
                                                  color='#F24949'
                                             >
                                                  120 metric tons
                                             </SpanText>{' '}
                                             of CO₂e (
                                             <SpanText
                                                  size='large'
                                                  fontWeight='500'
                                                  color='#7ACF4D'
                                             >
                                                  CO₂, CH4, N2O
                                             </SpanText>
                                             ).
                                        </label>
                                   </div>
                                   <div className={styles.right}>
                                        <div className={styles.image_wrapper}>
                                             <Image
                                                  alt=''
                                                  src={iconLeaves}
                                                  className={styles.icon}
                                             />
                                        </div>
                                        <div className={styles.bg_value}>45/100</div>

                                        <div className={styles.sustainability_rank}>
                                             <div className={styles.score}>
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
                                             <p className={styles.savingsMessage}>
                                                  Using public transport instead of a car would have
                                                  saved tons of{' '}
                                                  <SpanText
                                                       size='large'
                                                       fontWeight='500'
                                                       color='#F3C12C'
                                                  >
                                                       CO₂
                                                  </SpanText>
                                             </p>
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
                                        <div className={styles.emissions}>
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
                                        </div>
                                        <div className={styles.centerInner}>
                                             <div className={styles.large_circle}>
                                                  <div className={styles.flex_content}>
                                                       <label className={styles.lager_header}>
                                                            CO<sub>2</sub>
                                                       </label>
                                                       <p className={styles.lager_value}>55%</p>
                                                  </div>
                                             </div>
                                             <div className={styles.medium_circle}>
                                                  <label className={styles.medium_header}>
                                                       CO<sub>2</sub>
                                                  </label>
                                                  <p className={styles.medium_value}>55%</p>
                                             </div>
                                             <div className={styles.small_circle}>
                                                  <label className={styles.small_header}>
                                                       CO<sub>2</sub>
                                                  </label>
                                                  <p className={styles.small_value}>55%</p>
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
                                                       Reduce your <span>CO₂</span> by 10%—here’s
                                                       how,
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
                                             <ul>
                                                  <li>
                                                       Install Solar Panels Reduce CO₂ by 2.5 tons
                                                       (21%)
                                                  </li>
                                                  <li>
                                                       Reduce AC usage by 1 hour/day Reduce CO₂ by
                                                       500 Kg (4% )
                                                  </li>
                                                  <li>Install Solar Panels</li>
                                                  <li>
                                                       Install Solar Panels Reduce CO₂ by 2.5 tons
                                                       (21%)
                                                  </li>
                                                  <li>
                                                       Reduce AC usage by 1 hour/day Reduce CO₂ by
                                                       500 Kg (4% )
                                                  </li>
                                                  <li>
                                                       Install Solar Panels Reduce CO₂ by 2.5 tons
                                                       (21%)
                                                  </li>
                                                  <li>
                                                       Reduce AC usage by 1 hour/day Reduce CO₂ by
                                                       500 Kg (4% )
                                                  </li>
                                                  <li>Install Solar Panels</li>
                                                  <li>
                                                       Install Solar Panels Reduce CO₂ by 2.5 tons
                                                       (21%)
                                                  </li>
                                                  <li>
                                                       Reduce AC usage by 1 hour/day Reduce CO₂ by
                                                       500 Kg (4% )
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </fieldset>
               )}

               {/* ✅ Common Next & Previous Buttons */}
               {step != 8 && (
                    <div className={styles.navigationButtons}>
                         {step > 1 && (
                              <button
                                   type='button'
                                   className={styles.actionButton}
                                   onClick={prevStep}
                              >
                                   Previous
                              </button>
                         )}
                         {step < totalSteps ? (
                              <button
                                   type='button'
                                   className={styles.actionButton}
                                   onClick={nextStep}
                              >
                                   Next
                              </button>
                         ) : (
                              <button type='submit' className={styles.submitButton}>
                                   Submit
                              </button>
                         )}
                    </div>
               )}
          </form>
     )
}

export default MultiStepForm
