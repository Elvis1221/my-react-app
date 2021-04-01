import React from "react"
import {NavLink} from "react-router-dom";

import "../App.css"


const navBar = [
  {
    title: 'Form',
    path: '/Form'
  },
  {
    title: 'Cards',
    path: '/Cards'
  },
  {
    title: 'Reviews',
    path: '/Reviews'
  }
];

export const NavBar = () => {
  return (
    <div className="wrapper-nav-bar">
      {
        navBar.map((item, index) =>
          <div key={index} className="nav-bar">
            <button type="button" className="btn btn-outline-secondary">
              <NavLink
                to={item.path}
                children={item.title}
                className="nav-title"
              />
            </button>
          </div>
        )
      }
    </div>
  )
};