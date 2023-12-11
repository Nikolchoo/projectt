import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to="/">Events</Link></h1>
            <nav>
                <Link to="/events">All events</Link>
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/events/create">Create Event</Link>
                        <Link to="/contact">Contacts</Link>
                        <Link to="/logout">Logout</Link>
                        <span>| {username}</span>
                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/contact">Contacts</Link>
                    </div>
                )}
                
            </nav>
        </header>
    );
}
