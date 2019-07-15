import React, { Component } from 'react'
import '../styles/style.scss'
import Intro from '../containers/Intro/Intro'
import About from '../containers/About/About'
import Resume from '../containers/Resume/Resume'
import LazyLoad from 'react-lazyload'
import Contact from "../containers/Contact/Contact";
import { initGA, logPageView } from "../utils/analytics";

export default class Home extends Component {

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

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
