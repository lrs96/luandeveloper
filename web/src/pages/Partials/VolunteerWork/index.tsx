import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import voluntter_work from '../../../consumers/volunteer-work.json';

import './style.scss';

const VoluntterWork = () => {
   return (
        <section className="container-fluid" id="voluntter_work">
            <div className="container">
            <h2 className="mb-4 h1 mb-lg-5 d-block text-center">Trabalhos <span className="text-bs-blue">voluntários</span>.</h2>
                <div className="row">
                    {voluntter_work.map(work => (
                    <div className="col-12 col-sm-6 col-md-4" key={work.id}>
                        <div className="card-work rounded">
                            <img src={`/static/media/${work.image_url}`} className="img-fluid" alt={work.name_work}/>
                            <div className="infos-card">
                                <p className="mb-0 work">
                                    <span className="custom">{work.funcao}</span>
                                </p>
                                <h3 className="h5 mb-2 text-white title">{work.name_work}</h3>
                                <p className="mb-2">{work.description}</p>
                                <a href={work.site} rel="noopener noreferrer" className="d-flex align-items-center" target="_blank" >
                                    <span className="pr-3">Saber mais</span> <FaArrowRight />
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default VoluntterWork;