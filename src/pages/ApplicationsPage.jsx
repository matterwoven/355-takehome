import SummaryBar from '../components/SummaryBar';
import FilterBar from '../components/FilterBar';
import JobList from '../components/JobList';
import useApplications from '../hooks/useApplications';
import useFilterParams from '../hooks/useFilterParams';
import useFilteredApplications from '../hooks/useFilteredApplications';

export default function ApplicationsPage() {
	const { applications, loading, error } = useApplications();
	const { status, query, setStatus, setQuery } = useFilterParams();
	const visible = useFilteredApplications(applications, { status, query });

	if (loading) return <p className="loading">Loading applications…</p>;
	if (error) return <p className="error">{error}</p>;

	// The summary counts the WHOLE list, not the filtered one: it answers "where
	// do I stand", which a filter should not change.
	return (
		<>
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

			<JobList applications={visible} emptyMessage="No applications match these filters." />
		</>
	);
}
