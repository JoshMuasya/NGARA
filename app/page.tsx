import Achievement from "@/components/Achievement";
import AchievementsSection from "@/components/AchievementSection";
import LandingPage from "@/components/LandingPage";
import Partners from "@/components/Partners";
import Publications from "@/components/Publications";
import Role from "@/components/Role";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center align-middle pt-20 w-full">
      <LandingPage />
      <Publications />
      <Achievement />
      <Role />
      <AchievementsSection />
      <Partners />
    </main>
  );
}
