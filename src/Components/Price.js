import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link ,smooth ,spy } from 'react-scroll'


const Price = () => {

    return (

        
        <>
        
            <section id="price">
      
                <Container>
                    
                    <Row>

                        <Col lg={12}>
                            
                            <div className="price_img">
                                <img src="frontend_asset/images/price_img.png" alt="" />
                                <div className="overlay_text">
                                <h2>আপনার এবং আপনার <br /> প্রিয়জনদের জন্য সেরা উপহার</h2>
                                <h1>মুল্য-১২০০ টাকা</h1>
                                <Link to="form_part" activeClass="active"    className="bg">অর্ডার করুন</Link>
                                </div>
                            </div>

                        </Col>

                    </Row>

                </Container>

                {/* section gaps */}
                <div className="section_gaps" />

            </section>

        </>

        
    )

}


export default Price