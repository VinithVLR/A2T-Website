'use client'
import ImageDescriptionPanel from '@/component/imageDescriptionPanel/ImageDescriptionPanel'
import ClientTestimonials from '@/pages/home/clientTestimonials/ClientTestimonials'
import GlobalTrustSection from '@/pages/home/globalTrustSection/GlobalTrustSection'
import ServiceInnovation from '@/pages/home/serviceInnovation/ServiceInnovation'
import React from 'react'
import WelcomeLanding from '@/pages/home/landingPage/WelcomeLanding'
import SustainableGoals from '@/pages/home/sustainableGoals/SustainableGoals'
import bgImage1 from '../assets/images/double/img_bg_1.png'
import lyImage1 from '../assets/images/double/img_ly_1.png'
import bgImage2 from '../assets/images/double/img_bg_2.png'
import lyImage2 from '../assets/images/double/img_ly_2.png'
import bgImage3 from '../assets/images/double/img_bg_3.png'
import lyImage3 from '../assets/images/double/img_ly_3.png'
import bgImage4 from '../assets/images/double/img_bg_4.png'
import lyImage4 from '../assets/images/double/img_ly_4.png'
import bgImage5 from '../assets/images/double/img_bg_5.png'
import lyImage5 from '../assets/images/double/img_ly_5.png'
import FloatingButton from '@/component/floatingButton/FloatingButton'

const page = () => {
     const panelData = [
          {
               bgImage: bgImage1,
               lyImage: lyImage1,
               heading: 'Empowering Businesses with Skilled Manpower to Mitigate Labour Risks',
               subHeading:
                    'Get to a decision faster by bringing requests into chat. Allow your teams to file, track and resolve tickets in Slack.',
               bgColor: '#F3F5FC',
               btnColor: '#003366',
               link: '/manpower-services',
          },
          {
               bgImage: bgImage2,
               lyImage: lyImage2,
               heading: 'Sustainable Growth through Innovative Engineering Solutions',
               subHeading:
                    'Committed to delivering cutting-edge engineering services that drive project success and operational efficiency.',
               bgColor: '#F3FDFD',
               btnColor: '#008080',
               link: '/engineering-services',
          },
          {
               bgImage: bgImage3,
               lyImage: lyImage3,
               heading: 'Smart Fleet Management through Innovative Engineering Solutions',
               subHeading:
                    'Dedicated to optimizing your fleet operations, reducing costs, and enhancing safety.',
               bgColor: '#FBF3F4',
               btnColor: '#B91722',
               link: '/fleet-management',
          },

          {
               bgImage: bgImage4,
               lyImage: lyImage4,
               heading: 'Our Commitment to a Sustainable Future',
               subHeading:
                    'Dedicated to reducing carbon emissions and enhancing environmental responsibility.',
               bgColor: '#F4FAF5',
               btnColor: '#28A745',
               link: '/esg-sustainability',
          },
          {
               bgImage: bgImage5,
               lyImage: lyImage5,
               heading: 'Transforming Businesses through Strategic Consulting',
               subHeading:
                    'Focused on providing tailored consulting solutions that empower organizations to achieve their goals and thrive in a competitive landscape.',
               bgColor: '#F7F3FB',
               btnColor: '#8E2FD2',
               link: '/business-consult',
          },
     ]

     return (
          <React.Fragment>
               <WelcomeLanding />
               <GlobalTrustSection />
               <ServiceInnovation />
               <SustainableGoals />
               {panelData.map((panel, index) => (
                    <ImageDescriptionPanel
                         key={index}
                         heading={panel.heading}
                         subHeading={panel.subHeading}
                         bgColor={panel.bgColor}
                         btnColor={panel.btnColor}
                         bgImage={panel.bgImage}
                         lyImage={panel.lyImage}
                         link={panel.link}
                         index={index}
                    />
               ))}
               <ClientTestimonials />
               <FloatingButton />
          </React.Fragment>
     )
}

export default page
