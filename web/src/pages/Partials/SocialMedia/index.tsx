import React from 'react';
// import {FaLinkedinIn, FaGithubAlt, FaInstagram, FaFacebookF, FaWhatsapp, FaBehance, FaIcons  } from 'react-icons/fa';
// import social_medias from '../../../consumers/social-media.json';
import Social from '../../components/Social'

const SocialMedia = () => {
    return (
        <div className="component-social">
            <div className="social mt-3">
                <Social icons={[
                    { href: "", target: "", rel: "", icon: "facebook-f" },
                    { href: "", target: "", rel: "", icon: "twitter" },
                    { href: "", target: "", rel: "", icon: "discord" }
                ]} />
            </div>
        </div>
    )
}

export default SocialMedia;