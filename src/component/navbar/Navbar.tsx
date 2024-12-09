'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './Navbar.module.scss'
import companyLogo from '../../assets/images/img_companyLogo.svg'

interface NavItem {
     label: string
     href: string
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
     { label: 'Manpower solutions', href: '/manpower' },
     { label: 'Engineering', href: '/engineering' },
     { label: 'ESG & Sustainability', href: '/esg' },
     { label: 'Business consulting', href: '/consulting' },
     { label: 'Fleet Management', href: '/fleetmanagement' },
]

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
     const router = useRouter()
     const pathname = usePathname()
     const [isOpen, setIsOpen] = useState<boolean>(false)
     const [isLandingPage, setIsLandingPage] = useState<boolean>(true)

     useEffect(() => {
          setIsLandingPage(pathname === '/')
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [pathname])

     const toggleMenu = (): void => {
          setIsOpen(!isOpen)
     }

     const handleNavigation = () => {
          router.push('/aboutus')
          setIsOpen(false)
     }
     const [bgColor, setBgColor] = useState(isLandingPage ? 'transparent' : '#fff')

     useEffect(() => {
          const handleScroll = () => {
               const threshold = window.innerHeight
               if (window.scrollY > threshold) {
                    setBgColor('#FFF')
               } else {
                    setBgColor(isLandingPage ? 'transparent' : '#fff')
               }
          }

          window.addEventListener('scroll', handleScroll)

          return () => {
               window.removeEventListener('scroll', handleScroll)
          }
     }, [isLandingPage])
     return (
          <nav
               className={`${styles.navbar} ${className}`.trim()}
               style={{
                    backgroundColor: bgColor,
                    color: bgColor === 'transparent' ? '#fff' : '#667085',
                    transition: 'background-color 0.3s ease',
               }}
          >
               <div className={styles.navContainer}>
                    <div className={styles.navContent}>
                         <Link href='/' className={styles.logo}>
                              <div className={styles.logo_con}>
                                   <Image src={companyLogo} alt='icon' className={styles.icon} />
                              </div>
                         </Link>

                         <div className={styles.desktopNav}>
                              {navItems.map((item) => (
                                   <Link
                                        key={item.href}
                                        href={item.href}
                                        className={styles.navLink}
                                        style={{
                                             color: bgColor === 'transparent' ? '#fff' : '#667085',
                                             transition: 'color 0.3s ease',
                                        }}
                                   >
                                        {item.label}
                                   </Link>
                              ))}
                              <button
                                   type='button'
                                   className={styles.contactButton}
                                   onClick={handleNavigation}
                              >
                                   Contact us
                              </button>
                         </div>

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

                    <div
                         className={`${styles.mobileNav} ${isOpen ? styles.isOpen : ''}`}
                         aria-hidden={!isOpen}
                    >
                         {navItems.map((item) => (
                              <Link
                                   key={item.href}
                                   href={item.href}
                                   className={styles.mobileNavLink}
                                   onClick={() => setIsOpen(false)}
                              >
                                   {item.label}
                              </Link>
                         ))}
                         <button
                              type='button'
                              className={styles.mobileContactButton}
                              onClick={handleNavigation}
                         >
                              Contact us
                         </button>
                    </div>
               </div>
          </nav>
     )
}

export default Navbar
