import Achievement from "@/components/Achievement";
import Blogs from "@/components/Blogs";
import LandingPage from "@/components/LandingPage";
import Publications from "@/components/Publications";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center align-middle pt-20 w-full">
      <LandingPage />
      <Publications />
      <Blogs />
      <Achievement />
    </main>
  );
}
