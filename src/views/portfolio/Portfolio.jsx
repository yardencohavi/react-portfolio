import React, {useState} from 'react'
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Portfolio() {
    const [modalShow,setModalShow] = useState(false);
    const [tempData,setTempData] = useState({});

    function createModal(data){
        return(
            <Modal
                show={modalShow}
                onHide={() =>setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {data.title}
                </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                     <Image src={data.image} style={{width:'200px'}}/>
                 </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
    const maped = portfolioData.map((e,idx) => {
        return(
            <Card key={idx} id="portfolio__card__container">
                <Image className="portfolio__image" 
                    onClick={() => {
                        setTempData({
                            image: e.image,
                            title: e.title
                        })
                        setModalShow(true)
                    }}
                    src={e.image}/>
                    <div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
                    {createModal(tempData)}
            </Card>
        )
    })
    return (
        <div className="portfolio__main__container" id="portfolio">
            <h1>Portfolio</h1>
            <p>My Github page
                <a href="https://github.com/yardencohavi" target="_blank" rel="noreferrer">https://github.com/yardencohavi</a>
            </p>
            <Container fluid="lg">
                <Row>
                    {maped}
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio