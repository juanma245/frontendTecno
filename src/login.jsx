import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./css/login.css"


export function Login(){

    const Navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/login', formData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
          .then(response => {
            console.log(response.data);
            let access = response.data.access_token
            console.log(access)
            localStorage.setItem('access-token',access)
            Navigate('/products')
          })
          .catch(error => {
            console.error(error);
          });
    };

    const moveSing = () => {

        Navigate('/singin')
    }

    return(
        <>
            <main className="loginContent">
                <section className="auxContent">
                    <div className="aux">
                        contenido
                    </div>
                </section>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <div className="loginCamp">
                        <label htmlFor = "username" >Username </label>
                        <input 
                            type="text" 
                            name="username" 
                            value={formData.username}
                            onChange={handleChange}/>
                    </div>
                    <div className="loginCamp">
                        <label htmlFor = "password" >password </label>
                        <input 
                            type="password" 
                            name="password" 
                            value={formData.password}
                            onChange={handleChange}/>
                    </div>
                    <button type="submmit">Login</button>
                    <button onClick={moveSing}>Sing in</button>
                </form>
            </main>
        </>
    )
}