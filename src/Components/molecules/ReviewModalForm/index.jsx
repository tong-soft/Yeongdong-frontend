import React from "react"

import { Row, Col } from "../../../layout"
import { Typo, Divider, Btn, TextAreaBox, Image, FileBox } from '../../index';
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import { Rate } from 'antd';
import uploadBackground from "../../../assets/images/uploadBackground.png"
import { PlusOutlined, CloseCircleFilled } from '@ant-design/icons';


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
const UploadContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position : absolute;
    width : 100%;
`


const ReviewModalForm = ({
    reviewData,
    reviewModalHandler,
    setReviewDataFunc,
    uploadImgOnclick,
    FileBoxCloseOnclick,
}) => {
    /**
   * @description 제품 문의 title 모음 
   */
    return (
        <Row>
            <Col span={12} justify={"space-between"} align={'center'}>
                <Typo size={'1.8rem'} weight={'500'}>상품 후기 작성</Typo>
                <CloseIcon style={{ fontSize: "1.5rem", cursor: "pointer" }} onClick={reviewModalHandler.close} />
            </Col>
            <Col span={12} >
                <Divider marginBottom={"10px"} marginTop={'10px'}></Divider>
            </Col>
            <Col span={12}>
                <Row align={'center'} justify={'flex-start'}>
                    <Col span={3} align={'center'} justify={'center'}>
                        <Typo color={"#9c9c9c"} size={'1.3rem'} weight={'500'}>제품명</Typo>
                    </Col>
                    <Col span={9} align={'center'} justify={'flex-start'}>
                        <Typo color={"#333333"} size={'1.3rem'} weight={'500'}>
                            {reviewData.orderProductName}
                        </Typo>

                    </Col>
                </Row>
            </Col>
            <Col span={12} >
                <Divider marginBottom={"10px"} marginTop={'10px'}></Divider>
            </Col>
            <Col span={12} >
                <Row align={'center'} justify={'flex-start'}>
                    <Col span={3} align={'center'} justify={'center'}>
                        <Typo color={"#9c9c9c"} size={'1.3rem'} weight={'500'}>별점</Typo>
                    </Col>
                    <Col span={9} align={'center'} justify={'flex-start'}>
                        <Rate
                            value={reviewData.reviewRate}
                            onChange={(value) => setReviewDataFunc.reviewRate(value)}
                        />
                    </Col>
                </Row>
            </Col>
            <Col span={12} style={{ marginTop: "2rem" }}>
                <Row align={'center'} justify={'flex-start'}>
                    <Col span={3} align={'center'} justify={'center'}>
                        <Typo color={"#9c9c9c"} size={'1.3rem'} weight={'500'}>내용</Typo>
                    </Col>
                    <Col span={9} align={'center'} justify={'flex-start'}>
                        <TextAreaWrapper>
                            <TextAreaBox
                                value={reviewData.content}
                                onChange={setReviewDataFunc.reviewContent}
                                placeholder={"내용을 입력해 주세요"}>
                            </TextAreaBox>
                        </TextAreaWrapper>
                    </Col>
                </Row>
            </Col>
            <Col span={12} style={{ marginTop: "2rem" }}>
                <Row align={'center'} justify={'flex-start'}>
                    <Col span={3} align={'center'} justify={'center'}>
                        <Typo color={"#9c9c9c"} size={'1.3rem'} weight={'500'}>사진첨부</Typo>
                    </Col>
                    <Col span={2.5} align={'center'} justify={'flex-start'}>
                        {
                            (reviewData.reviewImgUrl) ?
                                <>
                                    <div style={{
                                        // backgroundImage: `url(${reviewData.reviewImgUrl})`,
                                        position: "relative", width: "100%",
                                    }}>
                                        <Image src={reviewData.reviewImgUrl} width={'100%'} ></Image>
                                        <Typo onClick={FileBoxCloseOnclick} color={"#000000"} style={{ position: "absolute", top: "8%", right: "5%", cursor: "pointer" }} >
                                            <CloseCircleFilled style={{ fontSize: "15px", opacity: '0.5' }} />
                                        </Typo>

                                    </div>
                                    {/* <Image src={reviewData.reviewImgUrl} width={'100%'} ></Image> */}
                                </>

                                :
                                <FileBox block id={"customImg"} accept="image/*" size={"100%"} onChange={uploadImgOnclick} >
                                    <Image src={uploadBackground} width={'100%'} style={{ position: "relative" }}></Image>
                                    <UploadContentWrapper>
                                        <PlusOutlined style={{ fontSize: "1.5rem", color: '#9c9c9c' }}></PlusOutlined>
                                    </UploadContentWrapper>
                                </FileBox>
                        }
                    </Col>
                </Row>
            </Col >

            <Col span={12} style={{ marginTop: "1rem" }}>
                <Divider marginBottom={"1rem"} marginTop={'1rem'}></Divider>
            </Col>
            <Col span={12} justify={'center'} >
                <Btn width={"10rem"} types={'text'} onClick={reviewModalHandler.close} size={"large"} value={"취소"} />
                <Btn width={"10rem"} types={'primary'} onClick={reviewModalHandler.submitBtnOnClick} size={"large"} value={"등록"} style={{ marginLeft: "1rem" }} />

            </Col>
        </Row >
    )


}

export default ReviewModalForm;