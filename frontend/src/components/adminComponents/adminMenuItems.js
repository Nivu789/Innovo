export const adminMenuItems = [
    {
        heading:"UI",
        icon:"bi bi-menu-app",
        children:[
            {
                heading:"Home Page",
                icon:"bi bi-house-fill",
                url:"/admin/dashboard/edit-ui/home"
            },
            // {
            //     heading:"Contact Page",
            //     icon:"bi bi-person-lines-fill",
            //     url:"#"
            // }
        ]
    },
    {
        heading:"Contacts",
        url:"/admin/dashboard/contacts",
        icon:"bi bi-person-lines-fill"
    },
    {
        heading:"News",
        url:"/admin/dashboard/news",
        icon:"bi bi-newspaper"
    }
]