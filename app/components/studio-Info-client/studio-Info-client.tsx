'use client'

import { useEffect, useRef } from 'react'
import styles from '../../page.module.scss';

/**
 * StudioInfoClient - клиентский компонент с интерактивными карточками
 * Показывает ключевые преимущества с анимациями при скролле
 */
export default function StudioInfoClient() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          element.style.transform = 'translateY(0)'
          element.style.opacity = '1'
        }
      })
    }, observerOptions)
    
    // Наблюдаем за карточками
    cardRefs.current.forEach((card) => {
      if (card) {
        card.style.transform = 'translateY(30px)'
        card.style.opacity = '0'
        card.style.transition = 'all 0.6s ease'
        observer.observe(card)
      }
    })
    
    return () => observer.disconnect()
  }, [])

  const cards = [
    {
      icon: '🚀',
      title: 'Высокая производительность',
      description: 'Используем современные технологии для создания быстрых и оптимизированных сайтов'
    },
    {
      icon: '🎯',
      title: 'SEO оптимизация',
      description: 'Каждый сайт создается с учетом требований поисковых систем для максимальной видимости'
    },
    {
      icon: '📱',
      title: 'Адаптивный дизайн',
      description: 'Идеальное отображение на всех устройствах - от смартфонов до больших мониторов'
    }
  ]

  return (
    <section className={styles.studioInfo}>
      <div className={styles.container}>
        <h2 className={styles.studioTitle}>
          Почему выбирают нас?
        </h2>
        
        <p className={styles.studioDescription}>
          Мы специализируемся на создании веб-решений, которые не только красиво выглядят, 
          но и обеспечивают максимальную производительность и конверсию для вашего бизнеса.
        </p>
        
        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => cardRefs.current[index] = el}
              className={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
              }}
            >
              <div className={styles.cardIcon}>
                {card.icon}
              </div>
              <h3 className={styles.cardTitle}>
                {card.title}
              </h3>
              <p className={styles.cardDescription}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}