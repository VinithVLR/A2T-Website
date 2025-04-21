'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface IdContextType {
     id: string | null
     setId: (id: string) => void
     clearId: () => void
}

const IdContext = createContext<IdContextType | undefined>(undefined)

export const IdProvider = ({ children }: { children: ReactNode }) => {
     const [id, setIdState] = useState<string | null>(null)

     // On first load, check localStorage
     useEffect(() => {
          const storedId = localStorage.getItem('user_id')
          if (storedId) {
               setIdState(storedId)
          }
     }, [])

     const setId = (newId: string) => {
          setIdState(newId)
          localStorage.setItem('user_id', newId)
     }

     const clearId = () => {
          setIdState(null)
          localStorage.removeItem('user_id')
     }

     return <IdContext.Provider value={{ id, setId, clearId }}>{children}</IdContext.Provider>
}

export const useId = (): IdContextType => {
     const context = useContext(IdContext)
     if (!context) {
          throw new Error('useId must be used within an IdProvider')
     }
     return context
}
