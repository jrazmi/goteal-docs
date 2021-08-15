import { motion } from "framer-motion"
import { Container, Row, Col } from "react-bootstrap"
import { pageTransition } from '../components/animations'

export const Home = () => {
    return(
    
           <Container>
               <Row className="justify-content-center my-5">
                   <Col md={8}>
                        <motion.div
                            {...pageTransition}
                            >
                        <h1> Welcome to goteal</h1>
                        <p>goteal exists to simplify the process of authoring and testing Algorand Smart Contracts for people that are familiar with the Go programming language.</p>

<p>Those familiar with Go know that the language and surrounding ecosystem offers many helpful tools. goteal exists to bridge the Go ecosystem with the Algorand Smart Contract ecosystem.</p>
                        </motion.div>
                   </Col>
               </Row>
           </Container>
    )
}