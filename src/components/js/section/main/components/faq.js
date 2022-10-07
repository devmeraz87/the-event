import { useEffect } from 'react';
import Aos from 'aos';
import { BsChevronRight } from "react-icons/bs"


// >> Data
import { FAQ_DATA } from '../../../data/data';

const FAQ = () =>  {

    useEffect(() => {
        Aos.init({duration: 1000});
    })

  return (
    <>
        <div className="_faqs">
            <div className="_container">
                <div className="_content">
                    <div className="_context">
                        <div className="_section_header">
                            <h1 className="_heading">F.A.Q</h1>
                        </div>
                        <div className="_faqs_items">
                            {FAQ_DATA && FAQ_DATA.map(faq => (
                                <div data-aos="fade-up" key={faq.id} className="_faqs_item">
                                    <div className='_collapse_header'>
                                        <div className="_collapse_question" data-toggle="collapse" data-target={faq.dataTarget} aria-expanded={faq.ariaExpanded} aria-controls={faq.ariaControls}>
                                            <div className='_flx _flx_al_ce'>
                                                <span className='_flx _flx_al_ce'><BsChevronRight /></span> {faq.faqs_question}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='_collapse_answer'>
                                        <div id={faq.ariaControls} className="collapse" aria-labelledby={faq.ariaLabelledby} data-parent="._faqs_items">
                                            <div className="_collapse_body">
                                                {faq.faqs_answer}
                                            </div>
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
  )
}

export default FAQ;