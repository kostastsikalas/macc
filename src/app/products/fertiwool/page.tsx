import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FertiwoolHero from "@/components/fertiwool/FertiwoolHero";
import FertiwoolJourney from "@/components/fertiwool/FertiwoolJourney";
import FertiwoolBenefits from "@/components/fertiwool/FertiwoolBenefits";
import FertiwoolSpecs from "@/components/fertiwool/FertiwoolSpecs";

export default function FertiwoolPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fbfaf8] font-sans selection:bg-[#4a5d23] selection:text-white pt-24">
        <FertiwoolHero />
        <FertiwoolJourney />
        <FertiwoolBenefits />
        <FertiwoolSpecs />
      </main>
      <Footer />
    </>
  );
}
