import { articleReducer, IArticleReducer } from './articles/reducers';
import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
    article: articleReducer
});

export type RootState = {
    article: IArticleReducer
}