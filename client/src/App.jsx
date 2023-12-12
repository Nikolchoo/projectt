import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Header from "./components/header/Header"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import EventList from './components/event-list/EventList';
import EventCreate from './components/event-create/EventCreate';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import EventDetails from './components/event-details/EventDetails';
import EventEdit from './components/event-edit/EventEdit';
import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from './components/guards/AuthGuard';

function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <div id="box">
                    <Header />

                    <Routes>
                        <Route path={Path.Home} element={<Home />} />
                        <Route path="/events" element={<EventList />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/events/:eventId" element={<EventDetails />} />

                        <Route element={<AuthGuard />}>
                            <Route path="/events/create" element={<EventCreate />} />
                            <Route path={Path.EventEdit} element={<EventEdit />} />
                            <Route path={Path.Logout} element={<Logout />} />
                        </Route>
                    </Routes>

                   
                </div>
            </AuthProvider>
        </ErrorBoundary>
    )
}

export default App
