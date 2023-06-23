import { Button } from 'react-bootstrap';
import error from '../../assets/error404.png'
const Error404 = () => {
    return (
        <section className="mainSection text-center">
            <img src={error} alt="error 404" />
        </section>
    );
};

export default Error404;