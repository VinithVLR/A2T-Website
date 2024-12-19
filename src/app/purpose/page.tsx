import SecondaryLanding from '@/component/secondaryLanding/SecondaryLanding'
import React from 'react'
import purposeImage from '../../assets/images/img_sec_purpose.png'
import SustainableEquity from '@/pages/purpose/sustainableEquity/SustainableEquity'
import InnovationAndExcellence from '@/pages/purpose/InnovationAndExcellence/InnovationAndExcellence'
import CallToAction from '@/component/calltoaction/CallToAction'
import PadikkalFoundationImpact from '@/pages/purpose/padikkalFoundationImpact/PadikkalFoundationImpact'
import reverImage from '../../assets/images/img_rever.png'
import SustainableBusinessAlignment from '@/pages/purpose/sustainableBusinessAlignment/SustainableBusinessAlignment'
import PrimaryLanding from '@/component/primaryLanding/PrimaryLanding '
import bg from '../../assets/images/img_emp_4.png'
import img from '../../assets/images/img_cont_image.png'
import bigImageSrc from '../../assets/images/purpose/img_lan_ver.png'
import smallImageSrc from '../../assets/images/purpose/img_lan_hoz.png'
const page = () => {
     return (
          <React.Fragment>
               <PrimaryLanding
                    title='Purpose'
                    isReverse
                    heading={
                         <>
                              Crafting a <span>Greener Future</span> Through Purpose-Driven
                              Innovation
                         </>
                    }
                    bigImageSrc={bigImageSrc}
                    smallImageSrc={smallImageSrc}
                    description='We deliver innovative, sustainable solutions that drive impactful change, empowering businesses to thrive and meet evolving industry demands.'
               />
               <SecondaryLanding
                    heading={'Your Partner in Global Solutions and Sustainable Success'}
                    description={
                         ' Our purpose is to empower businesses and communities by delivering innovative solutions that drive growth, sustainability, and positive change. We stand apart in the industry through our commitment to excellence, sustainability, and transformative impact, ensuring that our clients and partners thrive in an ever-evolving world.'
                    }
                    flexReverse
                    image={purposeImage}
                    bgImage={bg}
               />
               <SustainableEquity />
               <InnovationAndExcellence />
               <PadikkalFoundationImpact />
               <SustainableBusinessAlignment />
               <CallToAction
                    style={{ paddingInline: '3rem' }}
                    data={
                         <>
                              Are you looking for <span>Innovative engineering solutions?</span> or{' '}
                              <span>Expert workforce management?</span> or a partner committed to{' '}
                              <span>Sustainability?</span>
                         </>
                    }
               />
          </React.Fragment>
     )
}

export default page
