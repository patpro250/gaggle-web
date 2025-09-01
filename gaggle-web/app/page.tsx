import BrandIllustrationCard from "@/components/brand";
import DashboardDemo from "@/components/dashboardDemo";
import FeaturesSection from "@/components/features";
import Footer from "@/components/footer";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/plans";
import HeroBanner from "@/components/ui/burner";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <FeaturesSection />
      <PricingSection />
      <BrandIllustrationCard />
      <HowItWorks />
      <DashboardDemo />
      <Footer/>
    </div>
  );
}
