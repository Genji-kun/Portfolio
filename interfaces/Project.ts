import { Image } from "./Image";
import { Tag } from "./Tag";

export interface Project {
    name: string,
    description: string,
    images: Image[]
    tags: Tag[]
}