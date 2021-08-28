import { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><h3>MyBlogs</h3></a>
            </nav>
        );
    }
}
