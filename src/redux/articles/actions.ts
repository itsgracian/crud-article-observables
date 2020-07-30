
import { ADD, VIEW, DELETE, IArticle, SUCCESS } from './types';
import { action, ActionType } from 'typesafe-actions';
export const addTodo = (data: IArticle)=>action(ADD, data);

export const completeTodo = (data:IArticle)=>action(SUCCESS, data);
const actions = {
    addTodo,
    completeTodo
}
export type  IArticleAction = ActionType<typeof actions>;
