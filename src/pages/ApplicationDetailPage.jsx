import { Link, useParams } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import useApplications from '../hooks/useApplications';
import { formatDate } from '../statuses';

export default function ApplicationDetailPage() {
	// The id comes from the URL, so this page works from a pasted link or a
	// reload — not just from a click on the list.
	const { id } = useParams();
	const { applications, loading, error } = useApplications();

	if (loading) return <p className="loading">Loading…</p>;
	if (error) return <p className="error">{error}</p>;

	const application = applications.find((item) => item.id === id);

	// An id that is not in the list is a normal thing to hit — a stale bookmark,
	// or a typo in the address bar.
	if (!application) {
		return (
			<div className="empty">
				<p>No application with that id.</p>
				<Link className="btn" to="/">
					Back to applications
				</Link>
			</div>
		);
	}

	return (
		<>
			<div className="page-head">
				<Link className="back-link" to="/">
					← All applications
				</Link>
			</div>

			<article className="panel">
				<div className="page-head">
					<div>
						<h2>{application.role}</h2>
						<div className="company">{application.company}</div>
					</div>
					<span className="spacer" />
					<StatusBadge status={application.status} />
				</div>

				<dl className="detail-grid">
					<dt>Applied</dt>
					<dd>{formatDate(application.appliedOn)}</dd>

					<dt>Source</dt>
					<dd>{application.source || '—'}</dd>

					<dt>Posting</dt>
					<dd>
						{application.url ? (
							<a href={application.url} target="_blank" rel="noreferrer">
								{application.url}
							</a>
						) : (
							'—'
						)}
					</dd>

					<dt>Notes</dt>
					<dd>{application.notes || '—'}</dd>
				</dl>
			</article>
		</>
	);
}
