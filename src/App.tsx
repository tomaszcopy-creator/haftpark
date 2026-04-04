import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const Regulamin = lazy(() => import("./pages/Regulamin"));
const PolitykaPrywatnosci = lazy(() => import("./pages/PolitykaPrywatnosci"));
const Sklep = lazy(() => import("./pages/Sklep"));
const Realizacje = lazy(() => import("./pages/Realizacje"));
const HaftNaOdziezy = lazy(() => import("./pages/HaftNaOdziezy"));
const Haft3D = lazy(() => import("./pages/Haft3D"));
const HaftNaCzapkach = lazy(() => import("./pages/HaftNaCzapkach"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Unsubscribe = lazy(() => import("./pages/Unsubscribe"));
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/regulamin" element={<Regulamin />} />
            <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
            <Route path="/sklep" element={<Sklep />} />
            <Route path="/realizacje" element={<Realizacje />} />
            <Route path="/haft-na-odziezy" element={<HaftNaOdziezy />} />
            <Route path="/haft-3d" element={<Haft3D />} />
            <Route path="/haft-na-czapkach" element={<HaftNaCzapkach />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
