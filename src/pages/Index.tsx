import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { useCanonical } from "@/hooks/useCanonical";

const ProblemSolution = lazy(() => import("@/components/ProblemSolution"));
const Process = lazy(() => import("@/components/Process"));
const WhyUs = lazy(() => import("@/components/WhyUs"));
const Clients = lazy(() => import("@/components/Clients"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingCTA = lazy(() => import("@/components/FloatingCTA"));

const Index = () => {
  useCanonical("/");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Suspense fallback={null}>
          <ProblemSolution />
          <Process />
          <WhyUs />
          <Clients />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <FloatingCTA />
      </Suspense>
    </div>
  );
};

export default Index;
