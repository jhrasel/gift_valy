import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Delivary = () => {

    return (

        
        <>

            {/* Desktop Delivary */}
            <section id="delivary" className='DesktopDelivary'>

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

        </>

        
    )

}


export default Delivary