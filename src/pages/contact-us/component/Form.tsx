'use client'

import { useRef, useState } from 'react'
import styles from './Form.module.scss'
import uploadIcon from '../../../assets/icons/ic_file_upload.svg'
import Checkbox from '@/component/checkbox/Checkbox'
import Loader from '@/component/loader/Loader'
import Image from 'next/image'
import trashIcon from '../../../assets/icons/ic_trash.svg'

function Form() {
     const uploadBtnRef: any = useRef(null)
     const [isChecked, setIsChecked] = useState(false)
     const [loading, setLoading] = useState(false)
     const [data, setData] = useState({
          name: '',
          email: '',
          phone: '',
          idea: '',
          file: null,
     })

     const [errors, setErrors] = useState({
          name: '',
          email: '',
          idea: '',
          file: '',
     })

     const [checkBoxError, setCheckboxError] = useState(false)

     const openFileUploader = (e: any) => {
          e.preventDefault()
          if (uploadBtnRef.current) {
               uploadBtnRef.current.click()
          }
     }

     const onChange = (key: string, value: string | null) => {
          setData((prev) => {
               return { ...prev, [key]: value }
          })

          setErrors((prev) => {
               return { ...prev, [key]: value ? '' : `Please enter ${key}` }
          })
     }

     const checkValidEmail = (email: string) => {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          return emailRegex.test(email)
     }

     const submitForm = async () => {
          setLoading(true)
          try {
               const formData = new FormData()
               formData.append('name', data.name.trim())
               formData.append('email', data.email.trim())
               formData.append('phone', data.phone?.trim() || '')
               formData.append('message', data.idea.trim())

               if (data.file) {
                    formData.append('file', data.file)
               }

               const response = await fetch('/api/contact', {
                    method: 'POST',
                    body: formData,
               })

               const result = await response.json()

               if (response.ok) {
                    setData({ name: '', email: '', phone: '', idea: '', file: null })
                    setIsChecked(false)
               } else {
                    throw new Error(result.error || 'Failed to submit form')
               }
          } catch (error) {
               console.error('Error submitting form:', error)
          } finally {
               setLoading(false)
          }
     }

     const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault()

          if (!isChecked) {
               setCheckboxError(true)
               return
          }

          if (data.name && data.email && data.idea && checkValidEmail(data.email)) {
               submitForm()
          } else {
               let obj = { ...errors }

               if (!data.name) {
                    obj.name = 'Please enter name'
               }

               if (!data.email) {
                    obj.email = 'Please enter email'
               } else {
                    obj.email = 'Please enter valid email'
               }

               if (!data.idea) {
                    obj.idea = 'Please enter idea'
               }

               setErrors(obj)
          }
     }

     function displayFileSize(file: File) {
          const sizeInBytes = file.size // Get the file size in bytes

          if (sizeInBytes < 1024) {
               return `${sizeInBytes} Bytes`
          } else if (sizeInBytes < 1024 * 1024) {
               return `${(sizeInBytes / 1024).toFixed(2)} KB`
          } else if (sizeInBytes < 1024 * 1024 * 1024) {
               return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`
          } else {
               return `${(sizeInBytes / (1024 * 1024 * 1024)).toFixed(2)} GB`
          }
     }

     return (
          <div className={styles.contactForm}>
               <div className={styles.inputCont}>
                    <input
                         className={`${styles.input} ${errors.name && styles.error}`}
                         onChange={(e) => onChange('name', e.target.value)}
                         type='text'
                         value={data?.name}
                         placeholder='Contact name*'
                    />
                    {errors.name && <span>{errors.name}</span>}
               </div>

               <div className={styles.row}>
                    <div className={styles.inputCont}>
                         <input
                              className={`${styles.input}`}
                              onChange={(e) => onChange('phone', e.target.value)}
                              type='text'
                              value={data?.phone}
                              placeholder='Contact phone'
                         />
                    </div>
                    <div className={styles.inputCont}>
                         <input
                              className={`${styles.input} ${errors.email && styles.error}`}
                              onChange={(e) => onChange('email', e.target.value)}
                              type='text'
                              value={data?.email}
                              placeholder='E-mail*'
                         />
                         {errors.email && <span>{errors.email}</span>}
                    </div>
               </div>
               <div className={styles.inputCont}>
                    <textarea
                         className={`${errors.idea && styles.error}`}
                         placeholder='Let’s talk about your idea*'
                         value={data?.idea}
                         onChange={(e) => onChange('idea', e.target.value)}
                    />
                    {errors.idea && <span>{errors.idea}</span>}
               </div>

               {data?.file ? (
                    <div className={styles.filePreview}>
                         <div
                              style={{
                                   display: 'flex',
                                   alignItems: 'flex-end',
                                   columnGap: '0.5rem',
                              }}
                         >
                              <span> {(data?.file as File)?.name ?? ''}</span>
                              <pre className={styles.size}>( {displayFileSize(data.file)} )</pre>
                         </div>

                         <button
                              onClick={() => {
                                   setData((prev) => {
                                        return { ...prev, ['file']: null }
                                   })
                              }}
                              className={styles.deleteBtn}
                         >
                              <Image src={trashIcon} alt='' />
                         </button>
                    </div>
               ) : (
                    <div onClick={openFileUploader} className={styles.uploadBtn}>
                         <Image src={uploadIcon} alt='' />
                         <span>Upload Additional file</span>
                    </div>
               )}
               {errors.file ? (
                    <p className={styles.infoNote} style={{ color: 'red' }}>
                         {errors.file}
                    </p>
               ) : (
                    <p className={styles.infoNote}>
                         File size of your documents should not exceed 10MB
                    </p>
               )}

               <input
                    style={{ display: 'none' }}
                    type='file'
                    placeholder='Contact name'
                    ref={uploadBtnRef}
                    onChange={(e: any) => {
                         if (e.target.files[0]) {
                              const MAX_FILE_SIZE = 10 * 1024 * 1024
                              if (e.target.files[0].size > MAX_FILE_SIZE) {
                                   setErrors({
                                        ...errors,
                                        file: 'File size of your documents should not exceed 10MB',
                                   })
                              } else {
                                   onChange('file', e.target.files ? e.target.files[0] : null)
                              }
                         }
                    }}
               />
               <div className={styles.checkbox}>
                    <Checkbox
                         isChecked={isChecked}
                         onCheckChange={() => {
                              setIsChecked(!isChecked)
                              setCheckboxError(false)
                         }}
                    />
                    <p style={checkBoxError ? { color: 'red' } : {}}>
                         I want to protect my data by signing an NDA
                    </p>
               </div>
               <button onClick={(e) => onSubmit(e)} className={styles.submitBtn} type='submit'>
                    {loading && <Loader />}
                    <span>Submit</span>
               </button>
          </div>
     )
}

export default Form
