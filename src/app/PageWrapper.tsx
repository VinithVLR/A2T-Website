'use client'

import React, { useState, useEffect } from 'react'
import Loading from '@/app/loading'

interface PageWrapperProps {
     children: React.ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => {
     const [isLoading, setIsLoading] = useState(true)

     useEffect(() => {
          const images = document.querySelectorAll('img')
          let loadedImages = 0

          const imageLoaded = () => {
               loadedImages++
               if (loadedImages === images.length) {
                    setIsLoading(false)
               }
          }

          if (images.length === 0) {
               setIsLoading(false)
          } else {
               images.forEach((img) => {
                    if (img.complete) {
                         imageLoaded()
                    } else {
                         img.addEventListener('load', imageLoaded)
                         img.addEventListener('error', imageLoaded)
                    }
               })
          }

          return () => {
               images.forEach((img) => {
                    img.removeEventListener('load', imageLoaded)
                    img.removeEventListener('error', imageLoaded)
               })
          }
     }, [])

     if (isLoading) {
          return <Loading />
     }

     return <>{children}</>
}

export default PageWrapper
