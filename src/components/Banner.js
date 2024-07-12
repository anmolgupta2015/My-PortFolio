import { useState, useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg'
// import {SpaceIcon} from  '../assests/img/SpaceIcon.svg';
import Ai2 from '../assets/img/Ai2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ['Web Developer','Web Designer','Tech Enthausiast'];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;
    console.log(delta)
    useEffect(()=>{
        let ticker = setInterval(() => {
            tick();
            console.log(tick);
        },delta);

        return() => {clearInterval(ticker)};
    },[text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1);
        console.log(index)
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
            setIndex(prevIndex => prevIndex - 1)
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
            setIndex(1)
        }
        else{
            setIndex(prevIndex => prevIndex + 1)
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                    <span className="tagline">Welcome To My Portfolio</span>
                    <h1>{`Hi I'm Anmol Gupta `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "Tech Enthausiast" ]'></span> <span className="wrap">{text}</span> </h1>
                    <p>Curiosity-driven CS student passionate about machine learning, web development, and exploring tech's frontiers. Eager to build, create, and unlock potential in emerging technologies like AI, data science, and cybersecurity.</p>
                    <button onClick={()=> console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img src={Ai2} alt="headder Img"  />
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
