import React from "react";
import "./style.css";

const Task = (props) => {
	let priority;
	switch (props.taskPriority) {
		case "1":
			priority = "Low";
			break;
		case "2":
			priority = "Medium";
			break;
		case "3":
			priority = "High";
			break;
		case "0":
			priority = "Finished";
			break;
		default:
			priority = "Erro";
			break;
	}

	return (
		<div className="taskContainer">
			<div className="columns is-mobile">
				<div className="column is-3-mobile is-2-tablet is-1-desktop bg-dark">
					<h1>{priority}</h1>
				</div>
				<div className="column is-7-mobile is-9-tablet is-10-desktop bg-light">
					<p className="taskName">{props.taskName}</p>
				</div>
				<div className="column is-2-mobile is-1-tablet bg-dark buttonsColumn">
					<div
						className="taskRemoveBtn"
						onClick={() => props.removeTask(props.taskId)}
					>
						<i className="fa fa-times"></i>
					</div>
					<div
						className="taskConcludeBtn"
						onClick={() => props.finishTask(props.taskId)}
					>
						<i className="fa fa-check"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Task;
