import { Link } from "react-router";

function Header() {
    return (
        <div className = "header">
            <h1>My Blog</h1>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}

export default Header;