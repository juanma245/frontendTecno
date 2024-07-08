import { useState } from "react"

export default function Login(){

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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar el envío de datos, por ejemplo, enviarlos a un servidor
        console.log('Datos del formulario:', formData);
    };

    return(
        <>
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
            </form>
        </>
    )
}