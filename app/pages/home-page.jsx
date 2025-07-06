
/**
 * Главная страница приложения
 * Экспортируется как default для использования в Next.js routing
 * Содержит все основные секции главной страницы
 */
function HomePage() {
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
      <div style={{
        maxWidth: 'var(--container-max-width)',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <HeroSection />
      </div>
      
      {/* Дополнительная информация о студии */}
      <StudioInfo />
    </>
  )
}

export default HomePage;