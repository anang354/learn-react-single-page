import { Col, Container, Row } from 'react-bootstrap';
import FaqComponent from '../components/FaqComponent';

function SyaratPage(props) {
    return (
        <div className='syarat-page min-vh-100'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='fw-bold text-center mb-2'>
                            Syarat dan Ketentuan
                        </h1>
                        <p className='text-center'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </Col>
                </Row>
                <Row className='pt-5'>
                    <Col>
                        <p className='lh-lg'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Et accusamus ducimus quis! Non modi debitis
                            quia quaerat sint delectus, quasi velit
                            necessitatibus fuga dolor porro illo ex aliquam
                            itaque beatae nisi doloremque optio praesentium
                            nihil, tenetur voluptate culpa! Officiis est,
                            tempora doloremque expedita ipsam quaerat distinctio
                            nihil vitae reiciendis dolores inventore dolore enim
                            ipsa ea in dolor quisquam saepe modi. Eveniet eos
                            adipisci neque quas nulla architecto, dolore soluta
                            corrupti.
                        </p>
                    </Col>
                </Row>
                <Row className='pt-5'>
                    <Col>
                        <h4 className='fw-bold'>1. Lorem</h4>
                        <p className='lh-lg'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Accusantium libero illum consequatur et iure
                            voluptas eveniet minus, odio corrupti nulla? Cumque
                            quasi rem quibusdam natus culpa mollitia nobis
                            magnam nisi voluptatum alias voluptatem, corporis
                            earum neque necessitatibus facilis quis? Non.
                        </p>
                        <p className='lh-lg'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fuga laudantium consequatur libero assumenda
                            voluptatibus, fugiat reprehenderit minima eveniet
                            animi adipisci sunt accusamus eum dolore excepturi
                            modi praesentium atque numquam quisquam.
                        </p>
                    </Col>
                </Row>
                <Row className='pt-5'>
                    <Col>
                        <h4 className='fw-bold'>2. Lorem Ipsum</h4>
                        <p className='lh-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sed culpa totam labore? Harum, assumenda
                            doloribus impedit animi eos fuga recusandae sapiente
                            reprehenderit aliquam, error qui corrupti explicabo?
                            Ad ipsam id asperiores totam cupiditate dolore
                            laborum provident minus voluptatem aspernatur aut
                            inventore, placeat eveniet, accusantium est hic vero
                            voluptatum possimus. Officiis quidem optio officia
                            modi assumenda molestias nemo, nobis nisi sint?
                        </p>
                    </Col>
                </Row>
            </Container>
            <FaqComponent />
        </div>
    );
}

export default SyaratPage;
