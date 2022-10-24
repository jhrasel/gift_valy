import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { baseUrl } from '../Url';


const Gallery = () => {

    let [gallery, setGallery] = useState([]);
    console.log(gallery);

    useEffect(()=> {

        axios.get(baseUrl+'/gallery').then(({data})=>{

            setGallery(data.data);
            
        })

    },[])

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

                            {
                                gallery.map((item)=>(

                                    <Col lg={4} sm={4}>

                                        <div className="gallery_item">

                                            {/* img */}
                                            <div className="gal_img">
                                                <img src={item.image} alt="" />
                                            </div>

                                        </div>

                                    </Col>

                                ))
                            }

                        </Row>

                    </div>

                </Container>

            </section>

        </>

        
    )

}


export default Gallery