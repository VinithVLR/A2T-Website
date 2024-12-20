'use client'

import Header from '@/component/header/Header'
import SearchInput from '@/component/searchInput/SearchInput'
import styles from './GlobalOpportunity.module.scss'
import Pagination from '@/component/pagination/Pagination'
import { useEffect, useLayoutEffect, useState } from 'react'
import JobCard from '../components/jobCard/JobCard'

function GlobalOpportunity() {
     const [totalPage, setTotalPage] = useState(8)
     const [currentPage, setCurrentPage] = useState(1)
     const [pageSize, setPageSize] = useState(4)
     const arr = [
          {
               title: 'Sustainable Engineering Practices',
               description:
                    'Courses on sustainable design, energy efficiency, and environmental impact assessment.',
               link: 'Link to application (add actual URL here)',
          },
          {
               title: 'Mechanical and Electrical Systems',
               description:
                    'Specializations in HVAC, electrical systems, and mechanical maintenance.',
               link: 'Link to application (add actual URL here)',
          },
          {
               title: 'ESG Compliance and Reporting',
               description:
                    'Learn about Environmental, Social, and Governance (ESG) criteria, compliance, and reporting standards.',
               link: 'Link to application (add actual URL here)',
          },
          {
               title: 'Sustainable Engineering Practices',
               description:
                    'Courses on sustainable design, energy efficiency, and environmental impact assessment.',
               link: 'Link to application (add actual URL here)',
          },
     ]

     useLayoutEffect(() => {
          if (typeof window != 'undefined') {
               const innerWidth = window.innerWidth
               let size = 4
               if (innerWidth >= 1600) {
                    size = 5
               } else if (innerWidth < 1600 && innerWidth >= 960) {
                    size = 4
               } else if (innerWidth < 960 && innerWidth >= 600) {
                    size = 3
               }
          }
     }, [])

     return (
          <section className={styles.mainCon}>
               <div className={`flex ${styles.header}`}>
                    <Header
                         title={'Unlock Your Potential with Global Opportunities'}
                         containerStyle={styles.headerContainer}
                         titleStyle={{ width: '65%', textAlign: 'left', marginBottom: '0px' }}
                    />
                    <SearchInput placeHolder='Search a course name' style={styles.searchInput} />
               </div>
               <div className={styles.listContainer} id='card-container'>
                    {arr.map((item: any, index) => {
                         return <JobCard key={index} data={item} />
                    })}
               </div>
               <div>
                    <Pagination
                         totalPage={totalPage}
                         current={currentPage}
                         onChange={setCurrentPage}
                    />
               </div>
          </section>
     )
}

export default GlobalOpportunity
