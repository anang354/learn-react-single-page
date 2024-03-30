import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { dataSwiper } from '../../data/index';

function TestimonialSection(props) {
    return (
        <div className='testimonial py-5'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center fw-bold my-5'>
                            Testimonial
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className='mySwiper'
                    >
                        {dataSwiper.map((data) => {
                            return (
                                <SwiperSlide
                                    key={data.id}
                                    className='shadow-sm'
                                >
                                    <p className='desc'>{data.desc}</p>
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
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Row>
            </Container>
        </div>
    );
}

export default TestimonialSection;
