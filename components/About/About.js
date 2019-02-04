import React, { Component } from 'react'
import './About.scss'

export default class About extends Component {
  render () {
    return (
      <div className='About_Container'>
        <img style={{ maxHeight: '30vh' }} src='../../static/mihai-cut.png' alt='Mihai Moraru' />
      </div>
    )
  }
}
