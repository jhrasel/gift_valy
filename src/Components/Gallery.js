import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Gallery = () => {

    return (

        
        <>

            <section id="customized" className="gallery">

                <div className="overlay_img">
                    <img src="frontend_asset/images/gal_fram.png" alt="" />
                </div>
      
                <Container>
                    
                    <Row className='justify-content-md-center'>

                        <Col lg={6}>
                            <div className='header'>
                                <h2>কি কি থাকছে Coustomize Chocolet Gift box</h2>
                            </div>
                        </Col>

                    </Row>

                    {/* customized */}
                    <div className="gallery_content">
                    
                        <Row>

                            {/* Item */}
                            <Col lg={4}>

                                <div className="gallery_item">

                                    {/* img */}
                                    <div className="gal_img">
                                        <img src="frontend_asset/images/gal-1.png" alt="" />
                                    </div>

                                </div>

                            </Col>

                            {/* Item */}
                            <Col lg={4}>

                                <div className="gallery_item">

                                    {/* img */}
                                    <div className="gal_img">
                                        <img src="frontend_asset/images/gal-2.png" alt="" />
                                    </div>

                                </div>

                            </Col>

                            {/* Item */}
                            <Col lg={4}>

                                <div className="gallery_item">

                                    {/* img */}
                                    <div className="gal_img">
                                        <img src="frontend_asset/images/gal-3.png" alt="" />
                                    </div>

                                </div>

                            </Col>

                            {/* Item */}
                            <Col lg={4}>

                                <div className="gallery_item">

                                    {/* img */}
                                    <div className="gal_img">
                                        <img src="frontend_asset/images/gal-4.png" alt="" />
                                    </div>

                                </div>

                            </Col>

                            {/* Item */}
                            <Col lg={4}>

                                <div className="gallery_item">

                                    {/* img */}
                                    <div className="gal_img">
                                        <img src="frontend_asset/images/gal-1.png" alt="" />
                                    </div>

                                </div>

                            </Col>

                            {/* Item */}
                            <Col lg={4}>

                                <div className="gallery_item">

                                    {/* img */}
                                    <div className="gal_img">
                                        <img src="frontend_asset/images/gal-2.png" alt="" />
                                    </div>

                                </div>

                            </Col>

                        </Row>

                    </div>

                </Container>

            </section>

        </>

        
    )

}


export default Gallery