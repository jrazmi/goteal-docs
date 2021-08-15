import { motion } from "framer-motion"
import { Container, Row, Col } from "react-bootstrap"
import { pageTransition } from '../../components/animations'

export const Docs = () => {
    return(
    
           <Container>
               <Row className="justify-content-center my-5">
                   <Col md={8}>
                        <motion.div
                            {...pageTransition}
                            >
                        <h1> Docs </h1>
                        <p> Here's some documentation... </p>
                        </motion.div>
                   </Col>
               </Row>
           </Container>
    )
}