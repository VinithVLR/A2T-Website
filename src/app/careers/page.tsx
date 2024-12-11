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

const page = () => {
     return (
          <React.Fragment>
               <PrimaryLanding
                    isReverse
                    title='Careers'
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
                         "If you don't see a role that matches your skills, feel free to submit a general application, and we'll reach out when a suitable position becomes available."
                    }
               />
          </React.Fragment>
     )
}

export default page
