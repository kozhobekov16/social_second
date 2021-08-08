import React from 'react'
import s from './Sidebar.module.css'
import {NavLink} from 'react-router-dom'
const Sidebar = () =>{
    return(
        <div className={s.sidebar}>
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
          <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
        </div>
    )
}
export default Sidebar