import { useMemo } from 'react'

export const useHeader = () => {
  const logo = useMemo(() => {
    return {
      width: 100,
      height: 100,
      src: '',
      alt: ''
    }
  }, [])

  return {
    logo
  }
}
