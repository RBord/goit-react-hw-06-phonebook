import shortid from "shortid";
import types from './phonebook-types';


const addContact = data => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name: data.name,
        number: data.number,
    }
});

const deleteContact = contactId => ({
    type: types.DELETE,
    payload: contactId,
});

const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value,
});


export default { addContact, deleteContact, changeFilter };

