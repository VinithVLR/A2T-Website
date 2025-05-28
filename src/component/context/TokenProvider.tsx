'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface IdContextType {
     id: string | null
     setId: (id: string) => void
     clearId: () => void
     status: string | null
     setStatus: (status: string) => void
}

// ✅ Define context once
const IdContext = createContext<IdContextType | undefined>(undefined)

export const IdProvider = ({ children }: { children: ReactNode }) => {
     const [id, setIdState] = useState<string | null>(null)
     const [status, setStatus] = useState<string | null>(null)

     // ✅ Load both id and status from localStorage
     useEffect(() => {
          const storedId = localStorage.getItem('user_id')
          const storedStatus = localStorage.getItem('user_status')
          if (storedId) setIdState(storedId)
          if (storedStatus) setStatus(storedStatus)
     }, [])

     const setId = (newId: string) => {
          setIdState(newId)
          localStorage.setItem('user_id', newId)
     }

     const clearId = () => {
          setIdState(null)
          localStorage.removeItem('user_id')
     }

     const handleSetStatus = (newStatus: string) => {
          setStatus(newStatus)
          localStorage.setItem('user_status', newStatus)
     }

     return (
          <IdContext.Provider value={{ id, setId, clearId, status, setStatus: handleSetStatus }}>
               {children}
          </IdContext.Provider>
     )
}

// ✅ Hook to use the context
export const useId = (): IdContextType => {
     const context = useContext(IdContext)
     if (!context) {
          throw new Error('useId must be used within an IdProvider')
     }
     return context
}
