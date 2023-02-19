import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { base } from './reducer/base.reducer';
import { authentication } from './reducer/auth.reducer';
import { alert } from './reducer/alert.reducer';
import { drpData } from './reducer/drp.data.reducer';

const rootReducer = combineReducers({
    base,
    alert,
    authentication,
    drpData
});

const middlewares = [];
//if (process.env.NODE_ENV === `development`) {
//    const loggerMiddleware = createLogger();
//    middlewares.push(loggerMiddleware);
//}

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware,
        ...middlewares
    )
);