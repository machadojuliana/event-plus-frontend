import logoEvent from "../../assets/logo-event.svg"
import bannerEvento1 from "../../assets/banner-1.png"
import bannerEvento2 from "../../assets/banner-2.png"
import bannerEvento3 from "../../assets/banner-3.png"
import visaoImg from "../../assets/visao-img.png"

import Carrossel from "../../components/carrossel/Carrossel"

import "./Home.css"

function Home() {
    return (
        <>
        <header className="home-header">
            <div className="home-header-conteudo">
                <img src= {logoEvent} alt="Logo Event+" />

                <nav>
                    <a href="#inicio">Home</a>
                    <a href="#eventos">Eventos</a>
                    <a href="#usuarios">Usuarios</a>
                    <a href="#contato">Contatos</a>
                </nav>

                <button>Entrar</button>
            </div>
        </header>
        <main>
            <section id="inicio" className="home-banner">
                <img src= {bannerEvento1} alt="" />
            </section>

        <section className="home-visao">
            <div className="home-visao-container"> 
            <img src={visaoImg} alt="Pessoas confraternizando" />
            <div className="home-visao-texto">
            <h1>Visão</h1>
            <p>A EventPlus organiza eventos e informações em uma interface direta, facilitabdo a consulta da agenda e a participação dos usuários.</p>
            </div>
            </div>
        </section>

        <section id="eventos" className="home-eventos-titulo">
            <div className="titulo">
            <h2>Próximos Eventos</h2>
            <hr />
            </div>
                                             
            <div className="home-eventos-lista">
                <article className="home-eventos-card">
                    <img src={bannerEvento1} alt="Evento de Tecnologia" />
                    <span>Tecnologia</span>
                    <div className="home-eventos-card-info">
                    <h3>Evento de Tecnologia</h3>
                    <p>Conheça novidades e tendencias do setor</p>
                    <button type="button">Ver evento</button>
</div>
                    </article>
                    <article className="home-eventos-card">
                        <img src={bannerEvento2} alt="Workshop de Desenvolvimento" />
                        <span>Workshop</span>
                        <div className="home-eventos-card-info">
                        <h3>Workshop de Desenvolvimento</h3>
                        <p>Pratique desenvolvimento com atividades guiadas.</p>
                        <button type="button">Ver evento</button>
</div>
                    </article>
                    <article className="home-eventos-card">
                        <img src={bannerEvento3} alt="Meetup de inteligencia artificial" />
                        <span>Meetup</span>
                        <div className="home-eventos-card-info">
                        <h3>Meetup de inteligencia artificial</h3>
                        <p>Discussões sobre aplicações de IA.</p>
                        <button type="button">Ver evento</button>
</div>
                    </article>
                </div>
            </section>

            <section id="contato" className="home-contato">
                <div className="home-contato-container"> 
                <div className="home-contato-titulo">
                    <h2>Contato</h2>
                </div>
                <div className="home-contato-conteudo">
                    <p>Rua Niteroi, 180 - Centro</p>
                    <p>São Caetano do Sul - SP</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.9389370292347!2d-46.5722525458668!3d-23.611851536864766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d11c031c57f%3A0x8f79f71018065a16!2sSENAI%20S%C3%A3o%20Caetano%20do%20Sul%20-%20Cyber%20e%20IA!5e0!3m2!1spt-BR!2sbr!4v1791222359039!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
                </div>
            </section>
            
            <footer className="home-footer">
                <p>Escola Senai de Informatica - 2026</p>
            </footer>
        </main>
        </>
    );

}

export default Home;