import Profile from "@/components/ui/profile";
import Projects from "@/components/ui/projects";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div aria-hidden="true" className='-z-10 blur-3xl absolute inset-x-0 -left-32 custom-top w-1/3 h-8 rounded-2xl bg-gradient-to-tr from-pink-500 to-blue-500 rotate-45'></div>
      <div aria-hidden="true" className='-z-10 blur-3xl absolute inset-x-0 -left-32 top-[80vh] w-1/3 h-8 rounded-2xl bg-gradient-to-tr from-pink-500 to-blue-500 rotate-45'></div>
      <div aria-hidden="true" className='-z-10 blur-3xl absolute right-0  w-1/3 h-8 rounded-2xl bg-gradient-to-tr from-pink-500 to-blue-500 rotate-45'></div>
      <div aria-hidden="true" className='-z-10 blur-3xl absolute right-0 top-32 w-1/3 h-8 rounded-2xl bg-gradient-to-tr from-pink-500 to-blue-500 rotate-45'></div>
      <div aria-hidden="true" className='-z-10 blur-3xl absolute top-[50vh] -translate-x-1/2 -translate-y-1/2 left-[50vw] w-1/4 h-8 rounded-2xl bg-gradient-to-tr from-pink-500 to-blue-500 rotate-45'></div>
      <Profile />
      <Projects />
    </div>
  )
}
export default HomePage;
