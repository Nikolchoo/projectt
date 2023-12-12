import { Link } from "react-router-dom";

export default function EventListItem({
    _id,
    title,
    category,
    imageUrl,
}) {
    return (
        <div className="allEvents">
            <div className="allEvents-info">
                <img src={imageUrl} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/events/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}
