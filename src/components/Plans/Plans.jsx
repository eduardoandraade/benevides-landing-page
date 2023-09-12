import React from 'react'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'

const Plans = () => {

    const openLink = () => {
        const phoneNumber = '+5585997295133';
        const message = encodeURIComponent('Olá! Quero saber mais sobre a consultoria fitness.');
        const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}&type=phone_number&app_absent=0`
    
        window.open(url, '_blank');
        
      };

  return (
    <div className='plans-container' id='plans'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header plans-header" style={{gap:' 2rem '}}>
            <span className='stroke-text'>COMECE HOJE</span>
            <span>CONSULTORIA FITNESS</span>
            <span className='stroke-text'>NO MEU TIME</span>
        </div>

            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>R$    {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i)=> (
                                <div key={i} className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>

                                </div>
                            ))}
                        </div>

                     
                        <button className='btn' onClick={openLink}>Escolher plano</button>

                    </div>
                ))}
            </div>
    </div>
  )
}

export default Plans