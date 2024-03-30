import AboutSection from "@/components/AboutSection";
import Achievement from "@/components/Achievement";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center align-middle pt-20 w-full">
      <LandingPage />
      <AboutSection />
      <Achievement />
    </main>
  );
}
