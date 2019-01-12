import React, {Fragment} from 'react';
import {NavLink, withRouter} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

const TopNavBar =({location: { pathname }, logged_in, setCurrentUser}) => {

  let logout = () => {
    setCurrentUser(null)
    localStorage.clear()
  }

  return (
    <Menu pointing secondary>
      {logged_in ? (
        <Fragment>
          <Menu.Item
            as={NavLink}
            to="/home"
            name="RSources "
            active={pathname === "/home"}
          />
          <Menu.Menu position="right">
            <Menu.Item to="/logout" name="Logout" onClick={logout} />
          </Menu.Menu>
        </Fragment>
      ) : (
        <Menu.Item
          as={NavLink}
          to="/login"
          name="Login"
          active={pathname === "/login"}
        />
      )}
    </Menu>
  );
};

export default withRouter(TopNavBar);
