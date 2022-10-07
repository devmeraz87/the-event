import showcase_bg from "../../assest/hero-bg.jpg"
import Aos from "aos";
import { useEffect } from "react";

const Hero = () => {
  

    useEffect(() => {
        Aos.init({duration: 1000});
    })

    return (
        <>
            <div id="home" className="_hero" style={{background: `url(${showcase_bg}) no-repeat center`, backgroundSize: "cover", backgroundAttachment: "fixed"}}>
                <div className="_container">
                    <div className="_content">
                        <div data-aos="zoom-in" className="_context">
                            <h1 className="_heading">
                                THE ANNUAL <br />
                                <span>MARKETING </span>CONFERENCE
                            </h1>
                            <h4 className="_sub_heading">10-12 December, Downtown Conference Center, New York</h4>
                            <a href="">
                                <div className="_play_button">
                                        <i>x</i>
                                </div>
                            </a>
                            <a className="_about_the_event_btn" href="#">
                                About The Event
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
 
export default Hero;