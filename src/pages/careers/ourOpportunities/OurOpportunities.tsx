'use client'

import React, { useState } from 'react'
import styles from './OurOpportunities.module.scss'
import Header from '@/component/header/Header'
import SearchInput from '@/component/searchInput/SearchInput'
import Filter from '@/component/filter/Filter'
import OpportunityCard from '../components/opportunityCard/OpportunityCard'
import Pagination from '@/component/pagination/Pagination'

const OurOpportunities = () => {
     const [options, setOptions] = useState([
          {
               title: 'All',
               value: 'all',
               active: true,
          },
          {
               title: 'Technical',
               value: 'technical',
               active: false,
          },
          {
               title: 'Non-technical',
               value: 'nontechnical',
               active: false,
          },
          {
               title: 'Sales',
               value: 'sales',
               active: false,
          },
          {
               title: 'Marketing',
               value: 'marketing',
               active: false,
          },
          {
               title: 'Customer Service',
               value: 'customerService',
               active: false,
          },
     ])

     const jobsList: any = [
          {
               title: 'Mechanical Engineer',
               location: 'Mumbai',
               description:
                    'Seeking a skilled Mechanical Engineer with experience in vehicle integration and design.',
               applyLink: 'link-to-apply-mechanical-engineer',
          },
          {
               title: 'Project Manager',
               location: 'Mumbai',
               description:
                    'Looking for an experienced Project Manager to lead complex engineering projects.',
               applyLink: 'link-to-apply-project-manager',
          },
          {
               title: 'Sustainability Consultant',
               location: 'Mumbai',
               description:
                    'We are hiring a Sustainability Consultant to develop and implement ESG strategies.',
               applyLink: 'link-to-apply-sustainability-consultant',
          },
     ]

     const [totalPage, setTotalPage] = useState(8)
     const [currentPage, setCurrentPage] = useState(1)

     return (
          <section className={styles.mainContainer}>
               <Header title={'Our Current Opportunities'} titleStyle={{ width: '65%' }} />
               <section>
                    <div>
                         <Filter options={options} onChange={(value: any) => setOptions(value)} />
                         <SearchInput
                              placeHolder={'Search for Position, Location'}
                              style={styles.searchInput}
                         />
                    </div>
                    <div className={styles.listContainer}>
                         {jobsList.map((job: any, index: number) => {
                              return (
                                   <React.Fragment key={index}>
                                        <OpportunityCard data={job} />
                                        {index != jobsList.length - 1 && (
                                             <div className={styles.horizontalRule}></div>
                                        )}
                                   </React.Fragment>
                              )
                         })}
                    </div>
                    <div className={styles.paginationContainer}>
                         <Pagination
                              totalPage={totalPage}
                              current={currentPage}
                              onChange={setCurrentPage}
                         />
                    </div>
               </section>
          </section>
     )
}

export default OurOpportunities
