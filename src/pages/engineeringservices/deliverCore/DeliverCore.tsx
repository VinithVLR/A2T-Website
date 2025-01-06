import React from 'react'
import Header from '@/component/header/Header'
import InfoCardWithIcon from '@/pages/services/component/infoCardWithIcon/InfoCardWithIcon'
import Image1 from '../../../assets/images/eng-ser/img_core_1.png'
import Image2 from '../../../assets/images/eng-ser/img_core_2.png'
import Image3 from '../../../assets/images/eng-ser/img_core_3.png'
import Image4 from '../../../assets/images/eng-ser/img_core_4.png'
import Image5 from '../../../assets/images/eng-ser/img_core_5.png'

const DeliverCore = () => {
     let arr = [
          {
               title: 'Power and Utilities ',
               link: 'power-and-utilities',
               description:
                    'We provide a wide range of skilled and unskilled labor solutions, tailored to meet industry demands across sectors in Europe and India. Our services optimize workforce efficiency, enhance productivity, and ensure seamless project execution.',

               image: Image1,
               label: 'Renewable Energy Sector',
          },
          {
               title: 'Automotive',
               link: 'automotive',
               description:
                    'Supporting the automotive shift to EVs with advanced manufacturing and component engineering.',

               image: Image2,
               label: 'Electric Vehicles, Component Manufacturing',
          },
          {
               title: 'Electronics & Semiconductor Industries',
               link: 'electronics-&-semiconductor-industries',
               description:
                    'Enhancing precision and efficiency in electronics and semiconductors with tailored solutions.',

               image: Image3,
          },
          {
               title: 'Heavy Engineering & Infrastructure Projects',
               link: 'heavy-engineering-&-infrastructure-projects',
               description:
                    'Delivering robust engineering solutions for large-scale infrastructure and heavy engineering projects.',

               image: Image4,
          },
          {
               title: 'Aerospace',
               link: 'aerospace',
               description:
                    'Driving aerospace innovation with lightweight materials and additive manufacturing.',

               image: Image5,
               label: 'Lightweight Materials, Additive Manufacturing',
          },
     ]
     return (
          <section id='engineering-solutions'>
               <Header
                    title={'For Core Industries, Delivering Specialized Engineering Solutions'}
                    subTitle={
                         'We provide specialized engineering solutions tailored to core industries like automotive, aerospace, electronics, and renewable energy. Our expertise ensures innovation, efficiency, and sustainable growth across all sectors.'
                    }
               />
               {arr.map((card: any, index: any) => {
                    return (
                         <InfoCardWithIcon
                              btn={false}
                              dataImage={card.image}
                              key={index}
                              title={card.title}
                              description={card.description}
                              rowReverse={index % 2 !== 0}
                              label={card.label}
                              id={card.link}
                              labelStyle={{ backgroundColor: '#EDEDED', color: '' }}
                              isFlag={true}
                         />
                    )
               })}
          </section>
     )
}

export default DeliverCore
