import React, { PureComponent } from 'react'
import './About.scss'

export default class About extends PureComponent {
  render () {
    return (
      <div className='About_Container'>
        <div className='About_First'>
          <div className='About_First_Left'>
            <img className='About_Image' src='../../static/mihai-cut.png' alt='Mihai Moraru Photo' />
            <div className='About_Details'>
              {/*<div>Age: 19</div>*/}
              <div>Location: Cluj-Napoca, Romania</div>
              <div>Experience: 2+ years</div>
            </div>
          </div>
          <div className='About_First_Right'>
              I'm a passionate developer who started to learn programming on his own a few years ago by going through courses & tutorials found on the Internet and spending a lot of time practicing.
              After that, I gained a lot of experience by working at Gentlab and attending several workshops.
              Besides work, I try to learn new things through personal projects or discovering new technologies.
              Since October 1st 2018, I am a student at Babes-Bolyai University from Cluj-Napoca studying for a bachelor's degree in Computer Science.
              I believe that every software created should be the response to a need or a problem that we have.
          </div>
        </div>
      </div>
    )
  }
}
