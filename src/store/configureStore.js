import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducers } from "./index";
import {fetchTodos} from "../actions/todoSagas";

export default function configureStore(history, initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [
        sagaMiddleware,
        routerMiddleware(history)
    ];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    const rootReducer = combineReducers({
        ...reducers,
        routing: routerReducer
    });

    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
    
    sagaMiddleware.run(fetchTodos);
    
    return store;
}
