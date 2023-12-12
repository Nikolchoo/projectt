import { Link } from "react-router-dom";
import Path from "../../../paths";
import { pathToUrl } from "../../../utils/pathUtils";

export default function LatestEvent({
    _id,
    imageUrl,
    title,
    category,
}) {
    return (
        <div className="event">
            <div className="image-wrap">
                <img src={imageUrl} />
            </div>
            <h3>{title}</h3>
            <div className="rating">
                <span>Category: {category}</span>
            </div>
            <div className="data-buttons">
                <Link to={pathToUrl(Path.EventDetails, { eventId: _id })} className="btn details-btn">Details</Link>
            </div>
        </div>
    );
}
