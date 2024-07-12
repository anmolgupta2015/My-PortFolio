import {Navbar,Container,Nav} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import pic from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
import Logo1 from "../assets/img/Logo1.jpg";
export const NavBar = () =>{

    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll',onScroll);

        return() =>window.removeEventListener('scroll',onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
        <Container>
         
         
         
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className="social-icon">
                    <a href='https://www.linkedin.com/in/anmol-gupta-329a36253/' target='_blank'><img src={navIcon1} alt="" /></a>
                    <a href='https://github.com/anmolgupta2015' target='_blank'><img src="https://cdn-icons-png.flaticon.com/128/10090/10090320.png" alt="" /></a>
                    <a href='https://drive.google.com/file/d/1xVRto9iqPnMFywTjXB3jUhp1pS1ULjrD/view?usp=sharing' target='_blank'><img src="https://cdn-icons-png.flaticon.com/128/10433/10433154.png" alt="" /></a>
                </div>
                {/* <button className='vvd' onClick={()=>console.log('connect')}> <span>Let's Connect</span>  </button> */}
            </span>
            <Navbar.Brand href="#home">
                <img src={Logo1} alt="Logo" id="MyImg" />
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}