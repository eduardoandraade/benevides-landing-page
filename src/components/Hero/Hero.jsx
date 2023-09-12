import React from 'react'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_img_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import Header from '../Header/Header'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
import { Link } from 'react-scroll'


const Hero = () => {

    const openLink = () => {
        const phoneNumber = '+5585997295133';
        const message = encodeURIComponent('Olá! Quero saber mais sobre a consultoria fitness.');
        const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}&type=phone_number&app_absent=0`
    
        window.open(url, '_blank');
        
      };

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true:false;

  return (
    <div className='hero' id='home'>
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />
        
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile? '190px':'338px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                
                ></motion.div>
                <span>a jornada para a sua melhor versão começa aqui</span>
            </div>

            {/*  Hero Heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Alcance </span>
                    <span>seu</span>
                </div>
                <div>
                    <span>shape ideal</span>
                </div>
                <div className="span">
                    <span>
                        Aqui, eu te ajudo a moldar e construir o corpo que você sempre sonhou 
                        e viver sua vida ao máximo.
                    </span>
                </div>
            </div>


            {/* Figures */}

            <div className="figures">
                <div>
                    <span>

                        <NumberCounter className='number-counter' start={1} end={7} delay='4' preFix='+'/>
                    </span>
                    <span>anos de experiência</span>
                </div>
                <div>
                    <span>
                        <NumberCounter className='number-counter' start={60} end={120} delay='4' preFix='+'/>
                    </span>
                    <span className='txt-xp'>alunos online</span>
                </div>
                <div>
                    <span>
                        <NumberCounter className='number-counter' start={1} end={3} delay='4' preFix='+'/>
                    </span>
                    <span>certificados</span>
                </div>
            </div>

            {/* hero buttons */}
            <div className="hero-buttons">
                <button className="btn"><Link
                    to='plans'
                    smooth={true}
                >Planos Disponíveis</Link></button>
            </div>
        </div>
        <div className="right-h">
            <button className='btn' onClick={openLink}>Atendimento Personalizado</button>

            <motion.div 
                transition={transition}
                whileInView={{ right: '4rem'}}
                initial={{right: '-1rem'}}
                className="heart-rate">
                    <img src={Heart} alt="Icone Coração Frequencia Cardiaca"/>
                    <span>Frequência Cardíaca</span>
                    <span>116 BPM</span>
            </motion.div>

            {/* Hero Images */}
            <img src={hero_image} className='hero-image' alt="Foto Benevides Personal" />
            <img src={hero_img_back} className='hero-img-back' alt="Foto Elemento Grafico" />
            
            {/* Calories */}
            <motion.div 
                initial= {{right: '37rem'}}
                whileInView={{right: '34rem'}}
                transition={transition}
                className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Calorias Queimadas</span>
                    <span>220Kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero