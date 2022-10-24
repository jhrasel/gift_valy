import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { baseUrl } from "../Url";

const Video = () => {

  let [videoLink, setVideoLink] = useState([]);

    useEffect(()=> {

        axios.get(baseUrl+'/general-data').then(({data})=>{

          setVideoLink(data.data);
           
        })

  },[])

  return (
    <>
      <section id="video">
        {/* section gaps */}
        <div className="section_gaps" />

        <Container>
          <Row className="justify-content-md-center">
            <Col lg={10}>
              <div className="video_item">
                <ReactPlayer
                  controls={true}
                  muted={true}
                  playing={true}
                  url={videoLink.product_video_link}
                />
              </div>
            </Col>
          </Row>
        </Container>

        {/* section gaps */}
        <div className="section_gaps" />
      </section>
    </>
  );
};

export default Video;
