import React from "react";

import Typography from "@mui/material/Typography";

function Book({ book }) {
	return (
		<>
			<Typography>{book.title}</Typography>
		</>
	);
}

export default Book;
