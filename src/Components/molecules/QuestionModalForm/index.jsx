import React from "react"

import { Row, Col } from "../../../layout"
import { Typo, Divider, Btn, TextAreaBox } from '../../index';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styled from "styled-components";

const TextAreaWrapper = styled.div`
    display : flex;
    align-items: center;
    justify-content: space-between;
    width : 100%;
    height : 20rem;
    padding-left :1rem ;
    border : 1px solid rgb(221, 221, 221);
    background-color: #f5f5f5;
    border-radius: 6px;
    box-shadow : rgb(247 247 247) 0px 0px 0px 1px inset;
    font-size : 1.2rem;
    font-weight: 500;
`



const QuestionModalForm = ({
    productName,
    productQuestionData,
    productQuestionFunc,
    questionModalHandler,
    productQuestionSaveOnClick,
}) => {
    /**
   * @description 제품 문의 title 모음 
   */
    const titleValueArr = [
        `상품 문의`,
        '배송 문의',
        '취소 문의',
        '반품 문의',
        '기타 문의'
    ]
    return (
        <Row>
            <Col span={12} justify={"space-between"} align={'center'}>
                <Typo size={'1.8rem'} weight={'500'}>상품 문의하기</Typo>
                <CloseIcon style={{ fontSize: "1.5rem", cursor: "pointer" }} onClick={questionModalHandler.close} />
            </Col>
            <Col span={12} >
                <Divider marginBottom={"10px"} marginTop={'10px'}></Divider>
            </Col>
            <Col span={12}>
                <Row align={'center'} justify={'center'}>
                    <Col span={3} align={'center'} justify={'center'}>
                        <Typo size={'1.3rem'} weight={'500'}>상품명</Typo>
                    </Col>
                    <Col span={9} align={'center'} justify={'flex-start'}>
                        <Typo size={'1.5rem'} weight={'500'}>
                            {productName}
                        </Typo>
                    </Col>
                </Row>

            </Col>
            <Col span={12} >
                <Divider marginBottom={"10px"} marginTop={'10px'}></Divider>
            </Col>
            <Col span={12} >
                <Row align={'center'} justify={'center'}>
                    <Col span={3} align={'center'} justify={'center'}>
                        <Typo size={'1.3rem'} weight={'500'}>종류</Typo>
                    </Col>
                    <Col span={9} align={'center'} justify={'center'}>
                        <Select
                            value={productQuestionData.title}
                            onChange={productQuestionFunc.title}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>문의 종류를 선택해주세요.</em>;
                                }
                                return <span style={{ fontSize: "1.1rem" }}>{selected}</span>;
                            }}
                            style={{ width: "100%", height: "4rem", }}
                        >
                            {
                                titleValueArr.map((memo, index) => (
                                    <MenuItem key={index} value={memo} style={{ fontSize: "1.2rem" }}>{memo}</MenuItem>

                                ))
                            }
                        </Select>
                    </Col>
                </Row>
            </Col>
            <Col span={12} style={{ marginTop: "2rem" }}>
                <Row align={'center'} justify={'center'}>
                    <Col span={3} align={'center'} justify={'center'}>
                        <Typo size={'1.3rem'} weight={'500'}>내용</Typo>
                    </Col>
                    <Col span={9} align={'center'} justify={'center'}>
                        <TextAreaWrapper>
                            <TextAreaBox
                                value={productQuestionData.content}
                                onChange={productQuestionFunc.content}
                                placeholder={"내용을 입력해 주세요"}>
                            </TextAreaBox>
                        </TextAreaWrapper>
                    </Col>
                </Row>
            </Col>

            <Col span={12} style={{ marginTop: "1rem" }}>
                <Divider marginBottom={"1rem"} marginTop={'1rem'}></Divider>
            </Col>
            <Col span={12} justify={'center'} >
                <Btn width={"10rem"} types={'text'} onClick={questionModalHandler.close} size={"large"} value={"취소"} />
                <Btn width={"10rem"} types={'primary'} onClick={productQuestionSaveOnClick} size={"large"} value={"등록"} style={{ marginLeft: "1rem" }} />

            </Col>
        </Row>
    )


}

export default QuestionModalForm;