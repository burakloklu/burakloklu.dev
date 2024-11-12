import React from 'react';
import { LuBriefcase, LuGraduationCap } from 'react-icons/lu';
import effortlessApiImg from '@/public/effortlessApi.png';
import teleMeetUpImg from '@/public/teleMeetUp.png';
import gessorImg from '@/public/gessor.png';

export const links = [
  {
    name: 'About',
    hash: '/about',
  },
  {
    name: 'Experience',
    hash: '/experience',
  },
  {
    name: 'Projects',
    hash: '/projects',
  },
  {
    name: 'Skills',
    hash: '/skills',
  },
  {
    name: 'Contact',
    hash: '/contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Software Engineer',
    location: 'Madison, Wisconsin',
    company: 'An Abstract Level',
    description:
      '• Developed EffortlessAPI, a scalable platform for creating customizable APIs with security, versioning, and real-time monitoring\n' +
      '• Built collaborative features for video conferencing, optimized WebRTC for low-bandwidth networks, and implemented automated workflows, reducing data errors by over 30%. Achieved high performance and reliability through microservices, RabbitMQ messaging, and rigorous testing',
    icon: React.createElement(LuBriefcase),
    date: 'February 2019 - Present',
  },
  {
    title: 'Software Engineer Intern',
    location: 'Istanbul, Turkiye',
    company: 'Mimcrea Web Software',
    description:
      '• Developed a user authentication system at the API gateway, reducing processing load and improving response times by 40% for 1K+ concurrent users\n' +
      '• Implemented asynchronous image uploads using background processing, reducing average upload time from 11 to 3 seconds through optimized task handling',
    icon: React.createElement(LuBriefcase),
    date: 'February 2017 - June 2017',
  },
  {
    title: 'Software Engineer Intern',
    location: 'Istanbul, Turkiye',
    company: 'Noktahost',
    description: '• Built a control component for NoktaPanel account management, cutting yearly support requests by 1.5K+',
    icon: React.createElement(LuBriefcase),
    date: 'June 2016 - September 2016',
  },
  {
    title: 'B.S. in Computer Science',
    company: 'Istanbul Nisantasi University',
    location: 'Istanbul, Turkiye',
    description:
      '• Graduated with a full tuition scholarship\n' +
      '• Co-chaired the Software and Electronics Club, promoting collaboration and innovation',
    icon: React.createElement(LuGraduationCap),
    date: '2013-2017',
  },
] as const;

export const projectsData = [
  {
    name: 'Gessor',
    title: 'AI-Powered Football Prediction Platform',
    description:
      'Gessor is an analytics tool for football fans, providing AI-based predictions for match outcomes and player performance. Focusing on the Turkish Super Lig, Gessor utilizes historical data and real-time factors to deliver insights, score predictions, and interactive stats for fans.',
    tags: ['Python', 'Django', 'PostgreSQL', 'REST', 'PyTorch', 'React', 'AWS'],
    imageUrl: gessorImg,
  },
  {
    name: 'TeleMeetUp',
    title: 'Teleconferencing and Conversational AI',
    description:
      'A dynamic platform for adaptive video quality, instant messaging, and collaborative whiteboarding, enabling seamless team interactions. Built with scalability in mind, it leverages cloud services, real-time data channels, and optimized messaging for fast, reliable communication across networks.',
    tags: ['Javascript', 'Go', 'Node.js', 'MySQL', 'RabbitMQ', 'WebRTC', 'AWS', 'GCP', 'Docker'],
    imageUrl: teleMeetUpImg,
  },
  {
    name: 'EffortlessAPI',
    title: 'Low-Code API Automation Platform',
    description:
      'Built for rapid, secure API deployment, this low-code platform offers flexible endpoint configuration, role-based access control, and real-time monitoring. It seamlessly integrates with existing systems, streamlining workflows and accelerating development.',
    tags: ['Typescript', 'Go', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Airtable'],
    imageUrl: effortlessApiImg,
  },
] as const;

export const skillsData = [
  'Python',
  'Go',
  'JavaScript',
  'TypeScript',
  'SQL',
  'HTML',
  'CSS',
  'AWS',
  'GCP',
  'Node.js',
  'React',
  'Angular',
  'Next.js',
  'PostgreSQL',
  'MySQL',
  'PyTorch',
  'TensorFlow',
  'REST',
  'GraphQL',
  'Docker',
] as const;
