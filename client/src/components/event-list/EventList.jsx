import { useEffect, useState } from 'react';

import * as eventService from '../../services/eventService';
import EventListItem from './event-list-item/EventListItem';

export default function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        eventService.getAll()
            .then(result => setEvents(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Events</h1>

            {events.map(event => (
                <EventListItem key={event._id} {...event} />
            ))}

            {events.length === 0 && (
                <h3 className="no-articles">No events yet</h3>
            )}
        </section>
    );
}
