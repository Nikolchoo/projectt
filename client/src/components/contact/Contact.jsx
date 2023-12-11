function Submit () {
    alert("Thank you for your contact!")
}

export default function Contact() {

    return (
        <section id="login-page" className="auth">

            <div className="container">
                <h1>Contact us</h1>
                <label>What is the problem?</label>
                <input type="nickname"/>

                <label >Description:</label>
                <textarea></textarea>
                <input type="submit" className="btn submit" value="Submit" onClick={Submit}/>
            </div>
    </section>
    );
}
