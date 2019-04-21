import React from 'react'

const ContentProjectItem = ({ education }) => {
  return (
    <div className="content-education-item">
      <div className="d-flex justify-content-between">
        <p><span className="font-weight-bold">{education.school}</span> {education.location}</p>
        <span className="ml-auto">{education.date}</span>
      </div>
      {education.coursework ? <p>Coursework:</p> : ''}
      <ul>
        {education.description.map((bullet, index) => <li key={index}>{bullet}</li>)}
      </ul>
    </div>
  )
}

export default ContentProjectItem