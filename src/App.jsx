import SummaryBar from './components/SummaryBar';
import JobList from './components/JobList';
import { applications } from './applications';
import { byNewest } from './statuses';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';

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
	const [url, setUrl] = useState('http://localhost:5173/applications.json');
	const [data, setData] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState('');
	const [selected, setSelected] = useState('none');
	const term = search.trim('').toLowerCase();

	useEffect(()=> {
		const controller = new AbortController();

		async function fetchData() {
			try {
				setLoading(true);
				setError(null);
				const connection = await fetch(url, {signal: controller.signal});
				if(!connection.ok) {
					throw new Error(`${connection.status}`);
				}
				const result = await connection.json();
				setData(result);
				setLoading(false);
			}
			catch (err) {
				if(err.name === 'AbortError') return;
				setError(err.message);
				setLoading(false);
			}
		}
		
		fetchData();
		return () => controller.abort();
	}, [url]);

	const visible = sorted.filter((app) => {
		const matches = selected === 'all' || app.status === selected;
		const isMatching = term === '' || app.company.toLowerCase().includes(term) || app.role.toLowerCase().includes(term);
		return matches && isMatching;
	});
	let content;
	if(loading) {
		content = (<p className="loading">Loading Applications</p>);
	} else if (error) {
		content = (<p className='error'>Could not load: {error}</p>);
	} else if (applications.length === 0) {
		content = (<p className="empty">No applications yet</p>);
	} else {
		content = (<JobList applications={visible}/>)
	}

	return (
		<>
			<header className="site-header">
				<div className="container">
					<h1>Job Application Tracker</h1>
				</div>
			</header>

			<main className="container">
				<SearchBar 
					selected={selected}
					setSelected={setSelected}
					search={search}
					setSearch={setSearch}
				/>
				<SummaryBar applications={sorted} />
				<div className="page-head">
					<h2>Applications</h2>
				</div>
				{content}
			</main>
		</>
	);
}
