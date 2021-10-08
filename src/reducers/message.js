import * as message from '../constants/Message';
import * as types from '../constants/ActionType';

var inititalState = message.MSG_WELCOME;

const myReducer = (state=inititalState, action) => {
    switch (action.type) {
        case types.MSG_ADD_SUCCESS:
            return action.message;
        case types.MSG_DELETE_SUCCESS:
            return action.message;
        case types.MSG_UPDATE_SUCCESS:
            return action.message;
        default:
            return state;
    }
}

export default myReducer;