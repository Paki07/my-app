import {createStore} from "redux";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, window.___REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__());

export default store;