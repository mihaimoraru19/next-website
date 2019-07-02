import React, { Component } from 'react';
import axios from 'axios';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import './Form.scss';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      errors: {
        name: false,
        email: false,
        subject: false,
        message: false
      },
      disabled: false
    }
  }

  validEmail = (email) => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
  };

  validate = () => {
    const { form, errors } = this.state;
    for (let field in form)
      if (form[field].trim() === '') {
        let newErrors = errors;
        newErrors[field] = true;
        this.setState({errors: newErrors})
      }  else {
        let newErrors = errors;
        newErrors[field] = false;
        this.setState({errors: newErrors})
      }

    if (!this.validEmail(form['email'])) {
      let newErrors = errors;
      newErrors['email'] = true;
      this.setState({errors: newErrors})
    } else {
      let newErrors = errors;
      newErrors['email'] = false;
      this.setState({errors: newErrors})
    }

    let errorNumber = 0;
    for (let error in errors) {
      if (errors[error] === true)
        errorNumber++;
    }
    return errorNumber === 0;
  };

  onSubmit = (e) => {
    const { form: { name, email, subject, message } } = this.state;
    e.preventDefault();

    if (this.validate()) {
      axios(({
        method: 'post',
        url: 'https://mihaimoraru.com/submit',
        data: {
          name: name,
          subject: subject,
          email: email,
          message: message
        }
      }));

      this.setState({disabled: true})
    }

  };

  onChange = (e) => {
    const { form } = this.state;
    let newForm = form;
    newForm[e.target.name] = e.target.value;
    this.setState({form: newForm});
  };

  render () {
    const { errors: { name, email, subject, message }, disabled } = this.state;
    return (
      <form autoComplete="on" className="Form_Container">
        <div className="Form_Field">
          <label>NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="Form_Input"
            onChange={(e) => this.onChange(e)}
            style={name ? {borderBottom: '1px solid red'} : {}}
            disabled={disabled}
          />
        </div>
        <div className="Form_Field">
          <label>EMAIL</label>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            className="Form_Input"
            onChange={(e) => this.onChange(e)}
            style={email ? {borderBottom: '1px solid red'} : {}}
            disabled={disabled}
          />
        </div>
        <div className="Form_Field">
          <label>SUBJECT</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="Form_Input"
            onChange={(e) => this.onChange(e)}
            style={subject ? {borderBottom: '1px solid red'} : {}}
            disabled={disabled}
          />
        </div>
        <div className="Form_Field">
          <label style={{marginBottom: '5px'}}>MESSAGE</label>
          <textarea
            name="message"
            placeholder="Your Message..."
            className="Form_TextareaInput"
            onChange={(e) => this.onChange(e)}
            style={message ? {border: '1px solid red'} : {}}
            disabled={disabled}
          />
        </div>
        {disabled ? (
          <button className="Form_Button_Success" onClick={(e) => this.onSubmit(e)} disabled={true}>
            Your message has been sent!
            <IoIosCheckmarkCircleOutline style={{marginLeft: '5px'}}/>
          </button>
        ) : (
          <button className="Form_Button" onClick={(e) => this.onSubmit(e)} disabled={false}>
            SUBMIT
          </button>
        )}

      </form>
    )
  }
}
