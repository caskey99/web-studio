import HeroImage from "../hero-image-client/hero-image-client";
import HeroContent from "../hero-content/hero-content";

/**
 * HeroSection компонент - главная секция страницы
 * Комбинирует контент и изображение в адаптивной layout
 * На десктопе: контент слева, изображение справа
 * На мобильных: изображение сверху, контент снизу
 */
function HeroSection() {
  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '60px',
      minHeight: '600px'
    }} aria-label="Главная секция">
      <HeroContent />
      <HeroImage />
    </section>
  )
}
export default HeroSection;