import CallToAction from '@/component/calltoaction/CallToAction'
import LandingSolutions from '@/pages/services/landingSolutions/LandingSolutions'
import SecondarySection from '@/pages/services/secondarySection/SecondarySection'
import WhyChooseUs from '@/pages/services/WhyChooseUs/WhyChooseUs'
import React from 'react'

const page = () => {
     return (
          <React.Fragment>
               <LandingSolutions />
               <SecondarySection />
               <WhyChooseUs />
               <CallToAction
                    data={
                         <>
                              Have questions? or need more information about our services? or
                              Whether you&apos;re ready to start a project? need assistance?
                         </>
                    }
               />
          </React.Fragment>
     )
}

export default page
