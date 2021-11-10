import PropTypes from 'prop-types';
import s from './Contacts.module.css';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.item} key={id}>
      <span className={s.text}>{name} :</span>
      <span className={s.text}>{number}</span>
      <button
        className={s.button}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
