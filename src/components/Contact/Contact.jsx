import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  return (
    <div className={css.contact}>
      <div className={css.container}>
        <div className={css.name}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.phone}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.delete}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}
