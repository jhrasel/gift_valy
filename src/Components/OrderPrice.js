import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link ,smooth ,spy } from 'react-scroll'


const OrderPrice = () => {

    return (

        
        <>

            <section id="price" className="order">
      
                <Container>
                    
                    <Row className='justify-content-md-center'>

                        <Col lg={9} sm={12}>
                            
                            <div className="price_img">

                                <img src="frontend_asset/images/order.png" alt="" />

                                <div className="overlay_text">
                                    <Link to="form_part" activeClass="active"  className="bg">অর্ডার করতে এখানে ক্লিক করুন</Link>
                                    <h1>মুল্য-১২০০ টাকা</h1>
                                    <h2>সারা দেশে ফ্রি হোম ডেলিভারি</h2>
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


export default OrderPrice