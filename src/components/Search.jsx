import React from "react";
import "../styles.css";
function Search(){
    return (
        <nav className="navbar navbar-light bg-light">
        <form className="container w-75">
            <div className="input-group">
                <input type="text" className="form-control me-2" placeholder="Enhanced By Google" aria-label="Username"
                    aria-describedby="basic-addon1"/>
                <button className="btn btn-sm btn-outline-secondary" type="button">Search</button>
            </div>
        </form>
    </nav>
    );
}
export default Search;