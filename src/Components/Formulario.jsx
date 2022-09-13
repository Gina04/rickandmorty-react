import { useState } from "react";
import styles from "../Styles/app.module.css"

const Formulario = () => {

    const[username, setUserName] = useState("");
    const[email, setEmail] = useState("");
    const[textarea, setTextArea] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault(); // cancela por defecto la funcion del formulario

    }
    return (
        //cuando le haga onSubmit al formulario 
        //ejecuto una funcion
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <input
                type="text"
                autoComplete="off"
                name="username"
                placeholder="Username"
                value={username} // controlo el valor que va a tener
                onChange={(e)=> setUserName(e.target.value)} //nuevo valor que se va a generar?
            />
        
            <input 
            type="email"
            name="email"
            placeholder="Insert here your Email"
            value={email}
            onChange={(e)=> setUserName(e.target.value)}

            />
            <textarea 
            rows="3"
            placeholder="Insert here your comment"
            
            />
            <button type="submit">Sign In</button>
        </form>


    )
}

export default Formulario;