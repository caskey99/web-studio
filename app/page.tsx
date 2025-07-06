import { Metadata } from 'next'
import styles from './page.module.scss'
import StudioInfoClient from './components/studio-Info-client/studio-Info-client'
import HeroImageClient from './components/hero-image-client/hero-image-client'

// SEO метаданные для главной страницы
export const metadata: Metadata = {
  title: 'WebStudio - Главная',
  description: 'Профессиональная веб-студия WebStudio. Создаем современные, быстрые и эффективные веб-решения для вашего бизнеса.',
}

/**
 * HeroContent компонент - основной контент hero секции (SSG)
 * Содержит заголовок, подзаголовок и call-to-action кнопки
 * Статический контент для максимальной производительности
 */
function HeroContent() {
  return (
    <div style={{
      flex: 1,
      maxWidth: '600px'
    }}>
      {/* Основной заголовок с градиентным эффектом */}
      <h1 style={{
        fontSize: '72px',
        fontWeight: 800,
        lineHeight: 1.1,
        background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '24px'
      }}>
        WebStudio
      </h1>
      
      {/* Подзаголовок с описанием услуг */}
      <p style={{
        fontSize: '24px',
        color: 'var(--text-secondary)',
        marginBottom: '40px',
        lineHeight: 1.4
      }}>
        Создаем современные, быстрые и эффективные веб-решения для вашего бизнеса. 
        Профессиональная разработка с фокусом на производительность и пользовательский опыт.
      </p>
      
      {/* Call-to-action кнопки - статические для SSG */}
      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <a 
          href="/contacts" 
          className={styles.btnPrimary}
        >
          Обсудить проект
        </a>
        <a 
          href="/projects" 
          className={styles.btnSecondary}
        >
          Наши работы
        </a>
      </div>
    </div>
  )
}

/**
 * HeroSection компонент - главная секция страницы (SSG)
 * Комбинирует статический контент и клиентское изображение
 */
function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Главная секция">
      <HeroContent />
      <HeroImageClient/>
    </section>
  )
}

/**
 * Главная страница приложения (SSG)
 * Комбинирует статический контент для SEO с интерактивными клиентскими компонентами
 */
export default function HomePage() {
  return (
    <>
      {/* Structured Data для главной страницы */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "WebStudio - Главная страница",
            "description": "Профессиональная веб-студия, специализирующаяся на создании современных веб-решений",
            "url": "https://webstudio.com",
            "mainEntity": {
              "@type": "Organization",
              "name": "WebStudio",
              "description": "Веб-студия полного цикла",
              "offers": {
                "@type": "Service",
                "name": "Веб-разработка",
                "description": "Создание современных веб-сайтов и приложений"
              }
            }
          })
        }}
      />
      
      {/* Основной контент страницы в контейнере */}
      <div className={styles.container}>
        <HeroSection />
      </div>
      
      {/* Интерактивная секция с информацией о студии */}
      <StudioInfoClient />
    </>
  )
}