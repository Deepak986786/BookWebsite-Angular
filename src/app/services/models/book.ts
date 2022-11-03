import { Author } from "./author";
import { Review } from "./review";


export interface Book{
    _id?:string;

    isbn?:string;
    id:string;
    title:string;
    author?:Author;
    authorId:string;
    pages?:number|string;
    rating:number|string;
    description:string;
    tags:string;
    tagList?:string[]
    cover?:string;
    coverUrl?:string;
    price:number;
    votes?:string|number;
    series?:string;
    seriesIndex?:string|number;
    reviews?:Review[];
    

}