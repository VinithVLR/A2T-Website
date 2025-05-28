import React, { useEffect, useReducer, useState } from 'react'
import Modal from '../../Modal'
import styles from './ShareForm.module.scss'
import { TertiaryHeading } from '@/component/typography/Typography'
import BASE_URL from '@/ulits/apiUrl'
import { useId } from '@/component/context/TokenProvider'
import { toast } from 'react-toastify'

// Reducer to manage form state
const formReducer = (state: any, action: any) => {
     const newState = { ...state, [action.field]: action.value }
     return newState
}

// Initial form state
const shareFormState = {
     name: '',
     emailOrPhone: '',
     occupation: '',
}

type ShareFormProps = {
     isShare: boolean
     handleCloseShareForm: () => void
}

const ShareForm = ({ isShare, handleCloseShareForm }: ShareFormProps) => {
     const [shareFormData, dispatchShare] = useReducer(formReducer, shareFormState)
     const [errors, setErrors] = useState<{ [key: string]: string }>({})

     const handleChangeShare = (e: React.ChangeEvent<HTMLInputElement>) => {
          dispatchShare({ field: e.target.name, value: e.target.value })
     }

     const { id, status } = useId()

     const validateForm = () => {
          const newErrors: { [key: string]: string } = {}

          if (!shareFormData.name.trim()) {
               newErrors.name = 'Name is required'
          }

          if (!shareFormData.emailOrPhone.trim()) {
               newErrors.emailOrPhone = 'Email or phone is required'
          } else {
               const emailPhoneRegex = /^(\+?\d{10,15}|[\w.-]+@[\w.-]+\.\w{2,})$/
               if (!emailPhoneRegex.test(shareFormData.emailOrPhone)) {
                    newErrors.emailOrPhone = 'Invalid email or phone format'
               }
          }

          if (!shareFormData.occupation.trim()) {
               newErrors.occupation = 'Occupation is required'
          }

          setErrors(newErrors)
          return Object.keys(newErrors).length === 0
     }

     const baseUrl = window.location.origin + '/'
     console.log(baseUrl)

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault()
          if (validateForm()) {
               console.log('✅ Form Submitted:', {
                    name: shareFormData.name,
                    emailOrPhone: shareFormData.emailOrPhone,
                    occupation: shareFormData.occupation,
               })
               // Optionally close modal or show success

               const body = {
                    name: shareFormData.name,
                    email: shareFormData.emailOrPhone,
                    phone: shareFormData.occupation,
               }

               try {
                    const response = await fetch(
                         `${BASE_URL}api/user?id=${'bGaMyiz2M8V2dYAITVid'}`,
                         {
                              method: 'POST',
                              headers: {
                                   'Content-Type': 'application/json',
                              },
                              body: JSON.stringify(body),
                         },
                    )

                    if (!response.ok) throw new Error('Failed to submit form')

                    const result = await response.json()
                    console.log('✅ API Response:', result)

                    const token = result.token

                    const clipBoard = `${baseUrl}${token}`
                    copyToClipboard(clipBoard)
                    toast('Link copied to clipboard!')
               } catch (err) {
                    console.error('❌ Error submitting form:', err)
               }

               handleCloseShareForm()
          }
     }

     const copyToClipboard = (text: string) => {
          if (navigator.clipboard) {
               navigator.clipboard.writeText(text).then(
                    () => {
                         console.log('Copied to clipboard:', text)
                    },
                    (err) => {
                         console.error('Failed to copy: ', err)
                    },
               )
          } else {
               // Fallback for older browsers
               const textArea = document.createElement('textarea')
               textArea.value = text
               document.body.appendChild(textArea)
               textArea.focus()
               textArea.select()
               try {
                    document.execCommand('copy')
                    console.log('Copied to clipboard (fallback):', text)
               } catch (err) {
                    console.error('Fallback copy failed:', err)
               }
               document.body.removeChild(textArea)
          }
     }

     return (
          <React.Fragment>
               <Modal
                    isOpen={isShare}
                    closeModal={handleCloseShareForm}
                    style={{ width: '30rem', height: 'auto' }}
               >
                    <form id='shareform' className={styles.shareForm} onSubmit={handleSubmit}>
                         <div className={styles.shareFormContainer}>
                              <TertiaryHeading className={styles.title}>
                                   <span>Share</span> report with your friends!
                              </TertiaryHeading>

                              <div className={styles.inputContainer}>
                                   <div className={styles.formGroup}>
                                        <label>Name</label>
                                        <input
                                             type='text'
                                             name='name'
                                             placeholder='Name'
                                             value={shareFormData.name}
                                             onChange={handleChangeShare}
                                             className={styles.input}
                                        />
                                        {errors.name && (
                                             <span className={styles.error}>{errors.name}</span>
                                        )}
                                   </div>

                                   <div className={styles.formGroup}>
                                        <label>Email / Phone</label>
                                        <input
                                             type='text'
                                             name='emailOrPhone'
                                             placeholder='Email or Phone'
                                             value={shareFormData.emailOrPhone}
                                             onChange={handleChangeShare}
                                             className={styles.input}
                                        />
                                        {errors.emailOrPhone && (
                                             <span className={styles.error}>
                                                  {errors.emailOrPhone}
                                             </span>
                                        )}
                                   </div>

                                   <div className={styles.formGroup}>
                                        <label>Occupation</label>
                                        <input
                                             type='text'
                                             name='occupation'
                                             placeholder='Occupation'
                                             value={shareFormData.occupation}
                                             onChange={handleChangeShare}
                                             className={styles.input}
                                        />
                                        {errors.occupation && (
                                             <span className={styles.error}>
                                                  {errors.occupation}
                                             </span>
                                        )}
                                   </div>
                              </div>

                              <div className={styles.shareFormFooter}>
                                   <button type='submit' className={styles.shareBtn}>
                                        Submit & share
                                   </button>
                              </div>
                         </div>
                    </form>
               </Modal>
          </React.Fragment>
     )
}

export default ShareForm
