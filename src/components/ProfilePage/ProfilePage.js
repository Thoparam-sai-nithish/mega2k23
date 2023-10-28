import React, { useEffect } from 'react'
import Profile from './Profile';
import Skills from './Skills';
import Linkedin from './Linkedin';

function ProfilePage() {
  const email = localStorage.getItem('email');

  return (
    <div className='row'>
      <div className="col-sm-3 m-0 p-0 ">
        <Profile/>
      </div>
      <div className="col-sm-9 m-0 p-0">
        <div className="skills border rounded my-4 py-2">
          <Skills/>
        </div>
        <hr />
        <div className="linkedin">
          <Linkedin/>
        </div>
        
      </div>
    </div>
  )
}

export default ProfilePage