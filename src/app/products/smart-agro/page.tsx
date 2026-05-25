import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmartAgroHero from "@/components/smart-agro/SmartAgroHero";
import SmartAgroStats from "@/components/smart-agro/SmartAgroStats";
import SmartAgroHowItWorks from "@/components/smart-agro/SmartAgroHowItWorks";
import SmartAgroAudience from "@/components/smart-agro/SmartAgroAudience";
import SmartAgroForm from "@/components/smart-agro/SmartAgroForm";

export default function SmartAgroPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-500 selection:text-white">
        <SmartAgroHero />
        <SmartAgroStats />
        <SmartAgroHowItWorks />
        <SmartAgroAudience />
        <SmartAgroForm />
      </main>
      <Footer />
    </>
  );
}
