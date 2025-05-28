import PrimaryLanding from '@/component/primaryLanding/PrimaryLanding '
import React from 'react'
import bigImageSrc from '../../assets/images/img_careers_ld_l.png'
import smallImageSrc from '../../assets/images/img_careers_ld_b.png'
import WhyA2T from '@/pages/careers/whyA2T/WhyA2T'
import OurOpportunities from '@/pages/careers/ourOpportunities/OurOpportunities'
import Explore from '@/pages/careers/explore/Explore'
import PadikalFoundation from '@/pages/careers/padikalFoundation/PadikalFoundation'
import GlobalOpportunity from '@/pages/careers/globalOpportunity/GlobalOpportunity'
import CallToAction from '@/component/calltoaction/CallToAction'

import { Metadata } from 'next'
import PrimaryLanding2 from '@/component/primaryLanding2/PrimaryLanding2'
import FloatingButton from '@/component/floatingButton/FloatingButton'

export const metadata: Metadata = {
     title: 'Careers',
     description: 'Be a part of a Dynamic & Innovative Workforce.',
     alternates: {
          canonical: 'https://prakashrg09.github.io/a2t-technologies/careers',
     },
}

const page = () => {
     return (
          <React.Fragment>
               <PrimaryLanding2
                    isReverse
                    title='Careers'
                    style={{
                         justifyContent: 'center',
                         gap: '2rem',
                    }}
                    heading={
                         <>
                              Be a part of a <span>Dynamic</span> <br /> & <span>Innovative</span>{' '}
                              Workforce
                         </>
                    }
                    bigImageSrc={bigImageSrc}
                    smallImageSrc={smallImageSrc}
                    description='Embrace new challenges, grow your skills, and make a real impact. Together, we’ll drive innovation and shape the future of work.'
               />
               <WhyA2T />
               <OurOpportunities />
               <Explore />
               <PadikalFoundation />
               <GlobalOpportunity />
               <CallToAction
                    data={
                         <>
                              If you don&apos;t see a <span>role that matches your skills</span>,
                              feel free to submit a general application, and we&apos;ll reach out
                              when a suitable position becomes available.
                         </>
                    }
                    img
               />
               <FloatingButton />
          </React.Fragment>
     )
}

export default page
