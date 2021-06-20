import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
          My Personal PortFolio 
      </SectionTitle>
      <SectionText>
        A Java fullstack developer specialised in backend development,UI and test automation activities <br/>
        I write code mostly in Java and I am fond of learning new skills on the way .I consider learning as a never ending process .The thirst in creating beautiful and powerful things drive me all the way..
        The core mission is to solve real life and business problems through what I do
      </SectionText>
    <Link href="#about">
      <Button>Learn More</Button>
    </Link>
      
     
      
    </LeftSection>
  </Section>
);

export default Hero;