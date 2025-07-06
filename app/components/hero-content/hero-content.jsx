
/**
 * HeroContent компонент - основной контент hero секции
 * Содержит заголовок, подзаголовок и call-to-action кнопки
 * Использует семантические теги для лучшего SEO
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
      
      {/* Call-to-action кнопки */}
      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <a 
          href="/contacts" 
          style={{
            background: 'var(--brand-primary)',
            color: 'white',
            padding: '16px 32px',
            border: 'none',
            borderRadius: 'var(--border-radius)',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all var(--transition-speed) ease',
            textDecoration: 'none',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent-hover)'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = 'var(--shadow-md)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--brand-primary)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Обсудить проект
        </a>
        <a 
          href="/projects" 
          style={{
            background: 'transparent',
            color: 'var(--text-primary)',
            padding: '16px 32px',
            border: '2px solid var(--border-color)',
            borderRadius: 'var(--border-radius)',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all var(--transition-speed) ease',
            textDecoration: 'none',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--brand-primary)'
            e.currentTarget.style.color = 'var(--brand-primary)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-color)'
            e.currentTarget.style.color = 'var(--text-primary)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Наши работы
        </a>
      </div>
    </div>
  )
}

export default HeroContent;