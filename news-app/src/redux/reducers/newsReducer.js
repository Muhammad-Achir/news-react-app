import constant from '../constant'

// make article reducer
function newsReducer(state = [], action) {
    switch (action.type) {
        case constant.SET_NEWS:
            return action.payload

        default:
            return state
    }
}

export default newsReducer