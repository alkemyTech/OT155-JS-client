import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const persistConfig = {
  key: "user",
  storage,
};

const persistedReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
});

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
};
