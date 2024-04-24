import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return(
        <>
            <nav >
                <Link to="/"><p>CRUD APP</p></Link>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                </ul>
            </nav>
        </>
    );
}
export default Header;