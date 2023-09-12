import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* header  */}
        <div className="programs-header">
            <span className='stroke-text'>Planejamento</span>
            <span>Consistência</span>
            <span className='stroke-text'>Resultado</span>
        </div>

        <div className="program-categories">
            {programsData.map((program, i) => (
                <div key={i} className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs