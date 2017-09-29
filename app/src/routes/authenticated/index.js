import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { getAuthenticatedUser } from '../../redux/modules/user';
import { logoutUser } from '../../redux/modules/authentication';

class Dashboard extends Component {


  render() {
    console.log('this22: ', this);
    // console.log('this22: ', this.props.get);
    // let authentication = this.
    const { user } = this.props;
    // const { user } = this.props;
    console.log('user22: ', user);

    let testObj = 'Loading....';
    if (user && user.firstName) {
      testObj = user.yubiID;
    }
    // console.log('user223: ', user.firstName);
    // console.log(this.state.gifs);
    return (
      <Switch>
        <Route
          exact
          path="/dashboard"
          component={
          () => <div>Welcome to the dashboard your keyID: {testObj}<div>more info here!</div></div>
        }
        />
      </Switch>
    );
  }
}


Dashboard.propTypes = {
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

export default connect(mapStateToProps, { logoutUser })(Dashboard);


// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// // import { Link } from 'react-router';
//
// // import { protectedTest } from '../../actions/auth';
//
//
// const AuthenticatedRoutes = () => (
//   <Switch>
//     <Route exact path="/dashboard" component={() => <div>Welcome to the dashboard faggot</div>} />
//   </Switch>
// );
//
// // old
// export default AuthenticatedRoutes;

