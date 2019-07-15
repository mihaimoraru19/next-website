import React, { PureComponent } from 'react';
import Form from '../../components/Form/Form';
import './Contact.scss';

export default class Contact extends PureComponent {
  render() {
    return (
      <div className='Contact_Container'>
        <div className='Contact_Header'>
          HIT ME UP
        </div>
        <Form />
        <div className="Footer">
          <img style={{maxHeight: '80%', marginRight: '20px'}} src={require('../../static/logo.svg')} alt="Logo Mihai Moraru"/>
          <div>Copyright <span className="Name">Mihai Moraru</span> © 2019</div>
        </div>
      </div>
    )
  }
}
