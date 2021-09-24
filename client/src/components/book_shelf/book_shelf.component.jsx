import React from "react";

import Book from "../book/book.component";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function BookShelf({ books }) {
	return (
		<Grid container spacing={4}>
			{books.length > 0 ? (
				books.map((book, idx) => (
					<Grid key={idx} item xs={12} md={4}>
						<Book book={book} />
					</Grid>
				))
			) : (
				<Typography>No books found.</Typography>
			)}
		</Grid>
	);
}

export default BookShelf;
