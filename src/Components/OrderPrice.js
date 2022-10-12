import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


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
                                    <a href className="bg">অর্ডার করতে এখানে ক্লিক করুন</a>
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