const KolamDivider = () => {
  return (
    <div className="py-8 bg-background overflow-hidden">
      <div className="flex items-center justify-center gap-4">
        {/* Left Pattern */}
        <div className="hidden sm:flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={`left-${i}`}
              className="w-2 h-2 rounded-full bg-primary/30"
              style={{ transform: `scale(${1 - i * 0.15})` }}
            />
          ))}
        </div>

        {/* Central Kolam Design */}
        <svg
          viewBox="0 0 120 40"
          className="w-32 h-12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Horizontal lines */}
          <path
            d="M0 20 Q30 10 60 20 Q90 30 120 20"
            stroke="url(#dividerGradient)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0 20 Q30 30 60 20 Q90 10 120 20"
            stroke="url(#dividerGradient)"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Center dots */}
          <circle cx="60" cy="20" r="4" className="fill-primary" />
          <circle cx="40" cy="20" r="2" className="fill-secondary" />
          <circle cx="80" cy="20" r="2" className="fill-secondary" />
          <circle cx="20" cy="20" r="1.5" className="fill-primary/50" />
          <circle cx="100" cy="20" r="1.5" className="fill-primary/50" />
        </svg>

        {/* Right Pattern */}
        <div className="hidden sm:flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={`right-${i}`}
              className="w-2 h-2 rounded-full bg-primary/30"
              style={{ transform: `scale(${0.4 + i * 0.15})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KolamDivider;
