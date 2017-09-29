import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import TextInput from '../form-fields/text-input';
import GenericForm from '../form-fields/generic-form';
import { login, CHANGE_AUTH } from '../../redux/modules/authentication';
import { errorPropTypes } from '../../util/proptype-utils';
import './authentication.scss';

const form = reduxForm({
  form: 'login',
});

class Login extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    desiredPath: PropTypes.string,
    login: PropTypes.func,
    errors: errorPropTypes,
    message: PropTypes.string,
    loading: PropTypes.bool,
  };

  static formSpec = [
    { id: 'email', name: 'email', label: 'Email', type: 'email', placeholder: 'fuckofnigga', component: TextInput },
    { id: 'password', name: 'password', label: 'Password', type: 'password', placeholder: '********', component: TextInput },
    { id: 'yubikey', name: 'yubikey', label: 'yubikey', type: 'password', placeholder: '(press yubikey)', component: TextInput },
  ];

  handleFormSubmit = (formProps) => {
    const { desiredPath } = this.props;
    if (desiredPath) {
      this.props.login(formProps, desiredPath);
    } else {
      this.props.login(formProps);
    }
  }

  render = () => {
    const { handleSubmit, errors, message, loading } = this.props;

    // return (
    //   <div className={`auth-box ${loading ? 'is-loading' : ''}`}>
    //     <h1>Login2</h1>
    //     <GenericForm
    //       onSubmit={handleSubmit(this.handleFormSubmit)}
    //       errors={errors}
    //       message={message}
    //       formSpec={Login.formSpec}
    //       submitText="Login"
    //     />
    //     <Link className="inline" to="/forgot-password">Forgot Password bro?</Link> | <Link className="inline" to="/register">Sign up nigga!</Link>
    //   </div>
    // );


    return (
      <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                    Login
                  </h4>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div className="modal-body">
              <form action="login.htm">
                <GenericForm
                  onSubmit={handleSubmit(this.handleFormSubmit)}
                  errors={errors}
                  message={message}
                  formSpec={Login.formSpec}
                  submitText="Login"
                />
              </form>
            </div>
            <div className="modal-footer">
              <small>Not a member? <a href="#" className="signup">Sign up now!</a></small>
              <br />
              <small><a href="#">Forgotten password?</a></small>
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
  desiredPath: authentication.desiredPath,
});

export default connect(mapStateToProps, { login })(form(Login));
