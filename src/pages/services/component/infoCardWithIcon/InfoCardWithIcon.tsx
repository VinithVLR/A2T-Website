import React from 'react'
import styles from './InfoCardWithIcon.module.scss'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import Image1 from '../../../../assets/images/img_service_1.png'
import eyeIcon from '../../../../assets/icons/ic_eye.svg'
import Image from 'next/image'

interface InfoCardWithIconProps {
     icon?: string
     title: string
     description: string
     btnColor?: string
     rowReverse?: boolean
     dataImage: any
     hoverColor?: any
     key: any
     btn?: any
     label?: any
     labelStyle?: any
     link?: any
     id?: any
}
const InfoCardWithIcon: React.FC<InfoCardWithIconProps> = ({
     icon,
     title,
     description,
     btnColor,
     rowReverse = false,
     dataImage,
     hoverColor,
     key,
     btn,
     label,
     labelStyle,
     link,
     id,
}) => {
     const objStyle: any = {
          paddingInline: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
     }

     const objParaStyle = {
          textAlign: 'end',
          lineHeight: '1.5rem',
     }

     return (
          <div id={id ? id : ''} className={styles.secondary_section}>
               <div
                    className={rowReverse ? styles.content_Wrapper_reverse : styles.content_Wrapper}
               >
                    <div className={styles.image_section}>
                         <div className={styles.img_wrapper}>
                              <Image src={dataImage} alt={'image'} className={styles.image} />
                         </div>
                    </div>
                    <div className={styles.details_con}>
                         <TitleDescriptionWithIcon
                              btn={btn}
                              btnColor={btnColor}
                              style={rowReverse ? objStyle : { paddingInline: '2rem' }}
                              headingStyle={{ textAlign: rowReverse ? 'end' : undefined }}
                              icon={icon}
                              title={title}
                              description={description}
                              bgimage={dataImage}
                              paraStyle={rowReverse ? objParaStyle : {}}
                              label={label}
                              link={link}
                              labelStyle={labelStyle}
                         />
                    </div>
               </div>
          </div>
     )
}

export default InfoCardWithIcon
