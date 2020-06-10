import React, { useEffect, useState} from 'react';
import {FaLinkedinIn, FaGithubAlt, FaInstagram, FaFacebookF, FaWhatsapp  } from 'react-icons/fa'
import fotoAboutMe from '../../../assets/about-me-luan-rodrigues.svg';
import './style.scss';

import api from '../../../services/api';

interface Sociais {
    social: {
        instagram: string,
        linkedin: string,
        github: string,
        facebook: string
    }
}

const AboutMe = () => {
    const [sociais, setSociais ] = useState<Sociais[]>([])

    useEffect(() => {
        api.get('personal-data').then(response => {
            setSociais(response.data);
        })
    }, [])

    return (
        <section className="container-fluid" id="about_me">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-5 col-lg-4">
                        <img src={fotoAboutMe} className="img-fluid" alt="Foto Sobre Luan Rodrigues da Silva"/>
                    </div>
                    <div className="col-12 col-md-7 col-lg-5 offset-lg-3">
                        <div className="infos">
                            <h2 className="mb-2 h1 title">
                                Sobre<span className="text-bs-blue d-block">mim<span className="text-dark">.</span></span>
                            </h2>
                            <p className="mb-1 subtitle">Front End, UI desginer,  palestrante, membro do comitê da Hackathon Brasil e organizador da comunidade WordPress São Paulo. Sou apaixonado por tecnologia, livros, séries e muito ativo em comunidades de tecnologia, procuro sempre me desafiar em experiências novas para obter mais conhecimento e uma evolução pessoal.</p>
                            <p className="mb-0 subtitle">Amo cultivar a arte de compartilhar conhecimento e experiências com as pessoas, afim de conseguir impactar o cotidiano e a vida delas de alguma forma.</p>
                            {sociais.map(social => (
                            <div className="social mt-3" key={1}>
                                <a className="social-item" href={social.social.linkedin} rel="noopener" target="_blank">
                                    <FaLinkedinIn />
                                </a>
                                <a className="social-item" href={social.social.github} rel="noopener" target="_blank">
                                    <FaGithubAlt />
                                </a>
                                <a className="social-item" href={social.social.instagram} rel="noopener" target="_blank">
                                    <FaInstagram />
                                </a>
                                <a className="social-item" href={social.social.facebook} rel="noopener" target="_blank">
                                    <FaFacebookF />
                                </a>
                                <a className="social-item" href="/" rel="noopener" target="_blank">
                                    <FaWhatsapp />
                                </a>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;