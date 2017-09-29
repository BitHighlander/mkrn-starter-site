import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuthenticatedUser } from '../../redux/modules/user';
import { logoutUser, login, CHANGE_AUTH } from '../../redux/modules/authentication';
import { mobileBreakpoint } from '../../constants/ui-constants';


// import TextInput from '../form-fields/text-input';
// import GenericForm from '../form-fields/generic-form';
// import { errorPropTypes } from '../../util/proptype-utils';
// import './authentication.scss';
//
//
// const form = reduxForm({
//   form: 'login',
// });

class Header extends Component {
  state = {
    isMobile: window.innerWidth <= mobileBreakpoint,
    mobileNavOpen: false,
  };

  componentWillMount = () => {
    window.addEventListener('resize', this.mobileCheck);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.mobileCheck);
  }

  mobileCheck = () => this.setState({ isMobile: window.innerWidth <= mobileBreakpoint });

  buildNavigation = () => {
    const { user } = this.props;
    console.log('user: ', user);
    const links = [
      {
        name: 'Dashboard',
        link: 'dashboard',
        authenticated: true,
      },
      {
        name: (user && user.firstName) || 'Profile',
        link: 'profile',
        authenticated: true,
      },
      {
        name: (user && user.yubiID) || 'keyID',
        link: 'profile',
        authenticated: true,
      },
      {
        name: 'Sign out',
        onClick: this.props.logoutUser,
        authenticated: true,
      },
      {
        name: 'Sign in',
        link: 'login',
        authenticated: false,
      },
      {
        name: 'Register',
        link: 'register',
        authenticated: false,
      },
    ];

    return (
      <ul>
        {links.filter(link => link.authenticated === this.props.authenticated).map(link => (
          <li key={link.name}>
            {link.link && <Link to={link.link}>{link.name}</Link>}
            {link.onClick && <a href="javascript:void(null);" onClick={link.onClick}>{link.name}</a>}
          </li>
        ))}
      </ul>
    );
  };

  toggleMobileNav = () => this.setState({ mobileNavOpen: !this.state.mobileNavOpen });

  render() {
    const { isMobile, mobileNavOpen } = this.state;

    return (
      <div id="header">
        <div className="header-hidden collapse">
          <div className="header-hidden-inner container">
            <div className="row">
              <div className="col-sm-6">
                <h3>
                                About Us
                            </h3>
                <p>Buy funbucks here!</p>
                <a href="about.htm" className="btn btn-sm btn-primary">Find out more</a>
              </div>
              <div className="col-sm-6" />
            </div>
          </div>
        </div>


        <div className="header-upper">

          <div id="header-hidden-link">
            <a href="#" title="Click me you'll get a surprise" className="show-hide" data-toggle="show-hide" data-target=".header-hidden"><i />Open</a>
          </div>
          <div className="header-inner container">
            <div className="header-block-flex flex-first mr-auto">
              <nav className="nav nav-sm header-block-flex">

                <a className="nav-link hidden-md-up" href="login.htm"><i className="fa fa-user" /></a>
                <a className="nav-link text-xs text-uppercase hidden-sm-down" href="#signup-modal" data-toggle="modal">Sign Up</a> <a className="nav-link text-xs text-uppercase hidden-sm-down" href="#login-modal" data-toggle="modal">Login</a>
              </nav>
              <div className="header-divider header-divider-sm" />

            </div>
            <div className="nav nav-icons header-block flex-last">
              <a href="https://twitter.com/Cash2BTC" className="nav-link"> <i className="fa fa-twitter-square icon-1x" /> <span className="sr-only">Twitter</span> </a>
              <a href="#" className="nav-link"> <i className="fa fa-facebook-square icon-1x" /> <span className="sr-only">Facebook</span> </a>
              <a href="#" className="nav-link"> <i className="fa fa-linkedin-square icon-1x" /> <span className="sr-only">Linkedin</span> </a>
              <a href="#" className="nav-link"> <i className="fa fa-google-plus-square icon-1x" /> <span className="sr-only">Google plus</span> </a>
            </div>
          </div>
        </div>
        <div data-toggle="sticky">


          <div className="header">
            <div className="header-inner container">
              <div className="header-brand flex-first">
                <a className="header-brand-text" href="index.htm" title="Home">
                  <h1>
                    <span>FUN</span>Bucks<span>.</span>
                  </h1>
                </a>
                <div className="header-divider hidden-md-down" />
                <div className="header-slogan hidden-md-down">the money of fun!</div>
              </div>
              <div className="header-block flex-last">


                <a href="#search" className="btn btn-icon btn-link header-btn float-right flex-last" data-toggle="search-form" data-target=".header-search"><i className="fa fa-search fa-flip-horizontal search-icon" /></a>

                <a href="#top" className="btn btn-link btn-icon header-btn float-right hidden-lg-up" data-toggle="jpanel-menu" data-target=".navbar-main" data-direction="right"> <i className="fa fa-bars" /> </a>
              </div>

              <div className="navbar navbar-toggleable-md">
                {this.buildNavigation()}

              </div>
            </div>
          </div>
        </div>
      </div>
    );


    // return (
    //   <div className="header-upper">
    //     <div className="header-inner container">
    //       <div className="nav nav-sm header-block-flex">
    //         <header className="clearfix">
    //           <strong className="logo left">fugga, fuck off dude</strong>
    //           {isMobile &&
    //           <a
    //             href="javascript:void(null);"
    //             role="button"
    //             className="mobile-nav-toggle clearfix right material-icons"
    //             onClick={this.toggleMobileNav}
    //             aria-label="Toggle navigation"
    //           >
    //             {mobileNavOpen ? 'close' : 'menu'}
    //           </a>
    //     }
    //           <nav className={`main-navigation right ${isMobile ? `mobile ${mobileNavOpen ? 'is-expanded' : ''}` : ''}`}>
    //             {this.buildNavigation()}
    //           </nav>
    //         </header>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
  }),
  yubikey: PropTypes.shape({
    yubikey: PropTypes.string,
  }),
  authenticated: PropTypes.bool,
  logoutUser: PropTypes.func,
};

const mapStateToProps = ({ user, authentication }) => ({
  user: getAuthenticatedUser({ user, authentication }),
  authenticated: authentication.authenticated,
});

export default connect(mapStateToProps, { logoutUser })(Header);
