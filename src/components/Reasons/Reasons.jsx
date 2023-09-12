import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'

const Reasons = () => {
  return (
    <div className='Reasons' id='about'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>Consultoria Fitness</span>

            <div>
                <span className='stroke-text'>Angelo </span>
                <span>Benevides</span>
            </div>

            <div className='details-r'>
                <p>
                Com mais de 9 anos de experiência, participei de competições nacionais e internacionais, compreendendo o que traz transformações rápidas e significativas para meus alunos. Agora é a sua vez de investir em resultados. Junte-se à nossa consultoria fitness online e alcance seus objetivos com eficiência e segurança. Não desperdice tempo nem dinheiro com programas genéricos. Sua saúde merece o melhor!
                </p>

                <p>
                    Agora é o momento de apostar em resultados. Una-se à nossa consultoria fitness online para conquistar seus objetivos com segurança e eficiência. Não gaste tempo nem recursos em programas genéricos. Sua saúde merece excelência!                
                </p>
            </div>
            <span 
                style={{
                    color : 'var(--gray)', 
                    fontWeight: 'normal',
                    marginTop: '1rem'
                }}
            >
                MEUS PARCEIROS</span>

            <div className="partners">
                <img src={nb} alt="" />
                <img src={nike} alt="" />
                <img src={adidas} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Reasons