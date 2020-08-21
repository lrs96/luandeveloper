import React from 'react';
import Header from '../Partials/Header';
import AboutMe from '../Partials/AboutMe'
import VolunteerWork from '../Partials/VolunteerWork';
import Work from '../Partials/Work';
import TalkMe from '../Partials/TalkMe';

import SocialMedia from '../Partials/SocialMedia';

import './style.scss';
import imageLuan from '../../assets/luan-rodrigues-da-silva.svg';
import infos from '../../consumers/personal-data.json';

const Home = () => {
    return (
        <main>
            <Header />
            <div className="container-fluid header-content">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-4">
                            {infos.map(item => (
                            <div className="infos" key={1}> 
                                <SocialMedia />
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