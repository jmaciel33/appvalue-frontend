import React from 'react';
import Typed from 'react-typed';
import SEO from "../common/SEO";
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopNews from '../common/header/HeaderTopNews';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import AboutOne from '../elements/about/AboutOne';
import ServiceFive from '../elements/service/ServiceFive';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';
import TeamTwo from '../elements/team/TeamTwo';
import TestimonialThree from "../elements/testimonial/TestimonialThree";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import Mission from "../elements/about/Mission";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
var BlogListData = BlogClassicData.slice(0, 3);




const BusinessConsulting2 = () => {
    return (
        <>
            <SEO title="AppValue - Consulting." />
            <main className="page-wrapper">
                <HeaderOne btnStyle="round" HeaderSTyle="header-not-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 bg-transparent height-850">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <span className="subtitle">O FUTURO COMEÇA AQUI.</span>
                                    <h1 className="title theme-gradient display-two">APPVALUE. <br /> {" "}
                                        <Typed
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
                                    </h1>
                                    <p className="description">Ajudamos nossos clientes a ter sucesso criando e projetando experiências digitais, resolvendo problemas e moldando o futuro com tecnologia.</p>
                                    <div className="button-group">
                                        <a className="btn-default btn-medium round btn-icon" href="#aboutus">Saiba Mais<i className="icon"><FiArrowRight /></i></a>
                                        <Link className="btn-default btn-medium btn-border round btn-icon" to="/contact">Entre em Contato <i className="icon"><FiArrowRight /></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <Separator />

                {/* Start About Area  */}
                <AboutOne />
                {/* End About Area  */}

                <Separator />
                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "O que nós podemos fazer por você?"
                                    title = "Serviços oferecidos para você."
                                    description = "Nossa empresa de consultoria em tecnologia e inovação oferece uma ampla variedade de serviços, incluindo:"
                                    />
                            </div>
                        </div>
                        <ServiceFive
                            serviceStyle = "gallery-style"
                            textAlign = "text-start"
                        />
                    </div>
                </div>
                {/* End Service Area  */}


                {/* Start Call To Action Area  */}
                <div className="rwt-callto-action-area">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Call To Action Area  */}

                <Separator />
                {/* Start Mission Area   */}
                <Mission />
                {/* Start Mission Area  */}


                <Separator />

                <Separator />
                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Artigos e Notícias"
                                    title = "Aqui nos compartilhamos nossas ideias."
                                    description = "Descubra as últimas tendências e inovações em tecnologia com nossos artigos."
                                />
                            </div>
                        </div>
                        <div className="row row--15">
                            {BlogListData.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                    <BlogList StyleVar="box-card-style-default" data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default BusinessConsulting2;
