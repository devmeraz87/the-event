import {TiSocialTwitter, TiSocialLinkedin} from "react-icons/ti";
import {AiOutlineFacebook, AiOutlineInstagram} from "react-icons/ai";
import { BsChevronRight} from "react-icons/bs"

import { Footer_link_1, Footer_link_2, Footer_address, Footer_social } from "../data/data"; 

import logo from "../../assest/logo.png"

const Footer = () => {
    return (
        <>
            <div className="_footer">
                <div className="_container">
                    <div className="_content">
                        <div className="_footer_grid_items">
                            <div className="_footer_grid_item">
                                <div className="_brand_logo">
                                    <a href="">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                                <p className="_lead">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quaerat, enim dicta natus sit maxime nisi aspernatur repellendus laborum ipsam praesentium ullam minima rerum? Eligendi perspiciatis suscipit dolore amet sapiente ut magnam non velit molestiae veritatis! Corporis.
                                </p>
                            </div>
                            <div className="_footer_grid_item">
                                <div className="_footer_grid_header">
                                    <h2 className="_heading">Useful link</h2>
                                </div>
                                <ul className="_links">
                                    {Footer_link_1 && Footer_link_1.map((footer_link) => (
                                        <li key={footer_link.id}>
                                            <a className="_flx _flx_al_ce" href={footer_link.link}>
                                                <i className="_icon _flx _flx_al_ce">
                                                    <BsChevronRight />
                                                </i>
                                                <span>{footer_link.link_name}</span>
                                            </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="_footer_grid_item">
                                <div className="_footer_grid_header">
                                    <h2 className="_heading">Useful link</h2>
                                </div>
                                <ul className="_links">
                                    {Footer_link_1 && Footer_link_1.map((footer_link) => (
                                        <li key={footer_link.id}>
                                            <a className="_flx _flx_al_ce" href={footer_link.link}>
                                                <i className="_icon _flx _flx_al_ce">
                                                    <BsChevronRight />
                                                </i>
                                                <span>{footer_link.link_name}</span>
                                            </a>
                                         </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="_footer_grid_item">
                                <div className="_footer_grid_header">
                                    <h2 className="_heading">Contact us</h2>
                                </div>
                                <ul className="_footer_address">
                                    {Footer_address && Footer_address.map((footer_address) => (
                                        <li key={footer_address.id}>{footer_address.name}</li>
                                    ))}
                                </ul>
                                <div className="_footer_social _flx _flx_al_ce">
                                    {Footer_social && Footer_social.map((footer_social) => (
                                        <a key={footer_social.id} href={footer_social.link}>
                                            <i className="_flx _flx_al_ce">
                                                {footer_social._icon}
                                            </i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="_footer_text">
                <div className="_container">
                        <div className="_content">
                            <div className="_context _flx _flx_dir_cl _flx_al_ce _flx_ju_ce">
                                <span className="_copy">&copy; Copyright <b>TheEvent. </b>All Rights Reserved</span>
                                <small>Designed by <a href=""><b>Mevlan Meraj</b></a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Footer;