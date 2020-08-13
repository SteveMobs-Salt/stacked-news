import React, { useState } from 'react';

function SearchBar({setSearch}) {
    const [content, setContent] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        setSearch(content)
    }

    return (
        <div className="navbar-end">
            <div className="navbar-item">
                <div className="field">
                    <form onSubmit={event => handleSubmit(event)}>
                        <p className="control has-icons-left">
                            <input className="input" type="search"
                                placeholder="Search news"
                                onChange={event => setContent(event.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fa fa-search"></i>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;