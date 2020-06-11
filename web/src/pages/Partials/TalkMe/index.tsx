import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { FaLinkedinIn, FaGithubAlt, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

import './style.scss';
import api from '../../../services/api'

interface Sociais {
    social: {
        instagram: string,
        linkedin: string,
        github: string,
        facebook: string
    }
}


const TalkMe = () => {
    const [sociais, setSociais ] = useState<Sociais[]>([])
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    })
    const [message, setMessage] = useState<string>()

    useEffect(()=> {
        api.get('personal-data').then(response =>{
            setSociais(response.data)
        } )
    }, [])
    
    function handleTextAreaChange(event:ChangeEvent<HTMLTextAreaElement>){
        const {name, value} = event.target;
        console.log({name: value})
        setMessage(value)
    }

    function handleInputchange(event: ChangeEvent<HTMLInputElement>){ 
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value})
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const {nome, email, telefone} = formData;
        const mensagem = message;
        const data = {
            nome,
            email,
            telefone,
            mensagem
        }
        await api.post('send-mail', data);
    }

    return (
        <section className="container-fluid" id="talk_me">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-5">
                        <div className="infos">
                            <h2 className="mb-2 h1 title">Fale <span className="d-block text-bs-blue">Comigo <span className="text-dark">.</span></span></h2>
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
                    <div className="col-12 col-md-8 col-lg-7">
                        <form className="bg-white p-3 rounded" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Seu nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    id="name"
                                    className="form-control"
                                    onChange={handleInputchange}
                                    />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-12 col-md-7">
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        onChange={handleInputchange}/>
                                </div>
                                <div className="form-group col-12 col-md-5">
                                <label htmlFor="email">Telefone</label>
                                    <input
                                        type="text"
                                        name="telefone"
                                        id="telefone"
                                        className="form-control"
                                        onChange={handleInputchange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">No que eu posso ajudar?</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows={3}
                                    onChange={handleTextAreaChange}
                                    >
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-bs-blue py-2">Entrar em contato</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TalkMe;