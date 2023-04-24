import React from 'react';
import Typed from 'react-typed';

const AboutOne = () => {
    return (
        <div id="aboutus" className="rwt-about-area rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src="./images/about/about-1.png" alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="section-title">
                                <h2 className="title">SOBRE NÓS <br /> {" "}
                                    <Typed className="theme-gradient"
                                        strings={[
                                            "Consulting.",
                                            "Innovation.",
                                            "Technology.",
                                            "Future.",
                                        ]}
                                        typeSpeed={80}
                                        backSpeed={5}
                                        backDelay={1000}
                                        loop
                                    />
                                </h2>
                                <p>Nós somos uma consultoria especializada em tecnologia e inovação, oferecendo soluções personalizadas para atender às necessidades específicas dos nossos clientes. Com uma equipe de especialistas altamente qualificados, utilizamos as mais recentes tecnologias e práticas inovadoras para ajudar as empresas a otimizar seus processos, aumentar a eficiência e melhorar sua vantagem competitiva.</p>
                                <p>Nossa abordagem centrada no cliente garante que trabalhemos em estreita colaboração com nossos clientes, entendendo suas necessidades e fornecendo soluções sob medida que os ajudem a alcançar seus objetivos de negócios. </p>
                                <div className="read-more-btn mt--40">
                                    <a className="btn-default" href="/contact"><span>Quero Saber Mais</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutOne
