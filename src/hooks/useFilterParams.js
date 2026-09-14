import { useSearchParams } from 'react-router-dom';

/**
 * The filter and search terms, kept in the URL rather than in useState.
 *
 * Which means a filtered list can be pasted into a message, a reload does not
 * throw the view away, and the back button undoes a chosen status. The
 * component using it cannot tell the difference — it still gets a value and a
 * setter, which is why FilterBar did not change when these moved out of
 * useState.
 */
export default function useFilterParams() {
	const [searchParams, setSearchParams] = useSearchParams();

	const status = searchParams.get('status') ?? 'all';
	const query = searchParams.get('q') ?? '';

	function update(changes, { replace }) {
		const next = new URLSearchParams(searchParams);
		for (const [key, value] of Object.entries(changes)) {
			// A default is absence: "?status=all&q=" is noise in the address bar.
			if (!value || value === 'all') next.delete(key);
			else next.set(key, value);
		}
		setSearchParams(next, { replace });
	}

	return {
		status,
		query,
		// Picking a status is a deliberate move, so it gets a history entry and
		// the back button undoes it. Typing does NOT: a six-letter search would
		// otherwise stack six entries and the user would press back six times to
		// escape one word.
		setStatus: (value) => update({ status: value }, { replace: false }),
		setQuery: (value) => update({ q: value }, { replace: true })
	};
}
