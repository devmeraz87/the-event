// >> Modules
import { useEffect } from "react";
import Aos from "aos";


// Data
import { EventSpeakers_user_data } from "../../../data/data";

const EventSpeakers = () => {

    useEffect(() => {

        Aos.init({duration: 1000});

    })


    return (
        <>
            <div className="_event_speakers">
                <div style={{height: "0px", position: "relative", top: "0px"}}>
                    <div id="speakers" style={{position: "absolute", top: "-60px", height: "70px", width: "100%"}}>

                    </div>
                </div>
                <div className="_container">
                    <div className="_content">
                        <div className="_context">
                            <div data-aos="fade-up" className="_section_header">
                                <h1 className="_heading">Event Speakers</h1>
                                <p className="_lead">Here are some of our speakers</p>
                            </div>
                            <div className="_grid_items">
                                {EventSpeakers_user_data && EventSpeakers_user_data.map((eventspeaker) => (
                                    <div key={eventspeaker.id} data-aos="fade-up" className="_grid_item">
                                        <div className="_img">
                                            <img src={eventspeaker.event_speakers_img_link} alt="" />
                                        </div>
                                        <div className="_context">
                                            <h3 className="_name">{eventspeaker.name}</h3>
                                            <p className="_lead">{eventspeaker.lead}</p>
                                            <div className="_social">
                                                {eventspeaker.social && eventspeaker.social.map((s) => (
                                                    <div key={s.id} className="_social_item">
                                                        <a href={s.link}>
                                                            <i className="_flx _flx_al_ce _flx_ju_ce">
                                                                {s._icon}
                                                            </i>
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default EventSpeakers;