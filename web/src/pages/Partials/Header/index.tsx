import React from 'react';
import './style.scss';

const Header = () => {

    // function onHandleClick(event: any) {
    //     const seletor = event;
    //     console.log(`Seletor: ${seletor}`)
    // }
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <a href="#about_me">Sobre mim</a>
                    </li>
                    <li>
                        <a href="#voluntter_work" >Trabalhos Voluntários</a>
                    </li>
                    <li>
                        <a href="#skills" >Skills</a>
                    </li>
                    <li>
                        <a href="j#work">Trabalhos</a>
                    </li>
                </ul>
                <a href="#tak_me" className="btn btn-bs-outline-blue">Fale Comigo</a>
            </nav>
        </header>
    )
}

export default Header;