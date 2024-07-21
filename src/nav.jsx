import { NavLink, Link } from 'react-router-dom'

export function NavComponent(){

    return(
        <>
            <NavLink>
                <ul>
                    <li><Link to={"/login"}>Log in</Link></li>
                    <li><Link to={"/singin"}>Sing in</Link></li>
                    <li><Link to={"/user"}>User</Link></li>
                </ul>
            </NavLink>
        </>
    )
}