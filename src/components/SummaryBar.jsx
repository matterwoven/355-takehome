import { STATUSES, STATUS_LABELS, countByStatus } from '../statuses';

/**
 * How many applications sit in each status.
 *
 * The counts are DERIVED from the list on every render, never stored in state.
 * Storing them would mean two things to keep in step, and they would drift the
 * first time an application changed status.
 */
export default function SummaryBar({ applications }) {
	const counts = countByStatus(applications);

	return (
		<section className="summary" aria-label="Application summary">
			<div className="summary-tile">
				<div className="count">{applications.length}</div>
				<div className="label">Total</div>
			</div>
			{STATUSES.map((status) => (
				<div className="summary-tile" key={status}>
					<div className="count">{counts[status]}</div>
					<div className="label">{STATUS_LABELS[status]}</div>
				</div>
			))}
		</section>
	);
}
