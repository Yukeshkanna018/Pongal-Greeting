import { useEffect, useState } from "react";
import pongalPotImage from "@/assets/pongal-pot-clean.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center justify-center">
      {/* Animated Sun Rays Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] animate-rays opacity-20">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-[400px] bg-gradient-to-b from-primary/60 to-transparent origin-bottom"
              style={{
                transform: `rotate(${i * 30}deg) translateX(-50%)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block text-lg md:text-xl font-body text-secondary font-medium mb-4 tracking-wider">
              ✨ A Festival of Gratitude ✨
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight text-primary drop-shadow-[0_0_25px_hsl(38,92%,50%,0.5)]">
              Happy Pongal <span className="inline-block animate-pulse-glow">🌞</span>
            </h1>
            <p className="text-xl md:text-2xl font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Celebrating gratitude, harvest, and prosperity
            </p>
          </div>

          {/* Animated Pongal Pot Image */}
          <div
            className={`relative mt-12 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative inline-block animate-float-slow">
              {/* Soft radial glow that blends with background */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-primary/10 to-transparent blur-2xl scale-150" />
              <div className="absolute inset-0 bg-gradient-radial from-secondary/20 via-transparent to-transparent blur-3xl scale-125" />
              
              {/* Pongal Pot Image with blend mode */}
              <img
                src={pongalPotImage}
                alt="Traditional Pongal pot with overflowing rice, sugarcane and festive decorations"
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-contain mix-blend-luminosity opacity-90"
                style={{
                  filter: 'drop-shadow(0 0 40px hsl(38, 92%, 50%, 0.3)) drop-shadow(0 0 80px hsl(38, 92%, 50%, 0.15))',
                  maskImage: 'radial-gradient(ellipse 80% 90% at 50% 50%, black 40%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 80% 90% at 50% 50%, black 40%, transparent 100%)'
                }}
              />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`mt-16 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href="#about"
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm font-body mb-2">Discover More</span>
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
