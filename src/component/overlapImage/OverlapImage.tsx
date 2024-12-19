import React from 'react'
import styles from './OverlapImage.module.scss'
import Image, { StaticImageData } from 'next/image'

interface OverlapImageProps {
     bgImage: StaticImageData
     bgStyle?: any
     imgWrapper?: any
     img: StaticImageData
     style?: any
}

const OverlapImage: React.FC<OverlapImageProps> = ({
     bgImage,
     img,
     bgStyle,
     imgWrapper,
     style,
}) => {
     return (
          <div
               className={styles.mainContainer}
               style={{ backgroundImage: `url(${bgImage.src})`, ...bgStyle }}
          >
               <div className={styles.imgWrapper} style={{ ...imgWrapper }}>
                    <Image src={bgImage} alt='Overlay Image' priority />
                    <div className={styles.imgWrapper_ab} style={{ ...style }}>
                         <Image src={img} alt='Overlay Image' priority />
                    </div>
               </div>
          </div>
     )
}

export default OverlapImage
