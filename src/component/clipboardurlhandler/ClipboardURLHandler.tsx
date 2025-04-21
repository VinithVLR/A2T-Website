'use client'
import React, { useEffect, useState } from 'react'
import { TertiaryHeading } from '@/component/typography/Typography'
import Modal from '../Modal/Modal'
import BASE_URL from '@/ulits/apiUrl'
import { useSearchParams } from 'next/navigation'

const ClipboardURLHandler = () => {
     const searchParams = useSearchParams()
     const [data, setData] = useState<any>(null)
     const [isModalOpen, setIsModalOpen] = useState(false)

     useEffect(() => {
          if (!searchParams) return

          const token = searchParams.get('token')

          if (token) {
               console.log('🔍 Token found in URL:', token)

               fetch(`${BASE_URL}api/emission/report/token?token=${token}`)
                    .then((res) => res.json())
                    .then((data) => {
                         console.log('API Response:', data)
                         setData(data)
                         setIsModalOpen(true)
                    })
                    .catch((err) => {
                         console.error('❌ Token verification failed:', err)
                    })
          }
     }, [searchParams])

     const handleCloseModal = () => {
          setIsModalOpen(false)
     }

     return (
          <>
               {isModalOpen && (
                    <Modal isOpen={isModalOpen} closeModal={handleCloseModal}>
                         <TertiaryHeading className='modal-title'>
                              Data for the Token
                         </TertiaryHeading>
                         {/* Assuming the data has a 'message' field */}
                         <div>{data?.message || 'No data available'}</div>
                    </Modal>
               )}
          </>
     )
}

export default ClipboardURLHandler
