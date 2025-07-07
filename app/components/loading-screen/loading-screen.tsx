'use client'

import { useEffect, useState } from "react"
import styles from './loading-screen.module.scss'

/**
 * LoadingScreen компонент с продвинутой анимацией
 * Градиентный фон + желтый спиннер с trailing + анимация штор
 */
function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [showCurtains, setShowCurtains] = useState(false)

  useEffect(() => {
    const minTime = 300 // минимальное время показа

    // Ждем готовности контента
    const checkReady = () => {
      return document.readyState === 'complete'
    }

    const finishLoading = () => {
      setTimeout(() => {
        setIsLoading(false)
        
        // Запускаем анимацию штор
        setTimeout(() => {
          setShowCurtains(true)
          
          // Полностью скрываем после анимации штор
          setTimeout(() => {
            setIsVisible(false)
          }, 800)
        }, 200)
      }, minTime)
    }

    // Проверяем готовность
    if (checkReady()) {
      finishLoading()
    } else {
      const handleLoad = () => finishLoading()
      window.addEventListener('load', handleLoad)
      
      // Fallback через 3 секунды
      const fallback = setTimeout(finishLoading, 3000)
      
      return () => {
        window.removeEventListener('load', handleLoad)
        clearTimeout(fallback)
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className={styles.loadingScreen}>
      {/* Градиентный фон */}
      <div className={styles.background} />
      
      {/* Спиннер с trailing эффектом */}
      <div className={`${styles.spinnerContainer} ${!isLoading ? styles.fadeOut : ''}`}>
        <div className={styles.spinner}>
          <div className={styles.core} />
          <div className={styles.trail} />
        </div>
      </div>

      {/* Анимация штор */}
      <div className={`${styles.curtains} ${showCurtains ? styles.active : ''}`}>
        <div className={`${styles.panel} ${styles.leftTop}`} />
        <div className={`${styles.panel} ${styles.leftBottom}`} />
        <div className={`${styles.panel} ${styles.rightTop}`} />
        <div className={`${styles.panel} ${styles.rightBottom}`} />
      </div>
    </div>
  )
}

export default LoadingScreen