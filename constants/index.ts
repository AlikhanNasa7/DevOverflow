
declare interface sideBarLink {
    imgUrl: string,
    label: string,
    route: string
}

export const sideBarLinks : Array<sideBarLink> = [
    {
        imgUrl: "/icons/home.svg",
        label: "Home",
        route: "/" 
    },
    {
        imgUrl: "/icons/users.svg",
        label: "Community",
        route: "/community" 
    },
    {
        imgUrl: "/icons/star.svg",
        label: "Collection",
        route: "/collection" 
    },
    {
        imgUrl: "/icons/suitcase.svg",
        label: "Find Jobs",
        route: "/jobs" 
    },
    {
        imgUrl: "/icons/tag.svg",
        label: "Tags",
        route: "/tags" 
    },
    {
        imgUrl: "/icons/user.svg",
        label: "Profile",
        route: "/profile" 
    },
    {
        imgUrl: "/icons/question.svg",
        label: "Ask a question",
        route: "/ask-question" 
    }
]