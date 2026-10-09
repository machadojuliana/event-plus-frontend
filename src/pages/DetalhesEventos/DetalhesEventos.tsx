import { Link, useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";

import "./DetalhesEventos.css"

function DetalhesEventos() {
    const {id = ""} = useParams();

    return(
        <>
        <Header/>
        <main>
            <Link to="/Eventos" >Voltar aos eventos</Link>
            <h1>Detalhes do eveto</h1>
            <p>Id recebido:</p>
        </main>
        <Footer/>
        </>
    )
    
}

export default DetalhesEventos;