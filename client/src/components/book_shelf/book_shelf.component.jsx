import React from "react";

import Book from "../book/book.component";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function BookShelf() {
	return (
		<Grid container>
			<Grid as="header" item>
				<Typography className="">Book Shelf</Typography>
			</Grid>
		</Grid>
	);
}

export default BookShelf;
