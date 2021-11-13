import React, { useState } from "react";

import Task from "../Task";
import InputForm from "../InputForm";
import TasksContainer from "../TasksContainer";
import { Fragment } from "react/cjs/react.production.min";
import "./style.css";

const initialState = [];

const TaskManager = () => {
	const [tasks, setTasks] = useState(initialState);

	function sortByPriority(a, b) {
		let priorityA = a.priority;
		let priorityb = b.priority;
		if (priorityA < priorityb) {
			return 1;
		} else if (priorityA > priorityb) {
			return -1;
		} else {
			return 0;
		}
	}

	const addTask = (task) => {
		const newTask = {
			...task,
			finished: false,
		};
		let newTasks = [...tasks, newTask];
		newTasks.sort(sortByPriority);
		setTasks(newTasks);
	};

	const removeTask = (taskId) => {
		let newTasks = [...tasks];
		const index = newTasks.findIndex((task) => task.id === taskId);
		newTasks.splice(index, 1);
		newTasks.sort(sortByPriority);
		setTasks(newTasks);
	};

	const finishTask = (taskId) => {
		let newTasks = [...tasks];
		const index = newTasks.findIndex((task) => task.id === taskId);
		newTasks[index].priority = "0";
		newTasks[index].finished = true;
		newTasks.sort(sortByPriority);
		setTasks(newTasks);
	};

	let renderedTasks = tasks.map((task, index) => {
		if (task.finished) {
			return (
				<li key={index} className="taskFinished">
					<Task
						taskId={task.id}
						taskName={task.name}
						taskPriority={task.priority}
						removeTask={removeTask}
						finishTask={finishTask}
					></Task>
				</li>
			);
		} else {
			return (
				<li key={index}>
					<Task
						taskId={task.id}
						taskName={task.name}
						taskPriority={task.priority}
						removeTask={removeTask}
						finishTask={finishTask}
					></Task>
				</li>
			);
		}
	});

	// let renderedTasks = tasks.map((task, index) => (
	// 	<li key={index}>
	// 		<Task
	// 			taskId={task.id}
	// 			taskName={task.name}
	// 			taskPriority={task.priority}
	// 			removeTask={removeTask}
	// 			finishTask={finishTask}
	// 		></Task>
	// 	</li>
	// ));

	return (
		<Fragment>
			<InputForm addTask={addTask}></InputForm>
			<TasksContainer tasks={renderedTasks}></TasksContainer>
		</Fragment>
	);
};

export default TaskManager;
