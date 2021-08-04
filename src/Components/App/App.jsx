import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

class App extends React.Component {
    state = {
        contacts: [],
        filter: '',
    }

    // componentDidUpdate(prevProps, prevState) {

    //     if (this.state.contacts !== prevState.contacts) {
    //         localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    //     }
    // }
    // componentDidMount() {
    //     const contacts = localStorage.getItem('contacts');
    //     const parsedContacts = JSON.parse(contacts);
    //     if (parsedContacts) {
    //         this.setState({ contacts: parsedContacts });
    //     }
    // }

    onSameName = (name, contacts) => {
        const hasName = contacts.find(el => el.name === name);
        return(hasName ? false : true)
    }
    // addContact = data => {
    //     const contact = {
    //         id: shortid.generate(),
    //         name: data.name,
    //         number: data.number,
    //     }

    //     this.setState(prevState => {
    //         const isUnique = this.onSameName(contact.name, prevState.contacts);
    //         if (isUnique) {
    //             return {
    //                 contacts: [contact, ...prevState.contacts]
    //             };
    //         } else {
    //             alert('Контакт с таким Именем уже добавлен!')
    //         }
    //     })
    // }
    // deleteContact = contactId => {
    //     this.setState(prevState => ({
    //         contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    //     }))
    // }
    // changeFilter = evt => {
    //     this.setState({filter: evt.currentTarget.value})
    // }
    
    render() {
        return (    
            <>
                <h1>Phonebook</h1>
                <ContactForm/>
                <h2>Contacts</h2>
                <Filter/>
                <ContactList/>
            </>
        )
    }
}
export default App;