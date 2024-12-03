import React from 'react'
import './About.css';

export const About = () => {
    return (
        <section id="about" className="about mt-5">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>¿Quienes somos Lokilabs?</h2>
                </div>

                <div className="row content">
                    <div className="col-lg-6">
                        <p>
                        ¡Hola! somos unos apasionados por el desarrollo de soluciones tecnológicas que puedan transformar ideas en resultados tangibles. Contamos con 
                        una amplia experiencia en el mundo del desarrollo de software, y hemos tenido el privilegio de trabajar en proyectos que van desde aplicaciones móviles 
                        hasta plataformas web complejas.
                        </p>
                        <p>
                        Nuestro enfoque está siempre en entender profundamente las necesidades de los clientes para ofrecer soluciones personalizadas que no solo cumplan con 
                        sus expectativas, sino que las superen. Cada desafío es una oportunidad para innovar y mejorar, y esa es la mentalidad que llevamos a cada proyecto 
                        que emprendemos.
                        </p>

                        <p>
                        ¿Por qué trabajar nosotros?
                        </p>

                        <p>
                            <ul>
                                <li>
                                    <i class="ri-check-double-line"></i> 
                                    Experiencia en el desarrollo de software
                                </li>
                                <li>
                                    <i class="ri-check-double-line"></i> 
                                    Enfoque personalizado
                                </li>
                                <li>
                                    <i class="ri-check-double-line"></i> 
                                    Innovación y calidad
                                </li>
                                <li>
                                    <i class="ri-check-double-line"></i> 
                                    Compromiso
                                </li>
                            </ul>
                        </p>

                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <p>
                        Nuestra filosfia es creer en la colaboración constante, la transparencia y la dedicación al detalle. Por ende nuestro objetivo es construir relaciones 
                        duraderas basadas en la confianza y la calidad. Como compromiso nos aseguramos de ofrecer resultados que realmente hagan la diferencia, tanto para 
                        las empresas o personas que usan las soluciones que desarrollo.
                        </p>
                        <p>
                        Nos apasiona lo que hacemos y estamos en una constante búsqueda de nuevas formas de crear, crecer y aplicar nuestra experiencia en tecnología para crear 
                        proyectos que no solo sean funcionales, sino también fáciles de usar y realmente valiosos.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
