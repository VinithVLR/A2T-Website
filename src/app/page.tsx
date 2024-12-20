import Footer from '@/component/footer/Footer'
import ImageDescriptionPanel from '@/component/imageDescriptionPanel/ImageDescriptionPanel'
import Navbar from '@/component/navbar/Navbar'
import ClientTestimonials from '@/pages/home/clientTestimonials/ClientTestimonials'
import GlobalTrustSection from '@/pages/home/globalTrustSection/GlobalTrustSection'
import LandingPage from '@/pages/home/landingPage/WelcomeLanding'
import LatestUpdates from '@/pages/home/latestUpdates/LatestUpdates'
import ServiceInnovation from '@/pages/home/serviceInnovation/ServiceInnovation'
import React from 'react'
import img_impower from '../assets/images/img_impower.png'
import img_fleet from '../assets/images/img_fleet.png'
import img_growth from '../assets/images/img_growth.png'
import img_future from '../assets/images/img_future.png'
import img_business from '../assets/images/img_business.png'
import WelcomeLanding from '@/pages/home/landingPage/WelcomeLanding'
import PrimaryLanding from '@/component/primaryLanding/PrimaryLanding '
import SecondaryLanding from '@/component/secondaryLanding/SecondaryLanding'
import contactImage from '../assets/images/img_contact_sec.png'
import reverImage from '../assets/images/img_rever.png'
import SustainableGoals from '@/pages/home/sustainableGoals/SustainableGoals'

const page = () => {
     const panelData = [
          {
               bgImage: img_impower,
               heading: 'Empowering Businesses with Skilled Manpower to Mitigate Labour Risks',
               subHeading:
                    'Get to a decision faster by bringing requests into chat. Allow your teams to file, track and resolve tickets in Slack.',
               bgColor: '#F3F5FC',
               btnColor: '#003366',
               link: '/manpower-services',
          },
          {
               bgImage: img_fleet,
               heading: 'Sustainable Growth through Innovative Engineering Solutions',
               subHeading:
                    'Committed to delivering cutting-edge engineering services that drive project success and operational efficiency.',
               bgColor: '#F3FDFD',
               btnColor: '#008080',
               link: '/engineering-services',
          },
          {
               bgImage: img_growth,
               heading: 'Smart Fleet Management through Innovative Engineering Solutions',
               subHeading:
                    'Dedicated to optimizing your fleet operations, reducing costs, and enhancing safety.',
               bgColor: '#FBF3F4',
               btnColor: '#B91722',
               link: '/fleet-management',
          },

          {
               bgImage: img_future,
               heading: 'Our Commitment to a Sustainable Future',
               subHeading:
                    'Dedicated to reducing carbon emissions and enhancing environmental responsibility.',
               bgColor: '#F4FAF5',
               btnColor: '#28A745',
               link: '/esg-sustainability',
          },
          {
               bgImage: img_business,
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
                         link={panel.link}
                    />
               ))}
               <ClientTestimonials />
               <LatestUpdates />
          </React.Fragment>
     )
}

export default page
