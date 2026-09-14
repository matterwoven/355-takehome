import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ApplicationsPage from './pages/ApplicationsPage';
import ApplicationDetailPage from './pages/ApplicationDetailPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Stage 3: every page in the app, and the frame they share.
 *
 * Layout is a LAYOUT ROUTE — the header renders once and stays mounted while
 * the Outlet swaps pages beneath it. The `*` route matters: without it a typo
 * in the address bar renders a blank page with no error.
 */
export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<ApplicationsPage />} />
				<Route path="applications/:id" element={<ApplicationDetailPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}
