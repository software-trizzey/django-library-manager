import axios from "axios";

axios.defaults.baseURL = "api/";

export const getAuthors = async () => {
	try {
		const { data } = await axios.get("authors");
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

export const getAuthor = async (id) => {
	try {
		const { data } = await axios.get(`authors/${id}`);
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

export const getGenres = async () => {
	try {
		const { data } = await axios.get("genres");
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

export const getGenre = async (id) => {
	try {
		const { data } = await axios.get(`genres/${id}`);
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

// Get Books
export const getBooks = async () => {
	try {
		const { data } = await axios.get("books");
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};

// Get single Book
export const getBook = async (id) => {
	try {
		const { data } = await axios.get(`books/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
};

// Create a Book
export const createBook = async (newBook) => {
	try {
		const res = await axios.post("books/", newBook);
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};

// Update a Book
export const updateBook = async (newBook, id) => {
	try {
		const res = await axios.patch(`books/${id}`, newBook);
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};

// Delete a Book
export const deleteBook = async (id) => {
	try {
		const res = await axios.delete(`books/${id}`);
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};
