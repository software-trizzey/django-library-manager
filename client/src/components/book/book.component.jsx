import React, { useState, useEffect } from "react";
import { updateBook, deleteBook, getAuthor, getGenre } from "../../api/index";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Book({ book }) {
	const [newBook, setNewBook] = useState(book);
	const [open, setOpen] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		// Handle checkbox
		if (!value) {
			setNewBook({ ...newBook, [name]: e.target.checked });
			return;
		}
		setNewBook({ ...newBook, [name]: value });
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const fetchData = async (book) => {
		const { first_name, last_name } = await getAuthor(book.author);
		const firstName = first_name;
		const lastName = last_name;
		const { name } = await getGenre(book.genre);
		const genre = name;
		setNewBook({
			...newBook,
			firstName,
			lastName,
			genre,
		});
	};

	const fetchAuthor = async (book) => {
		const { first_name, last_name } = await getAuthor(book.author);
		const firstName = first_name;
		const lastName = last_name;
		setNewBook({
			...newBook,
			firstName,
			lastName,
		});
	};
	const fetchGenre = async (book) => {
		const { name } = await getGenre(book.genre);
		setNewBook({
			...newBook,
			genre: name,
		});
	};

	const handleUpdate = async () => {
		await updateBook();
		handleClose();
	};

	const handleDelete = async (book) => {
		await deleteBook(book);
		handleClose();
	};

	useEffect(() => {
		fetchData(book);
	}, [book]);

	return (
		<div style={{ border: "1px solid black", padding: "18px" }}>
			<Typography variant="body2">{newBook.title}</Typography>
			<Typography variant="body2">
				{newBook.firstName} {newBook.lastName}
			</Typography>
			<Typography variant="body2">{newBook.genre}</Typography>
			<Typography variant="body2">{newBook.completed}</Typography>
			<Typography variant="body2">{newBook.description}</Typography>
			<Button variant="outlined" onClick={handleClickOpen}>
				Manage Book
			</Button>

			{/* *********** BOOK EDIT FORM ************ */}

			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Manage Book</DialogTitle>
				<DialogContent>
					<DialogContentText style={{ marginBottom: "30px" }}>
						Update any field and then make sure to save changes.
					</DialogContentText>
					<Grid container spacing={4}>
						{/* Title */}
						<Grid item xs={12}>
							<TextField
								fullWidth
								defaultValue={newBook.title}
								name="title"
								label="Book Title"
								variant="outlined"
								onChange={handleChange}
							/>
						</Grid>
						{/* Author */}
						<Grid item xs={12}>
							<TextField
								fullWidth
								defaultValue={newBook.firstName}
								name="firstName"
								label="Author First Name"
								variant="outlined"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								defaultValue={newBook.lastName}
								name="lastName"
								label="Author Last Name"
								variant="outlined"
								onChange={handleChange}
							/>
						</Grid>
						{/* Genre */}
						<Grid item xs={6}>
							{/* TODO: Convert field to a select input */}
							<TextField
								defaultValue={newBook.genre}
								name="genre"
								label="Select Book Genre"
								variant="outlined"
								onChange={handleChange}
							/>
						</Grid>
						{/* Book Completed */}
						<Grid item xs={3}>
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={newBook.completed}
											onChange={handleChange}
											inputProps={{ "aria-label": "controlled" }}
										/>
									}
									label="Completed"
								/>
							</FormGroup>
						</Grid>
						{/* Description */}
						<Grid item xs={12}>
							<TextField
								defaultValue={newBook.description}
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
					</Grid>
				</DialogContent>
				<DialogActions style={{ display: "flex", justifyContent: "center" }}>
					<Button variant="contained" onClick={handleUpdate}>
						Save
					</Button>
					<Button variant="outlined" onClick={handleDelete}>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default Book;
