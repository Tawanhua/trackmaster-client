import React, {useEffect, useState,} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TaskPofile = () => {
	const { id } = useParams();

	const [task, setTask] = useState({
		name: "",
		title: "",
		description: "",
		duration: "",
	})

	useEffect(() => {
		loadTask();
	}, [])

	const loadTask = async () => {
		const result = await axios.get(
			`http://localhost:8080/tasks/task/${id}`
		)
		setTask(result.data);
	}

	return (
		<section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">
									{`${task.name}`}
								</h5>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{task.name}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Title
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{task.title}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Description
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{task.description}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Duration
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{task.duration}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TaskPofile