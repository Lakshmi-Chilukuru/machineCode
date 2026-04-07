import { Injectable,inject } from "@angular/core";
import { Resolve, Router,ResolveFn  } from "@angular/router";
import { catchError, EMPTY, Observable } from "rxjs";
import { ASyncService } from "./async/service/a-sync.service";
import { HttpErrorResponse } from "@angular/common/http";

// @Injectable();

// export class UserResolver implements Resolve<any>{
//     constructor(public router:Router){}
//     public mainS = inject(ASyncService)
//     resolve():Observable<any>{
//         return this.mainS.getname().pipe(
//             catchError(()=>{
//                 this.router.navigate(['/movieTicket']);
//                 throw Error
//             })
//         );
//     }
// }
export const UserResolver : ResolveFn<any> = ()=>{
    const router = inject(Router)
    const serv = inject(ASyncService)
    return serv.getname().pipe(
        catchError((error:HttpErrorResponse)=>{
            router.navigate(['/movies'])
            console.log("No data in resolver",error)
            throw error
        })
    )
};