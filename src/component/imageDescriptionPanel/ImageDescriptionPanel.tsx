'use client'

import React from 'react'
import style from './ImageDescriptionPanel.module.scss'
import Image from 'next/image'
import toolpic from '../../assets/layer_img.png'
import Button from '../button/Button'
import { Inter } from 'next/font/google'

import { useRouter } from 'next/navigation'
import { MainHeading, MainPara } from '../typography/Typography'

interface ImageDescriptionPanelProps {
     bgImage?: any
     image?: string
     heading?: string
     subHeading?: string
     bgColor?: string
     btnColor: string
     link?: string
}

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
     style: ['normal'],
})
const ImageDescriptionPanel: React.FC<ImageDescriptionPanelProps> = ({
     bgImage,
     image,
     heading,
     subHeading,
     bgColor,
     btnColor,
     link,
}) => {
     const router = useRouter()
     return (
          <div
               className={`${style.main_container} ${inter.className} `}
               style={{ backgroundColor: bgColor }}
          >
               <div className={style.bg_image_con}>
                    <div className={style.image_con_wrapper}>
                         <Image
                              src={bgImage}
                              alt='image'
                              priority
                              className={style.image}
                              quality={100}
                         />
                    </div>
               </div>
               <div className={style.detailss_con}>
                    <MainHeading className={`${style.blackText}`}>{heading}</MainHeading>
                    <MainPara className={`${style.regularText}`}>{subHeading}</MainPara>
                    <Button
                         label={'Explore more'}
                         disabled={false}
                         style={{
                              width: 'fit-content',
                              height: 'fit-content',
                              backgroundColor: btnColor,
                              gap: '1rem',
                         }}
                         onClick={() => {
                              router.push(link ? link : '')
                         }}
                         loading={false}
                         icon
                         labestyle={{ marginLeft: '0px', fontSize: '0.8rem' }}
                    />
               </div>
          </div>
     )
}

export default ImageDescriptionPanel
