import axios from 'axios'
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export function Register(){

    const Navigate = useNavigate()

    const [formData, setFormData] = useState({
        usuario: '',
        emailRespaldo : '',
        nombreCompleto: '',
        contrasenia: ''

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
        axios.post('http://127.0.0.1:8000/users/register', formData, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            alert(response.data)
            Navigate("/login")

          })
          .catch(error => {
            console.error(error);
          });
    };

    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="usuario">User</label>
                    <input 
                        type="text" 
                        name="usuario" 
                        value={formData.usuario}
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor="nombreCompleto">Name</label>
                    <input 
                        type="text" 
                        name="nombreCompleto"
                        value={formData.nombreCompleto} 
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor="emailRespaldo">Email</label>
                    <input 
                        type="text" 
                        name="emailRespaldo"
                        value={formData.emailRespaldo} 
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor="constrasenia">Password</label>
                    <input 
                        type="password" 
                        name="contrasenia"
                        value={formData.contrasenia} 
                        onChange={handleChange}
                        />
                </div>
                <button type="submmit">Registrar</button>
            </form>

        </>
    )
}