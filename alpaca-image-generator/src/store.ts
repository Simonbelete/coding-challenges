import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CommonReducer from "reducers";

const store = createStore(CommonReducer, composeWithDevTools());

export default store;
