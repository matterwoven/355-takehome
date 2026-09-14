import { STATUS_LABELS } from '../statuses';

/**
 * The coloured pill showing where an application stands.
 *
 * The class name is built from the status rather than chosen with a chain of
 * if-statements, so a new status needs a CSS rule and nothing else.
 */
export default function StatusBadge({ status }) {
	const label = STATUS_LABELS[status] ?? status;
	return <span className={`badge badge-${status}`}>{label}</span>;
}
