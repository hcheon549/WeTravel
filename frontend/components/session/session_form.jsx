import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      introduction: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = this.errors.bind(this);
  }

  handleSubmit(e) { 
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user).then(this.props.closeModal)
  }

  handleUpdate(type) {
    return (event) => {
        this.setState({ [type]: event.target.value })
    }
  }

  errors() {
    if (this.props.errors.session) {
      return (
        this.props.errors.session.map((error, idx) => {
          if (error.includes('Fname')) {
            error = "First name can't be blank";
          } else if (error.includes('Lname')) {
            error = "Last name can't be blank"
          };
          return (<li key={idx}>{error}</li>)
        })
      )
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  demo() {
    this.setState({ 
      email: "demo-user@email.com",
      password: "demo-user",
     })
  }

  render() {
    const extraForm = (this.props.formType === 'Sign Up') ? (
      <>
        <div className="search-form-field inline">
          <div className="search-form-inline-field">
            <label>FIRST NAME</label>
            <input
              type="text"
              value={this.state.fname}
              onChange={this.handleUpdate('fname')}
            />
          </div>

          <div className="search-form-inline-field">
            <label>LAST NAME</label>
            <input
              type="text"
              value={this.state.lname}
              onChange={this.handleUpdate('lname')}
            />
          </div>
        </div>

        <div className="search-form-field">
          <label>INTRODUCTION (Optional)</label>
            <textarea
              value={this.state.introduction}
              onChange={this.handleUpdate('introduction')}
            />
        </div>
      </>
    ) : (
      <div className="">
        <input type="checkbox" />Remember Me
      </div>
    )

    const switchForm = (this.props.formType === 'Sign Up') ? (
      <div className="switch-form">
        <p>Already have an WeTravel account?
          &nbsp;
          <span className="switch-button" onClick={this.props.otherForm}>Log In</span>
        </p>
      </div>
    ) : (
      <div className="switch-form">
        <p>
          Don't have an account?
          &nbsp;
          <span className="switch-button" onClick={this.props.otherForm}>Sign Up</span>
        </p>
      </div>
    )

    const demoUserButton = (this.props.formType === "Log In") ? (
      <div className="demo-user">
        <button onClick={this.demo.bind(this)}>Demo User</button>
      </div>
    ) : (
      <div></div>
    )

    return (      
      <div className="session-form">
      
      {/* ----------- closing X ---------- */}
      <span className="session-close" onClick={this.props.closeModal}>&times;</span>

        <div className="session-form-fill">

          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="search-form-field">
              <label>EMAIL</label>
                <input 
                  type="text" 
                  value={this.state.email}
                  // placeholder="EMAIL"
                  onChange={this.handleUpdate('email')}
                />
            </div>

            <div className="search-form-field">
              <label>PASSWORD</label>
                <input 
                  type="password"
                  value={this.state.password}
                  autoComplete="off"
                  // placeholder="PASSWORD"
                  onChange={this.handleUpdate('password')}
                />
            </div>
            {extraForm}
            <ul>
              {this.errors()}
            </ul>
            <div className="search-form-button">
              <button>{this.props.formType}</button>
            </div>
          </form>
          
          {demoUserButton}

          <div className="line-container">
            <div className="draw-line"></div>
          </div>

          {switchForm}

        </div>
      </div>
    )
  }
}

export default SessionForm;