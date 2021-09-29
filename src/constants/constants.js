
const prefix="/Portfolio"; 
export const projects = [
  {
    title: 'Weather App',
    description: "Using React, returns the climate conditions of particular location based on search",
      image: '/images/1.png',
      tags: ['React'],
    source: 'https://sujithchenanath909.github.io/WeatherApp/',
    visit: 'https://github.com/sujithchenanath909/WeatherApp',
    id: 0,
  },
  {
    title: 'SmartBrain-FaceDetector',
    description:"Detects face in a provided image ,used clarifai third-party api for machine learning api's",
    image: '/images/2.png',
    tags: ['React.js', 'JavaScript','Clarifai-api','Node.js'],
    source: '#projects',
    visit: 'https://github.com/sujithchenanath909/FaceDetectorApp',
    id: 1,
  },
  {
    title: 'Corona-Virus Tracker',
    description: "A smart app built using java spring boot and thymeleaf that shows coronavirus count status nationwide",
      image: '/images/3.png',
      tags: ['Java8', 'SpringBoot'],
    source: '#projects',
    visit: 'https://github.com/sujithchenanath909/CoronaVirusTracker',
    id: 2,
  },
  {
    title: 'Test Automation FrameWork',
    description: "A maven based Java TestNG Selenium framework , integrated with cucumber ,log4j and extent reports",
      image: '/images/5.jpg',
      tags: ['Java8', 'TestNG' ,'Selenium' ,'Cucumber' ,'log4j'],
    source: '#projects',
    visit: 'https://github.com/sujithchenanath909/SeleniumFrameWorkSkelton',
    id: 3,
  },
    {
    title: 'Test Automation FrameWork',
    description: "A maven based Java TestNG Selenium framework , integrated with log4j and extent reports and test data configuration using json",
      image: '/images/6.PNG',
      tags: ['Java8', 'TestNG' ,'Selenium' ,'JSON' ,'log4j'],
    source: '#projects',
    visit: 'https://github.com/sujithchenanath909/Selenium_Shoptimize',
    id: 4,
  }
  
];

export const TimeLineData = [
  { fromyear: 2013,toyear:'', text: 'Started my journey', },
  { fromyear: 2013,toyear:2016,text: 'Worked for MRCMPU Ltd as Junior Programmer', },
  { fromyear: 2016, toyear:2021,text: 'Worked for Infosys Ltd as Technology Analyst | Java FullStack', },
  { fromyear: 2021, toyear:'present',text: 'Working for Netmeds.com as Technology Lead ' }
  
];
