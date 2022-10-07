import { useEffect } from "react";
import Aos from "aos";

import about_bg from "../../../../assest/about/about-bg.jpg"

const About = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    })

    
    return (
        <>
            <div className="_about" style={{background: `url(${about_bg}) no-repeat center`, backgroundSize: "cover", backgroundAttachment: "fixed"}}>
                <div style={{height: "0px", position: "relative", top: "-60px"}}>
                    <div id="about" style={{position: "absolute", top: "-60px", height: "70px", width: "100%"}}>

                    </div>
                </div>
                <div className="_container">
                    <div className="_content">
                        <div className="_context">
                            <div data-aos="fade-up" className="_about_item">
                                <h1 className="_heading">About The Event</h1>
                                <p className="_lead">Sed nam ut dolor qui repellendus iusto odit. Possimus inventore eveniet accusamus error amet eius aut accusantium et. Non odit consequatur repudiandae sequi ea odio molestiae. Enim possimus sunt inventore in est ut optio sequi unde.</p>
                            </div>
                            <div data-aos="fade-up" className="_about_item">
                                <h4 className="_sub_heading">WHERE</h4>
                                <p className="_lead">Downtown Conference Center, New York</p>
                            </div>
                            <div data-aos="fade-up" className="_about_item">
                                <h4 className="_sub_heading">WHEN</h4>
                                <p className="_lead">Monday to Wednesday <br /> 10-12 December</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default About;