import React from 'react'
import SecondaryLanding from '@/component/secondaryLanding/SecondaryLanding'
import img from '../../assets/images/Sustainability/img_overLayer.png'
import bg from '../../assets/images/Sustainability/img_bg.png'
import PrimaryLanding from '@/component/primaryLanding/PrimaryLanding '
import bigImageSrc from '../../assets/images/Sustainability/img_lan.png'
import ClimateActionTracker from '@/pages/sustainability/climateActionTracker/ClimateActionTracker'
import EmergingBusinessESG from '@/pages/sustainability/emergingBusinessESG/EmergingBusinessESG'
import CallToAction from '@/component/calltoaction/CallToAction'
import Wrapper from '../Wrapper'
const page = () => {
     return (
          <Wrapper>
               <React.Fragment>
                    <PrimaryLanding
                         title='ESG & Sustainability Services'
                         isThumbnailHidden
                         style={{
                              paddingBlockStart: '2rem',
                              justifyContent: 'center',
                              gap: '1rem',
                              paddingInline: '1.5rem',
                              display: 'flex',
                              flexDirection: 'column',
                         }}
                         heading={
                              <>
                                   Empowering<span>Sustainable Growth</span>Through Comprehensive
                                   ESG Strategies
                              </>
                         }
                         bigImageSrc={bigImageSrc}
                         description='Partnering with you to implement sustainable practices that benefit your business and the world.'
                    />
                    <SecondaryLanding
                         heading={'Growth, Reputation, & Value Through ESG'}
                         description={
                              'we see sustainability as key to growth. Our ESG strategies help businesses adopt sustainable practices, enhance their reputation, and create long-term value, all aligned with global standards.'
                         }
                         image={img}
                         bgImage={bg}
                         bgColor={{ backgroundColor: '#F3FCF4' }}
                    />
                    <ClimateActionTracker />
                    <EmergingBusinessESG />
                    <CallToAction
                         data={
                              <>
                                   Ready to <span>Build a Sustainable Future? </span> Know how our
                                   ESG strategies, including GHG Accounting and tailored start-up
                                   solutions, can help your business lead with purpose.
                              </>
                         }
                    />
               </React.Fragment>
          </Wrapper>
     )
}

export default page
