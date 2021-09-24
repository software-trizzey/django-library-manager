import React, { useEffect, useState } from "react";
import { getBooks } from "./api/index";

import BookShelf from "./components/book_shelf/book_shelf.component";
import Form from "./components/form/form.component";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function App() {
	const [books, setBooks] = useState([]);

	const fetchBooks = async () => {
		const data = await getBooks();
		await setBooks(data);
	};

	useEffect(() => {
		fetchBooks();
	}, []);

	return (
		<Box
			sx={{
				width: 960,
				height: 630,
				margin: "0 auto",
				padding: 12,
			}}
		>
			<Grid container spacing={6}>
				<Grid item component="header">
					<Typography component="h1" variant="h4">
						My Library
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<BookShelf books={books} />
				</Grid>
				<Grid item xs={8}>
					<Form books={books} />
				</Grid>
			</Grid>
		</Box>
	);
}

export default App;
