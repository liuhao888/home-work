import React from "react";
import './sidebar.css';
// import {connect} from 'react-redux';

// @connect(
//     state=>state.user,
//     {update}
// )
class Sidebar extends React.Component {
  render() {
    const routers = [
      {
        link: "/agent",
        linkName: "agent"
      },
      {
        link: "/help",
        linkName: "help"
      },
      {
        link: "/dashboard",
        linkName: "dashboard"
      },
      {
        link: "/myCruise",
        linkName: "myCruise"
      }
    ];

    return (
      <div className="fiexd-sidebar">
        <ul>
          {routers.map(item => {
            return (
              <li key={item.linkName}>
                <a href={item.link}>{item.linkName}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
