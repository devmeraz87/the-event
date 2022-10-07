// Modules
import { useEffect } from "react"
import GLightbox from 'glightbox';
import "glightbox/dist/css/glightbox.css";

// >> Data
import { venueGallerys } from "../../../data/data";

// >> Background image
import Venue_info_bg from "../../../../assest/venue_info/venue-info-bg.jpg"


const EventVenue = () => {

    useEffect(() => {
        GLightbox({
            touchNavigation: true,
            loop: true,
            autoplayVideos: true,
            moreLength: 20
          });
    
    })

    return (
        <>
            <div className="_event_venue">
                <div style={{height: "0px", position: "relative", top: "-60px"}}>
                    <div id="venue" style={{position: "absolute", top: "-60px", height: "70px", width: "100%"}}>

                    </div>
                </div>
                <div className="_content">
                    <div className="_context">
                        <div data-aos="fade-up" className="_section_header">
                            <h1 className="_heading">Event Venue</h1>
                            <p className="_lead">Event venue location info and gallery</p>
                        </div>
                        <div className="_map_and_venue_info">
                            <div data-aos="fade-up" className="_map">
                              <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%"  src="https://maps.google.com/maps?width=2048&amp;height=2048&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://embed-google-maps.com/">Embed Google Map</a></div></div>
                            </div>
                            <div data-aos="fade-up" className="_venue_info" style={{background: `url(${Venue_info_bg}) top center no-repeat`, backgroundSize: "cover"}}>
                                <div className="_venue_info_context">
                                    <h1 className="_heading">Downtown Conference Center, New York</h1>
                                    <div className="_lead">Iste nobis eum sapiente sunt enim dolores labore accusantium autem. Cumque beatae ipsam. Est quae sit qui voluptatem corporis velit. Qui maxime accusamus possimus. Consequatur sequi et ea suscipit enim nesciunt quia velit.</div>
                                </div>
                            </div>
                        </div>
                        <div className="_venue_gallery">
                            <div className="_galler_grid">
                                {venueGallerys && venueGallerys.map((venueGallery) => (
                                    <div key={venueGallery.id} data-aos={venueGallery.aos} className="_gallery_grid_item">
                                        <a href={venueGallery.data_img_link}
                                            className="glightbox"
                                            data-glightbox={venueGallery.data_glihtbox}
                                            data-gallery={venueGallery.data_gallery}
                                        >
                                            <img src={venueGallery.data_img_link} alt="" />
                                        </a>
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
 
export default EventVenue;