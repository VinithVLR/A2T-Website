import React from 'react'
import styles from './TitleDescriptionWithIcon.module.scss'
import Image, { StaticImageData } from 'next/image'
import Button from '../button/Button'
import Image1 from '../../assets/images/img_service_1.png'
interface ItemProps {
     title: string
     description?: string
     icon?: any
     subTitle?: string
     style?: any
     btnColor?: any
     btn?: any
     paraStyle?: any
     bgimage?: any
}
const TitleDescriptionWithIcon: React.FC<ItemProps> = ({
     title,
     description,
     icon,
     subTitle,
     style,
     btnColor,
     btn,
     paraStyle,
     bgimage,
}) => {
     return (
          <div className={styles.main_con} style={{ ...style }}>
               {icon && (
                    <div className={styles.iconWrapper}>
                         <Image src={icon} alt='Vision Icon' className={styles.image} />
                    </div>
               )}
               <h2 className={styles.title} style={{ ...paraStyle }}>
                    {title}
               </h2>
               {subTitle && <h4 className={styles.subTitle}>{subTitle}</h4>}
               {bgimage && (
                    <div className={styles.img_wrapper}>
                         <Image src={bgimage} alt='' className={styles.image} />
                    </div>
               )}
               <p className={styles.description} style={{ ...paraStyle }}>
                    {description}
               </p>
               {btn && (
                    <Button
                         label={'Explore more'}
                         disabled={false}
                         style={{
                              width: '10rem',
                              height: '2.7rem',
                              backgroundColor: btnColor,
                              gap: '1rem',
                              marginBlock: '2rem',
                         }}
                         loading={false}
                         icon
                         labestyle={{ marginLeft: '0px', fontSize: '0.8rem' }}
                    />
               )}
          </div>
     )
}

export default TitleDescriptionWithIcon
