import CallToAction from '@/component/calltoaction/CallToAction'
import LandingSolutions from '@/pages/services/landingSolutions/LandingSolutions'
import SecondarySection from '@/pages/services/secondarySection/SecondarySection'
import WhyChooseUs from '@/pages/services/WhyChooseUs/WhyChooseUs'
import React from 'react'

import { Metadata } from 'next'
import FloatingButton from '@/component/floatingButton/FloatingButton'

export const metadata: Metadata = {
     title: 'Services',
     description: 'Delivering a Full Spectrum of Solutions for Your Success.',
     alternates: {
          canonical: 'https://prakashrg09.github.io/a2t-technologies/services',
     },
}

const page = () => {
     return (
          <React.Fragment>
               <LandingSolutions />
               <SecondarySection />
               <WhyChooseUs />
               <CallToAction
                    data={
                         <>
                              <span>Have questions?</span> or need more information about our
                              services? or Whether you&apos;re{' '}
                              <span>ready to start a project?</span> need assistance?
                         </>
                    }
               />
               <FloatingButton />
          </React.Fragment>
     )
}

export default page
