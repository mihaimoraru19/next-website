import React, { Component } from 'react'
import Particles from 'react-particles-js'
import logo from '../../static/logo.svg'
import Typist from 'react-typist'
import { FaFacebookF, FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import './Intro.scss'

export default class Intro extends Component {
  render () {
    return (
      <div className='Intro_Container'>
        <Particles
          className='Particles'
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1000
                }
              },
              color: {
                value: '#ffffff'
              }
            },
            shape: {
              type: 'circle'
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'grab'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 109.5556908094949,
                  line_linked: {
                    opacity: 1
                  }
                }
              }
            }
          }}
        />
        <div className='Central'>
          <img className='Intro_Image' src={logo} alt='Mihai Moraru photo rounded' />
          <div className='Intro_Text'>
            <div className='Intro_Text_Name'>
              HI! I AM <span style={{ color: 'rgb(66, 135, 191)' }}>MIHAI MORARU</span>
            </div>
            <div className='Intro_Text_Job'>
              <Typist cursor={{ blink: true }}>
                <span>Full-Stack Web Devloper</span>
                <Typist.Backspace count={5} delay={800} />
                <span>eloper</span>
              </Typist>
            </div>
          </div>
          <div className='Intro_Social'>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '70%' }}>
              <a className='Icon Icon_Facebook' href='https://www.facebook.com/MihaiMoraru19' target='_blank' rel='noopener noreferrer'>
                <FaFacebookF />
              </a>
              <a className='Icon Icon_LinkedIn' href='https://www.linkedin.com/in/mihaimoraru19/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
              </a>
              <a className='Icon Icon_Github' href='https://www.github.com/afmihai' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
              </a>
            </div>
          </div>
          <div onClick={() => window.scrollBy({top: window.innerHeight, behavior: 'smooth'})} className='Intro_Footer'>
            <IoIosArrowDown size={'1.5em'} color={'rgb(66, 135, 191)'} />
          </div>
        </div>
      </div>
    )
  }
}
