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
        url:"/portfolio",
        type:'text',
        label:'Portfolio',
    },
    // {
    //     url:"/blogs",
    //     type:'text',
    //     label:'Blogs',
    // },
    {
        url:"/contact",
        type:'button',
        label:'GET A FREE QUOTE',
      
    },

]