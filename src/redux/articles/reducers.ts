import { ADD, IArticle, SUCCESS } from './types';
import { IArticleAction } from './actions';
export interface IArticleReducer{
    readonly message?: string;
    readonly articles: Array<IArticle>;
};
const initialState:IArticleReducer = {articles: []};
export const articleReducer = (state=initialState, {type, payload}: IArticleAction)=>{
   switch(type){
        case SUCCESS: 
        return {...state, articles: [...state.articles, payload]};
        default:
            return state;
   }
}