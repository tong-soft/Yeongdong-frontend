import React from "react";
import { Row, Col, ContentStyle } from "../../../layout"
import { Image, Typo, GoodsForm } from "../../index"
import { Carousel, Space, Tag } from 'antd';
import mainImage from "../../../assets/images/mainImage2.png"
import Pagination from '@mui/material/Pagination';
const { CheckableTag } = Tag;

const CollectionsContent = ({
    sort,
    pagingClick,
    pagingNum,
    lists,
    collectionProductOnClick,
    totalPageNum,
    categoryData,
    selectedCategory,
    handleChangeCategory,
    categoryList,
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
                    <Col span={12} justify={"center"} align={"center"} style={{ margin: "3rem 0" }}>
                        {
                            sort === undefined ?
                                <Typo size={'2.5rem'} weight={"bold"} color={"rgb(51,51,51)"} > 전체 상품</Typo>
                                : null
                        }
                        {
                            sort === `signature` ?
                                <Typo size={'2.5rem'} weight={"bold"} color={"rgb(51,51,51)"} > 시그니처</Typo>
                                : null
                        }
                    </Col>
                    {/* //!SECTION Title */}

                    {/* //SECTION category */}
                    <Col span={12} justify={"center"} align={"center"} style={{ margin: "1rem 0 2rem 0" }}>
                        <Row justify={"center"} align={"center"}>
                            <Col span={1.5} justify={"flex-end"} style={{ paddingTop: "2px" }}>
                                <Space size={[0, 10]} wrap>
                                    <span
                                        style={{
                                            marginRight: 8,
                                            fontSize: "1.2rem",
                                            fontWeight: "bold",
                                            color: "rgb(51,51,51)",
                                        }}
                                    >
                                        카테고리
                                    </span>
                                </Space>
                            </Col>
                            <Col span={10}>
                                <Space size={[0, 4]} wrap>

                                    {categoryData.map((tag) => (
                                        <CheckableTag
                                            key={tag}
                                            checked={selectedCategory.includes(tag)}
                                            onChange={(checked) => handleChangeCategory(tag, checked)}
                                            style={{ fontSize: "1rem" }}
                                        >
                                            {tag}
                                        </CheckableTag>
                                    ))}
                                </Space>
                            </Col>
                        </Row>


                    </Col>
                    {/* //!SECTION category */}


                    {/* //SECTION Content */}

                    <Col span={10} justify={"center"} align={"center"}>
                        <Row justify={"center"} align={"center"}>
                            {/* //SECTION list */}

                            <Col span={12} justify={"center"} align={"center"}>
                                {
                                    selectedCategory ?
                                        <Row justify={"flex-start"} align={"flex-start"}>
                                            {
                                                categoryList.length === 0 ?
                                                    <Col span={12} justify={'center'} style={{ padding: '50px 0' }}>
                                                        <Typo size={'1.5rem'} color={'#b5b5b5'}>등록된 상품이 없습니다.</Typo>
                                                    </Col>
                                                    :
                                                    categoryList.map((lists) => {
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
                                            }
                                        </Row>
                                        :
                                        <Row justify={"flex-start"} align={"flex-start"}>
                                            {
                                                lists.length === 0 ?
                                                    <Col span={12} justify={'center'} style={{ padding: '50px 0' }}>
                                                        <Typo size={'1.5rem'} color={'#b5b5b5'}>등록된 상품이 없습니다.</Typo>
                                                    </Col>
                                                    : lists.map((lists) => {
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
                                            }
                                        </Row>
                                }
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

export default CollectionsContent;