import React from 'react'
import styles from './TitleDescriptionWithIcon.module.scss'
import Image, { StaticImageData } from 'next/image'

interface ItemProps {
     title: string
     description: string
     icon?: any
     subTitle?: string
     style?: any
}
const TitleDescriptionWithIcon: React.FC<ItemProps> = ({
     title,
     description,
     icon,
     subTitle,
     style,
}) => {
     return (
          <div className={styles.main_con} style={{ ...style }}>
               {icon && (
                    <div className={styles.iconWrapper}>
                         <Image src={icon} alt='Vision Icon' className={styles.image} />
                    </div>
               )}
               <h2 className={styles.title}>{title}</h2>
               {subTitle && <h4 className={styles.subTitle}>{subTitle}</h4>}
               <p className={styles.description}>{description}</p>
          </div>
     )
}

export default TitleDescriptionWithIcon
