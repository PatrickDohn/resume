import React from 'react'
import ContentEducationItem from './ContentEducationItem'

const educations = [
  {
    date: 'Jan 2019 - Apr 2019',
    school: 'General Assembly',
    concentration: 'Full Stack Web Development',
    location: 'Boston, MA',
    description: [
      'Full time 500+ hour web development immersive program',
      'Developed four full stack web applications using JavaScript, HTML, CSS, and Ruby',
      'Collaborated with a team using agile methodology and scrum principles'
    ]
  },
  {
    date: 'Sept 2013 - Sept 2015',
    school: 'UMass Amherst',
    concentration: 'Operations Information Management',
    location: 'Amherst, MA',
    coursework: true,
    description: [
      'Computer Science: Intro to Java, Data Structures, Game Design, Data Science',
      'Information Technology: Computer Literacy, Problem Solving with Internet'
    ]
  }
]

const ContentEducation = () => (
  <div className="content-education-history">
    <h3 className="text-center border-bottom my-3">Education</h3>
    {educations.map((education, index) => (
      <ContentEducationItem key={index} education={education} />
    ))}
  </div>
)

export default ContentEducation
