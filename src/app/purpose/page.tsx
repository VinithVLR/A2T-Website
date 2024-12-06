import SecondaryLanding from '@/component/secondaryLanding/SecondaryLanding'
import React from 'react'
import purposeImage from '../../assets/images/img_contact_sec.png'
import SustainableEquity from '@/pages/purpose/sustainableEquity/SustainableEquity'
import InnovationAndExcellence from '@/pages/purpose/InnovationAndExcellence/InnovationAndExcellence'
import CallToAction from '@/component/calltoaction/CallToAction'
import PadikkalFoundationImpact from '@/pages/purpose/padikkalFoundationImpact/PadikkalFoundationImpact'
import reverImage from '../../assets/images/img_rever.png'
import SustainableBusinessAlignment from '@/pages/purpose/sustainableBusinessAlignment/SustainableBusinessAlignment'
import PrimaryLanding from '@/component/primaryLanding/PrimaryLanding '
import bg from '../../assets/images/img_cont_bg.png'
import img from '../../assets/images/img_cont_image.png'
const page = () => {
     return (
          <React.Fragment>
               <PrimaryLanding />
               <SecondaryLanding
                    heading={'Leading the Way in Sustainable Innovation and Industry Excellence'}
                    description={
                         ' Our purpose is to empower businesses and communities by delivering innovative solutions that drive growth, sustainability, and positive change. We stand apart in the industry through our commitment to excellence, sustainability, and transformative impact, ensuring that our clients and partners thrive in an ever-evolving world.'
                    }
                    image={img}
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
