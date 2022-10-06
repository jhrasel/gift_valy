import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";

const Video = () => {
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
                  url="https://www.youtube.com/watch?v=tAkmVh080SE"
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
