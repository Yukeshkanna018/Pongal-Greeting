import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WishesSection from "@/components/WishesSection";
import CelebrationSection from "@/components/CelebrationSection";
import KolamDivider from "@/components/KolamDivider";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <KolamDivider />
      <AboutSection />
      <KolamDivider />
      <WishesSection />
      <KolamDivider />
      <CelebrationSection />
      <Footer />
    </main>
  );
};

export default Index;
