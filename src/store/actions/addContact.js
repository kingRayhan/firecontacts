import { ADD_CONTACT } from "./actionTypes";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: { ...contact },
});
