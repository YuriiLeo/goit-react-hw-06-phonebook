import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [];

const contactsSlice = createSlice({
    name: "contacts",

    initialState: contactsInitialState,

    reducers: {
        addContact: {
            reducer(state, { payload }) {
            state.push(payload);
            },
            prepare(data) {
                return {
                    payload: {
                        ...data,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContacts(state, { payload }) {
            return state.filter((item) => item.id !== payload);
        },
    },
});

export const { addContact, deleteContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;