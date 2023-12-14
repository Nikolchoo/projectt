import {useNavigate} from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();

  const navigateHome = () => {
    alert("Thanks for your response!")
    navigate('/');
  };
    return (
        <section id="login-page" className="auth">

            <div className="container">
                <h1>Contact us</h1>
                <label>What is the problem?</label>
                <input type="nickname"/>

                <label >Description:</label>
                <textarea></textarea>
                <input type="submit" className="btn submit" value="Submit" onClick={navigateHome}/>
            </div>
    </section>
    );
}
