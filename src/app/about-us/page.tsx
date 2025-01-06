import PrimaryLanding from '@/component/primaryLanding/PrimaryLanding '
import React from 'react'
import bg from '../../assets/images/img_cont_bg.png'
import img from '../../assets/images/img_cont_image.png'
import reverImage from '../../assets/images/img_rever.png'
import AlternatingContentLayout from '@/component/alternatingContentLayout/AlternatingContentLayout'
import Ourvalues from '@/pages/aboutus/ourvalues/Ourvalues'
import SustainabilityPath from '@/pages/aboutus/sustainabilityPath/SustainabilityPath'
import ClientInnovation from '@/pages/aboutus/clientInnovation/ClientInnovation'
import OurLeaders from '@/pages/aboutus/ourLeaders/OurLeaders'
import GlobalImpact from '@/pages/aboutus/globalImpact/GlobalImpact'
import CallToAction from '@/component/calltoaction/CallToAction'
import EducationEmpowerment from '@/pages/aboutus/educationEmpowerment/EducationEmpowerment'
import SecondaryLanding from '@/component/secondaryLanding/SecondaryLanding'
import OurJourney from '@/pages/aboutus/ourJourney/OurJourney'
const page = () => {
     return (
          <React.Fragment>
               <PrimaryLanding
                    title='About us'
                    heading={
                         <>
                              Innovative Solutions for a <span>Sustainable</span> & Impactful Future
                         </>
                    }
                    description='We deliver innovative, sustainable solutions that drive impactful change, empowering businesses to thrive and meet evolving industry demands.'
                    enableModal={true}
               />
               <SecondaryLanding
                    heading={'Leading the Way in Sustainable Innovation and Industry Excellence'}
                    description={
                         ' We are more than just a service provider, we are your partner in innovation, sustainability, and success. Founded with a vision to lead in global workforce solutions and integrated engineering services, We are dedicated in delivering cutting-edge solutions which makes meaningful impact across industries.'
                    }
                    image={img}
                    bgImage={bg}
               />
               <SustainabilityPath />
               <Ourvalues />
               <OurJourney />
               <ClientInnovation />
               <OurLeaders />
               <EducationEmpowerment />
               <GlobalImpact />
               <CallToAction
                    data={
                         <>
                              Are you looking for <span>Innovative engineering Solutions?</span> or
                              <span>expert workforce management?</span> or a partner committed to
                              <span> sustainability?</span>
                         </>
                    }
               />
          </React.Fragment>
     )
}

export default page
