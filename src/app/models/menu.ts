export interface Menu {
    name:string;
    path:string;
    isClick:boolean;
}

export let MENU_LIST:Menu[]=[
    {
        name:'Home',
        path:'',
        isClick: false
    },
    {
        name:'Gold',
        path:'gold',
        isClick: false
    },
    {
        name:'Sliver',
        path:'sliver',
        isClick: false
    },
    {
        name:'Platinum',
        path:'platimun',
        isClick: false
    },
    {
        name:'Coins',
        path:'coin',
        isClick: false
    },
    {
        name:'Diamond',
        path:'diamond',
        isClick: false
    },
    {
        name:'Gifts',
        path:'gifts',
        isClick: false
    },
    {
        name:'Contact',
        path:'contact',
        isClick: false
    },
    {
        name:'Reviews',
        path:'review',
        isClick: false
    }
   
]