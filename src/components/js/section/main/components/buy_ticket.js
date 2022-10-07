import Aos from "aos";
import { useEffect } from "react";


const BuyTicket = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    })

    return (
        <>
            <div className="_buy_ticket">
               <div style={{height: "0px", position: "relative", top: "-60px"}}>
                    <div id="buytickets" style={{position: "absolute", top: "-60px", height: "70px", width: "100%"}}>

                    </div>
                </div>
                <div className="_container">
                    <div className="_content">
                        <div className="_context">
                            <div data-aos="fade-up" className="_section_header">
                                <h1 className="_heading">Buy Tickets</h1>
                                <p className="_lead">Velit consequatur consequatur inventor inte fugit unde omnis eum aut.</p>
                            </div>
                            <div className="_buy_ticket_grid_items">
                                <div data-aos="fade-up" className="_buy_ticket_grid_item">
                                    <div className="_card_header">
                                        <h3 className="_sub_heading">Standard Access</h3>
                                        <h1 className="_card_subscription_price">$150</h1>
                                    </div>
                                    <div className="_card_accessability">
                                        <ul className="_card_accessability_items">
                                            <li className="_card_accessability_item">Regular Seating</li>
                                            <li className="_card_accessability_item">Coffee Break</li>
                                            <li className="_card_accessability_item">Custom Badge</li>
                                            <li className="_card_accessability_item _disabled">Community Access</li>
                                            <li className="_card_accessability_item _disabled">Workshop Access</li>
                                            <li className="_card_accessability_item _disabled">After Party</li>
                                        </ul>
                                    </div>
                                    <div className="_card_footer _flx _flx_al_ce _flx_ju_ce">
                                        <button className="_buy_button">Buy Now</button>
                                    </div>
                                </div>
                                <div data-aos="fade-up" className="_buy_ticket_grid_item">
                                    <div className="_card_header">
                                        <h3 className="_sub_heading">Pro Access</h3>
                                        <h1 className="_card_subscription_price">$250</h1>
                                    </div>
                                    <div className="_card_accessability">
                                        <ul className="_card_accessability_items">
                                            <li className="_card_accessability_item">Regular Seating</li>
                                            <li className="_card_accessability_item">Coffee Break</li>
                                            <li className="_card_accessability_item">Custom Badge</li>
                                            <li className="_card_accessability_item">Community Access</li>
                                            <li className="_card_accessability_item _disabled">Workshop Access</li>
                                            <li className="_card_accessability_item _disabled">After Party</li>
                                        </ul>
                                    </div>
                                    <div className="_card_footer _flx _flx_al_ce _flx_ju_ce">
                                        <button className="_buy_button">Buy Now</button>
                                    </div>
                                </div>
                                <div data-aos="fade-up" className="_buy_ticket_grid_item">
                                    <div className="_card_header">
                                        <h3 className="_sub_heading">Premium Access</h3>
                                        <h1 className="_card_subscription_price">$350</h1>
                                    </div>
                                    <div className="_card_accessability">
                                        <ul className="_card_accessability_items">
                                            <li className="_card_accessability_item">Regular Seating</li>
                                            <li className="_card_accessability_item">Coffee Break</li>
                                            <li className="_card_accessability_item">Custom Badge</li>
                                            <li className="_card_accessability_item">Community Access</li>
                                            <li className="_card_accessability_item">Workshop Access</li>
                                            <li className="_card_accessability_item">After Party</li>
                                        </ul>
                                    </div>
                                    <div className="_card_footer _flx _flx_al_ce _flx_ju_ce">
                                        <button className="_buy_button">Buy Now</button>
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
 
export default BuyTicket;