// >> Modules
import { useEffect } from "react"
import Aos from "aos"

// >> Data
import { hotel_card_data } from "../../../data/data"

const Hotel = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    })

    return (
        <>
            <div className="_hotel">
                <div style={{height: "0px", position: "relative", top: "-60px"}}>
                    <div id="hotels" style={{position: "absolute", top: "-60px", height: "70px", width: "100%"}}>

                    </div>
                </div>
                <div className="_container">
                    <div className="_content">
                        <div className="_context">
                            <div data-aos="fade-up" className="_section_header">
                                <h1 className="_heading">Hotels</h1>
                                <p className="_lead">Her are some nearby hotels</p>
                            </div>
                            <div className="_hotels_grids">
                                {hotel_card_data && hotel_card_data.map((hotel) => (
                                    <div key={hotel.id} data-aos="fade-up" className="_card">
                                        <div className="_card_img">
                                            <img src={hotel.card_image_link} alt="" />
                                        </div>
                                        <div className="_card_content">
                                            <h2 className="_card_heading">{hotel.card_heading}</h2>
                                            <div className="_hotel_reviews">
                                                {hotel.stars && hotel.stars.map((star) => (
                                                    <div key={star.id} className="_star">
                                                        <i className="_flx _flx_al_ce _flx_ju_ce">
                                                            {star._icon}
                                                        </i>
                                                    </div>      
                                                ))}
                                            </div>
                                            <div className="_far_from_venue">{hotel.card_lead}</div>
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
 
export default Hotel;