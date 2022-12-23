import React from "react";
import { Row, Col, ContentStyle } from "../../../layout"
import { Image, Typo, Pagination, goodsForm } from "../../index"
import { Carousel } from 'antd';
import mainImage from "../../../assets/images/mainImage.png"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const CollectionsContent = ({ role,
    listTotalNum,
    pagingClick,
    pagingNum,
    lists
}) => {

    const goodsList = lists || [{ id: null, img: null, title: "게시글이없습니다.", desc: null, price: null, discountRate: null, discountPrice: null }]


    return (
        <>
            {/* //SECTION Carousel */}
            <Carousel >
                <div>
                    <Image src={mainImage} width={"100%"} ></Image>
                </div>
                <div>
                    <Image src={mainImage} width={"100%"} ></Image>
                </div>
                <div>
                    <Image src={mainImage} width={"100%"} ></Image>
                </div>
                <div>
                    <Image src={mainImage} width={"100%"} ></Image>
                </div>
            </Carousel>
            {/* //!SECTION Carousel */}

            <ContentStyle>
                <Row justify={"center"} align={"center"}>
                    {/* //SECTION Title */}

                    <Col span={12} justify={"center"} align={"center"} style={{ margin: "50px 0" }}>
                        <Typo size={'2.5rem'} weight={"bold"} color={"rgb(51,51,51)"} > 전체 상품</Typo>
                    </Col>
                    {/* //!SECTION Title */}
                    {/* //SECTION Content */}

                    <Col span={10} justify={"center"} align={"center"}>
                        <Row justify={"center"} align={"center"}>
                            {/* //SECTION list */}

                            <Col span={12} justify={"center"} align={"center"}>
                                <Row justify={"center"} align={"flex-start"}>
                                    {
                                        (goodsList) ?
                                            goodsList.map((lists) => {
                                                return (
                                                    <Col key={lists.id} span={4} justify={"center"} align={"center"} style={{ padding: "1.5rem 1rem" }} >
                                                        <Row justify={"center"} align={"center"}>
                                                            <Col span={12} justify={"center"} align={"center"}>
                                                                <Image src={lists.img} width={"100%"}></Image>
                                                            </Col>
                                                            <Col span={12} justify={"flex-start"} align={"center"} style={{ marginTop: "1rem" }}>
                                                                <Typo fontFamily={'Noto Sans KR'} size={"1.3rem"} weight={"normal"} >{lists.title}</Typo>
                                                            </Col>

                                                            {
                                                                (lists.discountRate !== 0) ?
                                                                    <Col span={12} justify={"flex-start"} align={"center"} style={{ marginTop: "0.8rem", }}>
                                                                        <Typo color={"#f03f45"} size={"1.3rem"} fontFamily={'Noto Sans KR'} weight={'700'}>{lists.discountRate}%</Typo>
                                                                        <ArrowDownwardIcon style={{ color: "#f03f45", fontSize: "1.5rem", marginRight: "6px" }}></ArrowDownwardIcon>
                                                                        <Typo color={"#333333"} size={"1.3rem"} weight={"800"} >{lists.discountPrice}원</Typo>
                                                                    </Col>

                                                                    :
                                                                    <Col span={12} justify={"flex-start"} align={"center"} style={{ marginTop: "0.8rem", }}>
                                                                        <Typo color={"#333333"} size={"1.3rem"} weight={"800"} >{lists.discountPrice}원</Typo>
                                                                    </Col>
                                                            }
                                                            <Col span={12} justify={"flex-start"} align={"center"} style={{ marginTop: "1rem" }}>
                                                                <Typo fontFamily={'Noto Sans KR'} size={"1rem"} color={"#999999"} >{lists.desc}</Typo>
                                                            </Col>

                                                        </Row>
                                                    </Col>
                                                )
                                            })
                                            :
                                            <Typo>등록된 상품이 아직 없습니다.</Typo>
                                    }
                                </Row>

                            </Col>
                            {/* //!SECTION list */}
                            {/* //SECTION Pagination */}
                            <Col span={12} justify={'center'}>
                                <Pagination num={Math.ceil(listTotalNum / 6)} onClick={pagingClick} setPageNum={pagingNum}></Pagination>
                            </Col>
                        </Row>

                    </Col>
                    {/* //!SECTION Pagination */}

                </Row>
            </ContentStyle >
        </>
    )
}

export default CollectionsContent;