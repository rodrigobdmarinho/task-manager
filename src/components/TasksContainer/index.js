import React from "react";
import "./style.css";

const TasksContainer = (props) => {
	return (
		<div className="tasksContainer container">
			<div className="columns is-mobile tasksContainerHeader">
				<div className="column is-3-mobile is-2-tablet is-1-desktop bg-dark">
					<p>Priority</p>
				</div>
				<div className="column is-7-mobile is-9-tablet is-10-desktop bg-light">
					<p>Task</p>
				</div>
				<div className="column is-2-mobile is-1-tablet bg-dark">
					<p>Edit</p>
				</div>
			</div>
			{props.tasks}
		</div>
	);
};

export default TasksContainer;
