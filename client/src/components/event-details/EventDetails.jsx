import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as eventService from '../../services/eventService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import reducer from './commentReducer';
import useForm from '../../hooks/useForm';
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";



export default function EventDetails() {
    const navigate = useNavigate();
    const { email, userId,isAuthenticated } = useContext(AuthContext);
    const [event, setEvent] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const { eventId } = useParams();

    useEffect(() => {
        eventService.getOne(eventId)
            .then(setEvent);

        commentService.getAll(eventId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
    }, [eventId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            eventId,
            values.comment
        );

        newComment.owner = { email };
        if((document.getElementById('comment').value).length <= 5){
          alert('The category should be atleast 6 digits')
          throw new Error('The title should be atleast 4 digits');
      }
        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    
    const [activeBtn, setActiveBtn] = useState("none");

    const handleLikeClick = () => {
        if (activeBtn === "none") {
          setLikeCount(likeCount + 1);
          setActiveBtn("like");
          return;
        }
     
        if (activeBtn === 'like'){
          setLikeCount(likeCount - 1);
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "dislike") {
          setLikeCount(likeCount + 1);
          setDislikeCount(dislikeCount - 1);
          setActiveBtn("like");
        }
      };
      const handleDisikeClick = () => {
        if (activeBtn === "none") {
          setDislikeCount(dislikeCount + 1);
          setActiveBtn("dislike");
          return;
        }
       
        if (activeBtn === 'dislike'){
          setDislikeCount(dislikeCount - 1);
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "like") {
          setDislikeCount(dislikeCount + 1);
          setLikeCount(likeCount - 1);
          setActiveBtn("dislike");
        }
      };
    

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${event.title}`);

        if (hasConfirmed) {
            await eventService.remove(eventId);

            navigate('/events');
        }
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

    return (
        <section id="event-details">
            <h1>Event Details</h1>
            <div className="info-section">
                <div className="event-header">
                    <img className="event-img" src={event.imageUrl} alt={event.title} />
                    <h1>{event.title}</h1>
                    <span className="levels">Capacity: {event.maxLevel}</span>
                    <p className="type">{event.category}</p>
                </div>

                <p className="text">{event.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {userId === event._ownerId && (
                    <div className="buttons">
                        <Link to={pathToUrl(Path.EventEdit, { eventId })} className="button">Edit</Link>
                        <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
                )}
                {(!(userId === event._ownerId) && isAuthenticated) && (
                    <div className="btn-container">
                    <button
                      className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
                      onClick={handleLikeClick}
                    >
                      Like 
                    </button>
                 
                    <button
                      className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
                      onClick={handleDisikeClick}
                    >
                      Dislike 
                    </button>
                  </div>
                )}
            </div>
            {isAuthenticated && (
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={onSubmit}>
                        <textarea name="comment" id="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            )}
        </section>
    );
}
