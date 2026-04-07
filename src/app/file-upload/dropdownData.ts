export interface State{
    keyCode:string,
    keyValue:string
}
export interface District{
    keyCode:string,
    keyValue:string,
    s_key:string
}


export const states:State[]=[
    {
        keyCode:"Andhra Pradesh",
        keyValue:"AP"
    },
    {
        keyCode:"Telangana",
        keyValue:"TG"
    },
    {
        keyCode:"Karnataka",
        keyValue:"KN"
    },
    {
        keyCode:"Tamil Nadu",
        keyValue:"TN"
    },
    {
        keyCode:"Kerala",
        keyValue:"KL"
    }
]
export const districts:District[]=[
    {
        keyCode:'Kurnool',
        keyValue :'KNL',
        s_key:'AP'
    },
    {
        keyCode:'Ananthapur',
        keyValue :'ANTP',
        s_key:'AP'
    },
    {
        keyCode:'Kadapa',
        keyValue :'CUD',
        s_key:'AP'
    },
    {
        keyCode:'Chitoor',
        keyValue :'CHR',
        s_key:'AP'
    },
    {
        keyCode:'Gadwal',
        keyValue :'GWL',
        s_key:'TG'
    },
    {
        keyCode:'Jadcherla',
        keyValue :'JDL',
        s_key:'TG'
    },
    {
        keyCode:'Hyderabad',
        keyValue :'HYD',
        s_key:'TG'
    },
    {
        keyCode:'Bangalore',
        keyValue :'BNG',
        s_key:'KN'
    },
    {
        keyCode:'Mysore',
        keyValue :'MY',
        s_key:'KN'
    },
    {
        keyCode:'Raichur',
        keyValue :'RC',
        s_key:'KN'
    },
    {
        keyCode:'Chennai',
        keyValue :'CHE',
        s_key:'TN'
    },
    {
        keyCode:'Katpadi',
        keyValue :'KP',
        s_key:'TN'
    },
    {
        keyCode:'Kanyakumari',
        keyValue :'KNK',
        s_key:'TN'
    },
    {
        keyCode:'Tiruvananthapuram',
        keyValue :'TVM',
        s_key:'KL'
    },
    {
        keyCode:'Kochi',
        keyValue :'kch',
        s_key:'KL'
    },
    {
        keyCode:'Alapuzha',
        keyValue :'Azp',
        s_key:'KL'
    }
]