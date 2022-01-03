import React from 'react';
import { DiFirebase, DiReact, DiZend, DiAtom } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      Focusing on the visual elements of a website or app that the user interact with(the client side),
      manipulating and storing data using SQL databases. I have learned the fundemental concepts of Object-Oriented Programming; Inhereritance,
      Encapsulation,Polymorphism, and Data Abstration.  
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node and Databases
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiAtom size="3rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
            <ListParagraph>
              Experience with <br />
              C++, Java, Python
            </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
