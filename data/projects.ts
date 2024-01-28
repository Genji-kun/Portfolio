import { Project } from "@/interfaces/Project";
import openUnited from "@/public/OpenUnited.png"

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
        images: [{ url: openUnited }],
        tags: [{ name: "React" }, { name: "TailwindCSS" }, { name: "Flowbite" }, { name: "Axios" }, { name: "SpringMVC" }, { name: "Firebase" }, { name: "SASS" }],
        link: "https://github.com/NganBao0206/Oupia"
    }, {
        name: "Oupia - The Second Version",
        description: ["The updated of the previous rent house platform which users can search by many methods such as searching by keywords, filter and map using Goongs Map.",
            "By using TypeScript can slaced project and fixed bug.",
            "Update realtime chat that users can attach images and rent post if the user is landlord role."],
        images: [{ url: openUnited }],
        tags: [{ name: "React" }, { name: "TypeScript" }, { name: "TailwindCSS" }, { name: "Flowbite" }, { name: "Axios" }, { name: "SpringMVC" }, { name: "Firebase" }, { name: "SASS" }],
        link: "https://github.com/NganBao0206/Oupia"
    }
];