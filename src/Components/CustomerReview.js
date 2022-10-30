import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/pagination";
import Delivary from "./Delivary";
import axios from "axios";
import { baseUrl } from "../Url";



const CustomerReview = () => {

    let [videoLink, setVideoLink] = useState([])

    useEffect(()=> {

        axios.get(baseUrl+'/customer-review-link').then(({data})=>{

            setVideoLink(data.data);
           
        })

    },[])

    return (

        
        <>

            {/* Mobil Delivary */}
            
<section id="delivary" className='MobileDelivary'>

                <Container>
                    
                    <Row className='d_flex'>

                        <Col lg={4} sm={4}>

                            <div className="delivary_item">

                                <div className="img">
                                    <img src="frontend_asset/images/delivary-1.png" alt="" />
                                </div>

                                <div className="text">
                                    <h3>সারাদেশে ডেলিভারী চার্জ ফ্রি</h3>
                                </div>

                                {/* border */}
                                <div className="delivary_border">
                                    <img src="frontend_asset/images/delivary_border.png" alt="" />
                                </div>

                            </div>

                        </Col>

                        <Col lg={4} sm={4}>

                            <div className="delivary_item">

                                <div className="img">
                                    <img src="frontend_asset/images/delivary-2.png" alt="" />
                                </div>

                                <div className="text">
                                    <h3>প্রিমিয়াম প্যাকেজিং</h3>
                                </div>

                                {/* border */}
                                <div className="delivary_border">
                                    <img src="frontend_asset/images/delivary_border.png" alt="" />
                                </div>
                                
                            </div>

                        </Col>

                        <Col lg={4} sm={4}>

                            <div className="delivary_item">

                                <div className="img">
                                    <img src="frontend_asset/images/delivary-3.png" alt="" />
                                </div>

                                <div className="text">
                                    <h3>ক্যাশ অন ডেলিভারী</h3>
                                </div>

                                {/* border */}
                                <div className="delivary_border">
                                    <img src="frontend_asset/images/delivary_border.png" alt="" />
                                </div>
                                
                            </div>

                        </Col>

                    </Row>

                </Container>

                <div className="fram">
                    <img src="frontend_asset/images/delivary_fram.png" alt="" />
                </div>


            </section>

            <section id="customer_review">

                {/* section gaps */}
                <div className="section_gaps" />
      
                <Container>
                    
                    <Row className='justify-content-md-center'>

                        <Col lg={6}>
                            <div className="header text-center">
                                <h2>আমাদের কাস্টমার রিভিউ</h2>
                            </div>
                        </Col>

                    </Row>

                    {/* video */}
                    <div className="customer_review_content ReviewSlider">

                        <Row>

                            <Col lg={12}>

                                        
                                
                                <Swiper
                                    breakpoints={{
                                        650: {
                                          slidesPerView: 1,
                                          spaceBetween: 0,
                                        },
                                        651: {
                                          slidesPerView: 2,
                                          spaceBetween: 30,
                                        },
                                        1000: {
                                          slidesPerView: 3,
                                          spaceBetween: 30,
                                        },
                                    }}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {
                                        videoLink.map((item, index)=>(

                                            <SwiperSlide key={index} id="key">
                                                <div className="Video">
                                                    <ReactPlayer
                                                    controls={true}
                                                    muted={true}
                                                    url={item.customer_review_video_link}
                                                    />
                                                </div>
                                            </SwiperSlide>

                                        ))
                                    }

                                </Swiper>

                            </Col>

                        </Row>
                    
                    </div>

                    {/* photo */}
                    <div className="customer_review_content">

                        <Row>

                            <Col lg={6} sm={6}>
                                <div className="img">
                                    <img src="frontend_asset/images/review-1.png" alt="" />
                                </div>
                            </Col>

                            <Col lg={6} sm={6}>
                                <div className="img">
                                    <img src="frontend_asset/images/review-1.png" alt="" />
                                </div>
                            </Col>

                            <Col lg={6} sm={6}>
                                <div className="img">
                                    <img src="frontend_asset/images/review-1.png" alt="" />
                                </div>
                            </Col>

                            <Col lg={6} sm={6}>
                                <div className="img">
                                    <img src="frontend_asset/images/review-1.png" alt="" />
                                </div>
                            </Col>

                        </Row>
                    
                    </div>

                </Container>

            </section>

        </>

        
    )

}


export default CustomerReview