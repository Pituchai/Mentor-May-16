import React, { Component } from "react";
export default class Login extends Component {
  render() {
    return (
      <form>
        <div class="container-flex">
          <div class="row mb-">
            <div class="col "> 
              <div class="row-2 " id="top-left">
                <p class="text-light text-center mb-5" >
                  <p><h5>Welcome back</h5><h6 class="text-secondary" >We’re so excited to sleep again 😴</h6></p>
                </p>
              </div>
              <div class="row-10">
                <div className="mb-3">
                  <label class="text-light">EMAIL OR PHONENUMBER</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-3">
                  <label class="text-light" >Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>
                <div className="mb-1">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                      class="text-light"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary text-light" >
                    Login
                  </button>
                </div>
                <p className="forgot-password text-light ">
                  Forgot <a href="#">password?</a>
                </p>
              </div>
            </div>

            <div class="col d-flex align-items-center">
              <div>dasasdasdakj</div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
