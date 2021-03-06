import { motion } from "framer-motion"
import { Container, Row, Col } from "react-bootstrap"
import { pageTransition } from '../components/animations'

export const About = () => {
    return(
    
           <Container>
               <Row className="justify-content-center my-5">
                   <Col md={8}>
                        <motion.div
                            {...pageTransition}
                            >
                        <h1> About </h1>
                        <p> probably don't need this page.....</p>
                        </motion.div>
                   </Col>
               </Row>
           </Container>
    )
}