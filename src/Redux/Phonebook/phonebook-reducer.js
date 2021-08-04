import { combineReducers } from "redux";
// {
//     contacts: [],
//     filter: '',
// }

const contacts = (state = [], action) => {
    return state;
};

const filter = (state = '', action) => {
    return state;
};

export default combineReducers({
    contacts,
    filter
})