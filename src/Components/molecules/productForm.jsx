import React from "react";
import { Row, Col } from "../../layout"
import { Image, Typo } from "../"
import styled from "styled-components"


const productFrom = () => {
    return (
        <Row>
            <Col>
                <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="product" />
            </Col>
            <Col></Col>
        </Row>
    )
}

export default productFrom;