import React from 'react'
import PrimaryLanding from '@/component/primaryLanding/PrimaryLanding '
import bigImageSrc from '../../assets/images/Business/img_buz_land.png'
import img from '../../assets/images/Business/img_buz_image.png'
import bg from '../../assets/images/Business/img_buz_bg.png'
import levImg from '../../assets/images/Business/img_lev_image.png'
import levBg from '../../assets/images/Business/img_lev_bg.png'
import SecondaryLanding from '@/component/secondaryLanding/SecondaryLanding'
import DigitalGrowth from '@/pages/businessConsult/digitalGrowth/DigitalGrowth'
import DigitalChange from '@/pages/businessConsult/digitalChange/DigitalChange'
import DigitalSecurity from '@/pages/businessConsult/digitalSecurity/DigitalSecurity'
import CallToAction from '@/component/calltoaction/CallToAction'
import InfrastructureOptimization from '@/pages/businessConsult/infrastructureOptimization/InfrastructureOptimization'
import Wrapper from '../Wrapper'
const page = () => {
     return (
          <Wrapper>
               <React.Fragment>
                    <PrimaryLanding
                         isReverse
                         title='Business & IT consulting services'
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
                                   Optimized Transforming Businesses with{' '}
                                   <span>IT-Driven Consulting</span> Services
                              </>
                         }
                         bigImageSrc={bigImageSrc}
                         description='Our mission is clear: to innovate responsibly, ensuring that every step we take towards excellence also brings us closer to a more sustainable and equitable future.'
                    />
                    <SecondaryLanding
                         flexReverse
                         heading={'Unlocking Potential with Digital Transformation Expertise'}
                         description={
                              ' We are more than just a service provider, we are your partner in innovation, sustainability, and success. Founded with a vision to lead in global workforce solutions and integrated engineering services, We are dedicated in delivering cutting-edge solutions which makes meaningful impact across industries.'
                         }
                         image={img}
                         bgImage={bg}
                         id={'digital-transformation-expertise'}
                    />
                    <DigitalGrowth />
                    <DigitalChange />
                    <SecondaryLanding
                         heading={'Leverage Data for Strategic Insights'}
                         description={
                              ' Utilize our data analytics and business intelligence services to gain valuable insights. Make informed decisions with real-time data visualization and predictive analytics.'
                         }
                         image={levImg}
                         bgImage={levBg}
                         id={'leverage-data'}
                         bgColor={{ backgroundColor: '#fff' }}
                    />
                    <DigitalSecurity />
                    <InfrastructureOptimization />
                    <CallToAction
                         data={
                              <>
                                   Ready to <span>Transform Your Business? </span>Discover how our
                                   strategic consulting and innovative IT solutions can drive
                                   efficiency, growth, and digital transformation for your business.
                              </>
                         }
                    />
               </React.Fragment>
          </Wrapper>
     )
}

export default page
