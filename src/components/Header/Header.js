import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (

  //navigation bar (horzontal)
  <Container>
      {/* <Div1>
          <Link href="/">
            <a style={{display: "flex", alignItems: "center", color: "white"}}>
              <DiCssdeck size="3rem" /> <span>Student Portfolio</span>
            </a>
          </Link>
  </Div1> */}
  <Div2>
  <li>
      <Link href="#about">
        <NavLink>HOME</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <NavLink>ABOUT</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>RESUME</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>TECHNOLOGY</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>CONTACT</NavLink>
      </Link>
    </li>

  </Div2>
  <Div3>
      <SocialIcons href="https:github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https:linkedin.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https:facebook.com">
        <AiFillFacebook size="3rem" />
      </SocialIcons>

  </Div3>

  </Container>
);

export default Header;
