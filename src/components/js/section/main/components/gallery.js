import React, { useEffect, useRef, useState } from "react";

// >> Glight box
import GLightbox from "glightbox"
import "glightbox/dist/css/glightbox.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, FreeMode } from "swiper";


import { gallery_img } from "../../../data/data";


const Gallery_ = () => {

    useEffect(() => {
        GLightbox({
            touchNavigation: true,
            loop: true,
            autoplayVideos: true,
            moreLength: 20
        })
    })

    return (
        <>
            <div className="_gallery">
                <div style={{height: "0px", position: "relative", top: "-60px"}}>
                    <div id="gallery" style={{position: "absolute", top: "-60px", height: "70px", width: "100%"}}></div>
                </div>
               <div className="_container">
                <div className="_content">
                    <div className="_section_header">
                        <div className="_heading">Gallery</div>
                        <p className="_lead">Check our gallery from the recent events</p>
                    </div>
                    <Swiper
                        speed={400}
                        loop={true}
                        slidesPerView={3}
                        spaceBetween={20}
                        freeMode={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            }, 
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20
                             },
                            992: {
                                slidesPerView: 5,
                                spaceBetween: 20
                            }
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {gallery_img && gallery_img.map(gallery => (
                            <SwiperSlide className="_mySwiper_slide_item" key={gallery.id}>
                                <a href={gallery.image_link}
                                    className="glightbox"
                                    data-glightbox={gallery.data_glihtbox}
                                    data-gallery={gallery.data_gallery}
                                >
                                    <img src={gallery.image_link} alt="" />
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
               </div>
            </div>
        </>
    );
}
 
export default Gallery_;