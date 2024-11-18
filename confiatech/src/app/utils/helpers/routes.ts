import { Iroute } from "../types/Iroutes.interface"

export const routes:Iroute[]=[
    {
        url:"/",
        type:'text',
        label:'Home',
    },   {
        url:"/about",
        type:'text',
        label:'About',
    }, {
        url:"/services",
        type:'text',
        label:'Services',
    },{
        url:"/",
        type:'text',
        label:'Case Studies',
    },{
        url:"/",
        type:'text',
        label:'Blogs',
    },
    {
        url:"/",
        type:'button',
        label:'GET A FREE QUOTE',
        fragment:'contact'
    },

]