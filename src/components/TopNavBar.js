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
            name="RSources"
          />
          <Menu.Item
            as={NavLink}
            to="/home"
            name="Home"
            active={pathname === "/home"}
            />
          <Menu.Item
            as={NavLink}
            to="/subject/1"
            name="Science"
            active={pathname === "/subject/1"}
            />
          <Menu.Item
            as={NavLink}
            to="/subject/2"
            name="Tech"
            active={pathname === "/subject/2"}
            />
          <Menu.Item
            as={NavLink}
            to="/subject/3"
            name="Engineering"
            active={pathname === "/subject/3"}
            />
          <Menu.Item
            as={NavLink}
            to="/subject/4"
            name="Math"
            active={pathname === "/subject/4"}
            />
          <Menu.Menu position="right">
            <Menu.Item to="/logout" name="Logout" onClick={logout} />
          </Menu.Menu>
        </Fragment>
      ) : (
        <Menu.Item
          as={NavLink}
          to="/login"
          name="Rsources Login"
          active={pathname === "/login"}
        />
      )}
    </Menu>
  );
};

export default withRouter(TopNavBar);
