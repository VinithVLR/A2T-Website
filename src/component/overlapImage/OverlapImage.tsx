import React from 'react'
import styles from './OverlapImage.module.scss'
import Image, { StaticImageData } from 'next/image'

interface OverlapImageProps {
     bgImage: StaticImageData
     image: StaticImageData
     bgStyle?: any
     imgWrapper?: any
}

const OverlapImage: React.FC<OverlapImageProps> = ({ bgImage, image, bgStyle, imgWrapper }) => {
     return (
          <div
               className={styles.mainContainer}
               style={{ backgroundImage: `url(${bgImage.src})`, ...bgStyle }}
          >
               <div className={styles.imgWrapper} style={{ ...imgWrapper }}>
                    <Image src={image} alt='Overlay Image' priority />
               </div>
          </div>
     )
}

export default OverlapImage
