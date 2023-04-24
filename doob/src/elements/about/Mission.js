import React from 'react';
import Typed from 'react-typed';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AccordionOne from '../accordion/AccordionOne';

const mission = () => {
    return (
        <div id="mission" className="rn-company-mission-are rn-section-gap">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-6">
                        <div className="mission-title">
                            <h2 className="title">Nossa Missão<br /> {" "}
                                <Typed className="theme-gradient"
                                    strings={[
                                        "Consulting.",
                                        "Vision.",
                                        "Agency.",
                                        "Technology.",
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={5}
                                    backDelay={1000}
                                    loop
                                />
                            </h2>
                            <p>A missão da Appvalue é transformar a maneira como as empresas operam e crescem em um mundo em constante mudança. Acreditamos que a tecnologia é a chave para o sucesso de uma empresa, mas sabemos que implementá-la corretamente pode ser um desafio. É por isso que estamos aqui para ajudar, oferecendo soluções personalizadas que ajudam nossos clientes a atingir seus objetivos de negócios e tecnologia.</p>
                            <p>Nosso compromisso com a excelência é a razão pela qual trabalhamos duro para manter nossos clientes satisfeitos e satisfeitas, garantindo que as soluções que entregamos superem as suas expectativas. Estamos preparados para oferecer soluções personalizadas que ajudarão a sua empresa a atingir novos patamares. </p>

                            <div className="read-more-btn mt--50">
                                <Link className="btn-default btn-icon" to="/contact">Entrar em contato <i className="icon"><FiArrowRight /></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <AccordionOne customStyle="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default mission;
