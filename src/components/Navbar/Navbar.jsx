/* eslint-disable no-undef */
import { Link } from "react-router-dom"
import logo from "../../assets/logo/Group 1.svg"
import { navbar } from "../../utils/utils"
import React from "react"
import Button from "../Buttons/Button"
import "./style.css"


export default function Navbar() {
    return (
<div className="Navbar_Main">
<nav>
            <div className="image_log">
                <img src={logo} alt="" className="logo" />
            </div>

           <div className="boxRightNavbar">
           <ul className="list">
                {navbar?.map(({ path, id, name }) => {
                    return (
                        <React.Fragment key={id}>
                            <Link to={path}><li className="list_item active">{name}</li></Link>
                        </React.Fragment>
                    )
                })}
            </ul>

            <div className="btn">
            <Button className={"orange"} name={"Manage Booking"}/>
            </div>
           </div>
        </nav>

</div>
        
    )
}
