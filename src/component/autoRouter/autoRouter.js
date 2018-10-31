import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
// import {connect} from "react-redux";

@withRouter
class AutoRouter extends React.Component {
  componentDidMount() {
    const publicList = ["/agent", "/help", "/dashboard", "/myCruise"];
    const pathname = this.props.location.pathname;
    if (publicList.indexOf(pathname) !== -1) {
      return null;
    }
    
    this.props.history.push('/agent')
  }

  render() {
    return null;
  }
}

export default AutoRouter;
