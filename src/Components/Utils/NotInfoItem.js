import { Container, Row, Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { BsBackspaceFill } from "react-icons/bs";

export default function NotInfoItem({ title, text }) {

    return (
        <Alert className='bg-notInfo'>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col xs={1}>
                        <img className='icon-full' src='/img/icons/shield-cross.svg' />
                    </Col>
                    <Col xs={11}>
                        <Alert.Heading>{title}</Alert.Heading>
                        <p>
                            {text}
                        </p></Col>
                </Row>
            </Container>

        </Alert>
    );
}

