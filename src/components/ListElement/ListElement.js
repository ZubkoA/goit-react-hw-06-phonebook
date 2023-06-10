import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contact/contactReducer';
import css from './ListElement.module.css';

const ListElement = ({ number, name, id }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(id));
  return (
    <>
      <p className={css.contacts__text}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.contacts__btn}
        onClick={handleDeleteContact}
      >
        Delete
      </button>
    </>
  );
};

export default ListElement;
