import { combineReducers } from 'redux';
import types from './phonebook-types';

const name = (state = '', { type, payload }) => {
    switch (type) {
        case types.ADD:
            return [...state, payload];
        default:
            return state;
    }
}

const number = (state = '', { type, payload }) => {
    switch (type) {
        case types.ADD:
            return [...state, payload];
        default:
            return state;
    }
}

export default combineReducers({
    name,
    number,
});