import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper align="center" id="footer">
     <LinkList>
      <LinkColumn>
        <LinkTitle>CONTACT</LinkTitle>
        <LinkItem href="mailto:066 556 8217">066 556 8217</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>EMAIL</LinkTitle>
        <LinkItem href="mailto:dineomathibela1@gmail.com">dineomathibela1@gmail.com</LinkItem>
      </LinkColumn>

     </LinkList>

    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Attitude Is Gratitude</Slogan>
      </CompanyContainer>
      <SocialContainer>

  <SocialIcons href="https://github.com/MathibelaD">
    <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/dineo-mathibela-53aa191a5">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.facebook.com/phindile.dineo.31">
      <AiFillFacebook size="3rem" />
  </SocialIcons>

      </SocialContainer>
    </SocialIconsContainer>

   </FooterWrapper>
  );
};

export default Footer;