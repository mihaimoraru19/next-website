import React, { Component } from 'react'
import '../styles/style.scss'
import Intro from '../components/Intro/Intro'
import About from '../components/About/About'
import Resume from '../components/Resume/Resume'
import LazyLoad from 'react-lazyload'
import Contact from "../components/Contact/Contact";

export default class Home extends Component {

  render () {
    return (
      <div>
        <LazyLoad>
          <div className='img' style={{
            backgroundImage: `url('../../static/hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh'
          }}>
            <Intro />
          </div>
        </LazyLoad>
        <div id="#Content" className="Content">
          <About />
          <Resume />
          <Contact />
        </div>
      </div>
    )
  }
}
