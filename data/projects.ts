import { Project } from "@/interfaces/Project";
import openUnited from "@/public/OpenUnited.png";
import law1 from "@/public/law_1.png";
import law2 from "@/public/law_2.png";
import oupia1 from "@/public/oupiaFirst_1.png";
import oupia2 from "@/public/oupiaFirst_2.png";
import oupiaCur1 from "@/public/oupia_cur_1.png";
import oupiaCur2 from "@/public/oupia_cur_2.png";
import portfolio1 from "@/public/portfolio_1.png";
import portfolio2 from "@/public/portfolio_2.png";

export const myProjects: Project[] = [
    {
        name: "Open United",
        description: ["A booking hotel room website is the platform that allows users to rent hotel room by difference room types.",
            "When user complete booking room, the system will send automatic email which notices when users can receive room. ",
            "The website also has employee role which can export the ticket when customeres arrives the hotel."],
        images: [{ url: openUnited }],
        tags: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "Bootstrap" }, { name: "Python Flask" }, { name: "MySQL" }],
        link: "https://github.com/Genji-kun/OpenUnited"
    }, {
        name: "Oupia - The First Version",
        description: ["The platform allows users find the place to rent or upload the post."],
        images: [{ url: oupia1 }, { url: oupia2 }],
        tags: [{ name: "React" }, { name: "TailwindCSS" }, { name: "Flowbite" }, { name: "Axios" }, { name: "SpringMVC" }, { name: "Firebase" }, { name: "SASS" }],
        link: "https://github.com/NganBao0206/Oupia"
    }, {
        name: "Codification Law InfiniThree",
        description: ["The Viet Nam's law search documents website can help users to find the rules by topics.",
            "Trained bot chat can answer the basic question with large data."],
        images: [{ url: law1 }, { url: law2 }],
        tags: [{ name: "React" }, { name: "JavaScript" }, { name: "TailwindCSS" }, { name: "DaisyUI" }, { name: "Netlify" }, { name: "Axios" }, { name: "Python Flask" }],
        link: "https://github.com/NganBao0206/codification_law_infiniThree",
        liveDemo: "https://infinithree.netlify.app/"
    }, {
        name: "Oupia - The Current Version",
        description: ["The updated of the previous rent house platform which users can search by many methods such as searching by keywords, filter and map using Goongs Map.",
            "By using TypeScript can slacable project and fixed bug.",
            "Update realtime chat that users can attach images and rent post if the user is landlord role."],
        images: [{ url: oupiaCur1 }, { url: oupiaCur2 }],
        tags: [{ name: "React" }, { name: "NextJS" }, { name: "TypeScript" }, { name: "TailwindCSS" }, { name: "Shadcn" }, { name: "Framer Motion" }, { name: "Axios" }, { name: "Goong Maps" }, { name: "Vercel" }, { name: "Spring Boot" }, { name: "Firebase" }, { name: "MySQL" }],
        link: "https://github.com/NganBao0206/Oupia",
        liveDemo: "https://oupia-nextjs.vercel.app/"
    }, {
        name: "Personal Portfolio",
        description: ["This is my personal portfolio website for introducing about myself, my work experiences. ",
            "Show up my completed projects and on-doing projects."],
        images: [{ url: portfolio2 }, { url: portfolio1 }],
        tags: [{ name: "React" }, { name: "NextJS" }, { name: "TypeScript" }, { name: "TailwindCSS" }, { name: "Shadcn" }, { name: "Framer Motion" }],
        link: "https://github.com/Genji-kun/Portfolio",
        liveDemo: "https://vophuphat.vercel.app/"

    }
];