import { useEffect, useState } from "react";
import About from "./components/about";
import BuyTicket from "./components/buy_ticket";
import Contact from "./components/contact";
import EventSchedule from "./components/event_schedule";
import EventSpeakers from "./components/event_speakers";
import EventVenue from "./components/event_venue";
import FAQ from "./components/faq";
import Gallery_ from "./components/gallery";
import Hotel from "./components/hotel";
import Sponsor from "./components/sponsor";
import Subscribe from "./components/subscribe";

const Main = () => {


    

    useEffect(() => {

    })

    return (
        <>
            <div className="_main">
                <About />
                <EventSpeakers />
                <EventSchedule />
                <EventVenue />
                <Hotel />
                <Gallery_ />
                <Sponsor />
                <FAQ />
                <Subscribe />
                <BuyTicket />
                <Contact />
            </div>
        </>
    );
}
 
export default Main;