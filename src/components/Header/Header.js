import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (

  //navigation bar (horzontal)
  <Container id="home">
  <Div2>
  <li>
      <Link href="#home">
        <NavLink>HOME</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <NavLink>ABOUT</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#projects">
        <NavLink>RESUME</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>TECHNOLOGY</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#footer">
        <NavLink>CONTACT</NavLink>
      </Link>
    </li>

  </Div2>
  <Div3>
      <SocialIcons href="https://github.com/MathibelaD">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/dineo-mathibela-53aa191a5">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/phindile.dineo.31">
        <AiFillFacebook size="3rem" />
      </SocialIcons>

  </Div3>

  </Container>
);

export default Header;
