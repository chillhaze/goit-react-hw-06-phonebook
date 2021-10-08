import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts, onDeleteBtnPush }) => {
  return (
    <div className={css.container}>
      <ul className={css.contactsList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteBtnPush={onDeleteBtnPush}
            />
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteBtnPush: PropTypes.func,
};
