import { useEffect, useState } from "react";
import withAuth from "../../HOC/withAuth";
import * as eventService from '../../services/eventService';
import LatestEvent from "./latest-event/LatestEvent";

function Home({
    _id,
    accessToken,
    email,
}) {
    const [latestEvents, setLatestEvents] = useState([]);

    useEffect(() => {
        eventService.getLatest()
            .then(result => setLatestEvents(result));
    }, [])

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new events in Sofia</h2>
                <img src="./images/partyBackground.jpg" alt="hero" className="welcome-image"/> 
            </div>
                    

            <div id="home-page">
                <h1>Latest Events</h1>

                {latestEvents.slice(0).reverse().map(event => <LatestEvent {...event} />)}

                {!latestEvents.length && <p className="no-articles">No events yet</p>}

               
            </div>
            <p className="emailDown">{email}</p>
        </section>
    );
}

const EnhancedHome = withAuth(Home);

export default EnhancedHome;
