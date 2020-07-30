import { createStore, applyMiddleware, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { RootAction } from './root.action';
import { RootEpicCombiner } from './root.epic';
import { RootReducer, RootState } from './root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();

export const store:Store<RootState, RootAction> = createStore(RootReducer, {}, composeWithDevTools(applyMiddleware(epicMiddleware)));
epicMiddleware.run(RootEpicCombiner);