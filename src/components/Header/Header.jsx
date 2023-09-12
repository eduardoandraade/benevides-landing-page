import { React ,useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'


const Header = () => {

  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className='header'>
        
        <img src={Logo} className='logo' alt="Logo marca Benevides Personal" />

        {(menuOpened === false && mobile === true) ? (
          <div
          style={{backgroundColor: 'var(--appColor)', padding: '.5rem', borderRadius: '5px'}}
          onClick={() => setMenuOpened(true)}
          
          >
            <img 
              src={Bars} 
              alt='#' 
              style={{width: "1.5rem", height: "1.5rem"}}/>
          </div>
        ) : (
          <ul className='header-menu'>
              <li><Link
                  onClick={() => setMenuOpened(false)}
                  activeClass='active'
                  to='home'
                  smooth={true}
                >Home</Link>
              </li>
              <li><Link
                onClick={() => setMenuOpened(false)}
                to='about'
                smooth={true}
              >Sobre</Link></li>
              <li><Link
                onClick={() => setMenuOpened(false)}
                to='plans'
                smooth={true}
              >Planos</Link></li>
              <li><Link
                onClick={() => setMenuOpened(false)}
                to='feedbacks'
                smooth={true}
              >Feedbacks</Link></li>
              <li><Link
                onClick={() => setMenuOpened(false)}
                to='contact'
                smooth={true}
              >Contato</Link></li>
          </ul>
        )}
    </div>
  )
}

export default Header