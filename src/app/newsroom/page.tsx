import React from 'react'
import { Metadata } from 'next'
import LatestNewsSection from '@/pages/news/latestNewsSection/LatestNewsSection'
import CallToAction from '@/component/calltoaction/CallToAction'
import FloatingButton from '@/component/floatingButton/FloatingButton'

export const metadata: Metadata = {
     title: 'News Rooms',
     description: 'Innovative Solutions for a Sustainable & Impactful Future.',
     alternates: {
          canonical: 'https://prakashrg09.github.io/a2t-technologies/about-us',
     },
}

const page = () => {
     return (
          <React.Fragment>
               <LatestNewsSection />
               <CallToAction
                    style={{ paddingInline: '5rem' }}
                    detailsSection={{ paddingBlock: '3rem', lineHeight: '4rem' }}
                    data={
                         <>
                              Contact us for more information about our services or to discuss how
                              <span> we can help your business</span> stay ahead of industry trends.
                         </>
                    }
               />
             <FloatingButton />
          </React.Fragment>
     )
}

export default page
