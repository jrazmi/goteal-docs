import { motion } from "framer-motion"
import { Container, Row, Col } from "react-bootstrap"
import { pageTransition } from '../../components/animations'
import { DocLayout } from '../../components/docs';

export const Docs = () => {
    return(
    <DocLayout>
        <Container className="px-4">
            <Row className="justify-content-center">
                <Col md={12}>
                    <motion.div
                        {...pageTransition}
                        >
                    <h1> Docs </h1>
                    <p> Here's some documentation... </p>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    </DocLayout>
    )
}