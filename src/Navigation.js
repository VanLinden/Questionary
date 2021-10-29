import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const MainNavigation = props => {
    return (
    <header className="navigation">
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Questionary</NavLink>
                </li>
                <li>
                    <NavLink to="/Viewing">Viewing</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default MainNavigation;