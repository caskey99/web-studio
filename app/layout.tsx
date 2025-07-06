import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import ClientComponents from './components/client-components/client-components'
import styles from './page.module.scss';

// Оптимизированная загрузка шрифта Inter для лучшей производительности
const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap', // Использует системный шрифт до загрузки Inter
  variable: '--font-inter'
})

// SEO метаданные для максимальной оптимизации
export const metadata: Metadata = {
  title: {
    default: 'WebStudio - Профессиональная веб-разработка',
    template: '%s | WebStudio'
  },
  description: 'WebStudio - ведущая веб-студия, специализирующаяся на создании современных, быстрых и SEO-оптимизированных веб-сайтов. Разработка на React, Next.js, TypeScript.',
  keywords: ['веб-разработка', 'создание сайтов', 'веб-студия', 'React', 'Next.js', 'TypeScript', 'SEO оптимизация'],
  authors: [{ name: 'WebStudio Team' }],
  creator: 'WebStudio',
  publisher: 'WebStudio',
  
  // Open Graph для социальных сетей
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://webstudio.com',
    siteName: 'WebStudio',
    title: 'WebStudio - Профессиональная веб-разработка',
    description: 'Создаем современные, быстрые и эффективные веб-решения для вашего бизнеса',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebStudio - Веб-разработка'
      }
    ]
  },
  
  // Twitter Card для улучшенного отображения в Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'WebStudio - Профессиональная веб-разработка',
    description: 'Создаем современные веб-решения для вашего бизнеса',
    images: ['/twitter-image.jpg'],
    creator: '@webstudio'
  },
  
  // Дополнительные SEO теги
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  
  // Альтернативные языки (для будущего расширения)
  alternates: {
    canonical: 'https://webstudio.com',
    languages: {
      'ru-RU': 'https://webstudio.com',
      'en-US': 'https://webstudio.com/en'
    }
  },
  
  // Иконки приложения
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  
  // Настройки viewport для мобильной адаптивности
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  },
  
  // Верификация для поисковых систем
  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code'
  }
}

// Интерфейс для пропсов Layout компонента
interface RootLayoutProps {
  children: React.ReactNode
}

/**
 * ThemeProvider компонент для управления темами
 * Предотвращает мигание темы при загрузке страницы
 */
function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Скрипт для предотвращения мигания темы при загрузке */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {
                document.documentElement.setAttribute('data-theme', 'light');
              }
            })();
          `
        }}
      />
      {children}
    </>
  )
}

/**
 * Footer компонент с ссылками и социальными сетями
 * Содержит важную навигационную информацию и контакты
 */
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerContent}`}>
        {/* Навигационные ссылки в футере */}
        <nav className={styles.footerLinks} role="navigation" aria-label="Дополнительная навигация">
          <a
            href="/about" 
            className={styles.footerLink}
          >
            О нас
          </a>
          <a 
            href="/privacy" 
            className={styles.footerLink}
          >
            Политика конфиденциальности
          </a>
          <a 
            href="/terms" 
            className={styles.footerLink}
          >
            Условия использования
          </a>
          <a 
            href="/contacts" 
            className={styles.footerLink}
          >
            Контакты
          </a>
          
        </nav>
        
        {/* Социальные сети с aria-labels для доступности */}
        <div className={styles.socialLinks} role="list" aria-label="Социальные сети">
          <a 
            href="https://t.me/webstudio" 
            className={styles.socialLink}
            aria-label="Наш Telegram канал"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱
          </a>
          <a 
            href="https://github.com/webstudio" 
            className={styles.socialLink}
            aria-label="Наш GitHub профиль"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻
          </a>
          <a 
            href="mailto:hello@webstudio.com" 
            className={styles.socialLink}
            aria-label="Написать нам email"
            
          >
            ✉️
          </a>
        </div>
      </div>
    </footer>
  )
}

/**
 * Основной Layout компонент
 * Объединяет все части приложения и настраивает базовую структуру
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        {/* Дополнительные meta теги для улучшенной производительности */}
        <meta name="theme-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preconnect для внешних ресурсов */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data для поисковых систем */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WebStudio",
              "description": "Профессиональная веб-студия, специализирующаяся на современной веб-разработке",
              "url": "https://webstudio.com",
              "logo": "https://webstudio.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+7-XXX-XXX-XXXX",
                "contactType": "customer service",
                "areaServed": "RU",
                "availableLanguage": "Russian"
              },
              "sameAs": [
                "https://t.me/webstudio",
                "https://github.com/webstudio"
              ]
            })
          }}
        />
      </head>
      
      <body>
        {/* Основная структура страницы */}
        <div id="app">
          {/* Клиентские компоненты (Header, LoadingScreen) */}
          <ClientComponents />
          
          {/* Основной контент с семантическими тегами */}
          <main style={{
            minHeight: 'calc(100vh - var(--header-height) - var(--footer-height))',
            paddingTop: 'calc(var(--header-height) + var(--main-padding))',
            paddingBottom: 'var(--main-padding)'
          }} role="main">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  )
}