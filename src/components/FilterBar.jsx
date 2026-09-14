import { STATUSES, STATUS_LABELS } from '../statuses';

/**
 * Status chips and a search box.
 *
 * Controlled: it holds no state of its own and reports every change upward.
 * In stage 3 the values live in the URL, so this component did not have to
 * change when they moved out of useState — which is the point of keeping it
 * controlled.
 */
export default function FilterBar({ status, query, onStatusChange, onQueryChange }) {
	return (
		<div className="filters">
			<button
				type="button"
				className={`chip ${status === 'all' ? 'active' : ''}`}
				onClick={() => onStatusChange('all')}
			>
				All
			</button>
			{STATUSES.map((value) => (
				<button
					key={value}
					type="button"
					className={`chip ${status === value ? 'active' : ''}`}
					onClick={() => onStatusChange(value)}
				>
					{STATUS_LABELS[value]}
				</button>
			))}
			<input
				type="search"
				value={query}
				placeholder="Search company or role…"
				aria-label="Search applications"
				onChange={(event) => onQueryChange(event.target.value)}
			/>
		</div>
	);
}
