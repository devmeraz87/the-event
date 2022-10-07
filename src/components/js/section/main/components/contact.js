import Aos from "aos";
import { useEffect } from "react";
import { AiOutlineMobile } from "react-icons/ai"
import { GoMail, GoLocation } from "react-icons/go"


const Contact = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    })

    return (
        <>
            <div style={{position: ""}} className="_contact">
                <div style={{height: "0px", position: "relative", top: "-60px"}}>
                    <div id="contact" style={{position: "absolute", top: "-60px", height: "70px", width: "100%"}}>

                    </div>
                </div>
                <div className="_container">
                    <div className="_content">
                        <div className="_context">
                            <div data-aos="fade-up" className="_section_header">
                                <div className="_heading">Contact Us</div>
                                <p className="_lead">Nihil officia ut sint molestae tenetur</p>
                            </div>
                            <div data-aos="fade-up" className="_contact_details">
                                <div className="_contact_details_grid_items">
                                    <div className="_contact_details_grid_item">
                                        <div className="_icon">
                                            <i className="_flx _flx_al_ce _flx_ju_ce">
                                                <GoLocation />
                                            </i>
                                        </div>
                                        <h3 className="_heading">Address</h3>
                                        <p className="_lead">A108 Adam Street, NY 535022, USA</p>
                                    </div>
                                    <div className="_contact_details_grid_item">
                                        <div className="_icon">
                                            <i className="_flx _flx_al_ce _flx_ju_ce">
                                                <AiOutlineMobile />
                                            </i>
                                        </div>
                                        <h3 className="_heading">Phone Number</h3>
                                        <p className="_lead _number">
                                            <a href="tel:+8801846144465">+1 5589 55488 55</a>
                                        </p>
                                    </div>
                                    <div className="_contact_details_grid_item">
                                        <div className="_icon">
                                            <i className="_flx _flx_al_ce _flx_ju_ce">
                                                <GoMail />
                                            </i>
                                        </div>
                                        <h3 className="_heading">Email</h3>
                                        <p className="_lead">
                                            <a href="mailto:devmeraz87@gmail.com">devmeraz87@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="_form">
                                <form>
                                    <div className="_form_group">
                                        <div className="_name_email">
                                            <div className="_name">
                                                <input className="_form_control" type="text" placeholder="Your Name" />
                                            </div>
                                            <div className="_email">
                                                <input className="_form_control" type="email" placeholder="Your Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_form_group">
                                        <input className="_form_control" type="text" placeholder="Subject" />
                                    </div>
                                    <div className="_form_group">
                                        <textarea className="_form_control" name="" id="" cols="30" rows="10" placeholder="Enter your message"></textarea>
                                    </div>
                                    <div className="_form_group _flx _flx_al_ce _flx_ju_ce">
                                        <button className="_send_button">Send Message</button>
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
 
export default Contact;