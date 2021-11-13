import React, { useState } from "react";
import "./style.css";

const initialState = {
	name: "",
	priority: "1",
};

let taskId = 0;

const InputForm = (props) => {
	const [fields, setFields] = useState(initialState);

	const handleChange = (e) => {
		setFields({
			...fields,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const handleSubmit = (e) => {
		props.addTask({
			...fields,
			id: taskId,
		});
		setFields(initialState);
		taskId++;
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1 className="formTitle title">React Task Manager</h1>
			<div className="fieldsContainer">
				<div className="inputGroup">
					<label htmlFor="name">Task name: </label>
					<input
						className="input is-primary"
						type="text"
						id="name"
						name="name"
						value={fields.name}
						onChange={handleChange}
						placeholder="Task Name"
						autoComplete="off"
						required
					></input>
				</div>
				<div className="inputGroup">
					<label htmlFor="priority">Priority: </label>
					<div className="select is-primary">
						<select
							id="priority"
							name="priority"
							value={fields.priority}
							onChange={handleChange}
						>
							<option value="1">Low</option>
							<option value="2">Medium</option>
							<option value="3">High</option>
						</select>
					</div>
				</div>
			</div>

			<input
				type="submit"
				value="Add Task"
				className="submitBtn button is-primary"
			></input>
		</form>
	);
};

export default InputForm;
