import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-card relative overflow-hidden"
    >
      {/* Kolam Pattern Background */}
      <div className="absolute inset-0 kolam-divider opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block text-sm font-body text-primary font-semibold tracking-widest uppercase mb-4">
              The Festival
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              About <span className="text-gradient-sun">Pongal</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          </div>

          {/* Content Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div
              className={`bg-background p-8 rounded-2xl shadow-card transition-all duration-700 delay-200 hover:shadow-warm hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌾</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Harvest Celebration
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Pongal is a four-day harvest festival celebrated in Tamil Nadu, 
                marking the end of winter solstice and the beginning of the sun's 
                six-month journey northward. It's a time of thanksgiving to the Sun God, 
                nature, and farm animals for a bountiful harvest.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className={`bg-background p-8 rounded-2xl shadow-card transition-all duration-700 delay-300 hover:shadow-warm hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🍚</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                The Sweet Ritual
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                The festival gets its name from the Tamil word "pongu" meaning 
                "to boil over." Freshly harvested rice is cooked with milk and 
                jaggery in a clay pot until it overflows — symbolizing abundance 
                and prosperity in the coming year.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className={`bg-background p-8 rounded-2xl shadow-card transition-all duration-700 delay-400 hover:shadow-warm hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Kolam Art
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Homes are adorned with beautiful kolam patterns — intricate geometric 
                designs drawn with rice flour at doorsteps. These designs welcome 
                guests and are believed to bring prosperity while feeding ants 
                and small creatures.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className={`bg-background p-8 rounded-2xl shadow-card transition-all duration-700 delay-500 hover:shadow-warm hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🐄</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Mattu Pongal
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                The third day honors cattle — the backbone of agriculture. 
                Cows and bulls are bathed, decorated with garlands, painted horns, 
                and bells. They're fed the special pongal dish as a gesture of 
                gratitude for their tireless service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
