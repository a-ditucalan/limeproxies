import React, { Component } from 'react'

import ImageObserver from '../layout/observer-image-target'

const teamData = [
  {
    img: require("../images/avatar_placeholder.png"),
    name: 'Sathish Ganesh',
    position: 'Founder'
  },
  {
    img: require("../images/avatar_placeholder.png"),
    name: 'Anastasia Negru',
    position: 'Director of customer Experience'
  },
  {
    img: require("../images/avatar_placeholder.png"),
    name: 'Shilpa Darshini',
    position: 'Project Manager'
  },
  {
    img: require("../images/avatar_placeholder.png"),
    name: 'Fedor Torba',
    position: 'Back-end Developer'
  },
  {
    img: require("../images/avatar_placeholder.png"),
    name: 'Bohdan Hrytsenko',
    position: 'Front end Developer'
  },
  {
    img: require("../images/avatar_placeholder.png"),
    name: 'Neha Shanker Shelar',
    position: 'Operations Specialist'
  },
  {
    img: require("../images/avatar_placeholder.png"),
    name: 'Saveliy',
    position: 'Backend Developer'
  },
  {
    img: require("../images/avatar_placeholder.png"),
    name: 'Rosy B Lawrence',
    position: 'Support Staff'
  },
  {
    img: require("../images/avatar_placeholder.png"),
    name: 'Ullala Mahesh Nayak',
    position: 'Sr. Technical Support Executive'
  },
  {
    img: require("../images/avatar_placeholder.png"),
    name: 'Rifad Rafeeque',
    position: 'Technical Support Executive'
  },
  {
    img: require("../images/avatar_placeholder.png"),
    name: 'Shubham',
    position: 'Technical Support Executive'
  },
  {
    img: require("../images/avatar_placeholder.png"),
    name: 'Antony Kollanur Thomas',
    position: 'Technical Support Executive'
  },
  {
    img: require("../images/avatar_placeholder.png"),
    name: 'Sandesh M K',
    position: 'Technical Support Executive'
  },
  {
    img: require("../images/avatar_placeholder.png"),
    name: 'Jayesh Prakash Nair',
    position: 'Team Leader Support'
  },
]

export default class Team extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="team p-bottom">        
          { teamData.map((member) => (
            <div key={member.name} className="team__holder">
              {/* <Image className="avatar_img" size='small' circular src={member.img} alt="" /> */}
              <ImageObserver src={member.img} altString="" />
              <p className="avatar-name t-h4 t-center">{member.name}</p>
              <p className="avatar-position t-center">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
