import { ADD, IArticle, SUCCESS } from './types';
import { IArticleAction } from './actions';
import { produce } from 'immer';
export interface IArticleReducer{
    readonly message?: string;
    readonly articles: Array<IArticle>;
};
const initialState:IArticleReducer = {articles: []};
export const articleReducer = (state=initialState, {type, payload}:IArticleAction)=>produce(state, (draft)=>{
    switch(type){
        case SUCCESS:
            return {...draft, articles: [...draft.articles, payload]}
        default:
            return draft;
    }
});