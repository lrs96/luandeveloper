import React from 'react';
import { FaArrowRight } from 'react-icons/fa'

import './style.scss';
import imageHB from '../../../assets/comite-da-hackathon-brasil.svg';


const VoluntterWork = () => {
    return (
        <section className="container-fluid" id="voluntter_work">
            <div className="container">
            <h2 className="mb-4 mb-lg-5 d-block text-center">Trabalhos <span className="text-bs-blue">voluntários</span>.</h2>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card-work rounded">
                            <img src={imageHB} className="img-fluid" alt="Hackathon Brasil"/>
                            <div className="infos-card">
                                <p className="mb-0 work">
                                    <span className="custom">Organizador</span>
                                </p>
                                <h3 className="h5 mb-2 text-white title">Membro do comite da Hachathon Brasil</h3>
                                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque, sem et luctus tristique, lectus arcu convalli. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque, sem et luctus tristique.</p>
                                <a href="/" className="d-flex align-items-center">
                                    <span className="pr-3">Saber mais</span> <FaArrowRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VoluntterWork;