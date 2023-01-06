import React,{useState} from 'react'
import './Navbar.scss'
import logo from "../../assets/Timmylogo.png"
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false)

  function handleClick(){
    setClick(!click)
  }

  return (
    <div className='header'>
      <div className="nav__container">
        <div className="logo">
          <img src={logo} alt='/' />
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
          </ul>

          <div className="btn-group">
            <button className='btn'>Contact</button>
          </div>

        </div>

        <div onClick={handleClick} className='hamburger'>
          {click ? 
            (<FaTimes  size={20} style={{color: "#333"}}/>) : <FaBars size={20} style={{color: "#333"}}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar