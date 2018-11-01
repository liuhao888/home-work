import React from "react";
import logoImg from "../../component/logo/logo.svg";
import avatarImg from "../../component/image/avatar.jpg";
import './header.css';
// import {connect} from 'react-redux';

// @connect(
//     state=>state.user,
//     {update}
// )
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-container">
          <img className="logoImg" src={logoImg} alt="logo" />
          <div className="avatarImg-container">
            <img className="avatarImg" src={avatarImg} alt="avatar" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
