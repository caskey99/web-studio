'use client'
import styles from '../../page.module.scss'

/**
 * HeroImageClient - клиентский компонент с анимацией
 * Анимированная заглушка для SVG изображения
 */
export default function HeroImageClient() {
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroImageContainer}>
        <div className={styles.heroImagePlaceholder}>
          SVG Image
        </div>
      </div>
    </div>
  )
}