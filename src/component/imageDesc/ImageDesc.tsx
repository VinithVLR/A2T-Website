'use client'
import Image from 'next/image'
import styles from './ImageDesc.module.scss'
import { useState, useEffect } from 'react'
interface imageDescProps {
     imageUrl: string
     title: string
     description: string
     rowReverse?: boolean
     style?: any
}

const ImageDesc = ({ imageUrl, title, description, rowReverse, style }: imageDescProps) => {
     const [isSmallScreen, setIsSmallScreen] = useState(false)

     useEffect(() => {
          const handleResize = () => {
               setIsSmallScreen(window.innerWidth <= 748)
          }

          handleResize()
          window.addEventListener('resize', handleResize)

          return () => {
               window.removeEventListener('resize', handleResize)
          }
     }, [])
     return (
          <section
               className={styles.imageDesc_con}
               style={{
                    flexDirection: isSmallScreen
                         ? undefined
                         : rowReverse
                           ? 'row-reverse'
                           : undefined,
                    ...style,
               }}
          >
               <div
                    className={styles.image_section}
                    style={{ justifyContent: rowReverse ? 'end' : 'left' }}
               >
                    <div className={styles.imageContainer}>
                         <Image src={imageUrl} alt={title} className={styles.image} />
                    </div>
               </div>
               <div
                    className={styles.textContainer}
                    style={{
                         justifyContent: rowReverse ? 'flex-end' : undefined,
                         textAlign: rowReverse ? 'end' : undefined,
                         width: '100%',
                    }}
               >
                    <div className={styles.details_con}>
                         <h2 className={styles.title}>{title}</h2>
                         <p className={styles.desc}>{description}</p>
                    </div>
               </div>
          </section>
     )
}

export default ImageDesc
