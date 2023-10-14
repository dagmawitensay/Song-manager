import createSagaMiddlware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './root-reducer';
import rootSaga from '../songs/root-saga';

const sagaMiddleWare = createSagaMiddlware();

const store = configureStore({
    reducer: rootReducers,
    middleware: [sagaMiddleWare]
});
sagaMiddleWare.run(rootSaga);


export default store;