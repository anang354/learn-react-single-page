import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FooterComponent(props) {
    return (
        <div className='footer'>
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col lg='5'>
                        <h3 className='fw-bold'>Ngoding_</h3>
                        <p className='desc mb-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates quibusdam quae consequuntur iste
                            nesciunt, vero repellendus blanditiis possimus quo
                            facere!
                        </p>
                        <div className='number'>
                            <Link className='text-decoration-none d-flex align-items-center gap-1'>
                                <i className='fa-brands fa-whatsapp'></i>
                                <p className='m-0'>+62 813-3465-9292</p>
                            </Link>
                        </div>
                        <div className='email'>
                            <Link className='text-decoration-none d-flex align-items-center gap-1'>
                                <i className='fa-regular fa-envelope'></i>
                                <p className='m-0'>anangegga@gmail.com</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
                        <h5 className='fw-bold'>Menu</h5>
                        <Link to=''>Home</Link>
                        <Link to='/kelas'>Kelas</Link>
                        <Link to='/testimonial'>Testimonial</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/syarat'>Syarat & Ketentuan</Link>
                    </Col>
                    <Col lg='4' className='mt-lg-0 mt-5'>
                        <h5 className='fw-bold mb-3'>
                            Subscribe untuk info menarik
                        </h5>
                        <div className='subscribe'>
                            <input
                                type='text'
                                className='rounded-start rounded-0'
                                placeholder='Subscribe...'
                            />
                            <button className='btn btn-danger rounded-end rounded-0'>
                                Subscribe
                            </button>
                        </div>
                        <div className='social mt-3'>
                            <Link>
                                <i className='fa-brands fa-facebook'></i>
                            </Link>
                            <Link>
                                <i className='fa-brands fa-twitter'></i>
                            </Link>
                            <Link>
                                <i className='fa-brands fa-linkedin'></i>
                            </Link>
                            <Link>
                                <i className='fa-brands fa-youtube'></i>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='text-center px-md-0 px-3'>
                            &copy; Copyright {new Date().getFullYear()} by{' '}
                            <b>Anang Egga</b>, All Right Reserved
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FooterComponent;
