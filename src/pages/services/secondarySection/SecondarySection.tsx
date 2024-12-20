import React from 'react'
import InfoCardWithIcon from '../component/infoCardWithIcon/InfoCardWithIcon'
import styles from './SecondarySection.module.scss'
import Image1 from '../../../assets/images//img_service_1.png'
import Image2 from '../../../assets/images//img_service_2.png'
import Image3 from '../../../assets/images//img_service_3.png'
import Image4 from '../../../assets/images//img_service_4.png'
import Image5 from '../../../assets/images//img_service_5.png'
import Image from 'next/image'
import TitleDescriptionWithIcon from '@/component/titleDesciption/TitleDescriptionWithIcon'
import manPowerIcon from '../../../assets/icons/ic_manpower.png'
import engineeringIcon from '../../../assets/icons/ic_engineering.png'
import fleetIcon from '../../../assets/icons/ic_color_fleet.png'
import esgIcon from '../../../assets/icons/ic_esg.png'
import businessIcon from '../../../assets/icons/ic_color_bus.png'

const SecondarySection = () => {
     let arr = [
          {
               icon: manPowerIcon,
               title: 'Manpower solutions',
               description:
                    'We provide a wide range of skilled and unskilled labor solutions, tailored to meet industry demands across sectors in Europe and India. Our services optimize workforce efficiency, enhance productivity, and ensure seamless project execution.',

               btnColor: '#003366',
               image: Image1,
               link: '/manpower-services',
          },
          {
               icon: engineeringIcon,
               title: 'Engineering services',
               description:
                    'Our engineering services focus on delivering innovative, sustainable solutions across sectors such as renewable energy, advanced manufacturing, and automation. From solar and wind energy projects to state-of-the-art manufacturing systems, we ensure efficient, high-quality outcomes.',

               btnColor: '#008080',
               image: Image2,
               link: '/engineering-services',
          },
          {
               icon: fleetIcon,
               title: 'Fleet Management services',
               description:
                    'We deliver end-to-end fleet management services designed to optimize logistics and transportation efficiency. With skilled drivers, advanced fleet systems, and technology integration, we reduce downtime and enhance overall fleet performance.',

               btnColor: '#B91722',
               image: Image3,
               link: '/fleet-management',
          },
          {
               icon: esgIcon,
               title: 'ESG & Sustainability',
               description:
                    'We offer comprehensive ESG and sustainability solutions, including GHG accounting, energy optimization, and consulting. Our strategies align businesses with global sustainability standards, driving efforts to reduce negative environmental impact and enhance efficiency.',

               btnColor: '#28A745',
               image: Image4,
               link: '/esg-sustainability',
          },
          {
               icon: businessIcon,
               title: 'Business & IT consulting services',
               description:
                    'We provide strategic support in process optimization, infrastructure development, and IT solutions, tailored to evolving business requirements and growth opportunities.',

               btnColor: '#8E2FD2',
               image: Image5,
               link: '/business-consult',
          },
     ]

     return (
          <React.Fragment>
               {arr.map((card: any, index: any) => {
                    return (
                         <InfoCardWithIcon
                              btn
                              dataImage={card.image}
                              key={index}
                              icon={card.icon}
                              title={card.title}
                              description={card.description}
                              btnColor={card.btnColor}
                              rowReverse={index % 2 !== 0}
                              hoverColor={card.hoverColor}
                              link={card.link}
                         />
                    )
               })}
          </React.Fragment>
     )
}

export default SecondarySection
