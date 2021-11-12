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
                 <Modal.Body className="data-body">
                     <Image src={data.image} style={{width:'200px'}}/>
                     <p className="data-desc">{data.desc}</p>
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
                            title: e.title,
                            desc: e.desc
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
            <h1 style ={{paddingBottom:'15px'}}>Portfolio</h1>
            <Container fluid="lg">
                <Row>
                    {maped}
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio
