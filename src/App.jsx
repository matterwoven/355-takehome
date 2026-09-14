import SummaryBar from './components/SummaryBar';
import JobList from './components/JobList';
import { applications } from './applications';
import { byNewest } from './statuses';

/**
 * Stage 1: the tracker renders a fixed list of applications.
 *
 * Nothing here holds state. The list is sorted on the way through and the
 * summary counts are worked out from the same array, which is why they cannot
 * disagree with what is on screen.
 */
export default function App() {
	// Copy before sorting: sort() rearranges the array it is given, and that
	// array is the imported module — mutating it would change what every other
	// importer sees.
	const sorted = [...applications].sort(byNewest);

	return (
		<>
			<header className="site-header">
				<div className="container">
					<h1>Job Application Tracker</h1>
				</div>
			</header>

			<main className="container">
				<SummaryBar applications={sorted} />
				<div className="page-head">
					<h2>Applications</h2>
				</div>
				<JobList applications={sorted} />
			</main>
		</>
	);
}
