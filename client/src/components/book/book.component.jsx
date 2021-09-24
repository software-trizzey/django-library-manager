import React from "react";

import Typography from "@mui/material/Typography";

function Book({ book }) {
	const { title, firstName, lastName, genre, description, completed } = book;
	const author = firstName + " " + lastName;

	return (
		<div style={{ border: "1px solid black", padding: "18px" }}>
			<Typography variant="body2">{title}</Typography>
			<Typography variant="body2">{author}</Typography>
			<Typography variant="body2">{genre}</Typography>
			<Typography variant="body2">{completed}</Typography>
			<Typography variant="body2">{description}</Typography>
		</div>
	);
}

export default Book;
