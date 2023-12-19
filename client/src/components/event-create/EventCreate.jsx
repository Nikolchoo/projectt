import { useNavigate } from 'react-router-dom';

import * as eventService from '../../services/eventService';

export default function EventCreate() {
    const navigate = useNavigate();
    
    const createEventSubmitHandler = async (e) => {
        e.preventDefault();

        if((document.getElementById('title').value).length <= 4){
            alert('The title should be atleast 5 digits!')
            throw new Error('The title should be atleast 4 digits');
        }

        if((document.getElementById('category').value).length <= 2){
            alert('The category should be atleast 3 digits')
            throw new Error('The title should be atleast 4 digits');
        }
       
        if((document.getElementById('maxLevel').value) <= 9){
            alert('The capacity should be atleast 10 people!')
            throw new Error('The title should be atleast 4 digits');
        }
        
        if(!(document.getElementById('imageUrl').value).includes("http")){
            alert('The imageUrl should include http or https!')
            throw new Error('The title should be atleast 4 digits');
        }

        if((document.getElementById('summary').value).length <= 19){
            alert('The summary should be atleast 20 digits')
            throw new Error('The title should be atleast 4 digits');
        }
        const eventData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await eventService.create(eventData);

            navigate('/events');
        } catch (err) {
            console.log(err);
        }
        
    }
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createEventSubmitHandler}>
                <div className="container">
                    <h1>Create Events</h1>
                    <label htmlFor="leg-title">Event title:</label>
                    <input type="text" id="title" name="title"   placeholder="Enter event title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter event category..." />

                    <label htmlFor="levels">Capacity:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="event-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Event"/>
                </div>
            </form>
        </section>
    );
}
