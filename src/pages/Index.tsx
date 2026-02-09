import { SiteNav } from "@/components/SiteNav";
import { HeroSection } from "@/components/HeroSection";
import { ChallengeList } from "@/components/ChallengeList";
import { MetricsCharts } from "@/components/MetricsCharts";
import { SubmitChallengeForm } from "@/components/SubmitChallengeForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="pt-14">
        <HeroSection />
        <ChallengeList />
        <MetricsCharts />
        <SubmitChallengeForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
