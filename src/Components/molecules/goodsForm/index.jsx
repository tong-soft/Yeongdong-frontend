import React from "react";
import { Row, Col } from "../../../layout"
import { Image, Typo } from "../../index"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const goodsForm = ({
    id,
    img,
    title,
    discountRate,
    discountPrice,
    desc,

}) => {
    <Col key={id} span={4} justify={"center"} align={"center"} style={{ padding: "1.5rem 1rem" }} >
        <Row justify={"center"} align={"center"}>
            <Col span={12} justify={"center"} align={"center"}>
                <Image src={img} width={"100%"}></Image>
            </Col>
            <Col span={12} justify={"flex-start"} align={"center"} style={{ marginTop: "1rem" }}>
                <Typo fontFamily={'Noto Sans KR'} size={"1.3rem"} weight={"normal"} >{title}</Typo>
            </Col>

            {
                (discountRate !== 0) ?
                    <Col span={12} justify={"flex-start"} align={"center"} style={{ marginTop: "0.8rem", }}>
                        <Typo color={"#f03f45"} size={"1.3rem"} fontFamily={'Noto Sans KR'} weight={'700'}>{discountRate}%</Typo>
                        <ArrowDownwardIcon style={{ color: "#f03f45", fontSize: "1.5rem", marginRight: "6px" }}></ArrowDownwardIcon>
                        <Typo color={"#333333"} size={"1.3rem"} weight={"800"} >{discountPrice}원</Typo>
                    </Col>

                    :
                    <Col span={12} justify={"flex-start"} align={"center"} style={{ marginTop: "0.8rem", }}>
                        <Typo color={"#333333"} size={"1.3rem"} weight={"800"} >{discountPrice}원</Typo>
                    </Col>
            }
            <Col span={12} justify={"flex-start"} align={"center"} style={{ marginTop: "1rem" }}>
                <Typo fontFamily={'Noto Sans KR'} size={"1rem"} color={"#999999"} >{desc}</Typo>
            </Col>

        </Row>
    </Col>

}

export default goodsForm;