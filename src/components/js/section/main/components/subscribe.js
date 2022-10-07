import { useEffect } from "react";
import Aos from "aos";

import subscriber_bg from "../../../../assest/subscriber/subscribe-bg.jpg"

const Subscribe = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    })

    return (
        <>
            <div className="_subscribe" style={{background: `url(${subscriber_bg}) center center no-repeat`, backgroundSize: "cover", backgroundAttachment: "fixed"}} >
                <div className="_container">
                    <div className="_content">
                        <div className="_context">
                            <div data-aos="fade-up" className="_section_header">
                                <h1 className="_heading">Newsletter</h1>
                                <div className="_lead">Rerum numquam illum recusandae quia mollitia consequatur.</div>
                            </div>
                            <div data-aos="fade-up" className="_subscribe_form">
                                <form data-aos="zoom-in">
                                    <div className="_input_group">
                                        <input type="text" placeholder="Enter your email address" />
                                        <button>Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Subscribe;