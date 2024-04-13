import Experience from "@/components/Home/Experience/Experience";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import MyStory from "@/components/Home/MyStory/MyStory";
import Projects from "@/components/Home/Projects/Projects";
import Skills from "@/components/Home/Skills/Skills";

export default function Home() {
  return (
    <main style={{ padding: "70px 40px 0px 40px" }}>
      <HeroSection />
      <Projects />
      <Experience />
      <Skills />
      <MyStory />
    </main>
  );
}
