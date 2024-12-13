import React from 'react'
import WorkforceSolutions from '@/pages/manpowerServices/workforceSolutions/WorkforceSolutions'
import ForAlternativeEnergy from '@/component/forAlternativeEnergy/ForAlternativeEnergy'
import SecondaryLanding from '@/component/secondaryLanding/SecondaryLanding'
import bg from '../../assets/images/man_power/img_sec_bg.png'
import img from '../../assets/images/man_power/img_sec_lay.png'
import LiquefiedNaturalGas from '@/pages/manpowerServices/solarEnergy/SolarEnergy'
import PrimaryLanding from '@/component/primaryLanding/PrimaryLanding '
import bigImageSrc from '../../assets/images/man_power/img_lan_ver.png'
import hozImageSrc from '../../assets/images/man_power/img_lan_hoz.png'
import SolarEnergy from '@/pages/manpowerServices/solarEnergy/SolarEnergy'
import WindEnergy from '@/pages/manpowerServices/windEnergy/WindEnergy'
import BiomassEnergySolutions from '@/pages/manpowerServices/biomassEnergySolutions/BiomassEnergySolutions'
import Hydropower from '@/pages/manpowerServices/hydropower/Hydropower'
import EnergyAuditSection from '@/pages/manpowerServices/energyAuditSection/EnergyAuditSection'
import RoboticsSolutions from '@/pages/manpowerServices/roboticsSolutions/RoboticsSolutions'
import SkilledWorkforce from '@/pages/manpowerServices/skilledWorkforce/SkilledWorkforce'
import ProcessImprovement from '@/pages/manpowerServices/processImprovement/ProcessImprovement'
import MaintenanceReliability from '@/pages/manpowerServices/maintenanceReliability/MaintenanceReliability'
import PlantConstruction from '@/pages/manpowerServices/plant/PlantConstruction'
import OperationsAndMaintenance from '@/pages/manpowerServices/operationsAndMaintenance/OperationsAndMaintenance'
import LngShippingLogistics from '@/pages/manpowerServices/lngShippingLogistics/LngShippingLogistics'
import EvManufacturing from '@/pages/manpowerServices/evManufacturing/EvManufacturing'
import EvChargingInfrastructure from '@/pages/manpowerServices/evChargingInfrastructure/EvChargingInfrastructure'
import EvMaintenanceRepair from '@/pages/manpowerServices/evMaintenanceRepair/EvMaintenanceRepair'
import ResearchTesting from '@/pages/manpowerServices/researchTesting/ResearchTesting'
import EngineeringConsulting from '@/pages/manpowerServices/engineeringConsulting/EngineeringConsulting'
import ProjMgmtCoord from '@/pages/manpowerServices/projMgmtCoord/ProjMgmtCoord'
import Specialists from '@/pages/manpowerServices/specialists/Specialists'
import CallToAction from '@/component/calltoaction/CallToAction'
const page = () => {
     return (
          <React.Fragment>
               <PrimaryLanding
                    title='Workforce and Manpower Solutions'
                    style={{
                         paddingBlockStart: '2rem',
                         justifyContent: 'center',
                         gap: '1rem',
                         paddingInline: '1.5rem',
                         display: 'flex',
                         flexDirection: 'column',
                    }}
                    layoutMod
                    heading={<>Empowering Businesses with Skilled Talent across All Domains</>}
                    bigImageSrc={bigImageSrc}
                    smallImageSrc={hozImageSrc}
                    description='Partnering with you to build a dynamic, skilled workforce that aligns with your vision and goals.'
               />
               <SecondaryLanding
                    flexReverse
                    heading={'Empowering Industry with Engineering Excellence'}
                    description={
                         'Our Engineering Services are designed to provide comprehensive solutions that meet the demands of modern industry. Our team of experts delivers innovative engineering solutions that drive efficiency, enhance performance, and ensure the success of your projects.'
                    }
                    image={img}
                    bgImage={bg}
               />
               <WorkforceSolutions />
               <ForAlternativeEnergy title={'For Alternative Energy'} />
               <SolarEnergy />
               <WindEnergy />
               <BiomassEnergySolutions />
               <Hydropower />
               <EnergyAuditSection />
               <ForAlternativeEnergy title={'For Manufacturing'} />
               <RoboticsSolutions />
               <SkilledWorkforce />
               <ProcessImprovement />
               <MaintenanceReliability />
               <ForAlternativeEnergy title={'For LNG (Liquified Natural Gas)'} />
               <PlantConstruction />
               <OperationsAndMaintenance />
               <LngShippingLogistics />
               <ForAlternativeEnergy title={'for Electric Vehicles (EVs)'} />
               <EvManufacturing />
               <EvChargingInfrastructure />
               <EvMaintenanceRepair />
               <ResearchTesting />
               <ForAlternativeEnergy title={'For Cross-Sector'} />
               <EngineeringConsulting />
               <ProjMgmtCoord />
               <Specialists />
               <CallToAction
                    data={
                         <>
                              Ready to <span>Empower Your Workforce?</span> Know how our Workforce
                              and Manpower Solutions can help your business thrive.
                         </>
                    }
               />
          </React.Fragment>
     )
}

export default page
