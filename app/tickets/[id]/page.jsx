import { notFound } from "next/navigation";

// so that we can throw an error if the page is not preloaded, se error message below in getTicket function
export const dynamicParams = true;

// so that next.js preloads the page in cache
export const generateStaticParams = async () => {
	const res = await fetch('http://localhost:8080/tickets');
	const tickets = await res.json();

	return tickets.map((ticket) => ({
		id: ticket.id.toString()
	}));
};

// Get/fetch one single ticket
const getTicket = async (id) => {

	const res = await fetch(`http://localhost:8080/tickets/${id}`, {
		next: { revalidate: 60 }
	});

	if (!res.ok) {
		throw notFound();
	}

	const data = await res.json();

	if (!data || Object.keys(data).length === 0) {
		throw notFound();
	}

	return data;
};

const TicketDetails = async ({ params }) => {
	const ticket = await getTicket(params.id);

	return (
		<main>
			<nav>
				<h2>Ticket Details</h2>
			</nav>
			<div className="card">
				<h3>{ticket.title}</h3>
				<small>Created by {ticket.user_email}</small>
				<p>{ticket.body}</p>
				<div className={`pill ${ticket.priority}`}>
					{ticket.priority} priority
				</div>
			</div>
		</main>
	);
};

export default TicketDetails;