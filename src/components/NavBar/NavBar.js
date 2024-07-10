import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './NavBar.css';
import { logout } from '../../firebase';

function NavBar() {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        if (navRef.current) {
          navRef.current.classList.add('nav-dark');
        }
      } else {
        if (navRef.current) {
          navRef.current.classList.remove('nav-dark');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container ref={navRef}>
      <NavBarLeft>
        <img src="/assets/logo.png" alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </NavBarLeft>
      <NavBarRight>
        <IconImg src="/assets/search_icon.svg" alt="" />
        <p>Children</p>
        <IconImg src="/assets/bell_icon.svg" alt="" />
        <NavBarProfile>
          <ProfileImg src="/assets/profile_img.png" alt="" />
          <CaretImg src="/assets/caret_icon.svg" alt="" />
          <DropDown>
            <p onClick={() => { logout() }}>Sign Out of Netflix</p>
          </DropDown>
        </NavBarProfile>
      </NavBarRight>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  width: 100%;
  padding: 20px 6%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  font-size: 14px;
  color: #e5e5e5;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
  z-index: 1;

  @media (max-width: 800px) {
    padding: 20px 4%;
  }
`;

const NavBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  img {
    width: 90px;

    @media (max-width: 800px) {
      height: 25px;
    }

    @media (max-width: 500px) {
      height: 20px;
    }
  }

  ul {
    display: flex;
    list-style: none;
    gap: 20px;

    @media (max-width: 800px) {
      display: none;
    }

    li {
      cursor: pointer;
    }
  }
`;

const NavBarRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 500px) {
    gap: 10px;
  }
`;

const IconImg = styled.img`
  width: 20px;
  cursor: pointer;
`;

const NavBarProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;

  &:hover div {
    display: block;
  }
`;

const ProfileImg = styled.img`
  border-radius: 4px;
  width: 40px;
`;

const CaretImg = styled.img``;

const DropDown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: max-content;
  background: #191919;
  padding: 18px 22px;
  border-radius: 2px;
  text-decoration: underline;
  z-index: 1;
  display: none;

  p {
    font-size: 13px;
    cursor: pointer;
  }
`
