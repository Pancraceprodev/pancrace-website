'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useCurrentLocation() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [hash, setHash] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHash(window.location.hash)
    }

    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return {
    pathname,
    search: `?${searchParams.toString()}`,
    hash,
  }
}
