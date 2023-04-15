import React,{useContext, useState} from 'react'
import './Navbar.scss'
import logo from "../../assets/TimLogo.png"
import {FaBars, FaTimes} from 'react-icons/fa'
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import { themeContext } from '../../Context/DataContext';

const Navbar = () => {
  const [click, setClick] = useState(false)
  const {mode, toggle} = useContext(themeContext)

  function handleClick(){
    setClick(!click)
  }

  return (
    <div className='header'>
      <div className="nav__container">
        <div className="logo">
          <img src={logo} alt='logo' />
        </div>

        <div className={ click ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav'>
            <li>
              <a href='/'>Home</a>
            </li>

            <li>
              <a href='/'>About</a>
            </li>

            <li>
              <a href='/'>Works</a>
            </li>

            <li>
              <a href='/'>Contact</a>
            </li>
          </ul>

          {/* <div className="btn-group">
            <button className='btn'>Contact</button>
          </div> */}
        </div>
        <div className="switch1" onClick={toggle}>
            {mode ? 
                <BsFillMoonFill className='off'/> : <ImSun className='on' />
            }
        </div>

        <div onClick={handleClick} className='hamburger'>
          {click ? 
            (<FaTimes className="menuIcon"/>) : <FaBars className="menuIcon"/>
          }
        </div>

        <div className="switch" onClick={toggle}>
            {mode ? 
                <BsFillMoonFill className='off'/> : <ImSun className='on' />
            }
        </div>
      </div>
    </div>
  )
}

export default Navbar