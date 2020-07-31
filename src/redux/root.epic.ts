import { RootAction } from './root.action';
import { RootState } from './root.reducer';
import { combineEpics, Epic } from 'redux-observable';
import { addTodoEpic, viewAllTodoEpic } from './articles/epics';

export const RootEpicCombiner = combineEpics(addTodoEpic, viewAllTodoEpic);
export type RootEpic = Epic<RootAction, RootAction, RootState>;