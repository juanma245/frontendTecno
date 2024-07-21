import { useState, useEffect } from 'react'
import axios from 'axios'


export function User(){


    const [user, setUser] = useState({
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
            console.log("data")
        })
    },[]);

    const [mod, setMod] = useState(true)

    const changeMode = (e) => {
        e.preventDefault();
        setMod(!mod)
    }

    return(
        <>
            <section>
                <div>This should be a image</div>
                <form action="">
                    <input
                        value={user.user}
                        disabled = {mod}
                    ></input>
                    <input
                        value={user.name}
                        disabled = {mod} 
                    ></input>
                    <input
                        value={user.email}
                        disabled = {mod}
                    ></input>
                    <input
                        value={user.cell}
                        disabled = {mod}
                    ></input>
                    <input
                        value={user.address}
                        disabled = {mod}
                    ></input>
                    <button onClick={changeMode}>{mod ? "modificar" : "guardar"}</button>
                </form>
            </section>
        </>
    )
}