// >> Modules
import Aos from "aos"
import { useEffect } from "react"

// >> Data
import { sponsor_data } from "../../../data/data"

const Sponsor = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    })
    
    return (
        <>
            <div className="_sponsor">
                <div style={{height: "0px", position: "relative", top: "-60px"}}>
                    <div id="sponsors" style={{position: "absolute", top: "-60px", height: "70px", width: "100%"}}>

                    </div>
                </div>
                <div className="_container">
                    <div className="_content">
                        <div data-aos="fade-up" className="_context">
                            <div data-aos="fade-up" className="_section_header">
                                <div className="_heading">Sponsor</div>
                            </div>
                            <div data-aos="zoom-in" className="_sponsor_grid_items">
                                {sponsor_data && sponsor_data.map(sponsor => (
                                    <div key={sponsor.id} className="_grid_item">
                                        {sponsor.sponsor_logo && sponsor.sponsor_logo.map(sponsor_logo => (
                                            <div key={sponsor_logo.id} className="_sponsor_logo">
                                                <img src={sponsor_logo.sponsor_logo_link} alt="" />
                                            </div>
                                        ))}
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
 
export default Sponsor;