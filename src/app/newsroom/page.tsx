import React from 'react'
import { Metadata } from 'next'
import LatestNewsSection from '@/pages/news/latestNewsSection/LatestNewsSection'

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
          </React.Fragment>
     )
}

export default page
