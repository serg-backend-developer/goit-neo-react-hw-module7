import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66d758c2006bfbe2e650977a.mockapi.io";

export const getContacts = createAsyncThunk(
	"contacts/get",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get("/contacts");
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const addContact = createAsyncThunk(
	"contacts/add",
	async ({ name, phoneNumber }, thunkAPI) => {
		try {
			const contacts = thunkAPI.getState().contacts.items;
			const dups = contacts.find(
				(contact) =>
					contact.name === name || contact.number === phoneNumber
			);
			if (dups) {
				return thunkAPI.rejectWithValue("Contact already exists!");
			}
			const response = await axios.post("/contacts", {
				name,
				phoneNumber,
			});
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	"contacts/delete",
	async (contactId, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${contactId}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
