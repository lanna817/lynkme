import React from 'react';
import {profile} from '../images/profile.jpg'


export default function About() {
  
  return (
    <div className='about-pg'>
    <h1 id='about-txt'>I created this site to be an improved craiglist geared towards Art. I couldn't do this without
        all the people who were there supporting me and giving me ideas. I would like to thank them for all their help.
        I truly appreciate it!
      <img src={profile} width='30%'/>
    </h1>
    </div>
  )
}

