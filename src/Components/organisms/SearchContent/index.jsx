import React from "react";
import { Row, Col, ContentStyle } from "../../../layout"
import { Image, Typo, GoodsForm } from "../../index"
import { Carousel } from 'antd';
import mainImage from "../../../assets/images/mainImage2.png"
import Pagination from '@mui/material/Pagination';

const SearchContent = ({
    pagingClick,
    pagingNum,
    lists,
    collectionProductOnClick,
    totalPageNum,
    keywordValue
}) => {



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

                        <Typo size={'2.5rem'} weight={"bold"} color={"rgb(51,51,51)"} ><p style={{ color: "#0d7000" }} >'{keywordValue}'&nbsp;</p> 검색 결과</Typo>

                    </Col>
                    {/* //!SECTION Title */}
                    {/* //SECTION Content */}

                    <Col span={10} justify={"center"} align={"center"}>
                        <Row justify={"center"} align={"center"}>
                            {/* //SECTION list */}

                            <Col span={12} justify={"center"} align={"center"}>
                                <Row justify={"flex-start"} align={"flex-start"}>
                                    {
                                        (lists) ?
                                            lists.map((lists) => {
                                                return (
                                                    <GoodsForm
                                                        key={lists.id}
                                                        id={lists.id}
                                                        thumbnailImg={lists.thumbnailImg}
                                                        name={lists.name}
                                                        originalPrice={lists.originalPrice}
                                                        sellingPrice={lists.sellingPrice}
                                                        description={lists.description}
                                                        totalCount={lists.totalCount}
                                                        productOnClick={() => collectionProductOnClick(lists.id)}
                                                    />
                                                )
                                            })
                                            :
                                            null
                                    }
                                    {
                                        lists.length === 0 ?
                                            <Col span={12} justify={'center'} style={{ padding: '50px 0' }}>
                                                <Typo size={'1.5rem'} color={'#b5b5b5'}>등록된 상품이 없습니다.</Typo>
                                            </Col>
                                            : null
                                    }
                                </Row>

                            </Col>
                            {/* //!SECTION list */}
                            {/* //SECTION Pagination */}
                            <Col span={12} justify={'center'}>
                                <Pagination count={totalPageNum} onChange={pagingClick} key={pagingNum} defaultPage={pagingNum} shape="rounded" />
                            </Col>
                        </Row>

                    </Col>
                    {/* //!SECTION Pagination */}

                </Row>
            </ContentStyle >
        </>
    )
}

export default SearchContent;