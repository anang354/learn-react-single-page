import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from '../assets/img/hero.png';
import TestimonialSection from './homepage/TestimonialSection';
import KelasSection from './homepage/KelasSection';
import FaqComponent from '../components/FaqComponent';

function HomePage(props) {
    return (
        <div className='homepage'>
            <header className='w-100 min-vh-100 d-flex align-items-center overflow-hidden'>
                <Container>
                    <Row className='header-box d-flex align-items-center pt-lg-5'>
                        <Col lg='6'>
                            <h1 className='mb-3 animate__animated animate__fadeInUp'>
                                Temukan <br /> <span>Bakat Kretifitasmu</span>{' '}
                                <br /> bersama Kami!
                            </h1>
                            <p className='mb-3 animate__animated animate__fadeInUp'>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Optio soluta beatae facilis
                                necessitatibus numquam deserunt.
                            </p>
                            <button className='btn btn-primary btn-lg rounded-1 me-2 mb-xs-0 mb-2 mb-3 animate__animated animate__fadeInUp'>
                                Join Class
                            </button>
                            <button className='btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 mb-3 animate__animated animate__fadeInUp'>
                                Lihat Promo
                            </button>
                        </Col>
                        <Col lg='6' className='pt-lg-0 pt-5'>
                            <img
                                src={HeroImage}
                                alt='hero-img'
                                className='animate__animated animate__fadeInUp'
                            />
                        </Col>
                    </Row>
                </Container>
            </header>
            <KelasSection
                title='Kelas Terbaru'
                tombol='Lihat Semua'
                limit={6}
            />
            <TestimonialSection />
            <FaqComponent />
        </div>
    );
}

export default HomePage;
