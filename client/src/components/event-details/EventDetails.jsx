export default function EventDetails() {
    return (
        <section id="event-details">
            <h1>Event Details</h1>
            <div className="info-section">
                <div className="event-header">
                    <img className="event-img" src={"Event image"} alt={"Event title"} />
                    <h1>{"Title"}</h1>
                    <span className="levels">MaxCapacity: {"Event Max Capacity"}</span>
                    <p className="type">{"Event Catagory"}</p>
                </div>

                <p className="text">{"Event summanary"}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        
                    </ul>

                </div>

            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={""}>
                    <textarea name="comment" value={""} onChange={""} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}
