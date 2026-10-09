import bannerEvento1 from "../../assets/banner-1.png"
import bannerEvento2 from "../../assets/banner-2.png"
import bannerEvento3 from "../../assets/banner-3.png"
import visaoImg from "../../assets/visao-img.png"

import Header from "../../components/Header/Header"
import Footer from "../../components/footer/Footer"
import CardEvento from "../../components/cardEvento/CardEvento"

import "./Home.css"

function Home() {
    const eventos = [
        {
            id: "1",
            imagem: bannerEvento1,
            titulo: "Evento teste",
            descricao: "Teste testando uuuuuu",
            categoria: "Tecnologia"
        },
        {
            id: "2",
            imagem: bannerEvento2,
            titulo: "Workshop de Desenvolvimento",
            descricao: "Pratique conhecimento com atividades guiadas",
            categoria: "Tecnologia"
        },
        {
            id: "3",
            imagem: bannerEvento3,
            titulo: "Meetup de IA",
            descricao: "Discussoes sobre a aplicação da ia no dia a dia.",
            categoria: "Meetup"
        }
    ]

    return (
        <>
        <Header/>
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
                {eventos.map((Eventos) => (
                    <CardEvento
                    key={Eventos.id}
                    id={Eventos.id}
                    titulo={Eventos.titulo}
                    imagem={Eventos.imagem}
                    descricao={Eventos.descricao}
                    categoria={Eventos.categoria}
/>
                )
            )}
</div>
                    
                    {/* <article className="home-eventos-card">
                        <img src={bannerEvento2} alt="Workshop de Desenvolvimento" />
                        <span>Workshop</span>
                        <div className="home-eventos-card-info">
                        <h3>Workshop de Desenvolvimento</h3>
                        <p>Pratique desenvolvimento com atividades guiadas.</p>
                        <button type="button">Ver evento</button>
</div>
                    </article> */}
                    
               
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
                <iframe 
  src="https://www.google.com/maps/embed?pb=..." 
  title="Mapa da localização" 
/>
                </div>
            </section>
            
            
        </main>
        <Footer/>
        </>
    );

}

export default Home;