
export default function EventListItem() {
    return (
        <div className="allEvents">
            <div className="allEvents-info">
                <img src={"image"} />
                <h6>{"category"}</h6>
                <h2>{"title"}</h2>
                <Link to={`/events/${"id"}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}
