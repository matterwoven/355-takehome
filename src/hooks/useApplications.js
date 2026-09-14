import { useEffect, useState } from 'react';

/**
 * Fetch the applications once and report the three things a caller needs:
 * what came back, whether it is still loading, and whether it failed.
 *
 * This was the top of App in stage 2. It moved into a hook because two routes
 * now need it — the list and the detail page — and copying the effect into
 * both would mean two places to fix when the URL or the error handling
 * changes.
 */
export default function useApplications() {
	const [applications, setApplications] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

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

	return { applications, loading, error };
}
