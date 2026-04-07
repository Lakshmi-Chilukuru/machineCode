export interface Count{
    nCount:number
}
export interface User{
    userId:string,
    name:string,
    email:string,
    address:Object,
    phone:string,
    website:string
}

type RequiredUser = Partial<User>

type Mandatory = Required<User>
type OmitD = Omit<User,"userId">
type readOnlyT = Readonly<User>


//  "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",