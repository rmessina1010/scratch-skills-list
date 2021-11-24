import { NavLink } from "react-router-dom"
const Nav = function (props) {


    return (
        <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/me">Me</NavLink></li>
            <li><NavLink to="/you">You</NavLink></li>
            <li><NavLink to="/hoc">hoc</NavLink></li>
        </ul>
    )
}

export default Nav