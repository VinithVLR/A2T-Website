'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './Navbar.module.scss'
import companyLogo from '../../assets/images/img_companyLogo.svg'
import companyLogoWhite from '../../assets/images/logo_white.svg'
import linkedinIc from '../../assets/icons/ic_linkedin.svg'
import xIc from '../../assets/icons/ic_x_nav.svg'
import mailIc from '../../assets/icons/ic_mail_nav.svg'
import callIc from '../../assets/icons/ic_call.svg'
import fbIc from '../../assets/icons/ic_fb.svg'
import instaIc from '../../assets/icons/ic_insta.svg'

interface NavItem {
     label: string
     href: string
     title: string
}

interface NavbarProps {
     className?: string
}

const MenuIcon = () => (
     <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24'
          viewBox='0 -960 960 960'
          width='24'
          fill='currentColor'
          className={styles.menuIcon}
     >
          <path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
     </svg>
)

const CloseIcon = () => (
     <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24'
          viewBox='0 -960 960 960'
          width='24'
          fill='currentColor'
          className={styles.closeIcon}
     >
          <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
     </svg>
)

const navItems: NavItem[] = [
     { label: 'Manpower solutions', href: '/manpower-services', title: 'manpower' },
     { label: 'Engineering', href: '/engineering-services', title: 'engineering' },
     { label: 'ESG & Sustainability', href: '/esg-sustainability', title: 'esg' },
     { label: 'Business consulting', href: '/business-consult', title: 'consulting' },
     { label: 'Fleet Management', href: '/fleet-management', title: 'fleetmanagement' },
]

const fleetManagement = [
     {
          title: 'Fleet Solutions',
          link: 'fleet-solutions',
          list: [
               { title: 'Maintenance and Repairs', link: 'maintence-and-repairs' },
               { title: 'Real-Time Tracking', link: 'real-time-tracking' },
               {
                    title: 'Vehicle Procurement and Leasing',
                    link: 'vehicle-procurement-and-Leasing',
               },
               { title: 'Fuel Management', link: 'fuel-management' },
          ],
     },
     {
          title: 'Driver Training and Deployment',
          link: 'driver-training',
          list: [
               { title: 'Fleet Management School', link: 'fleet-management-school' },
               { title: 'Driver Safety and Compliance', link: 'driver-safety-and-compliance' },
               { title: 'Driver Development Centers', link: 'driver-development-centers' },
          ],
     },
     {
          title: 'Technology-Driven Logistics Optimization',
          link: 'technology-driven-logistics-optimization',
          list: [
               { title: 'Route Optimization', link: 'route-optimization' },
               { title: 'Telematics and Analytics', link: 'telematics-and-analytics' },
               { title: 'Digital Platforms', link: 'digital-platforms' },
          ],
     },
     {
          title: 'Safety, Compliance, & Sustainability',
          link: 'Safety-Compliance-&-Sustainability',
          list: [
               { title: 'Safety Protocols', link: 'safety-protocols' },
               { title: 'ESG Integration', link: 'ESG-integration' },
               { title: 'Compliance Assurance', link: 'compliance-assurance' },
          ],
     },
     {
          title: 'Global Reach and Local Expertise',
          link: 'global-reach-and-local-expertise',
          list: [
               { title: 'Local Expertise', link: 'local-expertise' },
               { title: 'International Standards', link: 'international-standards' },
               { title: 'Network of Partnerships', link: 'network-of-partnerships' },
          ],
     },
]

const manpowersolutions = [
     {
          title: 'Alternative energy',
          description: 'Empowering a sustainable future with innovative energy solutions',
          link: 'alternative-energy',
          list: [
               {
                    title: 'Solar Energy',
                    link: 'solar-energy',
                    list: [
                         {
                              title: 'Operation & Maintenance (O&M) Technicians',
                              link: 'operation-&-maintenance-technicians',
                         },
                         { title: 'Electrical Engineers', link: 'electrical-engineers' },
                         { title: 'Project Managers', link: 'project-managers' },
                         { title: 'Solar Design Engineers', link: 'solar-design-engineers' },
                         {
                              title: 'Solar Installation Technicians',
                              link: 'solar-installation-technicians',
                         },
                    ],
               },
               {
                    title: 'Wind Energy',
                    link: 'wind-energy',
                    list: [
                         { title: 'Wind Energy Engineers', link: 'wind-energy-engineers' },
                         { title: 'Wind Farm Technicians', link: 'wind-farm-technicians' },
                         {
                              title: 'Turbine Installation Specialists',
                              link: 'turbine-installation-specialists',
                         },
                    ],
               },
               {
                    title: 'Biomass & Waste-to-Energy',
                    link: 'biomass-&-waste-to-energy',
                    list: [
                         { title: 'Process Engineers', link: 'process-engineers' },
                         { title: 'Biomass Plant Technicians', link: 'biomass-plant-technicians' },
                         { title: 'Environmental Engineers', link: 'environmental-engineers' },
                    ],
               },
               {
                    title: 'Hydropower',
                    link: 'hydropower',
                    list: [
                         { title: 'Hydropower Engineers', link: 'hydropower-engineers' },
                         {
                              title: 'Hydropower Maintenance Technicians',
                              link: 'hydropower-maintenance-technicians',
                         },
                    ],
               },
               {
                    title: 'Energy Auditors & Consultants',
                    link: 'energy-auditors-&-consultants',
                    list: [
                         { title: 'Energy Auditors', link: 'energy-auditors' },
                         {
                              title: 'Sustainability Consultants',
                              link: 'sustainability-consultants',
                         },
                    ],
               },
          ],
     },
     {
          title: 'Manufacturing',
          link: 'manufacturing',
          description: 'Innovative solutions enhancing sustainability in manufacturing.',
          list: [
               {
                    title: 'Automation & Robotics',
                    link: 'automation-&-robotics',
                    list: [
                         { title: 'Automation Engineers', link: 'automation-engineers' },
                         { title: 'Robotics Engineers', link: 'robotics-engineers' },
                    ],
               },
               {
                    title: 'Skilled Operators & Technicians',
                    link: 'skilled-operators-&-technicians',
                    list: [
                         { title: 'CNC Machine Operators', link: 'CNC-machine-operators' },
                         { title: '3D Printing Technicians', link: '3D-printing-technicians' },
                         { title: 'Welders and Fabricators', link: 'welders-and-fabricators' },
                    ],
               },
               {
                    title: 'Process Improvement Specialists',
                    link: 'process-improvement-specialists',
                    list: [
                         {
                              title: 'Lean Manufacturing Experts',
                              link: 'lean-manufacturing-experts',
                         },
                         { title: 'Six Sigma Black Belts', link: 'six-sigma-black-belts' },
                    ],
               },
               {
                    title: 'Maintenance & Reliability Engineers',
                    link: 'maintenance-&-reliability-engineers',
                    list: [
                         {
                              title: 'Predictive Maintenance Engineers',
                              link: 'predictive-maintenance-engineers',
                         },
                         {
                              title: 'Equipment Maintenance Technicians',
                              link: 'equipment-maintenance-technicians',
                         },
                    ],
               },
          ],
     },
     {
          title: 'LNG (Liquified Natural Gas)',
          link: 'liquified-natural-gas',
          description: 'Advancing clean, reliable energy through LNG technology.',
          list: [
               {
                    title: 'LNG Plant Construction & Commissioning',
                    link: 'LNG-plant-construction-&-commissioning',
                    list: [
                         {
                              title: 'Construction Engineers',
                              link: 'construction-engineers',
                         },
                         { title: 'Process Engineers', link: 'process-engineers' },
                         { title: 'Project Managers', link: 'project-managers' },
                    ],
               },
               {
                    title: 'LNG Operations & Maintenance',
                    link: 'LNG-operations-&-maintenance',
                    list: [
                         {
                              title: 'Instrumentation & Control Engineers',
                              link: 'instrumentation-&-control-engineers',
                         },
                         { title: 'LNG Safety Experts', link: 'LNG-safety-experts' },
                         { title: 'LNG Technicians', link: 'LNG-technicians' },
                    ],
               },
               {
                    title: 'LNG Shipping and Logistics Personnel',
                    link: 'LNG-shipping-and-logistics-personnel',
                    list: [
                         { title: 'Marine Engineers and Crew', link: 'marine-engineers-and-crew' },
                         {
                              title: 'Logistics and Supply Chain Managers',
                              link: 'Logistics and Supply Chain Managers',
                         },
                    ],
               },
          ],
     },
     {
          title: 'Electric Vehicles (EVs)',
          link: 'electric-vehicles',
          description: 'Revolutionizing mobility with sustainable EV solutions.',
          list: [
               {
                    title: 'EV Manufacturing',
                    link: 'EV-manufacturing',
                    list: [
                         { title: 'EV Design Engineers', link: 'EV-design-engineers' },
                         {
                              title: 'Automation Engineers for EV Production',
                              link: 'automation-engineers-for-EV-production',
                         },
                         { title: 'Project Managers', link: 'Project-managers' },
                    ],
               },
               {
                    title: 'EV Charging Infrastructure',
                    link: 'EV-charging-infrastructure',
                    list: [
                         {
                              title: 'EV Charging Station Technicians',
                              link: 'EV-charging-station-technicians',
                         },
                         {
                              title: 'Electrical Engineers for Charging Networks',
                              link: 'electrical-engineers-for-charging-networks',
                         },
                    ],
               },
               {
                    title: 'EV Maintenance and Repair',
                    link: 'EV-maintenance-and-repair',
                    list: [
                         {
                              title: 'EV Maintenance Technicians',
                              link: 'EV-maintenance-technicians',
                         },
                         { title: 'EV Software Engineers', link: 'EV-software-engineers' },
                    ],
               },
               {
                    title: 'R&D and Testing',
                    link: 'R&D-and-testing',
                    list: [
                         {
                              title: 'Battery and Powertrain Testing Engineers',
                              link: 'battery-and-powertrain-testing-engineers',
                         },
                         {
                              title: 'Simulation and Testing Engineers',
                              link: 'simulation-and-testing-engineers',
                         },
                    ],
               },
          ],
     },
     {
          title: 'Cross-Sector',
          link: 'cross-sector',
          description: 'Connecting industries with versatile, sustainable expertise.',
          list: [
               {
                    title: 'Engineering Consulting Services',
                    link: 'engineering-consulting-services',
                    list: [{ title: 'Engineering Consultants', link: 'engineering-consultants' }],
               },
               {
                    title: 'Project Management & Coordination',
                    link: 'project-management-&-coordination',
                    list: [
                         {
                              title: 'Construction and Site Managers',
                              link: 'construction-and-site-managers',
                         },
                         {
                              title: 'Supply Chain & Procurement Experts',
                              link: 'supply-chain-&-procurement-experts',
                         },
                    ],
               },
               {
                    title: 'HSE (Health, Safety, and Environmental) Specialists',
                    link: 'HS-specialists',
                    list: [
                         { title: 'HSE Managers', link: 'HSE-managers' },
                         { title: 'Safety Officers', link: 'safety-officers' },
                    ],
               },
          ],
     },
]

const businessConsulting = [
     { title: ' Digital Transformation Expertise', link: 'digital-transformation-expertise' },
     { title: 'Drive Growth', link: 'drive-growth' },
     { title: 'Business Growth', link: 'business-growth' },
     { title: 'leverage-data', link: 'leverage-data' },
     { title: 'Secure Your Digital Assets', link: 'secure-your-digital-assets' },
     { title: 'IT Optimization', link: 'IT-optimization' },
]

const esgSustainability = [
     {
          title: 'Accurate GHG Accounting',
          link: 'accurate-GHG-accounting',
          list: [
               { title: 'Emissions Assessment', link: 'emissions-assessment' },
               { title: 'Carbon Reduction Planning', link: 'carbon-reduction-planning' },
               {
                    title: 'Compliance and Reporting',
                    link: 'compliance-and-reporting',
               },
          ],
     },
     {
          title: 'Strong ESG Foundation',
          link: 'strong-ESG-foundation',
          list: [
               {
                    title: 'Customized ESG Policy Development',
                    link: 'customized-ESG-policy-development',
               },
               { title: 'Impact Measurement', link: 'impact-measurement' },
               {
                    title: 'Investor and Stakeholder Alignment',
                    link: 'investor-and-stakeholder-alignment',
               },
          ],
     },
]

const engineeringServices = [
     {
          title: 'Alternative energy',
          description: 'Empowering a sustainable future with innovative energy solutions',
          link: 'alternative-energy',
          list: [
               {
                    title: 'LNG (Liquefied natural gas)',
                    link: 'liquefied-natural-gas',
                    list: [
                         {
                              title: 'Operations and Maintenance of LNG Commercial Trucks',
                              link: 'operation-&-maintenance-of-LNG-commercial-trucks',
                         },
                         {
                              title: 'LNG Technicians deployed for OEM’s ',
                              link: 'LNG-technicians-deployed-for-OEM',
                         },
                    ],
               },
               {
                    title: 'Electric Vehicle',
                    link: 'electric-vehicle',
                    list: [
                         { title: 'EV ready Technicians', link: 'EV-ready-technicians' },
                         {
                              title: 'Operations and Maintenance of EV',
                              link: 'operations-and-maintenance-of-EV',
                         },
                    ],
               },
               {
                    title: 'Solar Energy',
                    link: 'solar-energy',
                    list: [
                         {
                              title: 'Design and Development of Solar Power Plants',
                              link: 'design-and-development-of-solar-power-plants',
                         },
                         { title: 'Solar Farm EPC ', link: 'solar-farm-EPC' },
                         { title: 'Energy Storage Solutions', link: 'energy-storage-solutions' },
                         { title: 'Operation & Maintenance', link: 'operation-&-maintenance' },
                    ],
               },
               {
                    title: 'Wind Energy',
                    link: 'wind-energy',
                    list: [
                         { title: 'Wind Farm Development', link: 'wind-farm-development' },
                         {
                              title: 'Wind Energy EPC Services',
                              link: 'wind-energy-EPC-services',
                         },
                         { title: 'O&M for Wind Turbines', link: 'O&M-for-wind-turbines' },
                    ],
               },
               {
                    title: 'Hydropower',
                    link: 'hydropower',
                    list: [
                         {
                              title: 'Small & Micro Hydropower Plant Design',
                              link: 'small-&-micro-hydropower-plant-design',
                         },

                         {
                              title: 'Operation and Maintenance Services',
                              link: 'operation-and-maintenance-services',
                         },
                    ],
               },
               {
                    title: 'Energy Efficiency and Sustainability Consulting',
                    link: 'energy-efficiency-and-sustainability-consulting',
                    list: [
                         {
                              title: 'Energy Audits & Optimization',
                              link: 'energy-audits-&-optimization',
                         },
                         {
                              title: 'Carbon Reduction Strategies',
                              link: 'carbon-reduction-strategies',
                         },
                    ],
               },
          ],
     },
     {
          title: 'Engineering',
          link: 'engineering',
          description: 'Innovative solutions enhancing sustainability in manufacturing.',
          list: [
               {
                    title: 'Automation and Robotics Solutions',
                    link: 'automation-and-robotics-solutions',
                    list: [
                         { title: 'Industrial Automation', link: 'industrial-automation' },
                         {
                              title: 'Smart Manufacturing & Industry 4.0 Solutions',
                              link: 'smart-manufacturing-&-industry-solutions',
                         },
                    ],
               },
               {
                    title: 'Product Design and Prototyping',
                    link: 'product-design-and-prototyping',
                    list: [
                         { title: 'CAD/CAM/CAE Services', link: 'CAD/CAM/CAE-Services' },
                         {
                              title: 'Design for Manufacturing (DFM) and Design for Assembly (DFA)',
                              link: 'design-for-manufacturing-and-design-for-assembly',
                         },
                    ],
               },
               {
                    title: 'Process Engineering',
                    link: 'process-engineering',
                    list: [
                         {
                              title: 'Lean Manufacturing Consulting',
                              link: 'lean-manufacturing-Consulting',
                         },
                         {
                              title: 'Six Sigma & Quality Engineering',
                              link: 'six-sigma-&-quality-engineering',
                         },
                    ],
               },
               {
                    title: 'Materials Engineering',
                    link: 'materials-engineering',
                    list: [
                         {
                              title: 'Advanced Materials Development',
                              link: 'advanced-materials-development',
                         },
                         {
                              title: 'Sustainable Manufacturing Solutions',
                              link: 'sustainable-manufacturing-solutions',
                         },
                    ],
               },
               {
                    title: 'Maintenance & Support Services for Ports, Automotive & Aviation',
                    link: 'maintenance-&-support-services-for-ports',
                    list: [
                         {
                              title: 'Predictive Maintenance Solutions',
                              link: 'predictive-maintenance-solutions',
                         },
                         {
                              title: 'Field Service and Remote Monitoring',
                              link: 'field-service-and-remote-monitoring',
                         },
                    ],
               },
          ],
     },
     {
          title: 'Cross-Sector Services',
          link: 'cross-sector-services',
          noList: true,
          description: 'Connecting industries with versatile, sustainable expertise.',
          list: [
               {
                    title: 'R&D and Innovation Consulting',
                    link: 'R&D-and-innovation-consulting',
                    list: [],
               },
               {
                    title: 'Project Management & Consultancy',
                    link: 'project-management-&-consultancy',
                    list: [],
               },
               {
                    title: 'Regulatory Compliance and Certification',
                    link: 'regulatory-compliance-and-certification',
                    list: [],
               },
          ],
     },
     {
          title: 'Engineering Solutions',
          link: 'engineering-solutions',
          noList: true,
          description: 'Connecting industries with versatile, sustainable expertise.',
          list: [
               {
                    title: 'Power and Utilities ',
                    link: 'power-and-utilities',
                    list: [],
               },
               {
                    title: 'Automotive',
                    link: 'automotive',
                    list: [],
               },
               {
                    title: 'Electronics & Semiconductor Industries',
                    link: 'electronics-&-semiconductor-industries',
                    list: [],
               },
               {
                    title: 'Heavy Engineering & Infrastructure Projects',
                    link: 'heavy-engineering-&-infrastructure-projects',
                    list: [],
               },
               {
                    title: 'Aerospace',
                    link: 'aerospace',
                    list: [],
               },
          ],
     },
]

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
     const router = useRouter()
     const pathname = usePathname()
     const [isOpen, setIsOpen] = useState<boolean>(false)
     const [activeMenu, setActiveMenu] = useState('')
     const [acitveSubMenu, setActiveSubMenu] = useState(0)
     const [isScrolledLanding, setIsScrolledLanding] = useState(false)
     const menuBarRef: any = useRef(null)
     const gridContRef: any = useRef(null)

     const isTransparent = pathname === '/' || isOpen

     useLayoutEffect(() => {
          setActiveMenu('')
          setActiveSubMenu(0)
          setIsOpen(false)
     }, [pathname])

     const onNav = () => {
          setActiveMenu('')
          setActiveSubMenu(0)
          setIsOpen(false)
     }

     useEffect(() => {
          if (isOpen || activeMenu) {
               const elements = document.getElementById('bodyContainer')
               if (elements) {
                    elements.style.overflowY = 'hidden'
               }
          } else {
               const elements = document.getElementById('bodyContainer')
               if (elements) {
                    elements.style.overflowY = 'unset'
                    elements.style.maxHeight = 'unset'
               }
          }
     }, [isOpen, activeMenu])

     const toggleMenu = (): void => {
          setIsOpen(!isOpen)
     }

     const handleNavigation = () => {
          router.push('/contact-us')
          setIsOpen(false)
     }

     useEffect(() => {
          if (isTransparent) {
               const handleScroll = () => {
                    const threshold = window.innerHeight
                    if (window.scrollY > threshold) {
                         setIsScrolledLanding(true)
                    } else {
                         setIsScrolledLanding(false)
                    }
               }

               window.addEventListener('scroll', handleScroll)

               return () => {
                    window.removeEventListener('scroll', handleScroll)
               }
          }
     }, [isTransparent])
     return (
          <>
               <nav
                    ref={menuBarRef}
                    className={`${styles.navbar} ${className}`.trim()}
                    style={{
                         backgroundColor: isOpen
                              ? '#111'
                              : isTransparent && !isScrolledLanding && !activeMenu
                                ? 'transparent'
                                : '#fff',
                         color:
                              isTransparent && !isScrolledLanding && !activeMenu
                                   ? '#fff'
                                   : '#667085',
                         transition: 'background-color 0.3s ease',
                    }}
               >
                    <div className={styles.navContainer}>
                         <div className={styles.navContent}>
                              <Link href='/' className={styles.logo}>
                                   <div className={styles.logo_con}>
                                        <Image
                                             src={
                                                  isOpen
                                                       ? companyLogoWhite
                                                       : isTransparent &&
                                                           !isScrolledLanding &&
                                                           !activeMenu
                                                         ? companyLogoWhite
                                                         : companyLogo
                                             }
                                             alt='icon'
                                             className={styles.icon}
                                        />
                                   </div>
                              </Link>

                              <div className={styles.desktopNav}>
                                   {!isOpen &&
                                        navItems.map((item) => (
                                             <Link
                                                  key={item.href}
                                                  href={item.href}
                                                  className={styles.navLink}
                                                  style={{
                                                       color:
                                                            activeMenu == item.title ||
                                                            pathname == item.href
                                                                 ? '#047857'
                                                                 : isTransparent &&
                                                                     !isScrolledLanding &&
                                                                     !activeMenu
                                                                   ? '#fff'
                                                                   : '#667085',
                                                       transition: 'color 0.3s ease',
                                                  }}
                                                  onMouseOver={() => {
                                                       setActiveMenu(item.title)
                                                       setActiveSubMenu(0)
                                                  }}
                                             >
                                                  {item.label}
                                             </Link>
                                        ))}
                              </div>

                              <div className={styles.sideNavWrapper}>
                                   <button
                                        type='button'
                                        className={styles.contactButton}
                                        onClick={handleNavigation}
                                   >
                                        Contact us
                                   </button>
                                   <button
                                        type='button'
                                        onClick={toggleMenu}
                                        className={styles.hamburger}
                                        aria-label='Toggle menu'
                                        aria-expanded={isOpen}
                                   >
                                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                                   </button>
                              </div>
                         </div>
                    </div>
               </nav>

               <div
                    className={styles.menuBar}
                    style={{
                         transform: `translateY(${isOpen ? '0px' : '-100%'})`,
                    }}
               >
                    <ul className={styles.mainnav}>
                         <Link href={'/manpower-services'}>
                              <li>
                                   <span>01</span>
                                   <h1>Manpower solutions</h1>
                              </li>
                         </Link>
                         <Link href={'/engineering-services'}>
                              <li>
                                   <span>02</span>
                                   <h1>Engineering services</h1>
                              </li>
                         </Link>
                         <Link href={'/fleet-management'}>
                              <li>
                                   <span>03</span>
                                   <h1>Fleet management service</h1>
                              </li>
                         </Link>
                         <Link href={'/egs-sustainability'}>
                              <li>
                                   <span>04</span>
                                   <h1>ESG & Sustainability</h1>
                              </li>
                         </Link>
                         <Link href={'/business-consult'}>
                              <li>
                                   <span>05</span>
                                   <h1>Business Consulting</h1>
                              </li>
                         </Link>
                    </ul>
                    <div className={styles.sidenav}>
                         <ul>
                              <Link href={'/about-us'}>
                                   <li>
                                        <span>06</span>
                                        <h1>About us</h1>
                                   </li>
                              </Link>
                              <Link href={'/services'}>
                                   <li>
                                        <span>07</span>
                                        <h1>Services</h1>
                                   </li>
                              </Link>
                              <Link href={'/purpose'}>
                                   <li>
                                        <span>08</span>
                                        <h1>Purpose</h1>
                                   </li>
                              </Link>
                              <Link href={'/careers'}>
                                   <li>
                                        <span>09</span>
                                        <h1>Careers</h1>
                                   </li>
                              </Link>
                              {/* <Link href={'/careers'}>
                              <li>
                                   <span>10</span>
                                   <h1>Newsroom</h1>
                              </li>
                              </Link> */}
                              {/* <Link href={'/careers'}>
                                   <li>
                                        <span>11</span>
                                        <h1>Company policies</h1>
                                   </li>
                              </Link> */}
                         </ul>
                         <div className={styles.socialLinkCont}>
                              <Link href={'https://www.linkedin.com/in/ntarun/'} target='_blank'>
                                   <Image priority src={linkedinIc} alt='' />
                              </Link>

                              <Link href={''}>
                                   <Image priority src={xIc} alt='' style={{ marginTop: '5px' }} />
                              </Link>

                              <Link href={''}>
                                   <Image priority src={instaIc} alt='' />
                              </Link>

                              <Link href={''}>
                                   <Image priority src={fbIc} alt='' />
                              </Link>
                         </div>
                         <button
                              type='button'
                              className={`${styles.contactButton} ${styles.mobileBtn}`}
                              onClick={handleNavigation}
                         >
                              Contact us
                         </button>
                         <a href={'tel:+91-9150523409'} className={styles.linkCont}>
                              <Image priority src={callIc} alt='' />
                              <span>+91 98866 40104</span>
                         </a>

                         <a href={'mailto:finance@a2tgroup.com'} className={styles.linkCont}>
                              <Image priority src={mailIc} alt='' />
                              <span>finance@a2tgroup.com</span>
                         </a>
                    </div>
               </div>
               <div
                    ref={gridContRef}
                    className={styles.gridcont}
                    style={{
                         transform: `translateY(${activeMenu == 'fleetmanagement' ? '0px' : '-100%'})`,
                    }}
               >
                    <div className={styles.maincon}>
                         {fleetManagement.map((nav, index) => {
                              return (
                                   <div key={index}>
                                        <Link
                                             onClick={onNav}
                                             href={`/fleet-management#${nav.link}`}
                                        >
                                             <h3>
                                                  <a>{nav.title}</a>
                                             </h3>
                                        </Link>
                                        <ul className={`${styles.noListStyle}`}>
                                             {nav.list.map((link: any, index: any) => {
                                                  return (
                                                       <Link
                                                            key={index}
                                                            onClick={onNav}
                                                            href={`/fleet-management#${link.link}`}
                                                       >
                                                            <li key={link.title}>{link.title}</li>
                                                       </Link>
                                                  )
                                             })}
                                        </ul>
                                   </div>
                              )
                         })}
                    </div>

                    <div
                         className={styles.footer}
                         onMouseOver={() => {
                              setActiveMenu('')
                         }}
                    ></div>
               </div>
               <div
                    ref={gridContRef}
                    className={styles.gridcont}
                    style={{
                         transform: `translateY(${activeMenu == 'consulting' ? '0px' : '-100%'})`,
                    }}
               >
                    <div className={styles.singleLinkPage}>
                         {businessConsulting.map((link, index) => {
                              return (
                                   <Link
                                        key={index}
                                        onClick={onNav}
                                        href={`/business-consult#${link.link}`}
                                   >
                                        <div key={index}>
                                             <h3>{link.title}</h3>
                                        </div>
                                   </Link>
                              )
                         })}
                    </div>
                    <div
                         className={styles.footer}
                         onMouseOver={() => {
                              setActiveMenu('')
                         }}
                    ></div>
               </div>

               <div
                    ref={gridContRef}
                    className={styles.gridcont}
                    style={{
                         transform: `translateY(${activeMenu == 'esg' ? '0px' : '-100%'})`,
                    }}
               >
                    <div className={styles.maincon}>
                         {esgSustainability.map((nav, index) => {
                              return (
                                   <div key={index}>
                                        <Link
                                             key={index}
                                             onClick={onNav}
                                             href={`/esg-sustainability#${nav.link}`}
                                        >
                                             <h3>{nav.title}</h3>
                                        </Link>
                                        <ul className={`${styles.noListStyle}`}>
                                             {nav.list.map((link: any, index) => {
                                                  return (
                                                       <Link
                                                            key={index}
                                                            onClick={onNav}
                                                            href={`/esg-sustainability#${link.link}`}
                                                       >
                                                            <li key={index}>{link.title}</li>
                                                       </Link>
                                                  )
                                             })}
                                        </ul>
                                   </div>
                              )
                         })}
                    </div>

                    <div
                         className={styles.footer}
                         onMouseOver={() => {
                              setActiveMenu('')
                         }}
                    ></div>
               </div>

               <div
                    ref={gridContRef}
                    className={styles.gridcont}
                    style={{
                         transform: `translateY(${activeMenu == 'manpower' ? '0px' : '-100%'})`,
                    }}
               >
                    <div className={styles.options}>
                         <div className={styles.leftCont}>
                              {manpowersolutions.map((link, index) => {
                                   return (
                                        <Link
                                             key={index}
                                             onClick={onNav}
                                             href={`/manpower-services#${link.link}`}
                                        >
                                             <div
                                                  key={index}
                                                  className={`${styles.optionCont} ${acitveSubMenu == index ? styles.active : ''}`}
                                                  onMouseOver={() => {
                                                       setActiveSubMenu(index)
                                                  }}
                                             >
                                                  <h3>{link.title}</h3>
                                                  <p>{link.description}</p>
                                             </div>
                                        </Link>
                                   )
                              })}
                         </div>
                         <div className={styles.rightCont}>
                              {manpowersolutions[acitveSubMenu]?.list?.map((link, index) => {
                                   return (
                                        <div key={index}>
                                             <Link
                                                  onClick={onNav}
                                                  href={`/manpower-services#${link.link}`}
                                             >
                                                  <h3>{link.title}</h3>
                                             </Link>
                                             <ul className={`${styles.noListStyle}`}>
                                                  {link.list.map((sublink: any, indexw) => {
                                                       return (
                                                            <Link
                                                                 key={index}
                                                                 onClick={onNav}
                                                                 href={`/manpower-services#${sublink.link}`}
                                                            >
                                                                 <li key={indexw}>
                                                                      {sublink.title}
                                                                 </li>
                                                            </Link>
                                                       )
                                                  })}
                                             </ul>
                                        </div>
                                   )
                              })}
                         </div>
                    </div>
                    <div
                         className={styles.footer}
                         onMouseOver={() => {
                              setActiveMenu('')
                         }}
                    ></div>
               </div>

               <div
                    ref={gridContRef}
                    className={styles.gridcont}
                    style={{
                         transform: `translateY(${activeMenu == 'engineering' ? '0px' : '-100%'})`,
                    }}
               >
                    <div className={styles.options}>
                         <div className={styles.leftCont}>
                              {engineeringServices.map((link, index) => {
                                   return (
                                        <Link
                                             key={index}
                                             onClick={onNav}
                                             href={`/engineering-service#${link.link}`}
                                        >
                                             <div
                                                  key={index}
                                                  className={`${styles.optionCont} ${acitveSubMenu == index ? styles.active : ''}`}
                                                  onMouseOver={() => {
                                                       setActiveSubMenu(index)
                                                  }}
                                             >
                                                  <h3>{link.title}</h3>
                                                  <p>{link.description}</p>
                                             </div>
                                        </Link>
                                   )
                              })}
                         </div>
                         {acitveSubMenu <= 1 && (
                              <div className={styles.rightCont}>
                                   {engineeringServices[acitveSubMenu]?.list?.map((link, index) => {
                                        return (
                                             <div key={index}>
                                                  <Link
                                                       onClick={onNav}
                                                       href={`/engineering-services#${link.link}`}
                                                  >
                                                       <h3>{link.title}</h3>
                                                  </Link>
                                                  <ul className={`${styles.noListStyle}`}>
                                                       {link.list.map((slink: any, indexs) => {
                                                            return (
                                                                 <Link
                                                                      key={index}
                                                                      onClick={onNav}
                                                                      href={`/engineering-services#${slink.link}`}
                                                                 >
                                                                      <li key={indexs}>
                                                                           {slink.title}
                                                                      </li>
                                                                 </Link>
                                                            )
                                                       })}
                                                  </ul>
                                             </div>
                                        )
                                   })}
                              </div>
                         )}
                         {acitveSubMenu >= 2 && (
                              <div className={styles.onlyLinkCont}>
                                   {engineeringServices[acitveSubMenu]?.list?.map((link, index) => {
                                        return (
                                             <div key={index}>
                                                  <Link
                                                       onClick={onNav}
                                                       href={`/engineering-services#${link.link}`}
                                                  >
                                                       <h3>{link.title}</h3>
                                                  </Link>
                                             </div>
                                        )
                                   })}
                              </div>
                         )}
                    </div>
                    <div
                         className={styles.footer}
                         onMouseOver={() => {
                              setActiveMenu('')
                         }}
                    ></div>
               </div>
          </>
     )
}

export default Navbar
