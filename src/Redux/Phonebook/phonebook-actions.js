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

export default addContact;

// {
//         const contact = {
//             id: shortid.generate(),
//             name: data.name,
//             number: data.number,
//         }

//         this.setState(prevState => {
//             const isUnique = this.onSameName(contact.name, prevState.contacts);
//             if (isUnique) {
//                 return {
//                     contacts: [contact, ...prevState.contacts]
//                 };
//             } else {
//                 alert('Контакт с таким Именем уже добавлен!')
//             }
//         })
//     }