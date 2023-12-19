import {useNavigate} from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();
    
  const navigateHome = () => {

    if((document.getElementById('problem').value).length <= 5){
      alert('The problem should be atleast 6 digits')
      throw new Error('The problem should be atleast 6 digits');
    }
    
    if((document.getElementById('description').value).length < 10){
      alert('The description should be atleast 10 digits')
      throw new Error('The description should be atleast 10 digits');
    }
    alert("Thanks for your response!")
    navigate('/');
  };
    return (
        <section id="login-page" className="auth">

            <div className="container">
                <h1>Contact us</h1>
                <label>What is the problem?</label>
                <input type="nickname" id='problem'/>

                <label >Description:</label>
                <textarea id='description'></textarea>
                <input type="submit" className="btn submit" value="Submit" onClick={navigateHome}/>
            </div>
    </section>
    );
}
