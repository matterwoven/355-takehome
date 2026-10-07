import { applications } from './applications';
import ApplicationCards from './components/applicationCards';
import SummaryCards from './components/summaryCards';
/**
 * The starting point. Right now it dumps the raw data on the page so you can
 * see it is loading — replace all of this with your components.
 *
 * The stylesheet already has classes for everything you need, so you do not
 * have to write any CSS: container, site-header, summary, summary-tile,
 * job-list, job-card, badge, badge-applied (and one per status), page-head,
 * empty.
 */
export default function App() {
	let appliedCount = 0;
	let interviewingCount = 0;
	let offeredCount = 0;
	let rejectedCount = 0;
	let totalApplications = 0;

	for(var n of applications){
		if(n.status === "Applied".toLocaleLowerCase()) appliedCount++;
		if(n.status === "Interview".toLocaleLowerCase()) interviewingCount++
		if(n.status === "Offer".toLocaleLowerCase()) offeredCount++
		if(n.status === "Rejected".toLocaleLowerCase()) rejectedCount++
	}

	totalApplications = applications.length;

	return (
		<>
			<header className="site-header">
				<div className="container">
					<h1>Job Application Tracker</h1>
				</div>
			</header>
			<div className="container">
				<SummaryCards 
					totalApplications={applications.length}
					appliedCount={appliedCount}
					interviewingCount={interviewingCount}
					offeredCount={offeredCount}
					rejectedCount={rejectedCount}				
				></SummaryCards>
				<div className="page-head">
					<h2>Applications</h2>
				</div>
			</div>
			<ApplicationCards></ApplicationCards>
		</>
	);
}
