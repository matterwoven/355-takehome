import { applications } from "../applications"

export default function ApplicationCards(){
    return (
        <main className="container">
				<ul className='job-list'>
					{
                    
                    [...applications].sort().map(element => {
						return (
						<li key={element.id} className='job-card'>
							<div className='grow'>
								<h3>{element.role}</h3>
								<div className='company'>{element.company}</div>
								{element.source && <div className='meta'>Applied {element.appliedOn} · via {element.source}</div>}
								{element.notes && <p className='note'>{element.notes}</p>}
							</div>
							<span className={`badge badge-${element.status}`}>{element.status}</span>
						</li>
						)
					})}
				</ul>
			</main>
    )
}