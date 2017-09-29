import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import TextInput from '../form-fields/text-input';
import GenericForm from '../form-fields/generic-form';
import { register, CHANGE_AUTH } from '../../redux/modules/authentication';
import { errorPropTypes } from '../../util/proptype-utils';
import './authentication.scss';

const form = reduxForm({
  form: 'register',
});

class Register extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    register: PropTypes.func,
    errors: errorPropTypes,
    message: PropTypes.string,
    loading: PropTypes.bool,
  };

  static formSpec = [
    { id: 'firstName', name: 'name.first', label: 'First Name', type: 'text', placeholder: 'John', component: TextInput },
    { id: 'lastName', name: 'name.last', label: 'Last Name', type: 'text', placeholder: 'Snow', component: TextInput },
    { id: 'email', name: 'email', label: 'Email', type: 'email', placeholder: 'you@yourdomain.com', component: TextInput },
    { id: 'password', name: 'password', label: 'Password', type: 'password', placeholder: '********', component: TextInput },
    { id: 'passwordConfirm', name: 'passwordConfirm', label: 'Confirm Password', type: 'password', placeholder: '********', component: TextInput },
    { id: 'yubikey', name: 'yubikey', label: '(press yubikey) optional', type: 'password', placeholder: 'ccccskdfd....', component: TextInput },

  ];

  handleFormSubmit = formProps => this.props.register(formProps);

  render = () => {
    const { handleSubmit, errors, message, loading } = this.props;

    // return (
    //   <div className={`auth-box ${loading ? 'is-loading' : ''}`}>
    //     <h1>Register</h1>
    //     <GenericForm
    //       onSubmit={handleSubmit(this.handleFormSubmit)}
    //       errors={errors}
    //       message={message}
    //       formSpec={Register.formSpec}
    //       submitText="Register"
    //     />
    //     <Link className="inline" to="/login">Have an account?</Link>
    //   </div>
    // );

    // return (
    //   <div className="modal fade" id="signup-modal" tabIndex="-1" role="dialog" aria-hidden="true">
    //     <div className="modal-dialog">
    //       <div className="modal-content">
    //         <div className="modal-header">
    //           <h4 className="modal-title">
    //                 Sign Up
    //               </h4>
    //           <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    //         </div>
    //         <div className="modal-body">
    //           <GenericForm
    //             onSubmit={handleSubmit(this.handleFormSubmit)}
    //             errors={errors}
    //             message={message}
    //             formSpec={Register.formSpec}
    //             submitText="Register"
    //           />
    //         </div>
    //         <div className="modal-footer">
    //           <Link className="inline" to="/login">Have an account?</Link>
    //         </div>
    //       </div>
    //
    //     </div>
    //
    //   </div>
    // );

    return (
      <div className="modal fade" id="signup-modal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                              Sign Up
                          </h4>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div className="modal-body">
              <form action="signup.htm">
                <div className="form-group">
                  <h5>
                                      Price Plan
                                  </h5>
                  <select className="form-control">
                    <option>Basic</option>
                    <option>Pro</option>
                    <option>Pro +</option>
                  </select>
                </div>
                <hr />

                <h5>
                                  Account Information
                              </h5>
                <div className="form-group">
                  <label className="sr-only" htmlFor="signup-first-name">First Name</label>
                  <input type="text" className="form-control" id="signup-first-name" placeholder="First name" />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="signup-last-name">Last Name</label>
                  <input type="text" className="form-control" id="signup-last-name" placeholder="Last name" />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="signup-username">Userame</label>
                  <input type="text" className="form-control" id="signup-username" placeholder="Username" />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="signup-email">Email address</label>
                  <input type="email" className="form-control" id="signup-email" placeholder="Email address" />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="signup-password">Password</label>
                  <input type="password" className="form-control" id="signup-password" placeholder="Password" />
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" value="term" className="form-check-input">
                                          I agree with the Terms and Conditions.</input>
                  </label>
                </div>
                <hr />
                <button className="btn btn-primary" type="submit">Sign up</button>
              </form>
            </div>
            <div className="modal-footer">
              <small>Already signed up? <a href="login.htm">Login here</a>.</small>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  errors: authentication.errors[CHANGE_AUTH],
  message: authentication.messages[CHANGE_AUTH],
  loading: authentication.loading[CHANGE_AUTH],
  authenticated: authentication.authenticated,
});

export default connect(mapStateToProps, { register })(form(Register));
