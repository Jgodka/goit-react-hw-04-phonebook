import PropTypes from 'prop-types';
import { List, SpanName, SpanNumber, ButtonDelete } from './ContactList.styled';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <SpanName>{contact.name}:</SpanName>
            <SpanNumber>{contact.number}</SpanNumber>
            <ButtonDelete
              type="button"
              onClick={() => {
                onDeleteContact(contact.id);
              }}
            >
              Delete
            </ButtonDelete>
          </li>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
