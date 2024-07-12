import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
// import meter1 from '../assets/img/meter1.svg'
// import meter2 from '../assets/img/meter2.svg'
// import meter3 from '../assets/img/meter3.svg'
// import colorSharp from '../assets/img/color-sharp.png'


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
              <Carousel responsive={responsive} infinite={true} className='skill-slider owl-carousel owl-theme'>
                <div className='item'>
                  <img src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png" alt="Image1" />
                  <h5>HTML</h5>
                </div>
                <div className='item'>
                  <img src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png" alt="Image2" />
                  <h5>CSS</h5>
                </div>
                <div className='item'>
                  <img src="https://cdn-icons-png.flaticon.com/128/1199/1199124.png" alt="Image3" />
                  <h5>JAVASCRIPT</h5>
                </div>
                <div className='item'>
                  <img src="https://cdn-icons-png.flaticon.com/128/875/875209.png" alt="Image4" />
                  <h5>REACT JAVASCRIPT</h5>
                </div>
                <div className='item'>
                  <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Image5" />
                  <h5>NODE JAVASCRIPT</h5>
                </div>
                <div className='item'>
                  <img src="https://cdn-icons-png.flaticon.com/128/1493/1493169.png" alt="Image6" />
                  <h5>API'S</h5>
                </div>
                <div className='item'>
                  <img src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" alt="Image7" />
                  <h5>BOOTSTRAP</h5>
                </div>
                <div className='item'>
                  <img src="https://cdn-icons-png.flaticon.com/128/4267/4267550.png" alt="Image7" />
                  <h5>CLOUD</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className='background-image-left' src={colorSharp} alt='image5' /> */}
    </section>
  )
}