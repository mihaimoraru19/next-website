import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import '../styles/style.scss'
import Intro from '../components/Intro/Intro'
import About from '../components/About/About'
import Resume from '../components/Resume/Resume'
import Mercury from '@postlight/mercury-parser'

export default class Home extends Component {
  componentDidMount () {
    // const url = 'https://www.google.com'
    const url = 'https://www.emag.ro/telefon-mobil-samsung-galaxy-s8-64gb-4g-midnight-black-sm-g950fzkarom/pd/D1XVG7BBM/';
    Mercury.parse(url).then(result => console.log(result))
  }

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
          <FullpageSection>
            <About />
          </FullpageSection>
          <FullpageSection>
            <Resume />
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
