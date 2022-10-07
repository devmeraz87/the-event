import { useEffect } from "react";
import Aos from "aos";

// >> Media 
import event_speaker_img_1 from "../../../../assest/Event_spikers/1.jpg"
import event_speaker_img_2 from "../../../../assest/Event_spikers/2.jpg"
import event_speaker_img_3 from "../../../../assest/Event_spikers/3.jpg"
import event_speaker_img_4 from "../../../../assest/Event_spikers/4.jpg"
import event_speaker_img_5 from "../../../../assest/Event_spikers/5.jpg"
import event_speaker_img_6 from "../../../../assest/Event_spikers/6.jpg"

const EventSchedule = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    })


    return (
        <>
            <div className="_event_schedule">
                <div style={{height: "0px", position: "relative", top: "-60px"}}>
                    <div id="schedule" style={{position: "absolute", top: "-60px", height: "70px", width: "100%"}}>

                    </div>
                </div>
                <div className="_container">
                    <div className="_content">
                        <div className="_context">
                            <div data-aos="fade-up" className="_section_header">
                                <h1 className="_heading">EVENT SCHEDULE</h1>
                                <p className="_lead">Here is our event schedule</p>
                            </div>
                            <div className="_schedule_context">
                                <div data-aos="fade-up" className="_schedule_heading">
                                    <div className="_schedule_nav">
                                        <div className="_day">
                                            <button className="_active">Days 1</button>
                                        </div>
                                        <div className="_day">
                                            <button>Days 2</button>
                                        </div>
                                        <div className="_day">
                                            <button>Days 3</button>
                                        </div>
                                    </div>
                                    <h3 className="_schedule_sub_heading">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius necessitatibus voluptatem quis labore perspiciatis quia.</h3>
                                </div>
                                <div className="_schedules">
                                    <div className="_schedule _active">
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>09:30 AM</time>
                                            </div>
                                            <div className="_context_">
                                                <h4>Registation</h4>
                                                <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>10:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_1} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Keynote <span>Brenden Legros</span></h4>
                                                    <p>Facere provident incidunt quos voluptas.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>11:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_2} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                                                    <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>12:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_3} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                                                    <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>02:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_4} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                                                    <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>03:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_5} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                                                    <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>04:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_6} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                                                    <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_schedule">
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>10:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_1} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                                                    <p>Facere provident incidunt quos voluptas.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>11:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_2} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                                                    <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>12:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_3} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                                                    <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>02:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_4} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                                                    <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>03:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_5} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                                                    <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>04:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_6} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                                                    <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_schedule">
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>10:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_1} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                                                    <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>11:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_2} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                                                    <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>12:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_3} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                                                    <p>Facere provident incidunt quos voluptas.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>02:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_4} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                                                    <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>03:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_5} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                                                    <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-aos="fade-up" className="_schedule_item">
                                            <div className="_time">
                                                <time>04:00 AM</time>
                                            </div>
                                            <div className="_context">
                                                <div className="_speakers">
                                                    <img src={event_speaker_img_6} alt="" />
                                                </div>
                                                <div className="_context_text">
                                                    <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                                                    <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default EventSchedule;