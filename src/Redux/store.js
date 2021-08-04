import { createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer  from '../Redux/Phonebook/phonebook-reducer';
import contactFormReducer from './Phonebook/contactFormReducer';
// import types from '../Redux/Phonebook/phonebook-types';


const rootReducer = combineReducers({
    phonebook: phonebookReducer,
    contactForm: contactFormReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;