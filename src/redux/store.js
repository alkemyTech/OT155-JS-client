import { createStore, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./reducers/userReducer";

const persistConfig = {
  key: "user",
  storage,
};

const persistedReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
});

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
