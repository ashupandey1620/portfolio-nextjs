import AboutSection from "@/components/AboutSection";
import BottomNavBar from "@/components/BottomNavBar";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <NavBar />
      <div>
        <div className="container mx-auto mt-5 py-4 px-5 sm:px-12">
          <HeroSection/>
          <AboutSection/>
          <ProjectSection/>
        </div>

        <section
            className="bg-[url('/projects/back.png')] bg-cover bg-center"
        >
          <div className="container mx-auto mt-5 py-4 px-5 sm:px-12">
            {/* <EmailSection/> */}
            <Footer/>
          </div>
        </section>
      </div>
      <BottomNavBar/>
    </main>
  )
}
