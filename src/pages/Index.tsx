import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ProblemSolution from "@/components/ProblemSolution";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Clients from "@/components/Clients";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { useSeoMeta } from "@/hooks/useSeoMeta";

const Index = () => {
  useSeoMeta({
    title: "Haft Park — Profesjonalny Haft Komputerowy | Myszków",
    description: "Profesjonalny haft komputerowy na odzieży firmowej i reklamowej. 8 lat doświadczenia, 2000+ realizacji. Haft logo od 1 sztuki, nici Madeira i Ariadna. Myszków i cała Polska.",
    path: "/",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <ProblemSolution />
        <Process />
        <WhyUs />
        <Clients />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
