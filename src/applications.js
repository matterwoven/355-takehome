/**
 * The applications the tracker starts with.
 *
 * A plain module for now — stage 2 replaces this import with a fetch, and
 * nothing else about the components has to change, because they only ever
 * receive an array of applications as a prop.
 */
export const applications = [
	{
		id: 'app-001',
		company: 'Northwind Logistics',
		role: 'Junior Frontend Developer',
		status: 'interview',
		appliedOn: '2026-09-02',
		source: 'LinkedIn',
		url: 'https://example.com/jobs/northwind-frontend',
		notes: 'Phone screen went well. Technical round is a live React exercise.'
	},
	{
		id: 'app-002',
		company: 'Cascade Health Systems',
		role: 'Software Engineer I',
		status: 'applied',
		appliedOn: '2026-09-05',
		source: 'Company site',
		url: 'https://example.com/jobs/cascade-swe1',
		notes: ''
	},
	{
		id: 'app-003',
		company: 'Rainier Data Group',
		role: 'Full Stack Developer',
		status: 'rejected',
		appliedOn: '2026-08-21',
		source: 'Indeed',
		url: 'https://example.com/jobs/rainier-fullstack',
		notes: 'Wanted three years of production experience.'
	},
	{
		id: 'app-004',
		company: 'Puget Sound Software',
		role: 'React Developer',
		status: 'offer',
		appliedOn: '2026-08-14',
		source: 'Referral',
		url: 'https://example.com/jobs/puget-react',
		notes: 'Offer received. Need to respond by the 20th.'
	},
	{
		id: 'app-005',
		company: 'Emerald City Retail',
		role: 'Web Developer',
		status: 'applied',
		appliedOn: '2026-09-09',
		source: 'LinkedIn',
		url: 'https://example.com/jobs/emerald-web',
		notes: ''
	},
	{
		id: 'app-006',
		company: 'Olympia Civic Tech',
		role: 'Frontend Engineer',
		status: 'interview',
		appliedOn: '2026-08-28',
		source: 'Handshake',
		url: 'https://example.com/jobs/olympia-frontend',
		notes: 'Second interview scheduled for next Tuesday.'
	},
	{
		id: 'app-007',
		company: 'Tacoma Freight Analytics',
		role: 'Junior Developer',
		status: 'rejected',
		appliedOn: '2026-08-11',
		source: 'Indeed',
		url: 'https://example.com/jobs/tacoma-junior',
		notes: ''
	},
	{
		id: 'app-008',
		company: 'Kent Valley Robotics',
		role: 'UI Developer',
		status: 'applied',
		appliedOn: '2026-09-11',
		source: 'Career fair',
		url: 'https://example.com/jobs/kent-ui',
		notes: 'Met their team at the Green River career fair.'
	},
	{
		id: 'app-009',
		company: 'Bellevue Fintech',
		role: 'Associate Software Engineer',
		status: 'interview',
		appliedOn: '2026-09-01',
		source: 'LinkedIn',
		url: 'https://example.com/jobs/bellevue-associate',
		notes: 'Take-home exercise due Friday.'
	},
	{
		id: 'app-010',
		company: 'Renton Municipal IT',
		role: 'Web Applications Developer',
		status: 'applied',
		appliedOn: '2026-09-08',
		source: 'Government jobs board',
		url: 'https://example.com/jobs/renton-webapps',
		notes: ''
	},
	{
		id: 'app-011',
		company: 'Auburn Manufacturing Co',
		role: 'Internal Tools Developer',
		status: 'offer',
		appliedOn: '2026-08-19',
		source: 'Referral',
		url: 'https://example.com/jobs/auburn-tools',
		notes: 'Small team, mostly React and internal dashboards.'
	},
	{
		id: 'app-012',
		company: 'Federal Way Media',
		role: 'Frontend Developer',
		status: 'rejected',
		appliedOn: '2026-08-25',
		source: 'Company site',
		url: 'https://example.com/jobs/fedway-frontend',
		notes: 'Position was filled internally.'
	}
];
