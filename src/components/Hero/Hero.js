import Link from 'next/link';
import React from 'react';
//import images from '../images';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = () => (
 <Section row nopadding>
   <LeftSection>
   <SectionTitle main center>
     MATHIBELA DINEO
   </SectionTitle>
   <SectionText>
   A final year Software Development Student at Tshwane University of Technology.
  who is extremely confident and competent with computers also acknowledgeable about Digital Technology.  
   </SectionText>
   <Link href="#about">
    <Button>Learn More</Button>
   </Link>
   </LeftSection>
 </Section>
);

export default Hero;