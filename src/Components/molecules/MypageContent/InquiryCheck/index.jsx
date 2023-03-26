import React from 'react';
import { Row, Col, } from "../../../../layout"
import { Typo, Divider } from "../../../index"
import Pagination from '@mui/material/Pagination';




const InquiryCheck = ({
    productMyQuestions,
    totalPageNum,
    pagingClick,
    pagingNum,
}) => {
    return (
        <>
            <Row>
                <Col span={12} align={'center'} style={{ marginTop: "3rem", }}>
                    <Row>
                        <Col span={12}>
                            <Typo fontFamily={'Noto'} size={"2rem"} weight={"500"} color={'rgb(51,51,51)'} >
                                문의확인
                            </Typo>
                        </Col>
                        <Col span={12}>
                            <Typo fontFamily={'Noto'} size={"1.13\rem"} weight={"500"} color={'rgb(153, 153, 153)'}  >
                                내가 작성한 문의와 답변을 확인할 수 있습니다.
                            </Typo>
                        </Col>
                        <Col span={12} style={{ marginTop: "1rem" }}>
                            <Divider color={'rgb(51,51,51)'} marginBottom={'0'} marginTop={'0'} borderWidth={'2px'} />
                        </Col>

                        <Col span={12} justify={'center'} style={{ marginTop: "1rem" }}>
                            <Row>
                                {
                                    productMyQuestions.map((question, index) => {
                                        return (
                                            <Col span={12} key={index} style={{ margin: "2rem 0" }}>
                                                <Row align={'center'} style={{
                                                    padding: '2rem',
                                                    border: '1px solid rgb(215 215 215)',
                                                    borderRadius: '10px',
                                                    // backgroundColor: 'rgb(240, 240, 240)',
                                                }}>
                                                    <Col span={12} align={'flex-end'} justify={'space-between'}>
                                                        <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "flex-end", flexDirection: "column", position: "relative", width: "auto" }}>
                                                            <Typo color={"#9c9c9c"} style={{ position: "absolute", top: "-1.5rem", left: "0px", width: "7rem" }} >상품명</Typo>
                                                            <Typo size={"1.1rem"} weight={"700"} color={"#333333"} >
                                                                {question.productTitle}
                                                            </Typo>
                                                        </div>
                                                        {
                                                            question.answerContent !== null ?
                                                                <Typo color={'#0d7000'} size={"1.5rem"} weight={"bold"}>답변 완료</Typo>
                                                                :
                                                                <Typo color={'#0d7000'} size={"1.3rem"} weight={"bold"}>답변 전</Typo>

                                                        }
                                                    </Col>
                                                    <Divider marginBottom={'1.5rem'} marginTop={'0.5rem'} color={'#a5a5a5'}></Divider>
                                                    <Col span={12} >
                                                        <Row>
                                                            <Col span={2} >
                                                                <Typo size={"1.2rem"} weight={"700"} color={"#333333"} >
                                                                    [{question.title}]
                                                                </Typo>
                                                            </Col>
                                                            <Col span={10} justify={'center'}>
                                                                <Typo size={"1.2rem"} weight={"500"} color={"#333333"} >
                                                                    {question.questionContent}
                                                                </Typo>
                                                            </Col>
                                                        </Row>

                                                    </Col>
                                                    {
                                                        question.answerContent !== null ?
                                                            <Row>
                                                                <Divider marginBottom={'2rem'} marginTop={'2rem'} />
                                                                <Col span={2} >
                                                                    <Typo size={"1.2rem"} weight={"700"} color={"#333333"} >
                                                                        작성된 답변
                                                                    </Typo>
                                                                </Col>
                                                                <Col span={10} justify={'center'}>
                                                                    <Typo size={"1.2rem"} color={"#333333"} >
                                                                        {question.answerContent}
                                                                    </Typo>
                                                                </Col>
                                                            </Row>
                                                            :
                                                            null
                                                    }
                                                </Row>
                                            </Col>
                                        )
                                    })
                                }
                                {
                                    productMyQuestions.length === 0 ? (
                                        <Col span={12} justify={'center'} style={{ padding: '5rem 0' }}>
                                            <Typo size={'1.5rem'} color={'#b5b5b5'}>문의내역이 없습니다.</Typo>
                                        </Col>
                                    )
                                        : null
                                }
                            </Row>
                        </Col>
                        <Col span={12} justify={"center"} style={{ marginTop: "2rem" }}>
                            <Pagination count={totalPageNum} onChange={pagingClick} key={pagingNum} defaultPage={pagingNum} shape="rounded" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default InquiryCheck;