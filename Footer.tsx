const Footer = () => {
  return (
    <footer className="py-16 md:py-24 bg-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Message */}
          <div className="mb-10">
            <span className="text-5xl md:text-6xl inline-block animate-float">🌞</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-background mb-6">
            Wishing you happiness, health, and success
          </h2>
          
          <p className="text-lg md:text-xl font-body text-background/70 mb-8 leading-relaxed">
            May this Pongal bring warmth to your heart and prosperity to your home. 
            May every grain of rice symbolize countless blessings headed your way.
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-0.5 bg-primary/50" />
            <span className="text-2xl">🍚</span>
            <div className="w-12 h-0.5 bg-primary/50" />
          </div>

          {/* Tamil Greeting */}
          <p className="text-xl font-display text-primary mb-12">
            இனிய பொங்கல் நல்வாழ்த்துக்கள்
          </p>

          {/* Credits */}
          <div className="pt-8 border-t border-background/10">
            <p className="font-body text-background/50 text-sm">
              Crafted with ❤️ for Pongal
            </p>
            <p className="font-body text-background/30 text-xs mt-2">
              Celebrating the spirit of Tamil Nadu
            </p>
          </div>

          {/* Floating Elements */}
          <div className="flex justify-center gap-8 mt-10">
            <span className="text-2xl animate-float" style={{ animationDelay: '0s' }}>🌾</span>
            <span className="text-2xl animate-float" style={{ animationDelay: '0.3s' }}>🎋</span>
            <span className="text-2xl animate-float" style={{ animationDelay: '0.6s' }}>🌻</span>
            <span className="text-2xl animate-float" style={{ animationDelay: '0.9s' }}>🎍</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
