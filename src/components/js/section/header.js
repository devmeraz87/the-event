// >> Modules
import { useEffect, useState } from "react";

// >> Media
import logo from "../../assest/logo/logo.png"

// >> React icons
import { GiHamburgerMenu } from "react-icons/gi"
import { IoCloseSharp } from "react-icons/io5"

const Header = () => {

    const [showNav, setShowNav] = useState(false)
    const [scrollY_, setScrollY] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    // >> show nav transparent and color
    const runScroll = () => {
        setScrollY(window.scrollY);
    }

    // >> show small nav and width nav
    const getWindowWidth = () => {
        setWidth(window.innerWidth);
    }

    // >> show smallNav and hide
    const ShowNavFunc = () => {
        console.log("clicked");
        setShowNav(!showNav)
    }


    useEffect(() => {
        window.addEventListener("scroll", runScroll);
        window.addEventListener("resize", getWindowWidth);
    })
    
    return (
        <>
            <div className={scrollY_ > 50 ? `_header scrolled_view` : `_header`}>
                <div className="_container">
                    <div className="_content">
                        <div className="_brand_logo">
                            <a href="/">
                                <img src={logo} alt="Brand Logo" />
                            </a>
                        </div>
                        {width > 992 ? (
                            <nav className="_mainNav">
                                <ul>
                                    <li><a className="_nav_link" href="#home">Home</a></li>
                                    <li><a className="_nav_link" href="#about">About</a></li>
                                    <li><a className="_nav_link" href="#speakers">Speakers</a></li>
                                    <li><a className="_nav_link" href="#schedule">Schedule</a></li>
                                    <li><a className="_nav_link" href="#venue">Venue</a></li>
                                    <li><a className="_nav_link" href="#hotels">Hotels</a></li>
                                    <li><a className="_nav_link" href="#gallery">Gallery</a></li>
                                    <li><a className="_nav_link" href="#sponsors">Sponsors</a></li>
                                    <li><a className="_nav_link" href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        ) : null}
                        <a href="#buytickets" className="_buy_ticket">Buy Tickets</a>
                        {width > 992 ? (
                            null
                        ) : (
                            <>
                                <div className="_small_nav_show_button _flx _flx_al_ce _flx_ju_ce" onClick={ShowNavFunc}>
                                    <GiHamburgerMenu />
                                </div>
                                {showNav && (
                                    <nav className="_small_nav">
                                        <div className={scrollY_ > 50 ? "_nav_header scrolled_view": "_nav_header"}>
                                            <div className="_container">
                                                <div className="_content">
                                                    <div className="_context _flx _flx_al_ce _flx_ju_spbt">
                                                        <div className="_brand_logo">
                                                            <img src={logo} alt="Logo" />
                                                        </div>
                                                        <div onClick={ShowNavFunc} className="_close_button _flx _flx_al_ce _flx_ju_ce">
                                                           <IoCloseSharp />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="_container">
                                            <div className="_content">
                                                <ul>
                                                    <li><a onClick={ShowNavFunc} href="#home">Home</a></li>
                                                    <li><a onClick={ShowNavFunc} href="#about">About</a></li>
                                                    <li><a onClick={ShowNavFunc} href="#speakers">Speakers</a></li>
                                                    <li><a onClick={ShowNavFunc} href="#schedule">Schedules</a></li>
                                                    <li><a onClick={ShowNavFunc} href="#venue">Venue</a></li>
                                                    <li><a onClick={ShowNavFunc} href="#hotels">Hotels</a></li>
                                                    <li><a onClick={ShowNavFunc} href="#gallery">Gallery</a></li>
                                                    <li><a onClick={ShowNavFunc} href="#sponsors">Sponsors</a></li>
                                                    <li><a onClick={ShowNavFunc} href="#contact">contact</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Header;