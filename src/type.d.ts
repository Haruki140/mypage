type Link = {
    icon: string,
    uri: string,
    alt: number,
}

declare module 'type' {
    interface Elements {
        homeElement: HTMLElement | null,
        aboutElement: HTMLElement | null,
        workElement: HTMLElement | null,
        skillElement: HTMLElement | null,
        contactElement: HTMLElement | null,
    }
    interface pairElements {
        title: string,
        idx: HTMLElement | null,
    }
    interface Photo {
        uri: string,
        alt: number,
    }    
    interface WorkData {
        title: string,
        date: string,
        detail: string,
        skills: string,
        links: Link[],
        photos: Photo[],
    }
}

declare module 'swiper/css';