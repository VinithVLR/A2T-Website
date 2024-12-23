import SecondaryLanding from '@/component/secondaryLanding/SecondaryLanding'
import LogisticsOptimization from '@/pages/fleetmanagement/logisticsOptimization/LogisticsOptimization'
import SkilledDriverProgram from '@/pages/fleetmanagement/skilledDriverProgram/SkilledDriverProgram'
import React from 'react'
import bg from '../../assets/images/fleet/img_sec_bg.png'
import img from '../../assets/images/fleet/img_sec.png'
import FleetSolutions from '@/pages/fleetmanagement/fleetSolutions/FleetSolutions'
import SustainableFleetFocus from '@/pages/fleetmanagement/sustainableFleetFocus/SustainableFleetFocus'
import TechLogisticsOptimization from '@/pages/fleetmanagement/techLogisticsOptimization/TechLogisticsOptimization'
import GlobalLocalExpertise from '@/pages/fleetmanagement/globalLocalExpertise/GlobalLocalExpertise'
import AirCargoSolutions from '@/pages/fleetmanagement/airCargoSolutions/AirCargoSolutions'
import CallToAction from '@/component/calltoaction/CallToAction'
import Wrapper from '../Wrapper'

const page = () => {
     return (
          <Wrapper>
               <React.Fragment>
                    <LogisticsOptimization />
                    <SecondaryLanding
                         heading={'Efficient Fleet Solutions for Reliable Logistics'}
                         description={
                              ' At A2 Technologies, we offer fleet management services to boost logistics efficiency and reliability. Our solutions focus on optimized routes, skilled drivers, and a strong logistics network for safe, timely deliveries.'
                         }
                         image={img}
                         bgImage={bg}
                    />
                    <FleetSolutions />
                    <SkilledDriverProgram />
                    <TechLogisticsOptimization />
                    <SustainableFleetFocus />
                    <GlobalLocalExpertise />
                    <AirCargoSolutions />
                    <CallToAction
                         style={{ paddingInline: '3rem' }}
                         data={
                              <>
                                   Ready to <span>Elevate Your Logistics Operations?</span> Get to
                                   know how we can optimize your logistics operations for better
                                   efficiency, safety, and sustainability?
                              </>
                         }
                    />
               </React.Fragment>
          </Wrapper>
     )
}

export default page
