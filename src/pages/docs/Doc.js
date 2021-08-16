import { motion } from "framer-motion"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap"
import { pageTransition } from '../../components/animations'
import { DocLayout } from '../../components/docs';
import Markdown from 'markdown-to-jsx';

export const Doc = () => {
    let { parent, file } = useParams();
    
    const [content, setContent] = useState();

    useEffect(() => {
        if(parent && file){
            import(`../../docs/${parent}/${file}.md`).then(res => {
                fetch(res.default)
                    .then(res=>res.text())
                    .then(res=>setContent(res))
                    .catch(err=>console.log(err))
            })
        }
    }, [parent, file]);

    

    return(
    <DocLayout>
        <Container className="px-4">
            <Row className="justify-content-center">
                <Col md={12}>
                    {
                        content &&
                        <motion.div
                        {...pageTransition}
                        >
                            <Markdown>
                                {content}
                            </Markdown>
                            
                  
                    </motion.div>
                    }
                    
                </Col>
            </Row>
        </Container>
    </DocLayout>
    )
}