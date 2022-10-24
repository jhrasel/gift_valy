/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { baseUrl } from '../Url';


const Banner = () => {

    let [headerData, setHeaderData] = useState([]);

    useEffect(()=> {

        axios.get(baseUrl+'/general-data').then(({data})=>{

            setHeaderData(data.data);
           
        })

    },[])

    return (

        
        <>

            <section id='banner'>

                <Container>

                    <Row className='d_flex'>

                        <Col lg={6}>

                            <div className='banner_content'>

                                {/* <!-- logo --> */}
                                <div className='logo Desktop'>
                                    <img src="frontend_asset/images/logo.png" alt="" />
                                </div>

                                {/* <!-- text --> */}
                                <div className='text'>

                                    <h3>{headerData.header_text}</h3>

                                    {/* <a href="#" className='bg'>অর্ডার করতে ক্লিক করুন</a>
                                    <h4>018100-45255</h4>
                                    <h5>অর্ডার পেতে কল করুন এই নাম্বারে</h5> */}

                                </div>

                            </div>

                        </Col>

                        <Col lg={6}>

                            <div className='banner_content'>

                                {/* <!-- logo --> */}
                                <div className='logo Mobile'>
                                    <img src="frontend_asset/images/logo.png" alt="" />
                                </div>

                            </div>

                            <div className='banner_img'>
                                <img src={headerData.header_image} alt="" />
                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
            
        </>

        
    )

}

export default Banner