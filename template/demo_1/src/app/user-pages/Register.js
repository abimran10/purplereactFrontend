import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
// import  Alertify  from 'react-alertify-js'
export class Register extends Component {
  constructor(){
    super();
    console.log("Hello i am constructor fromnews components")

    this.state={
        user_name:"",
        user_email:"",
        user_age:"",
        user_address:"",
        user_city:"",
        user_country:"",
        user_password:"",
        response:""
    }  
}
handleRegister=(e)=>{
  e.preventDefault()
  console.log(this.state);
  const data = {...this.state}
  delete data.response
  // const payload = new URLSearchParams(this.state);
  axios.post('http://localhost:4000/userRegister', data)
  .then(response => {
    this.setState({ response: response.data })
    
    alert(response.data);
  }
  
  );


}
  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="UserName" onChange={(e)=>{
                      this.setState( {user_name:e.target.value})
                    }} />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="UserEmail" onChange={(e)=>{
                      this.setState( {user_email:e.target.value})
                    }}/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="UserAge" onChange={(e)=>{
                      this.setState( {user_age:e.target.value})
                    }} />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="UserAddress" onChange={(e)=>{
                      this.setState( {user_address:e.target.value})
                    }}/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="UserCity" onChange={(e)=>{
                      this.setState( {user_city:e.target.value})
                    }} />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="UserCountry" onChange={(e)=>{
                      this.setState( {user_country:e.target.value})
                    }}/>
                  </div>                 
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="UserPassword" onChange={(e)=>{
                      this.setState( {user_password:e.target.value})
                    }}/>
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={this.handleRegister}>SIGN UP</button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <Link to="/user-pages/login" className="text-primary">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
