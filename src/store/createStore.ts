import {
  createStore, applyMiddleware, Reducer,
} from 'redux';

export default (reducers: Reducer, middlewares: any) => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};
