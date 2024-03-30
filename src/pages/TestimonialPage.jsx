import { Col, Container, Row } from 'react-bootstrap';
import { dataSwiper } from '../data';
import FaqComponent from '../components/FaqComponent';

function TestimonialPage(props) {
    return (
        <div>
            <div className='testimonial-page'>
                <Container>
                    <Row className='mb-5'>
                        <Col>
                            <h1 className='fw-bold text-center'>
                                Semua Testimonial
                            </h1>
                            <p className='text-center'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Qui, reprehenderit?
                            </p>
                        </Col>
                    </Row>
                    <Row className='row-cols-lg-3 row-cols-1'>
                        {dataSwiper.map((data) => {
                            return (
                                <Col key={data.id} className='mb-4'>
                                    <p className='desc shadow-sm'>
                                        {data.desc}
                                    </p>
                                    <div className='people'>
                                        <img src={data.image} alt='' />
                                        <div>
                                            <h5 className='mb-1'>
                                                {data.name}
                                            </h5>
                                            <p className='m-0 fw-bold'>
                                                {data.skill}
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
            <FaqComponent />
        </div>
    );
}

export default TestimonialPage;
