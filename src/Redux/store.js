import { createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer  from '../Redux/Phonebook/phonebook-reducer';
// import contactFormReducer from './ContactForm/contactForm-reducer';
// import types from '../Redux/Phonebook/phonebook-types';


const rootReducer = combineReducers({
    phonebook: phonebookReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;