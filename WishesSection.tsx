import { useEffect, useRef, useState } from "react";

const wishes = [
  {
    icon: "☀️",
    title: "Prosperity",
    wish: "May the Sun God bless you with endless prosperity and success in all your endeavors.",
  },
  {
    icon: "💛",
    title: "Happiness",
    wish: "May your life be as sweet as the Pongal dish, filled with love, laughter, and joy.",
  },
  {
    icon: "🌱",
    title: "Growth",
    wish: "Like the harvest, may your dreams grow abundantly and bring you great fulfillment.",
  },
  {
    icon: "🤝",
    title: "Unity",
    wish: "May this festival strengthen bonds with family and bring harmony to your home.",
  },
  {
    icon: "✨",
    title: "Blessings",
    wish: "May divine blessings shower upon you and your loved ones throughout the year.",
  },
  {
    icon: "🏠",
    title: "Peace",
    wish: "May your home be filled with peace, warmth, and the spirit of togetherness.",
  },
];

const WishesSection = () => {
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
      className="py-24 md:py-32 bg-gradient-hero relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-sm font-body text-secondary font-semibold tracking-widest uppercase mb-4">
            Heartfelt Greetings
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Pongal <span className="text-gradient-sun">Wishes</span>
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Sending you warm wishes and blessings for a prosperous and joyful Pongal celebration.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Wishes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className={`group bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 transition-all duration-500 hover:shadow-warm hover:-translate-y-2 hover:border-primary/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{wish.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {wish.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {wish.wish}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Wish */}
        <div
          className={`mt-16 max-w-3xl mx-auto transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 md:p-12 rounded-3xl border border-primary/20 text-center">
            <div className="text-5xl mb-6">🙏</div>
            <blockquote className="text-xl md:text-2xl font-display font-medium text-foreground italic leading-relaxed">
              "May the overflowing sweetness of Pongal fill your life with endless 
              blessings, and may the warmth of the sun guide you towards a year 
              of remarkable achievements."
            </blockquote>
            <div className="mt-6 text-primary font-body font-semibold">
              — பொங்கலோ பொங்கல் —
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
