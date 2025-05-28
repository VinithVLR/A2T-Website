import React, { useState, useEffect, useRef, useReducer } from 'react'
import styles from './MultiStepForm.module.scss'
import { TertiaryHeading, TertiaryPara } from '@/component/typography/Typography'
import TextInput from './textinput/TextInput'
import CounterInput from './countinput/CountInput'
import iconGolabel from '../../../assets/icons/ic_golabel.svg'
import iconLeaves from '../../../assets/icons/ic_leaves.svg'
import imgRecyle from '../../../assets/images/modal_Img/img_recycle.png'
import Image from 'next/image'
import ImageTransport from '../../../assets/images/modal_Img/img_transport.png'
import ImageEmission from '../../../assets/images/modal_Img/img_emission.png'
import ImageTraget from '../../../assets/images/modal_Img/img_traget.png'
import SpanText from './spantext/Spantext'
import shareICon from '../../../assets/icons/ic_share.svg'
import iconLow from '../../../assets/icons/ic_low_range.svg'
import iconlowRobot from '../../../assets/icons/ic_low_range_robot.svg'
import iconMid from '../../../assets/icons/ic_mid_range.svg'
import iconMidRobot from '../../../assets/icons/ic_mid_range_robot.svg'
import bgLowrange from '../../../assets/images/img_bg_low.svg'
import bgMidrange from '../../../assets/images/img_bg_mid.svg'
import bgHigrange from '../../../assets/images/img_bg_hig.svg'
import { useId } from '@/component/context/TokenProvider'
import BASE_URL from '@/ulits/apiUrl'

const totalSteps = 7

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

const formReducer = (state: any, action: any) => {
     const newState = { ...state, [action.name]: action.value }
     return newState
}

const MultiStepForm = ({ closeModal, setIsShare, setIsCalendarStep }: any) => {
     const [step, setStep] = useState(1)
     const [formData, dispatch] = useReducer(formReducer, initialFormState)
     const progressRef = useRef<HTMLUListElement>(null)
     const [windowWidth, setWindowWidth] = useState(window.innerWidth)
     const { id, status, setStatus } = useId()
     const [overData, setOverData]: any = useState()

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

     const [isStepValid, setIsStepValid] = useState(false)

     useEffect(() => {
          const isValid = validateStepFields(step)
          setIsStepValid(isValid)
     }, [formData, step])

     const nextStep = () => {
          if (step < totalSteps && isStepValid) {
               setStep((prev) => Math.min(prev + 1, totalSteps))
          }
     }
     const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

     const validateStepFields = (step: any) => {
          let isValid = true

          switch (step) {
               case 1:
                    if (!formData.size) isValid = false
                    break

               case 2:
                    const hasEVCar = formData.EVCar === 'Yes'
                    const hasEVBike = formData.EVBike === 'Yes'

                    const hasSelectedEVCar = formData.EVCar === 'Yes' || formData.EVCar === 'No'
                    const hasSelectedEVBike = formData.EVBike === 'Yes' || formData.EVBike === 'No'

                    // Require user to make a selection first
                    if (!hasSelectedEVCar && !hasSelectedEVBike) {
                         isValid = false
                    }

                    // If selected "Yes", then kilometers are required
                    if (hasEVCar && !formData.EVCarkilometers) {
                         isValid = false
                    }

                    if (hasEVBike && !formData.EVBikekilometers) {
                         isValid = false
                    }
                    break

               case 3:
                    const commuteFields = ['car', 'bike', 'train', 'flight']
                    const isValidCommute = commuteFields.some(
                         (field) => formData[field] && !isNaN(Number(formData[field])),
                    )
                    if (!isValidCommute) {
                         isValid = false
                    }
                    break

               case 4:
                    if (!formData.houseHold) isValid = false
                    break

               case 5:
                    const utilityFields = [
                         'air_conditioner',
                         'refrigerators',
                         'washing_machine',
                         'laptop',
                         'mobile_phones',
                         'television',
                    ]
                    const isValidUtility = utilityFields.some(
                         (field) => formData[field] && Number(formData[field]) > 0,
                    )
                    if (!isValidUtility) {
                         isValid = false
                    }
                    break

               case 6:
                    if (!formData.SolarRoofInstalled) isValid = false
                    break

               case 7:
                    if (!formData.dietType) isValid = false
                    break

               default:
                    break
          }

          return isValid
     }

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault()

          if (!validateStepFields(step)) {
               return
          }

          const dietvalue =
               formData?.dietType === 'Vegan'
                    ? 'vegan'
                    : formData.dietType === 'Vegetarian'
                      ? 'vegetarian'
                      : 'non_veg'

          const body = {
               family_size: Number(formData?.size),
               ev_car_km_per_day: formData?.EVCar === 'yes' ? true : false,
               car_km_per_day: Number(formData?.car),
               bike_km_per_day: Number(formData?.bike),
               flights_per_month: Number(formData?.flight),
               train_km_per_day: Number(formData?.train),
               manage_waste: formData?.houseHold === 'yes' ? true : false,
               diet_type: dietvalue,
               ac_count: formData?.air_conditioner,
               fridge_count: formData?.refrigerators,
               washing_machine_count: formData?.washing_machine,
               laptop_count: formData?.laptop,
               mobile_count: formData?.mobile_phones,
               tv_count: formData?.television,
               has_solar_panel: formData?.SolarRoofInstalled === 'yes' ? true : false,
          }

          try {
               const response = await fetch(`${BASE_URL}api/emission/report?id=${id}`, {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
               })

               if (!response.ok) throw new Error('Failed to submit form')

               const result = await response.json()
               setOverData(result.data)
               setStatus(result.status)
               setStep(8)
          } catch (err) {
               console.error('❌ Error submitting form:', err)
          }
          setStep(8)
     }

     console.log('Data-checking', overData?.sustainability_score)

     return (
          <form
               id='msform'
               className={styles.msform}
               style={{
                    paddingBlockStart: windowWidth <= 768 ? '10rem' : '0rem',
                    width: step == 8 ? '100%' : '80%',
                    height: step == 8 ? '100%' : 'auto',
                    marginTop: windowWidth <= 768 && step == 8 ? '22rem' : '0rem',
               }}
               onSubmit={handleSubmit}
          >
               {/* ✅ Title */}

               {step == 8 && (
                    <div className={styles.shareBtnWrapper}>
                         <div
                              className={styles.shareBtn}
                              // onClick={() => {
                              //      setIsShare(true)
                              //      // closeModal()
                              // }}
                         >
                              <TertiaryPara>Share</TertiaryPara>
                              <Image alt='' src={shareICon} className={styles.icon} />
                         </div>
                    </div>
               )}

               <TertiaryHeading className={styles.title}>
                    {step === 8 ? (
                         <div style={{ paddingBlockEnd: '0.5rem' }}>
                              Discover Your Total <span> Greenhouse Gas </span> Emissions
                         </div>
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
                                   <div key={type} className={styles.flexContainer}>
                                        <div className={styles.type_con}>
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

                                        {/* Show Input Field If "Yes" is Selected */}
                                        {formData[type] === 'Yes' && (
                                             <div className={styles.inputWrapper}>
                                                  <label>
                                                       How many kilometers do you travel per day?
                                                  </label>
                                                  <input
                                                       name={`${type}kilometers`}
                                                       className={styles.input_kilometer}
                                                       placeholder='Enter the distance'
                                                       value={formData[`${type}kilometers`] || ''}
                                                       onChange={(e) =>
                                                            dispatch({
                                                                 name: `${type}kilometers`,
                                                                 value: e.target.value,
                                                            })
                                                       }
                                                  />
                                             </div>
                                        )}
                                   </div>
                              ))}
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
                                             dispatch({
                                                  name: 'houseHold',
                                                  value: option,
                                             })
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
                                             dispatch({
                                                  name: 'SolarRoofInstalled',
                                                  value: option,
                                             })
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
               {/* ✅ Common Next & Previous Buttons */}

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
                                        <TertiaryPara className={styles.merticLabel}>
                                             Since 1990, you’ve emitted around{' '}
                                             <SpanText
                                                  size='large'
                                                  fontWeight='500'
                                                  color='#F24949'
                                                  fontSize='1.3rem'
                                             >
                                                  {overData?.lifetime_co2e_tons}
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
                                                                 {overData.sustainability_score}/100{' '}
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
                                                            : overData?.sustainability_score <= 74
                                                              ? iconMidRobot
                                                              : imgRecyle
                                                  }
                                                  className={styles.icon}
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className={styles.maingrid}>
                                   <div
                                        className={styles.right}
                                        style={{
                                             gridTemplateRows:
                                                  overData?.suggestions?.public_transport_savings ==
                                                  null
                                                       ? '1fr'
                                                       : '1fr 1fr',
                                        }}
                                   >
                                        <div
                                             className={styles.top}
                                             style={{
                                                  backgroundImage: `url(${ImageTransport.src})`,
                                                  display:
                                                       overData?.suggestions
                                                            ?.public_transport_savings == null
                                                            ? 'none'
                                                            : 'flex',
                                             }}
                                        >
                                             <TertiaryPara className={styles.savingsMessage}>
                                                  Using public transport instead of a car would have
                                                  saved tons of{' '}
                                                  <SpanText
                                                       size='large'
                                                       fontWeight='500'
                                                       color='#F3C12C'
                                                  >
                                                       {
                                                            overData?.suggestions
                                                                 ?.public_transport_savings
                                                       }
                                                  </SpanText>
                                             </TertiaryPara>
                                        </div>
                                        <div
                                             className={styles.bottom}
                                             style={{
                                                  backgroundImage: `url(${ImageEmission.src})`,
                                                  width:
                                                       overData?.suggestions
                                                            ?.public_transport_savings == null
                                                            ? '100%'
                                                            : 'auto',
                                             }}
                                        >
                                             <p className={styles.emissionLabel}>
                                                  Your emissions are{' '}
                                                  <SpanText
                                                       size='large'
                                                       fontWeight='500'
                                                       color='#FF4545'
                                                  >
                                                       {overData?.higher_than_average} higher
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
                                                  {overData?.lifetime_co2_tons} of CO2{' '}
                                             </SpanText>{' '}
                                             (Carbon-di-oxide),{' '}
                                             <SpanText
                                                  size='large'
                                                  fontWeight='500'
                                                  color='#F56565'
                                             >
                                                  {overData?.lifetime_ch4_tons} of CH4{' '}
                                             </SpanText>{' '}
                                             (methane), &{' '}
                                             <SpanText
                                                  size='large'
                                                  fontWeight='500'
                                                  color='#CCBE09'
                                             >
                                                  {overData?.lifetime_n2o_tons} of N2O{' '}
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
                                                       Reduce your <span>CO₂</span> by{' '}
                                                       {overData.challenges.challenge_summary}%
                                                       —here’s how,
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
                                             {overData?.challenges?.suggestions.map(
                                                  (suggestion: any, index: any) => (
                                                       <li
                                                            key={index}
                                                            style={{
                                                                 fontSize: '14px',
                                                                 lineHeight: '20px',
                                                                 color: '#fff',
                                                            }}
                                                       >
                                                            {suggestion.text || suggestion.item}{' '}
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
                    </fieldset>
               )}
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
                                   className={`${styles.actionButton} ${styles['actionButton--next']}`}
                                   onClick={nextStep}
                                   // disabled={!validateStepFields(step)}
                                   disabled={!isStepValid}
                                   style={{
                                        opacity: !isStepValid ? 0.5 : 1, // Dim button if not valid
                                        pointerEvents: !isStepValid ? 'none' : 'auto', // Disable interaction if not valid
                                   }}
                              >
                                   Next
                              </button>
                         ) : (
                              <button
                                   type='submit'
                                   className={styles.submitButton}
                                   disabled={!isStepValid}
                                   style={{
                                        opacity: !isStepValid ? 0.5 : 1, // Dim button if not valid
                                        pointerEvents: !isStepValid ? 'none' : 'auto', // Disable interaction if not valid
                                   }}
                              >
                                   Submit
                              </button>
                         )}
                    </div>
               )}
          </form>
     )
}

export default MultiStepForm
