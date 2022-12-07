import React, { useState } from "react"
import { Row, Col, ContentStyle } from "../../../layout"
import { Image, Typo } from "../../index"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import monkDetailProduct from "../../../assets/images/monkDetailProduct.png"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import monkPrice from "../../../assets/images/monkPrice.png"
import monkRealPrice from "../../../assets/images/monkRealPrice.png"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import TextField from '@mui/material/TextField';
import detailView from "../../../assets/images/detailView.png"

const HomeContent = ({ role }) => {

    console.log("🚀 ~ role", role);
    const { id, product } = useParams();

    const [option, setOption] = useState("");


    const handleOptionChange = (e) => {
        setOption(e.target.value);
    };




    return (
        <>
            <ContentStyle>
                <Row >
                    {/* //SECTION - 장바구니 구매하기 개수 가격  */}

                    <Col span={12} >
                        <Row gutter={[10, 10]} align={"stretch"}>
                            <Col span={6}>
                                <Image src={monkDetailProduct} width={"100%"} />
                            </Col>
                            <Col span={6} justify={"center"}>
                                <Col span={12} >
                                    <Typo fontFamily={"nixgon"} size={"3rem"} weight={"bold"}>
                                        [영동언니]도자기 미니 흔들화분 무드등 티라이트 홀더
                                    </Typo>
                                </Col>
                                <Col span={12} align={"center"}>
                                    <Row align={"center"}>
                                        <Col span={2} justify={"flex-start"} align={"center"}>
                                            <Typo fontFamily={"nixgon"} color={"#e64937"} size={"2.8rem"}>
                                                50%
                                            </Typo>
                                        </Col>
                                        <Col span={9} justify={"flex-end"} align={"center"}>
                                            <Image src={monkRealPrice} width={"10rem"}></Image>
                                            <Image src={monkPrice} width={"10rem"}></Image>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={12}>
                                    <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="normal">
                                        <InputLabel id="demo-select-small">옵션</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={option}
                                            label="옵션"
                                            onChange={handleOptionChange}
                                        >

                                            <MenuItem value={"도자기"}>도자기</MenuItem>
                                            <MenuItem value={"미니흔들화분"}>미니흔들화분</MenuItem>
                                            <MenuItem value={"무드등"}>무드등</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Col>

                                <Col span={12}>
                                    {
                                        (option) ?
                                            <>
                                                <Row align={"center"} style={{ backgroundColor: "#f3f3f3", padding: "1rem 1.5rem" }}>
                                                    <Col span={12} style={{ borderBottom: "1px solid #979797" }}>
                                                        <Typo padding={"0 0 0.5rem 1rem"} size={"1.3rem"} weight={"bold"}>
                                                            수량
                                                        </Typo>
                                                    </Col>
                                                    <Col span={6} justify={"flex-start"} align={"center"} >
                                                        <AddCircleIcon style={{ fontSize: "2.5rem", color: "#505050", cursor: "pointer" }} />
                                                        <TextField
                                                            hiddenLabel
                                                            id="filled-hidden-label-small"
                                                            defaultValue='1'
                                                            variant="filled"
                                                            size="small"
                                                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                                            sx={{ width: "5rem", appearance: "none", margin: "0  5px" }}
                                                        />
                                                        <RemoveCircleIcon style={{ fontSize: "2.5rem", color: "#505050", cursor: "pointer" }} />
                                                    </Col>
                                                    <Col span={6} justify={"flex-end"} align={"center"}>
                                                        <Typo size={"2rem"} fontFamily={"Jeju"}>10000원</Typo>
                                                    </Col>
                                                </Row>
                                            </>
                                            : null
                                    }
                                </Col>

                            </Col>
                        </Row>

                    </Col>
                    {/* //!SECTION */}
                    {/* //SECTION - 상세정보  */}
                    <Col span={12} justify={"center"} style={{ padding: "2rem 0" }}>
                        <Image src={detailView} width={"90%"}></Image>
                    </Col>
                    {/* //!SECTION */}
                </Row >

            </ContentStyle>


        </>

    )


}

export default HomeContent