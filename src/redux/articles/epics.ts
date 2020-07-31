import { ADD, VIEW } from './types';
import { RootEpic } from '../root.epic';
import { isOfType } from 'typesafe-actions';
import { filter, map } from 'rxjs/operators';
import { completeTodo, viewAll } from './actions';
import { Observable, of } from 'rxjs';

export const addTodoEpic:RootEpic = (action$)=>{
    return action$.pipe(filter(isOfType(ADD)), map((data)=>{
       return completeTodo(data.payload);
    }))
};

export const viewAllTodoEpic:RootEpic =(action$)=>{
    return action$.pipe(filter(isOfType(VIEW)), map(()=>{
        return viewAll();
    }))
}