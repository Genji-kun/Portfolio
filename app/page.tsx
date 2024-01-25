import Profile from "@/components/ui/profile";
import Projects from "@/components/ui/projects";

const HomePage = () => {
  return (

    <div className="min-h-screen flex flex-col ">
      <div className="absolute inset-0 h-screen z-10 overflow-hidden">
        <svg aria-hidden="true" className="-z-10 absolute top-[70vh] -left-[0vh] scale-[1.5] right-0 w-1/3 h-1/3 blur-3xl" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-[#f7f6ff]" d="M32.9,-31.6C47,-27.3,65.8,-21.1,72,-9.3C78.1,2.5,71.5,20,60.3,30.4C49.1,40.9,33.2,44.3,18.8,47.9C4.4,51.5,-8.6,55.3,-25.3,55.4C-42,55.4,-62.4,51.6,-71.8,39.4C-81.2,27.3,-79.6,6.8,-75.6,-12.9C-71.6,-32.6,-65.3,-51.5,-52.3,-56C-39.4,-60.4,-19.7,-50.5,-5.1,-44.4C9.4,-38.3,18.8,-35.9,32.9,-31.6Z" transform="translate(100 100)" />
        </svg>
        <svg aria-hidden="true" className="-z-10 absolute -top-[20vh] -right-[5vh] w-1/4 h-1/4 scale-[2] blur-3xl" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-[#f0edff]" d="M39.1,-48.5C47.7,-39.4,49.6,-24.3,50.7,-10.1C51.8,4,52,17.1,48.1,31.5C44.2,45.9,36.2,61.7,23,69.1C9.8,76.6,-8.7,75.6,-20.1,66.5C-31.5,57.5,-35.8,40.3,-47.2,25.1C-58.6,9.8,-77.1,-3.5,-78.8,-17.3C-80.5,-31.2,-65.3,-45.5,-49.4,-53.3C-33.4,-61,-16.7,-62.3,-0.7,-61.4C15.3,-60.6,30.6,-57.6,39.1,-48.5Z" transform="translate(100 100)" />
        </svg>
      </div>
      <Profile />
      <Projects />
    </div>
  )
}
export default HomePage;
