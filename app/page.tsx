import AboutSection from "@/components/ui/about-section";
import ProfileSection from "@/components/ui/profile-section";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ProfileSection />
      <AboutSection />
    </div>
  )
}
export default HomePage;
