/**
 * The four states an application can be in, in the order they happen.
 *
 * Kept in one place so the badge, the filter bar, the summary counts and the
 * form's dropdown all agree. Adding a fifth status should mean editing this
 * file and nothing else.
 */
export const STATUSES = ['applied', 'interview', 'offer', 'rejected'];

export const STATUS_LABELS = {
	applied: 'Applied',
	interview: 'Interviewing',
	offer: 'Offer',
	rejected: 'Rejected'
};

/** "2026-09-02" -> "Sep 2, 2026". Dates are stored sortable, shown readable. */
export function formatDate(iso) {
	if (!iso) return '';
	// Split rather than new Date(iso): a bare "YYYY-MM-DD" is parsed as UTC and
	// can render as the previous day west of Greenwich.
	const [year, month, day] = iso.split('-').map(Number);
	const date = new Date(year, month - 1, day);
	return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

/** Newest application first. */
export function byNewest(a, b) {
	return b.appliedOn.localeCompare(a.appliedOn);
}

/** How many applications sit in each status. Derived, never stored. */
export function countByStatus(applications) {
	const counts = Object.fromEntries(STATUSES.map((s) => [s, 0]));
	for (const application of applications) {
		if (counts[application.status] !== undefined) counts[application.status] += 1;
	}
	return counts;
}
