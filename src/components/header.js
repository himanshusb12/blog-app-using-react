import { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"><h3>MyBlogs</h3></a>
                <Link to="/add" className="btn btn-primary">Add blog</Link>
            </nav>
        );
    }
}
