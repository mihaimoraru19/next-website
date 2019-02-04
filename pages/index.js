import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import '../styles/style.scss'
import Intro from '../components/Intro/Intro'
import About from '../components/About/About'

export default class Home extends Component {
  render () {
    return (
      <Fullpage>
        <FullPageSections>

          <FullpageSection className='img' style={{
            backgroundImage: `url('../../static/hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <Intro />
          </FullpageSection>
          <FullpageSection id='Second' style={{
          }}>
            <About />
          </FullpageSection>
          <FullpageSection style={{
            backgroundColor: 'firebrick'
            // padding: '1em',
          }}>
                        3
          </FullpageSection>
          <FullpageSection style={{
            backgroundColor: 'grey'
          }}>
                        4th screen
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    )
  }
}
