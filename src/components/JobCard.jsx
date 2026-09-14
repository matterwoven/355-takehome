import StatusBadge from './StatusBadge';
import { formatDate } from '../statuses';

/**
 * One application in the list.
 *
 * Takes the whole application as a prop rather than eight separate ones: the
 * card's job is to render an application, and a signature that long is a sign
 * the component wants the object itself.
 */
export default function JobCard({ application }) {
	const { company, role, status, appliedOn, source, notes } = application;

	return (
		<li className="job-card">
			<div className="grow">
				<h3>{role}</h3>
				<div className="company">{company}</div>
				<div className="meta">
					Applied {formatDate(appliedOn)}
					{/* Only mention the source when there is one — "via" followed by
					    nothing reads like a bug. */}
					{source ? ` · via ${source}` : ''}
				</div>
				{notes && <p className="note">{notes}</p>}
			</div>
			<StatusBadge status={status} />
		</li>
	);
}
