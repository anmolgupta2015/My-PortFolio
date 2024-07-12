import { Col } from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl,link}) => {
     const anchor = <a href={link} target="_blank" id="anc">Visit Website</a>
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="image1" id="Proj-img-h"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span> <br/>
                    
                  {link?anchor:""}
                     
                </div>
            </div>
        </Col>
    )   
}