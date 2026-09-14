import { useMemo } from 'react';
import { byNewest } from '../statuses';

/**
 * Applications narrowed by status and search text, newest first.
 *
 * A hook rather than a function so the filtering is memoised against the
 * inputs — the list page re-renders on every keystroke and there is no reason
 * to walk and sort the whole list each time.
 */
export default function useFilteredApplications(applications, { status, query }) {
	return useMemo(() => {
		const needle = query.trim().toLowerCase();

		return applications
			.filter((application) => status === 'all' || application.status === status)
			.filter((application) => {
				if (!needle) return true;
				return (
					application.company.toLowerCase().includes(needle) ||
					application.role.toLowerCase().includes(needle)
				);
			})
			.sort(byNewest);
	}, [applications, status, query]);
}
