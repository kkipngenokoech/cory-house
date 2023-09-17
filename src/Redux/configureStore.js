import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./Reducers";
import reduxImmutableStateInVariant from "redux-immutable-invariant";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInVariant())),
  );
}
