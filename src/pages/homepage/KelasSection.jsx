import { Container, Row, Col } from 'react-bootstrap';
import { semuaKelas } from '../../data/index';
import { useNavigate } from 'react-router-dom';

function KelasSection({ limit, ...props }) {
    const kelasLimit = limit ? semuaKelas.slice(0, limit) : semuaKelas;
    let navigate = useNavigate();
    return (
        <div className='kelas w-100 min-vh-100'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s'>
                            {props.title}
                        </h1>
                        <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </Col>
                </Row>
                <Row>
                    {kelasLimit.map((kelas) => {
                        return (
                            <Col
                                key={kelas.id}
                                className='shadow rounded'
                                data-aos='fade-up'
                                data-aos-duration='1000'
                                data-aos-delay={kelas.delay}
                            >
                                <img
                                    src={kelas.image}
                                    alt='unsplash.com'
                                    className='w-100 mb-5 rounded-top'
                                />
                                <div className='star mb-2 px-3'>
                                    <i className={kelas.star1}></i>
                                    <i className={kelas.star2}></i>
                                    <i className={kelas.star3}></i>
                                    <i className={kelas.star4}></i>
                                    <i className={kelas.star5}></i>
                                </div>
                                <h5 className='mb-5 px-3'>{kelas.title}</h5>
                                <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                                    <p className='m-0 text-primary fw-bold'>
                                        {kelas.price}
                                    </p>
                                    <button className='btn btn-danger rounded-1'>
                                        {kelas.buy}
                                    </button>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
                <Row>
                    {props.tombol ? (
                        <Col className='text-center'>
                            <button
                                data-aos='fade-up'
                                data-aos-duration='1000'
                                className='btn btn-success rounded-5 btn-lg'
                                onClick={() => navigate('/kelas')}
                            >
                                {props.tombol}
                                <i className='fa-solid fa-chevron-right ms-2'></i>
                            </button>
                        </Col>
                    ) : (
                        ''
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default KelasSection;
