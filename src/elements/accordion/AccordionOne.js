import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionOne = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`}>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    O que é a AppValue?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Nós somos uma consultoria especializada em tecnologia e inovação, oferecendo soluções personalizadas para atender às necessidades específicas dos nossos clientes. Com uma equipe de especialistas altamente qualificados, utilizamos as mais recentes tecnologias e práticas inovadoras para ajudar as empresas a otimizar seus processos, aumentar a eficiência e melhorar sua vantagem competitiva.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Como entro em contato com a AppValue??
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Só mandar uma mensagem para contato@appvalue.io</Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}
export default AccordionOne

