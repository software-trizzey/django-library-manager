import React from "react";

import Book from "../book/book.component";

import Grid from "@mui/material/Grid";

const books = [
	{
		title: "Cracking Code",
		firstName: "Gayle",
		lastName: "McDowell",
		genre: "Fiction",
		description: "Great cool cool cooool book.",
		completed: false,
	},
	{
		title: "23 Friends",
		firstName: "Nice",
		lastName: "Awesome",
		genre: "Science",
		description: "yeeet",
		completed: true,
	},
	{
		title: "Meow Moew",
		firstName: "Cool",
		lastName: "Friendo",
		genre: "Fantasy",
		description: "Yup",
		completed: true,
	},
	{
		title: "Star Freak",
		firstName: "Markie",
		lastName: "Mark",
		genre: "Music",
		description: "Best ever",
		completed: false,
	},
];

function BookShelf() {
	return (
		<Grid container spacing={4}>
			{books.map((book, idx) => (
				<Grid key={idx} item xs={12} md={4}>
					<Book book={book} />
				</Grid>
			))}
		</Grid>
	);
}

export default BookShelf;
