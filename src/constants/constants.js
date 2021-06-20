
const prefix="/Portfolio"; 
console.log(prefix+'/images/1.png')
export const projects = [
  {
    title: 'Weather App',
    description: "Using React, returns the climate conditions of particular location based on search",
      image: {prefix}+'/images/1.png',
      tags: ['React'],
    source: 'https://github.com/sujithchenanath909/WeatherApp',
    visit: 'https://sujithchenanath909.github.io/WeatherApp/',
    id: 0,
  },
  {
    title: 'SmartBrain-FaceDetector',
    description:"Detects face in a provided image ,used clarifai third-party api for machine learning api's",
    image: '/images/2.png',
    tags: ['React', 'JavaScript','Clarifai-api'],
    source: 'https://github.com/sujithchenanath909/face_recognition',
    visit: '#projects',
    id: 1,
  },
  {
    title: 'Corona-Virus Tracker',
    description: "A smart app built using java spring boot and thymeleaf that shows coronavirus count status nationwide",
      image: '/images/3.png',
      tags: ['Java8', 'SpringBoot'],
    source: 'https://github.com/sujithchenanath909/CoronaVirusTracker',
    visit: '#projects',
    id: 2,
  }
];

export const TimeLineData = [
  { fromyear: 2013,toyear:'', text: 'Started my journey', },
  { fromyear: 2013,toyear:2016,text: 'Worked for MRCMPU Ltd as Junior Programmer', },
  { fromyear: 2016, toyear:2021,text: 'Worked for Infosys Ltd as Technology Analyst | Java FullStack', }
];