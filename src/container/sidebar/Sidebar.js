import React from "react";
import "./sidebar.css";
import "../../component/font icons/fonts.css";
import "../../component/font icons/fonts/cruise.svg";
import "../../component/font icons/fonts/cruise.ttf";
import "../../component/font icons/fonts/cruise.woff";
// import {connect} from 'react-redux';

// @connect(
//     state=>state.user,
//     {update}
// )
class Sidebar extends React.Component {
  render() {
    const routers = [
      {
        link: "/dashboard",
        linkName: "DASHBOARD",
        iconClass: "icon-dashboard"
      },
      {
        link: "/agent",
        linkName: "AGENT",
        iconClass: "icon-sitemap"
      },
      {
        link: "/myCruise",
        linkName: "MYCRUISE",
        iconClass: "icon-boat"
      },
      {
        link: "/help",
        linkName: "HELP",
        iconClass: "icon-life-bouy"
      }
    ];

    return (
      <div className="fiexd-sidebar">
        <ul>
          {routers.map(item => {
            return (
              <li key={item.linkName}>
                <a href={item.link}>
                  <span className={`icons ${item.iconClass}`} />
                  {item.linkName}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
