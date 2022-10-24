import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillCaretDown, AiFillCheckCircle } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Thankyou = () => {

    console.log('data');


    return (


        
        <>
        
            <section className='ThankYou'>
 
                <Container>
                    
                    <Row className="justify-content-md-center">

                        <Col lg={6}>

                            <div className="ThankYouBanner header text-center">
                                <BsFillCheckCircleFill/>
                                <h4>Thank You For Order</h4>
                                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, nec ullamcorper mattis.</p>
                            </div>

                        </Col>

                    </Row>

                </Container>

                <div className="svg">
                    <AiFillCaretDown/>
                </div>

            </section>

            <section className='OrderTitle'>
                
                <Container>
                    
                    <Row className="justify-content-md-center">

                        <Col lg={6}>

                            <div className=" header text-center">
                                <h4>Thank you. Your order has been received.</h4>
                            </div>

                        </Col>

                    </Row>

                    {/* OrderTitleContent */}
                    <Row className="justify-content-md-center">

                        <Col lg={10}>

                            <div className="OrderTitleContent text-center">

                                <ul>

                                    <li>
                                        <p>Order number:</p>
                                        <h5>4427</h5>
                                    </li>

                                    <li>
                                        <p>Date:</p>
                                        <h5>October 23, 2022</h5>
                                    </li>

                                    <li>
                                        <p>Total:</p>
                                        <h5>৳ 1,999.00</h5>
                                    </li>

                                    <li>
                                        <p>Payment method:</p>
                                        <h5>Cash on delivery</h5>
                                    </li>

                                </ul>

                            </div>

                        </Col>

                    </Row>

                     {/* OrderDetail */}
                    <div className="OrderDetail">

                        <Row className="justify-content-md-center">

                            <Col lg={10}>

                                <div className="OrderDetailContent">

                                    <h5>Order details</h5>

                                    <div className="OrderDetailContentPart">

                                        <div className="OrderDetailContentItem d_flex">

                                            <h4>Product</h4>
                                            <h4>Total</h4>

                                        </div>

                                        <div className="OrderDetailContentItem d_flex">

                                            <h6>Choclet Gift Box × 1</h6>
                                            <h6>৳ 1,999.00</h6>

                                        </div>

                                        <div className="OrderDetailContentItem d_flex">

                                            <h6>Subtotal:</h6>
                                            <h6>৳ 1,999.00</h6>

                                        </div>

                                        <div className="OrderDetailContentItem d_flex">

                                            <h6>Payment method:	</h6>
                                            <h6>Total</h6>

                                        </div>

                                        <div className="OrderDetailContentItem d_flex">

                                            <h6>Total:</h6>
                                            <h6>৳ 1,999.00</h6>

                                        </div>

                                    </div>

                                </div>

                                {/* CallUs */}
                                <div className="CallUs">

                                    <h5>Contact Us</h5>
                                    <a href="tel:018100-45255">018100-45255</a>

                                </div>

                            </Col>

                        </Row>

                    </div>


                    

                </Container>

            </section>


        </>

        

    )

}

export default Thankyou