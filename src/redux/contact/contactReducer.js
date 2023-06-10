import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterValue: (state, { payload }) => {
      state.filter = payload;
    },

    createContact: (state, { payload }) => {
      if (state.contacts.name === payload.name)
        return alert(`${payload.name} is already in contacts.`);

      state.contacts.push({ id: nanoid(), ...payload });
    },

    deleteContact: (state, { payload }) => {
      state.contacts.filter(({ id }) => id !== payload);
    },
  },
});

export const contactReducer = contacts.reducer;
export const { filterValue, createContact, deleteContact } = contacts.actions;

// state.contacts.some(contact =>
//   contact.name === payload.name
//     ? alert(`${payload.name} is already in contacts.`)
//     : state.contacts.push({ id: nanoid(), contact: payload })
// );
