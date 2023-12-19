import { useContext } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

export default function Register() {
    const { registerSubmitHandler,isAuthenticated} = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });
    if(isAuthenticated){
        return (
            <Routes>
                <Route path="/"></Route>
            </Routes>
        )
    }
    function ErrorCheck(){
        if((document.getElementById('register-password').value).length < 6){
            alert('The password should be atleast 6 digits')
            throw new Error('');
        }

        if(document.getElementById('register-password').value !== document.getElementById('confirm-password').value){
            alert('The passwords should match!')
            throw new Error('');
        }
    }
    console.log("problem");
    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Email]}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.ConfirmPassword]}
                    />

                    <input className="btn submit" type="submit" value="Register" onClick={ErrorCheck}/>

                    <p className="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
