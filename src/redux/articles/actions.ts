import { ADD, VIEW, DELETE, IArticle, SUCCESS, VIEW_TODO_EPIC } from './types';
import { action, ActionType } from 'typesafe-actions';
export const addTodo = (data: IArticle)=>action(ADD, data);

export const completeTodo = (data:IArticle)=>action(SUCCESS, data);

export const viewTodos = ()=>action(VIEW, {view: true });
export const viewAll = ()=>action(VIEW_TODO_EPIC, {view: true });
const actions = {
    addTodo,
    completeTodo,
    viewTodos,
    viewAll
}
export type  IArticleAction = ActionType<typeof actions>;
