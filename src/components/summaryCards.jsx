export default function SummaryCards({appliedCount, interviewingCount, offeredCount, rejectedCount, totalApplications}){
    return (
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
    )
}