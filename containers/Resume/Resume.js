import React, { PureComponent } from 'react'
import './Resume.scss'

export default class Resume extends PureComponent {
  render () {
    return (
      <div className='Resume_Container'>
        <h1 className='Resume_Header'>
          RESUME
        </h1>
        <div className='Resume_Company'>
          <div>
            <div className='Resume_Company_Name' style={{color: '#4b89ff'}}>AROBS Transilvania Software</div>
            <span className='Resume_Company_Position'>
              JavaScript Developer
            </span>
          </div>
          <span className='Resume_Company_Time'>
            March 2019 - Present
          </span>
          <div className='Resume_Company_Description'>
            Currently working for a project in the Travel & Booking industry.
            My main responsibilities are to develop and test new features, fix bugs and provide estimations in a SAFe environment, contributing to a ReactJS plug-in based architecture application.
          </div>
        </div>
        <div className='Resume_Company'>
          <div>
            <div className='Resume_Company_Name' style={{color: '#439fdb'}}>GENTLAB</div>
            <span className='Resume_Company_Position'>
              Full-Stack Developer
            </span>
          </div>
          <span className='Resume_Company_Time'>
            April 2017 - February 2019
          </span>
          <div className='Resume_Company_Description'>
            My main responsibilities were to implement new features and fix bugs on the web and mobile for an e-Learning platform, Knolyx.
            In the past I worked for a platform dedicated to communities, Kommio.
            I was working with Java & Spring Framework on the back-end and ReactJS on the front-end.
            For mobile applications of Kommio and Knolyx I have been using React Native exclusively.
          </div>
        </div>
      </div>
    )
  }
}
