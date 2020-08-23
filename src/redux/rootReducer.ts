import { combineReducers } from "redux";
import emailReducer from "./email/email.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import websiteReducer from "./website/website.reducer";

export const rootReducer = {
  Website: websiteReducer,
  Email: emailReducer
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Website", "Email"]
};
const combinedRootReducer = combineReducers(rootReducer);

export default persistReducer(persistConfig, combinedRootReducer);
