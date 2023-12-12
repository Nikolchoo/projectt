import { useNavigate, useParams } from 'react-router-dom';

import * as eventService from '../../services/eventService';
import { useEffect, useState } from 'react';

export default function EventEdit() {
    const navigate = useNavigate();
    const { eventId } = useParams();
    const [event, setEvent] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });

    useEffect(() => {
        eventService.getOne(eventId)
            .then(result => {
                setEvent(result);
            });
    }, [eventId]);

    const editEventSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await eventService.edit(eventId, values);

            navigate('/events');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setEvent(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editEventSubmitHandler}>
                <div className="container">
                    <h1>Create Event</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={event.title} onChange={onChange} placeholder="Enter event title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={event.category} onChange={onChange} placeholder="Enter event category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" value={event.maxLevel} onChange={onChange} min="1" placeholder="1" />

                    <label htmlFor="event-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={event.imageUrl} onChange={onChange} placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" value={event.summary} onChange={onChange} id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Event" />
                </div>
            </form>
        </section>
    );
}
