export interface Author{
    id:string;
    name:string;
    photoUrl:string;
    biography:string;
    //description:string;
    birthDate:string;
    deathDate?:null|string|undefined;
    tags:string;
    tagList:string[];
    social:Social;
}


export interface Social{
    id:number;
    email?:string|null;
    website?:string|null;
}