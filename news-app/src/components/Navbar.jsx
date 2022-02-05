import { useState } from "react"
import { Link } from "react-router-dom"

// component bar navigation
function Navbar(props) {
    const [search, setSearch] = useState('')

    function onChangeSearch(event) {
        setSearch(event.target.value)
    }

    function submitSearch(event) {
        props.getSearch(search)
    }

    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-sm navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/news" className="nav-link" >News</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sport" className="nav-link" >Sport</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tech" className="nav-link">Tech</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/travel" className="nav-link">Travel</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <input onChange={onChangeSearch} value={search} className="form-control me-2" type="text" placeholder="Search" aria-label="Search" />
                            <Link to="/search" onClick={submitSearch} className="btn btn-light">Search</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar