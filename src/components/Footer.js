import { Container, Row, Col} from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className='align-items-center'>
                    {/* <MailChimpForm/> */}
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className='text-center text-sm-end'>
                        <div className="social-icon">
                           <a href='https://www.linkedin.com/in/anmol-gupta-329a36253/' target='_blank'><img src={navIcon1} alt="" /></a>
                           <a href='https://github.com/anmolgupta2015' target='_blank'><img src="https://cdn-icons-png.flaticon.com/128/10090/10090320.png" alt="" /></a>
                           <a href='https://drive.google.com/file/d/1D1bfdF_YZL5Cv5N_2NV0USzzyibkcFVB/view?pli=1' target='_blank'><img src="https://cdn-icons-png.flaticon.com/128/10433/10433154.png" alt="" /></a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}