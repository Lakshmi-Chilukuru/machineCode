import { createReducer, on } from "@ngrx/store";
import * as ScoreActions from './score.actions'
import { state } from "@angular/animations";
export interface State{
    home:number,
    away:number
} 
export const intialScore: State ={
    home:0,
    away:0
} 
export const scoreReducer = createReducer(
    intialScore,
    on(ScoreActions.homeScore,(state)=>({
        ...state,
        home:state.home+1
    })),
     on(ScoreActions.awayScore,(state)=>({
        ...state,
        away:state.away+1
    })),
     on(ScoreActions.resetScore,(state)=>({
        ...state,
        home:0,
        away:0
    })),
     on(ScoreActions.setScore,(state,{game})=>({
        ...state,
        home: game.home,
        away:game.away
    })),
)
// export function reducer(state = initialState,action: Scoreboard.ActionsUnion): State {
//   switch (action.type) {
//     case Scoreboard.ActionTypes.IncrementHome: {
//       return {
//         ...state,
//         home: state.home + 1,
//       };
//     }

//     case Scoreboard.ActionTypes.IncrementAway: {
//       return {
//         ...state,
//         away: state.away + 1,
//       };
//     }

//     case Scoreboard.ActionTypes.Reset: {
//       return action.payload; // typed to { home: number, away: number }
//     }

//     default: {
//       return state;
//     }
//   }
// }

// @Injectable()
// export class UserEffects {

//   addUser$ = createEffect(() =>   // ✅ REQUIRED
//     this.actions$.pipe(
//       ofType(addUser),
//       switchMap((action) =>
//         this.userService.createUser(action.user).pipe(
//           map((response) => addUserSuccess({ user: response })),
//           catchError((error) => of(addUserFailure({ error })))
//         )
//       )
//     )
//   );

//   constructor(
//     private actions$: Actions,
//     private userService: UserService
//   ) {}
// }