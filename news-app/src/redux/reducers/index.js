import { combineReducers } from "redux";
import newsReducer from './newsReducer'

// create a object reducer to easily add new reducers later
const reducers = combineReducers({
    news: newsReducer,
})

export default reducers