import { RootAction } from './root.action';
import { RootState } from './root.reducer';
import { combineEpics, Epic } from 'redux-observable';
import { addTodoEpic } from './articles/epics';

export const RootEpicCombiner = combineEpics(addTodoEpic);
export type RootEpic = Epic<RootAction, RootAction, RootState>;