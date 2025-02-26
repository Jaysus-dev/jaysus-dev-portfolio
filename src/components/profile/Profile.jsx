import React from 'react'
import './Profile.css'
import Social from './Social';
import Data from './Data';
import Scroll from './Scroll';

function Profile() {
  return (
    <section className='home section' id='home'>
      <div className='home-container container grid'>
        <div className='home-content grid'>
          <Social/>
            <div className='home-img'>
                
            </div>
            <Data/>
        </div>
          <Scroll/>
      </div>
    </section>
  )
}

export default Profile;