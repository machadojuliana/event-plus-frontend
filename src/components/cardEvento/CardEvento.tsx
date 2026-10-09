import {Link} from "react-router-dom";
import imagemPadrao from "../../assets/banner-3.png";
import "./CardEvento.css"

interface CardEventoProps{
    id: string;
    imagem?: string | null;
    categoria? : string;
    titulo: string;
    descricao: string;
}

function CardEvento({id, imagem, categoria, descricao, titulo}: CardEventoProps) {
    return(
        <article className="home-eventos-card">
                        <img src={imagem || imagemPadrao} alt={`Imagem do evento ${titulo}`} />
                        <span>{categoria || "Evento"}</span>
                        <h3>{titulo}</h3>
                        <p>{descricao}</p>
                        <Link to={`/Eventos/${id}`}>Ver evento</Link>

                    </article>
    )
    
}

export default CardEvento;