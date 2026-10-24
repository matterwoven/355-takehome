export default function SearchBar({selected, setSelected, search, setSearch}) {
    
    return (
        <div className="filters">
            <button 
            onClick={() => setSelected('all')}
            className={selected === 'all' ? 'active' : ''}
            >All</button>
            <button 
            onClick={() => setSelected('applied')}    
            className={selected === 'applied' ? 'active' : ''} 
            >Applied</button>
            <button 
            onClick={() => setSelected('interviewing')}
            className={selected === 'interviewing' ? 'active' : ''}
            >Interviewing</button>
            <button 
            onClick={() => setSelected('offer')}       
            className={selected === 'offer' ? 'active' : ''}
            >Offer</button>
            <button 
            onClick={() => setSelected('rejected')}  
            className={selected === 'rejected' ? 'active' : ''}  
            >Rejected</button>
            <input 
                value={search}
                placeholder="Search company or role..."
                type="text"
                onChange={(e) => setSearch(e.target.value)}
            >
        
            </input>
        </div>
    )
}