import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BackgroundImageReducer } from "reducers";

const store = createStore(BackgroundImageReducer, composeWithDevTools());

export default store;
