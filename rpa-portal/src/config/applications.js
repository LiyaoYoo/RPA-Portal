import {
    Database,
    Settings,
    BarChart3,
    ClipboardCheck
} from "lucide-vue-next";


export const applications = [

    {
        // =====================
        // Basic Information
        // =====================

        id: "DT-MRA",

        name: "DT MRA",

        department: "DT",

        description:
            "Analyze MRA data and generate summary report.",

        category: "Data Analytics",
        // =====================
        // Ownership
        // =====================

        owner: "RPA Team",

        supportEmail:
            "rpa.team@company.com",


        // =====================
        // Version Management
        // =====================

        version: "2.0",

        lastUpdated:
            "2026-07-31",


        // =====================
        // UI Configuration
        // =====================

        icon: Database,

        route: "/dtmra",


        // =====================
        // Status
        // =====================

        status: "Active",


        // =====================
        // User Personalization
        // =====================

        favorite: false,


        // =====================
        // Permission
        //
        // Future SSO
        //
        // Example:
        //
        // DT user
        // only see DT apps
        //
        // =====================

        accessGroups: [
            "DT",
            "RPA"
        ]
    },


    {
        id: "NB-MRA",

        name: "NB MRA",

        department: "NB",
        category: "Data Analytics",
        description:
            "Analyze NB MRA data and generate summary report.",


        owner: "RPA Team",

        supportEmail:
            "rpa.team@company.com",


        version: "1.0",

        lastUpdated:
            "2026-07-20",


        icon: Database,

        route: "/nbmra",

        status: "Active",

        favorite: false,


        accessGroups: [
            "NB",
            "RPA"
        ]
    },
    {
        id: "ME-Optimization",

        name: "ME Optimization Tool",

        department: "ME",
        category: "Data Analytics",
        description:
            "Analyze NB MRA data and generate summary report.",


        owner: "RPA Team",

        supportEmail:
            "rpa.team@company.com",


        version: "1.0",

        lastUpdated:
            "2026-07-20",


        icon: Database,

        route: "/optimization",

        status: "development ",

        favorite: false,


        accessGroups: [
            "NB",
            "RPA"
        ]
    },
    {
        id: "ME-Approval-Flow-Automation",

        name: "ME Approval Flow Automation",

        department: "ME",
        category: "Data Analytics",
        description:
            "Analyze NB MRA data and generate summary report.",


        owner: "RPA Team",

        supportEmail:
            "rpa.team@company.com",


        version: "1.0",

        lastUpdated:
            "2026-07-20",


        icon: ClipboardCheck,

        route: "/optimization",

        status: "development ",

        favorite: false,


        accessGroups: [
            "NB",
            "RPA"
        ]
    }

];