import {
    Home,
    Package,
    Star,
    Clock,
    User,
    Settings
} from "lucide-vue-next";


export const mainMenu = [

    {
        name: "Home",
        path: "/",
        icon: Home
    },

    {
        name: "Applications",
        path: "/applications",
        icon: Package
    },

    {
        name: "Favorites",
        path: "/favorites",
        icon: Star
    },

    {
        name: "Recent",
        path: "/recent",
        icon: Clock
    }

];


export const bottomMenu = [

    {
        name: "Profile",
        path: "/profile",
        icon: User
    },

    {
        name: "Settings",
        path: "/settings",
        icon: Settings
    }

];