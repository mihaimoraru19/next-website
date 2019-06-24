import React, { PureComponent } from 'react';
import Particles from 'react-particles-js'

export default class ParticlesComponent extends PureComponent {
  render () {
    return (
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
    )
  }
}
