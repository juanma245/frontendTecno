import { useState, useEffect } from 'react'
import axios from 'axios'


export function User(){


    const [user, setUser] = useState({
        id : '',
        user : '',
        name : '',
        email : '',
        cell : '',
        address : ''
    })
    

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/users/user',
            {headers : {
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`

            }})
        .then(response =>{
            setUser(response.data)
        })
    },[]);

    const [mod, setMod] = useState(true)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
            });
    };

    const changeMode = (e) => {
        e.preventDefault();
        if (mod){
            setMod(false)
        }
        else{
            setMod(true)
        }
        
    }

    return(
        <>
            <section>
                <div>This should be a image</div>
                <form action="">
                    <input
                        name = "user"
                        value={user.user}
                        disabled = {mod}
                        onChange={handleChange}
                    ></input>
                    <input
                        name = "name"
                        value={user.name}
                        disabled = {mod}
                        onChange={handleChange} 
                    ></input>
                    <input
                        name = "email"
                        value={user.email}
                        disabled = {mod}
                        onChange={handleChange}
                    ></input>
                    <input
                        name = "cell"
                        value={user.cell}
                        disabled = {mod}
                        onChange={handleChange}
                    ></input>
                    <input
                        name = "address"
                        value={user.address}
                        disabled = {mod}
                        onChange={handleChange}
                    ></input>
                    <button onClick={changeMode}>{mod ? "modificar" : "guardar"}</button>
                </form>
            </section>
        </>
    )
}