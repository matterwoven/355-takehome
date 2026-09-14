import { useEffect, useState } from 'react';
import SummaryBar from './components/SummaryBar';
import FilterBar from './components/FilterBar';
import JobList from './components/JobList';
import { byNewest } from './statuses';

/**
 * Stage 2: the applications are fetched, and the list responds to input.
 *
 * Three pieces of state, and each one is here because it answers a different
 * question: what came back, are we still waiting, and did it fail. Collapsing
 * them into one object would mean every update had to remember to carry the
 * other two.
 */
export default function App() {
	const [applications, setApplications] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [status, setStatus] = useState('all');
	const [query, setQuery] = useState('');

	useEffect(() => {
		// React runs effects twice in development to surface exactly this kind of
		// bug. Without the controller, two requests race and the slower one wins.
		const controller = new AbortController();

		fetch('/applications.json', { signal: controller.signal })
			.then((response) => {
				// fetch only rejects on a network failure — a 404 still resolves,
				// so the status has to be checked by hand.
				if (!response.ok) throw new Error(`Could not load applications (${response.status})`);
				return response.json();
			})
			.then((data) => {
				setApplications(data);
				setLoading(false);
			})
			.catch((problem) => {
				if (problem.name === 'AbortError') return;
				setError(problem.message);
				setLoading(false);
			});

		return () => controller.abort();
	}, []);

	// Derived on every render rather than stored: a second piece of state
	// holding "the filtered list" would go stale the moment either input moved.
	const needle = query.trim().toLowerCase();
	const visible = applications
		.filter((application) => status === 'all' || application.status === status)
		.filter(
			(application) =>
				!needle ||
				application.company.toLowerCase().includes(needle) ||
				application.role.toLowerCase().includes(needle)
		)
		.sort(byNewest);

	return (
		<>
			<header className="site-header">
				<div className="container">
					<h1>Job Application Tracker</h1>
				</div>
			</header>

			<main className="container">
				{loading && <p className="loading">Loading applications…</p>}
				{error && <p className="error">{error}</p>}

				{!loading && !error && (
					<>
						{/* The summary counts everything, not the filtered view: it
						    answers "where do I stand", which a filter should not change. */}
						<SummaryBar applications={applications} />

						<div className="page-head">
							<h2>Applications</h2>
						</div>

						<FilterBar
							status={status}
							query={query}
							onStatusChange={setStatus}
							onQueryChange={setQuery}
						/>

						<JobList
							applications={visible}
							emptyMessage="No applications match these filters."
						/>
					</>
				)}
			</main>
		</>
	);
}
