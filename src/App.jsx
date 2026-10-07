import { applications } from './applications';
import ApplicationCards from './components/applicationCards';
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
				<div className='summary'>
					<div className="summary-tile">
						<h1 className='count'>{totalApplications}</h1>
						<h1 className='label'>TOTAL</h1>
					</div>
					<div className="summary-tile">
						<h1 className='count'>{appliedCount}</h1>
						<h1 className='label'>APPLIED</h1>
					</div>
					<div className="summary-tile">
						<h1 className='count'>{interviewingCount}</h1>
						<h1 className='label'>INTERVIEWING</h1>
					</div>
					<div className="summary-tile">
						<h1 className='count'>{offeredCount}</h1>
						<h1 className='label'>OFFER</h1>
					</div>
					<div className="summary-tile">
						<h1 className='count'>{rejectedCount}</h1>
						<h1 className='label'>REJECTED</h1>
					</div>
				</div>
				<div className="page-head">
					<h2>Applications</h2>
				</div>
			</div>
			<ApplicationCards></ApplicationCards>
		</>
	);
}
