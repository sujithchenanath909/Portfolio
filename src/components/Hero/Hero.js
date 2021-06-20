import React from 'react';

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
        A JavaFull stackdeveloper specialised in Backend Development,UI and test automation activities
      </SectionText>
      <Button onClick={()=>window.location='https://gmail.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;