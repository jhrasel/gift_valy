/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiPhoneCall } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const Footer = () => {

    return (

        <>
        
            <section id="Footer">

                <div className="footerLeft">
                    <img src="frontend_asset/images/footer_left.png" alt="" />
                </div>

                <div className="footerRight">
                    <img src="frontend_asset/images/footer_right.png" alt="" />
                </div>
      
                <Container>
                    
                    <Row>

                        <Col lg={4}>
                            
                            <div className="FooterContent">
                                
                                <h3>প্রয়োজনে কল করুন</h3>

                                <ul>

                                    <li className='d_flex'><BiPhoneCall/> <a href="tel:018100-45255">018100-45255</a> </li>

                                </ul>

                                {/* Social Icon */}
                                <div className="SocialIcon">

                                    <a href="" className='fb'> <FaFacebookF/> </a>
                                    <a href="" className='youtube'> <AiFillYoutube/> </a>
                                    <a href="" className='instagram'> <AiOutlineInstagram/> </a>
                                    <a href="" className='twitter'> <BsTwitter/> </a>
                                    
                                </div>

                            </div>

                        </Col>

                        <Col lg={4}>
                            
                            <div className="FooterContent">
                                
                                <h3>Important Links</h3>

                                <ul>

                                    <li className='d_flex'><a href="">Privacy Policy</a> </li>
                                    <li className='d_flex'><a href="">Terms & Conditions</a> </li>
                                    <li className='d_flex'><a href="">Contact</a> </li>

                                </ul>

                            </div>

                        </Col>

                        <Col lg={4}>
                            
                            <div className="FooterContent">
                                
                                <h3>Email us</h3>

                                <ul>

                                    <li className='d_flex'><FiMail/> <a href="mailto:oder@freshen.com">oder@freshen.com</a> </li>

                                </ul>

                            </div>

                        </Col>

                    </Row>

                    {/* Tiny Footer */}
                    <div className="tinyFooter">
                        <p>2022 All Rights Reserved | Designed by <a href="https://sitc.sitcdev.xyz/">Soft IT Care</a> Development Team</p>
                    </div> 

                </Container>

            </section>

        </>
        

    )

}

export default Footer