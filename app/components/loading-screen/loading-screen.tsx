'use client'

import { useEffect, useState } from "react"

/**
 * LoadingScreen компонент для анимации загрузки
 */
function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setIsVisible(false), 300)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'var(--bg-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 'var(--z-loading)',
        opacity: isLoading ? 1 : 0,
        transition: 'opacity var(--transition-speed) ease',
        pointerEvents: isLoading ? 'auto' : 'none'
      }}
    >
      <div style={{
        width: '50px',
        height: '50px',
        border: '3px solid var(--border-color)',
        borderTop: '3px solid var(--brand-primary)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
    </div>
  )
}

export default LoadingScreen;