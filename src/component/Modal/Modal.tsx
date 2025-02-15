import React, { useEffect, useState } from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
     isOpen: boolean
     closeModal: () => void
     children: React.ReactNode
     bgImageUrl?: string
     style?: any
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children, bgImageUrl, style }) => {
     const [windowWidth, setWindowWidth] = useState(0)

     useEffect(() => {
          setWindowWidth(window.innerWidth)

          const handleResize = () => setWindowWidth(window.innerWidth)
          window.addEventListener('resize', handleResize)

          return () => window.removeEventListener('resize', handleResize)
     }, [])

     useEffect(() => {
          if (isOpen) {
               document.body.style.overflow = 'hidden'
               document.documentElement.style.overflow = 'hidden'
          } else {
               document.body.style.overflow = 'auto'
               document.documentElement.style.overflow = 'auto'
          }

          return () => {
               document.body.style.overflow = 'auto'
               document.documentElement.style.overflow = 'auto'
          }
     }, [isOpen])

     if (!isOpen) return null
     return (
          <div className={styles.modalOverlay} onClick={closeModal}>
               <div
                    className={styles.modalContent}
                    style={{
                         backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : '',
                         backgroundSize: windowWidth <= 768 ? 'contain' : 'cover',
                         backgroundPosition: windowWidth <= 768 ? 'bottom' : 'center',
                         backgroundRepeat: 'no-repeat',
                         ...style,
                    }}
                    onClick={(e) => e.stopPropagation()}
               >
                    <button className={styles.closeButton} onClick={closeModal}>
                         &times;
                    </button>
                    {children}
               </div>
          </div>
     )
}

export default Modal
