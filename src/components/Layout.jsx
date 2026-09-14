import { NavLink, Outlet } from 'react-router-dom';

/**
 * The frame every page renders inside: title, navigation, container.
 *
 * A layout route rather than a component each page imports — the header is
 * rendered once and stays mounted as the Outlet swaps pages beneath it.
 */
export default function Layout() {
	// NavLink hands its own active state to className, which is why this is a
	// function rather than a string.
	const linkClass = ({ isActive }) => (isActive ? 'active' : '');

	return (
		<>
			<header className="site-header">
				<div className="container">
					<h1>Job Application Tracker</h1>
					<nav>
						<NavLink to="/" end className={linkClass}>
							Applications
						</NavLink>
					</nav>
				</div>
			</header>
			<main className="container">
				<Outlet />
			</main>
		</>
	);
}
