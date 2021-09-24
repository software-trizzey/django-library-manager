import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Form() {
	const [bookData, setBookData] = useState({
		title: "",
		firstName: "",
		lastName: "",
		genre: "",
		description: "",
		completed: false,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		// Handle checkbox
		if (!value) {
			setBookData({ ...bookData, [name]: e.target.checked });
			return;
		}

		setBookData({ ...bookData, [name]: value });
	};

	return (
		<Box
			component="form"
			autoComplete="off"
			sx={{ border: "2px solid grey", padding: 5 }}
		>
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<Typography component="h2" variant="h5">
						Add New book
					</Typography>
				</Grid>
				{/* Title */}
				<Grid item xs={12}>
					<TextField
						name="title"
						label="Book Title"
						variant="outlined"
						onChange={handleChange}
					/>
				</Grid>
				{/* Author */}
				<Grid item xs={12}>
					<TextField
						name="firstName"
						label="Author First Name"
						variant="outlined"
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						name="lastName"
						label="Author Last Name"
						variant="outlined"
						onChange={handleChange}
					/>
				</Grid>
				{/* Genre */}
				<Grid item xs={12}>
					{/* TODO: Convert field to a select input */}
					<TextField
						name="genre"
						label="Select Book Genre"
						variant="outlined"
						onChange={handleChange}
					/>
				</Grid>
				{/* Book Completed */}
				<Grid item xs={12}>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									onChange={handleChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Completed"
						/>
					</FormGroup>
				</Grid>
				{/* Description */}
				<Grid item xs={8}>
					<TextField
						multiline={true}
						size="medium"
						fullWidth
						rows={4}
						name="description"
						label="Description"
						variant="outlined"
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button variant="contained" sx={{ marginRight: 2 }}>
						Submit
					</Button>
					<Button variant="outlined" endIcon={<PhotoCamera />}>
						Delete
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Form;
