import React from 'react';
//import images from '../images';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = () => (
 <section row nopadding>
   <LeftSection>
   <SectionTitle main center>
     MATHIBELA DINEO
   </SectionTitle>
   <SectionText>
   I am final year student Software Developer at Tshwane University of Technology 
   </SectionText>
   <Button size="0.5px">Learn More</Button>
   </LeftSection>
 </section>
);

export default Hero;