import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                <FontAwesomeIcon icon={faTiktok} style={{color: "#ffffff", fontSize: "2rem"}} />
            </div>
            <div className="logo-f">
                <img src={logo} alt="" />
            
                <p className='copy'>&copy; 2023 Angelo Benevides | Todos os direitos reservados.</p>
            </div>
        </div>

        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
    </div>
  )
}

export default Footer