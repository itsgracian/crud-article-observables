import { ADD } from './types';
import { RootEpic } from '../root.epic';
import { isOfType } from 'typesafe-actions';
import { filter, switchMap, map } from 'rxjs/operators';
import { completeTodo } from './actions';
export const addTodoEpic:RootEpic = (action$)=>{
    return action$.pipe(filter(isOfType(ADD)), map((data)=>{
        return completeTodo(data.payload);
    }))
}