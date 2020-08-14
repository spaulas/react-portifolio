import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import websiteReducer from "./website/website.reducer";

export const rootReducer = {
  Website: websiteReducer
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Website"]
};
const combinedRootReducer = combineReducers(rootReducer);

export default persistReducer(persistConfig, combinedRootReducer);
