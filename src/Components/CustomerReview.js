import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/pagination";


const CustomerReview = () => {

    return (

        
        <>

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
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >

                                    <SwiperSlide>
                                        <div className="Video">
                                            <ReactPlayer
                                            controls={true}
                                            muted={true}
                                            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="Video">
                                            <ReactPlayer
                                            controls={true}
                                            muted={true}
                                            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="Video">
                                            <ReactPlayer
                                            controls={true}
                                            muted={true}
                                            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="Video">
                                            <ReactPlayer
                                            controls={true}
                                            muted={true}
                                            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="Video">
                                            <ReactPlayer
                                            controls={true}
                                            muted={true}
                                            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                                            />
                                        </div>
                                    </SwiperSlide>

                                </Swiper>

                            </Col>

                        </Row>
                    
                    </div>

                    {/* photo */}
                    <div className="customer_review_content">

                        <Row>

                            <Col lg={6}>
                                <div className="img">
                                    <img src="frontend_asset/images/review-1.png" alt="" />
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="img">
                                    <img src="frontend_asset/images/review-1.png" alt="" />
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="img">
                                    <img src="frontend_asset/images/review-1.png" alt="" />
                                </div>
                            </Col>

                            <Col lg={6}>
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