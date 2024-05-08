export interface Image {
    url: string;
    alt: string;
}

export interface Project {
    name: string;
    imageWeb:{
        url: string;
        alt: string;
    };
    desc: string;
    linkRepositorio:{
        url: string;
    };
    linkSite:{
        url: string;
    };
    technologies: string[];
}