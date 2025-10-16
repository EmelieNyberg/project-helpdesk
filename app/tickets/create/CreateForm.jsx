"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateForm = () => {
	const router = useRouter();

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [email, setEmail] = useState('');
	const [priority, setPriority] = useState('low');
	const [isLoading, setIsLoading] = useState(false);

	// Started with the handle submit function
	const handleSubmit = async () => {

	};

	return (
		<form className="w-1/2">
			<label>
				<span>Title:</span>
				<input
					required
					type="text"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
			</label>

			<label>
				<span>Body:</span>
				<textarea
					required
					onChange={(e) => setBody(e.target.value)}
					value={body}
				/>
			</label>

			<label>
				<span>Email:</span>
				<input
					required
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
			</label>

			<label>
				<span>Priority:</span>
				<select
					onChange={(e) => setPriority(e.target.value)}
					value={priority}
				>
					<option value="low">Low Priority</option>
					<option value="medium">Medium Priority</option>
					<option value="high">High Priority</option>
				</select>
			</label>

			<button
				className="btn-primary"
				disabled={isLoading}
			>
				{isLoading && <span>Adding...</span>}
				{!isLoading && <span>Add Ticket</span>}
			</button>
		</form>
	);
};

export default CreateForm;