import { useEffect, useRef, useState } from "react";

const celebrations = [
  {
    title: "Bhogi Pongal",
    day: "Day 1",
    description: "Discarding old belongings and welcoming new beginnings with a bonfire.",
    emoji: "🔥",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Thai Pongal",
    day: "Day 2",
    description: "The main day — cooking the sacred Pongal dish as offering to the Sun God.",
    emoji: "🍯",
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    title: "Mattu Pongal",
    day: "Day 3",
    description: "Honoring and celebrating the cattle for their service in agriculture.",
    emoji: "🐂",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Kaanum Pongal",
    day: "Day 4",
    description: "Family gatherings, outings, and strengthening bonds with loved ones.",
    emoji: "👨‍👩‍👧‍👦",
    color: "from-blue-500/20 to-cyan-500/20",
  },
];

const CelebrationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-card relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 kolam-divider opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-sm font-body text-accent font-semibold tracking-widest uppercase mb-4">
            Four Days of Joy
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            The <span className="text-gradient-sun">Celebration</span>
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Pongal spans four beautiful days, each with its unique rituals and significance.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

            {/* Celebration Cards */}
            {celebrations.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 last:mb-0 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 shadow-warm" />

                {/* Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[45%] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl border border-border/30 backdrop-blur-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{item.emoji}</span>
                      <div>
                        <span className="text-xs font-body font-semibold text-primary uppercase tracking-wider">
                          {item.day}
                        </span>
                        <h3 className="text-xl font-display font-bold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Illustration */}
        <div
          className={`mt-20 flex justify-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative">
            {/* Kolam-inspired circular pattern */}
            <svg
              viewBox="0 0 200 200"
              className="w-48 h-48 md:w-64 md:h-64 animate-rays"
              style={{ animationDuration: "60s" }}
            >
              <defs>
                <linearGradient id="kolamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Outer petals */}
              {[...Array(8)].map((_, i) => (
                <ellipse
                  key={i}
                  cx="100"
                  cy="40"
                  rx="15"
                  ry="35"
                  fill="url(#kolamGradient)"
                  transform={`rotate(${i * 45} 100 100)`}
                />
              ))}
              {/* Inner petals */}
              {[...Array(8)].map((_, i) => (
                <ellipse
                  key={`inner-${i}`}
                  cx="100"
                  cy="60"
                  rx="10"
                  ry="25"
                  fill="hsl(var(--primary))"
                  fillOpacity="0.2"
                  transform={`rotate(${i * 45 + 22.5} 100 100)`}
                />
              ))}
              {/* Center */}
              <circle cx="100" cy="100" r="25" fill="hsl(var(--primary))" fillOpacity="0.2" />
              <circle cx="100" cy="100" r="15" fill="hsl(var(--secondary))" fillOpacity="0.3" />
              <circle cx="100" cy="100" r="8" className="fill-primary" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrationSection;
