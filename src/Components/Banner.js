/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Banner = () => {

    return (

        
        <>

            <section id='banner'>

                <Container>

                    <Row className='d_flex'>

                        <Col lg={6}>

                            <div className='banner_content'>

                                {/* <!-- logo --> */}
                                <div className='logo'>
                                    <img src="frontend_asset/images/logo.png" alt="" />
                                </div>

                                {/* <!-- text --> */}
                                <div className='text'>

                                    <h3>ভালোবাসার উপহারটি  মূল্যবান হয়। প্রিয়জনের রাগ  ভাঙাতে ফুল ,Coustomize Chocklet Gift Box, কার্ড  মুহূর্তের মধ্যে প্রিয়জনের মুখে হাসি ফোটাবে।</h3>
                                    <a href="" className='bg'>অর্ডার করতে ক্লিক করুন</a>

                                    <h4>018100-45255</h4>
                                    <h5>অর্ডার পেতে কল করুন এই নাম্বারে</h5>

                                </div>

                            </div>

                        </Col>

                        <Col lg={6}>

                            <div className='banner_img'>
                                <img src="frontend_asset/images/banner_img.png" alt="" />
                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            
        </>

        
    )

}

export default Banner