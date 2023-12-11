export default function EventEdit() {
    
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editEventSubmitHandler}>
                <div className="container">
                    <h1>Create Event</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={"Event title"} onChange={""} placeholder="Enter event title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={"Event catagory"} onChange={""} placeholder="Enter event category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" value={"Event capacity"} onChange={""} min="1" placeholder="1" />

                    <label htmlFor="event-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={"Event image"} onChange={""} placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" value={"summanary"} onChange={""} id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Event" />
                </div>
            </form>
        </section>
    );
}
