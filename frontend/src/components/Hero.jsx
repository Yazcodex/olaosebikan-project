import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-[680px] w-full items-center justify-center overflow-hidden pt-16 sm:min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/bread5.jpg)',
          filter: 'brightness(0.6)'
        }}
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white animate-fade-in sm:px-6">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-orange-200">
          Fresh Every Day
        </p>
        <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl md:text-7xl animate-slide-up">
          Freshly Baked Bread, Made with Hygiene.
        </h1>
        
        <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-gray-100 sm:text-xl md:text-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Welcome to OLAOSEBIKAN Breads, where every loaf is baked with premium ingredients, exceptional care, and a passion for quality. Experience freshness in every bite.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button
            type="button"
            onClick={() => scrollToSection('products')}
            className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-3 font-bold text-white shadow-lg shadow-orange-950/25 transition hover:bg-orange-600 hover:scale-[1.02]"
          >
            See Our Bread
            <ArrowRight size={20} />
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="rounded-lg border-2 border-white px-8 py-3 font-bold text-white transition hover:bg-white hover:text-orange-500"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
