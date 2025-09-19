"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal logoSrc="/images/logo.svg" buttonText="Get Started" className="bg-background text-white sticky" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to BrainRot" subtitle="Unleash the power of crypto gurus!" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout title="Join the Movement" descriptions={["Be part of a vibrant community of crypto enthusiasts.", "Engage with cutting-edge cryptocurrency developments."]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy Crypto" steps={[
          {title: "Step 1", description: "Create an account.", image: "/images/placeholder1.avif", position: "left", isCenter: false},
          {title: "Step 2", description: "Verify your identity.", image: "/images/placeholder2.avif", position: "center", isCenter: true},
          {title: "Step 3", description: "Start trading today!", image: "/images/placeholder3.avif", position: "right", isCenter: false},
        ]} />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics title="Tokenomics" description="Understand our token metrics and allocations." kpiItems={[{ value: "100M", description: "Total Supply" }, { value: "50M", description: "Circulating Supply" }, { value: "30M", description: "Burned Tokens" }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoText="BrainRot" items={[{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }]} className="bg-background text-white" />
      </div>
    </SiteThemeProvider>
  );
}
