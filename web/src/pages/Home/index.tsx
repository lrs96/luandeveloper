import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithubAlt, FaWhatsapp } from 'react-icons/fa'
import Header from '../Partials/Header';
import AboutMe from '../Partials/AboutMe'
import VolunteerWork from '../Partials/VolunteerWork';
import Work from '../Partials/Work';
import TalkMe from '../Partials/TalkMe';

import './style.scss';
import imageLuan from '../../assets/luan-rodrigues-da-silva.svg';

import api from '../../services/api';

interface Infos {
    name: string,
    lastname: string,
    age: string,
    email: string,
    social: {
        facebook: string,
        instagram: string,
        linkedin: string,
        github: string
    },
}
const Home = () => {
    const [infos, setInfos ] = useState<Infos[]>([])

    useEffect(() => {
        api.get('personal-data').then(response => {
            setInfos(response.data)
        })
    }, [])

    return (
        <main>
            <Header />
            <div className="container-fluid header-content">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-4">
                            {infos.map(item => (
                            <div className="infos" key={1}>
                                <div className="social mb-2">
                                    <a className="social-item" rel="noreferrer" href={item.social.linkedin} target="_blank">
                                        <FaLinkedinIn />
                                    </a>
                                    <a className="social-item" rel="noreferrer" href={item.social.github} target="_blank">
                                        <FaGithubAlt />
                                    </a>
                                    <a className="social-item" rel="noreferrer" href={item.social.instagram} target="_blank">
                                        <FaInstagram />
                                    </a>
                                    <a className="social-item" rel="noreferrer" href={item.social.facebook} target="_blank">
                                        <FaFacebookF />
                                    </a>
                                    <a className="social-item" rel="noreferrer" href="/" target="_blank">
                                        <FaWhatsapp />
                                    </a>
                                </div>
                                <h1 className="mb-3 text-white">{item.name} <span className="text-bs-blue d-block">{item.lastname}<span className="text-white"> .</span></span></h1>
                                <p className="mb-3">Front-end, UI Designer, palestrante, amante de  séries, livros e comunidades de tecnologia.</p>
                                <div className="d-flex align-items-center">
                                    <a href="#tak_me" className="btn btn-bs-outline-blue mr-2 mr-md-3">Fale comigo</a>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="d-none d-lg-flex col-lg-5 offset-lg-3">
                            <img src={imageLuan} alt="Luan Rodrigues da Silva" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
            <AboutMe />
            <VolunteerWork />
            <Work />
            <TalkMe />
        </main>
    )
}

export default Home;