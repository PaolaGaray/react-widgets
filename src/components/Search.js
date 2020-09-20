import React, { useState } from 'react'

const Search = () => {
    const [ query, setQuery ] = useState('');

    return (
        <div className="search-bar ui segment">
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        className="input"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}>
                    </input>
                </div>
            </div>
        </div>
    )
}

export default Search