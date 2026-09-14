import { Link } from 'react-router-dom';

/** The catch-all route. Without one, a typo in the URL renders a blank page. */
export default function NotFoundPage() {
	return (
		<div className="empty">
			<h2>Page not found</h2>
			<p>That page does not exist.</p>
			<Link className="btn" to="/">
				Back to applications
			</Link>
		</div>
	);
}
