import { applications } from './applications';

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
			<div className="filters">
				<div className="chip">
					<h3 className="badge">{totalApplications}</h3>
					<p>TOTAL</p>
				</div>
				<div className="chip">
					<p className="badge">{appliedCount}</p>
					<p>APPLIED</p>
				</div>
				<div className="chip">
					<p className="badge">{interviewingCount}</p>
					<p>INTERVIEWING</p>
				</div>
				<div className="chip">
					<p className="badge">{offeredCount}</p>
					<p>OFFER</p>
				</div>
				<div className="chip">
					<p className="badge">{rejectedCount}</p>
					<p>REJECTED</p>
				</div>
			</div>
			<main className="container">
				<p>{applications.length} applications loaded.</p>
				<pre>{JSON.stringify(applications[0], null, 2)}</pre>
			</main>
			{/* <div>
				{applications.array.forEach(element => {
				<p>ddd</p>
				})}
			</div> */}
		</>
	);
}
