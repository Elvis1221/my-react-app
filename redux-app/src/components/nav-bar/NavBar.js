import React from "react"
import {NavLink} from "react-router-dom";

import "../App.css"


const navigationData = [
  {
    title: 'Form',
    path: '/Form'
  },
  {
    title: 'Cards',
    path: '/Cards'
  }
];


export const NavBar = () => {
  return (
    <div className="wrapper-nav-bar">
      {
        navigationData.map((item, index) =>
          <div key={index} className="nav-bar">
            <NavLink
              to={item.path}
              children={item.title}
              className="nav-title"
            />
          </div>
        )
      }
    </div>
  )
};