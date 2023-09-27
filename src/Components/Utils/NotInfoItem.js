import Alert from 'react-bootstrap/Alert';

export default function NotInfoItem({ title, text }) {

    return (
        <Alert variant="danger" dismissible>
            <Alert.Heading>{title}</Alert.Heading>
            <p>
                {text}
            </p>
        </Alert>
    );
}

