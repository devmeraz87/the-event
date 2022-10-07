import { useEffect, useState } from "react";
import logo from "../../assest/logo.png"

const Header = () => {

    const [scrollY_, setScrollY] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    const runScroll = () => {
        setScrollY(window.scrollY);
    }

    const getWindowWidth = () => {
        setWidth(window.innerWidth);
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
                            <a href="">
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
                        ): (
                            <>
                                <button>Get Nav</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Header;