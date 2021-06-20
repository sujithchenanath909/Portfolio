import React from 'react';
import { DiFirebase, DiJavascript, DiJava} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider/>
     <SectionTitle> Technologies    </SectionTitle>
       <SectionText>
         I have worked on varities of technologies on FrontEnd , Backend and on TestAutomation
       </SectionText>
    <List>
      <ListItem>
        <DiJavascript size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            HTML ,CSS ,JavaScript ,React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJava size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Java ,SpringBoot ,Hibernate <br/>
            node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="3rem"/>
        <ListContainer>
          <ListTitle>Test Automation</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Junit,TestNG <br/>
            Selenium,Appium,Cucumber
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>DB & Tools</ListTitle>
          <ListParagraph>
            Experience with <br/>
            MySQl,MongoDB<br/>
            Git,Jenkins,Maven
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
 </Section>
);

export default Technologies;
