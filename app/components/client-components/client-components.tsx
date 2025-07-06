'use client'

import { useEffect, useState } from 'react'
import styles from '../.././page.module.scss';

/**
 * Hook для управления темой
 */
function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return { theme, toggleTheme, mounted }
}

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
     className={`${styles.loading} ${!isLoading ? styles.fadeOut : ''}`}
    >
      <div className={styles.loadingSpinner}></div>
    </div>
  )
}

/**
 * Header компонент с навигацией и переключением темы
 */
function Header() {
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--header-height)',
      background: theme === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)',
      zIndex: 'var(--z-header)',
      transition: 'all var(--transition-speed) ease'
    }}>
      <div style={{
        maxWidth: 'var(--container-max-width)',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
      }}>
        {/* Логотип */}
        <a 
          href="/" 
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--brand-primary)',
            textDecoration: 'none',
            transition: 'color var(--transition-speed) ease'
          }}
          aria-label="WebStudio - Главная страница"
        >
          WebStudio
        </a>
        
        {/* Навигация */}
        <nav style={{ display: 'flex', gap: '40px' }} role="navigation" aria-label="Основная навигация">
          {[
            { href: '/', label: 'Главная' },
            { href: '/about', label: 'О нас' },
            { href: '/projects', label: 'Проекты' },
            { href: '/faq', label: 'Вопросы' },
            { href: '/contacts', label: 'Контакты' }
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color var(--transition-speed) ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Кнопка переключения темы */}
        {mounted && (
          <button
            onClick={toggleTheme}
            style={{
              background: 'var(--bg-tertiary)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '20px',
              transition: 'all var(--transition-speed) ease'
            }}
            aria-label={`Переключить на ${theme === 'light' ? 'тёмную' : 'светлую'} тему`}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        )}
      </div>
    </header>
  )
}

/**
 * Основной компонент, объединяющий все клиентские части
 */
export default function ClientComponents() {
  return (
    <>
      <LoadingScreen />
      <Header />
    </>
  )
}