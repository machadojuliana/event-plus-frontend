import "./Header.css"

import { Link, NavLink } from "react-router-dom";
import logoEvent from "../../assets/logo-event.svg"

function Header() {
    return(
        <header className="header">
            <div className="header-conteudo">
                <Link to="/Home">
                <img src= {logoEvent} alt="Logo Event+" />
                </Link>
                

                <nav>
                    <NavLink to="/Home">Home</NavLink>
                    <NavLink to="/Eventos">Eventos</NavLink>
                    <NavLink to="/Usuarios">Usuarios</NavLink>
                    <Link to= "/Home#contato">Contatos</Link>
                </nav>

                <Link to="/Login"> Entrar</Link>
            </div>
        </header>
    )
}

export default Header;