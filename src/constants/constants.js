
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
  }
];

export const TimeLineData = [
  { fromyear: 2013,toyear:'', text: 'Started my journey', },
  { fromyear: 2013,toyear:2016,text: 'Worked for MRCMPU Ltd as Junior Programmer', },
  { fromyear: 2016, toyear:2021,text: 'Worked for Infosys Ltd as Technology Analyst | Java FullStack', }
];