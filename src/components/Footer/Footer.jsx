/* eslint-disable no-undef */
import { Link } from "react-router-dom"
import { footer, footerthree, footertwo } from "../../utils/utils"
import React from "react"
import footerLogo from "../../assets/logo/Group 1.svg"
import './style.css'
import facebook from "../../assets/image/image 22.svg"
import instagram from "../../assets/image/image 21.svg"
import youtube from "../../assets/image/image 20.svg"

export default function Footer() {
  return (
    <div className="footer_back">
        <footer>
          <div className="f_first_part">
          <div className="logo">
            <img src={footerLogo} alt="" className="footer_logo"/>
            <p className="footer_name">HKinvision</p>
           </div>
           <p className="footer_paragrph">The Worlds Best Luxury Cars Dealing Platform</p>
          </div>
            <div className="f_second_part">
            <ul className="footer_list">
                {footer?.map(({ path, id, name }) => {
                    return (
                        <React.Fragment key={id}>
                            <Link to={path}><li className="list_item active">{name}</li></Link>
                        </React.Fragment>
                    )
                })}
            </ul>
            <ul className="footer_list">
                {footertwo?.map(({ path, id, name }) => {
                    return (
                        <React.Fragment key={id}>
                            <Link to={path}><li className="list_item active">{name}</li></Link>
                        </React.Fragment>
                    )
                })}
            </ul>
            <ul className="footer_list">
                {footerthree?.map(({ path, id, name }) => {
                    return (
                        <React.Fragment key={id}>
                            <Link to={path}><li className="list_item active">{name}</li></Link>
                        </React.Fragment>
                    )
                })}
            </ul>
           <ul className="footer_list_img">
                <li><img src={youtube} alt="" /></li>
                <li><img src={instagram} alt="" /></li>
                <li><img src={facebook} alt="" /></li>
           </ul>
            </div>

        </footer>
        <div className="last_part">
           <p className="ending_part">©2022 HKInvestor. All right reserved</p>
           </div>
    </div>
  )
}
