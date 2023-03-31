import styled from "styled-components";
import { useState, useEffect } from 'react';


const NavbarWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 80px;
    background-color: #363946;
    z-index: 1000;
    transition: height 0.2s ease-in-out;

    a {
        color: white;
        text-decoration: none;
    }
    &.scrolled {
        height: 3px;
        background-color: rgba(0,0,0,0.5);
        a {
            display: none;
        }
    }
`;
const Logo = styled.div`
    font-size: 24px;
    font-weight: 900;
    color: #fff;
`;

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <NavbarWrapper className={isScrolled ? 'scrolled' : ''}>
            <Logo>
                <a href="/">AutoFixer</a>
            </Logo>
            
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
        </NavbarWrapper>
    )
}

export default Navbar