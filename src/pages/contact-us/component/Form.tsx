'use client'

import { useRef, useState } from 'react'
import styles from './Form.module.scss'
import uploadIcon from '../../../assets/icons/ic_file_upload.svg'
import Checkbox from '@/component/checkbox/Checkbox'
import Loader from '@/component/loader/Loader'
import Image from 'next/image'

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
     })

     const [checkBoxError, setCheckboxError] = useState(false)

     const openFileUploader = (e: any) => {
          e.preventDefault()
          if (uploadBtnRef.current) {
               uploadBtnRef.current.click()
          }
     }

     const onChange = (key: string, value: string) => {
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

     const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault()

          if (!isChecked) {
               setCheckboxError(true)
               return
          }

          if (data.name && data.email && data.idea && checkValidEmail(data.email)) {
               setLoading(true)
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

     return (
          <div className={styles.contactForm}>
               <div className={styles.inputCont}>
                    <input
                         className={`${styles.input} ${errors.name && styles.error}`}
                         onChange={(e) => onChange('name', e.target.value)}
                         type='text'
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
                              placeholder='Contact phone'
                         />
                    </div>
                    <div className={styles.inputCont}>
                         <input
                              className={`${styles.input} ${errors.email && styles.error}`}
                              onChange={(e) => onChange('email', e.target.value)}
                              type='text'
                              placeholder='E-mail*'
                         />
                         {errors.email && <span>{errors.email}</span>}
                    </div>
               </div>
               <div className={styles.inputCont}>
                    <textarea
                         className={`${errors.idea && styles.error}`}
                         placeholder='Let’s talk about your idea*'
                         onChange={(e) => onChange('idea', e.target.value)}
                    />
                    {errors.idea && <span>{errors.idea}</span>}
               </div>

               <div onClick={openFileUploader} className={styles.uploadBtn}>
                    <Image src={uploadIcon} alt='' />
                    <span>Upload Additional file</span>
               </div>
               <p className={styles.infoNote}>File size of your documents should not exceed 10MB</p>

               <input
                    style={{ display: 'none' }}
                    type='file'
                    placeholder='Contact name'
                    ref={uploadBtnRef}
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
