'use client'

import { useEffect, useState } from "react"
import styles from './loading-screen.module.scss'

/**
 * LoadingScreen с вертикальными шторами
 * 4 вертикальные секции, которые схлопываются к краям экрана
 */
function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [showCurtains, setShowCurtains] = useState(false)

  useEffect(() => {
    const minTime = 800 // увеличено время для лучшего эффекта

    const finishLoading = () => {
      setTimeout(() => {
        setIsLoading(false)
        
        // Запускаем анимацию вертикальных штор
        setTimeout(() => {
          setShowCurtains(true)
          
          // Полностью скрываем после анимации штор
          setTimeout(() => {
            setIsVisible(false)
          }, 1600) // время для завершения анимации
        }, 300)
      }, minTime)
    }

    // Всегда показываем минимальное время для красивой анимации
    const timer = setTimeout(finishLoading, minTime)

    return () => clearTimeout(timer)
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

      {/* Вертикальные шторы - 4 секции */}
      <div className={`${styles.curtains} ${showCurtains ? styles.active : ''}`}>
        {/* Левая часть экрана - 2 секции */}
        <div className={`${styles.panel} ${styles.leftPanel1}`} />
        <div className={`${styles.panel} ${styles.leftPanel2}`} />
        
        {/* Правая часть экрана - 2 секции */}
        <div className={`${styles.panel} ${styles.rightPanel1}`} />
        <div className={`${styles.panel} ${styles.rightPanel2}`} />
      </div>
    </div>
  )
}

export default LoadingScreen