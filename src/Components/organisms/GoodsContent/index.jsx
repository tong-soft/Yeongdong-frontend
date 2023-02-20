import React from "react"
import { Row, Col, ContentStyle } from "../../../layout"
import { Image, Typo, NumberField, Btn, Divider, TextBox, TextAreaBox, QuestionModalForm } from "../../index"
import { useNavigate } from "react-router-dom"
import monkDetailProduct from "../../../assets/images/monkDetailProduct.png"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import detailView from "../../../assets/images/detailView.png"
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import reviewTitle from "../../../assets/images/reviewTitle.png"
import inquiryTitle from "../../../assets/images/inquiryTitle.png"
import { ReactComponent as AddCart } from "../../../assets/svg/addCart.svg"
import styled from "styled-components"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Rate } from 'antd';
import Pagination from '@mui/material/Pagination';


const IconBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 4rem;
    height: 4rem;
    overflow: hidden;
    border-radius: 3px;
    color: #999;
    background-color: #fff;
    border: 1px solid #0d700072;
    cursor : pointer;
    fill : #ffffff25;
    transition: all 0.2s ease;
    &:hover {
        border: 1px solid #0d7000;

        fill : #0d700025;
    }
    &:active{
        border: 1px solid #0d7000;
        fill : #0d700025;
    }
`

const StarRating = styled.div`
    width : 100%;
    border : 1px solid #e1e1e1;
    border-radius : 12px;
    padding: 1.5rem 2rem;
    margin : 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const GoodsContent = ({ role,
    productOptions, selectOption, userProductObj, selectHandleFunc, amountHandleFunc,
    amountIconHandleFunc, productDeleteHandleFunc, paymentBtnOnClick,
    productInfo, orderCountHandler, addCartOnClick, isCartAlertVisible, cartAlertModal,
    isQuestionModalOpen, productQuestionOnClick, questionModalHandler,
    productQuestionFunc, productQuestionSaveOnClick, productQuestionData,
    productReview, totalReviewPageNum, reviewPagingNum, reviewPagingClick, onClickReviewImg, setProductReview, reviewImgOnCLick,

}) => {
    const navigate = useNavigate();
    const { id, name, originalPrice, thumbnailImg, description, amount, discount, sellingPrice, orderCount, starRating } = productInfo

    console.log("🚀 ~ thumbnailImg", thumbnailImg);

    const productKeys = Object.keys({ ...userProductObj });
    console.log(productKeys)
    const theme = useTheme();

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    function getStyles(theme) {
        return {
            fontWeight: theme.typography.fontWeight,
            backgroundColor: '#00000000 '

        };
    }




    return (
        <>
            <ContentStyle>
                <Row >
                    <Col span={12} >
                        <Row gutter={[5, 10]} align={"stretch"} justify={"center"}>
                            {/* //SECTION - 썸네일 */}
                            <Col xs={9} span={6} >{
                                thumbnailImg !== null ?
                                    <Image src={require(`../../../mocks/${thumbnailImg}.jpg`)} width={"100%"} height={"fit-content"} />
                                    : null
                            }
                            </Col>
                            {/* //!SECTION */}

                            <Col xs={9} span={6} justify={"center"}>
                                {/* //SECTION - 제목*/}
                                <Col span={12} >
                                    <Typo size={"2.5rem"} weight={"500"}>
                                        {name}
                                    </Typo>
                                </Col>

                                {/* //!SECTION */}

                                {/* //SECTION - 할인 , 가격 */}
                                <Col span={12} align={"center"}>
                                    <Row align={"center"} justify={"space-between"}>
                                        <Col span={3} justify={"flex-start"} align={"center"}>
                                            {
                                                originalPrice === sellingPrice ?
                                                    null
                                                    :
                                                    <Typo fontFamily={"nixgon"} color={"#e64937"} weight={"bold"} size={"2.3rem"}>
                                                        {discount}%
                                                    </Typo>
                                            }

                                        </Col>
                                        <Col span={9} justify={"flex-end"} align={"baseline"}>
                                            {
                                                originalPrice === sellingPrice ?
                                                    <Typo size={"2.5rem"} weight={'bold'} >{sellingPrice}원</Typo>
                                                    :
                                                    <>
                                                        <Typo size={"1.8rem"} weight={'bold'} color={'#6d6d6d'} style={{ textDecoration: "line-through 1.5px", marginRight: "9px" }} >
                                                            {originalPrice.toLocaleString()}원
                                                        </Typo>
                                                        <Typo size={"2.5rem"} weight={'bold'} >{sellingPrice.toLocaleString()}원</Typo>
                                                    </>
                                            }
                                        </Col>
                                    </Row>
                                </Col>
                                {/* //!SECTION */}

                                {/* //SECTION  옵션 선택 하기 */}
                                <Col span={12}>
                                    <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="normal">
                                        <Select

                                            displayEmpty
                                            value={selectOption}
                                            // onChange={selectHandleFunc}
                                            renderValue={() => { return <em>옵션</em> }}
                                            input={<OutlinedInput />}
                                            MenuProps={MenuProps}
                                            inputProps={{ 'aria-label': 'Without label' }}

                                        >
                                            <MenuItem disabled value="">
                                                <em>옵션</em>
                                            </MenuItem>
                                            {productOptions.map((product) => (
                                                <MenuItem
                                                    key={product}
                                                    value={product}
                                                    style={getStyles(theme)}
                                                    onClick={() => selectHandleFunc(product)}
                                                >
                                                    {product}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Col>
                                {/* //!SECTION  옵션 선택 하기 */}

                                {/* //SECTION  선택 된 옵션 표시 */}
                                <Col span={12}>
                                    {
                                        (productKeys) ?
                                            productKeys.map((key) => (
                                                <Row key={key} gutter={[5, 0]} align={"center"} style={{ backgroundColor: "#f3f3f3", padding: "10px 1.5rem", marginTop: "10px" }}>
                                                    <Col span={12} justify={"space-between"} style={{ borderBottom: "1px solid #979797", paddingBottom: "7px" }} align={"center"}>
                                                        <Typo padding={"0 0 0 1rem"} size={"15px"} weight={"bold"}>
                                                            {key}
                                                        </Typo>
                                                        <ClearIcon onClick={() => productDeleteHandleFunc(key)} style={{ fontSize: "2rem", cursor: "pointer" }} />


                                                    </Col>
                                                    <Col span={6} justify={"flex-start"} align={"center"} >
                                                        <RemoveCircleIcon style={{ fontSize: "2.5rem", color: "#505050", cursor: "pointer" }}
                                                            onClick={() => (amountIconHandleFunc.minus(key))} />
                                                        <NumberField value={userProductObj[key]} onChange={(e) => (amountHandleFunc(e, key))} />
                                                        <AddCircleIcon style={{ fontSize: "2.5rem", color: "#505050", cursor: "pointer" }}
                                                            onClick={() => (amountIconHandleFunc.plus(key))} />
                                                    </Col>
                                                    <Col span={6} justify={"flex-end"} align={"center"}>
                                                        <Typo size={"18px"} weight={"bold"} color={"rgb(51, 51, 51)"} style={{ lineHeight: "36px" }}>{10000 * userProductObj[key]} 원</Typo>
                                                        {/* <Typo size={"2rem"} fontFamily={"Jeju"}>{10000 * userProductObj[key]}원</Typo> */}
                                                    </Col>
                                                </Row>

                                            ))
                                            : null
                                    }
                                </Col>
                                {/* //!SECTION  선택 된 옵션 표시 */}


                                {/* //SECTION 택배비 안내 */}
                                <Col span={12} style={{ paddingTop: "0px" }}>
                                    <Typo size={"1.2rem"} fontFamily={"nixgon"}>택배배송 | 3000원</Typo>
                                    <Typo size={"1.2rem"} fontFamily={"nixgon"} color={"#db291f"}>(주문시 결제)</Typo>
                                </Col>
                                {/* //!SECTION */}


                                {/* SECTION 주문 개수 //TODO 옵션 사용 유뮤 후 자우기 */}
                                <Col span={12} align={'center'}>
                                    <Typo>갯수 입력 하 세 욘 </Typo>
                                    <NumberField value={orderCount || 1} onChange={(e) => orderCountHandler(e)} />
                                </Col>
                                {/* //!SECTION 주문 개수 */}


                                {/* //SECTION 총 상품 금액 */}
                                <Col span={12} style={{ marginTop: "0.5rem", borderTop: "1px solid rgb(244, 244, 244)" }} justify={"flex-end"} align={"flex-end"} >
                                    <Typo size={"14px"} fontFamily={"nixgon"} weight={"bold"} padding={"0 12px 0 0 "}>총 상품 금액</Typo>
                                    {/* TODO 가격 계산해서 넣기 */}
                                    <Typo size={"25px"} weight={"bold"} color={"rgb(51, 51, 51)"} style={{ lineHeight: "33px" }}>{((sellingPrice * orderCount || 1).toLocaleString())}</Typo>
                                    <Typo size={"20px"} weight={"bold"} color={"rgb(51, 51, 51)"} padding={'0 0 0 5px'} >원</Typo>

                                    <Typo size={"15px"} weight={"500"} color={"#999999"} padding={"6px 0 0 0 "} full >총 수량 | {orderCount || 1} 개</Typo>
                                </Col>
                                {/* //!SECTION 총 상품 금액 */}


                                {/* //SECTION  장바구니 결제하기 */}
                                <Col span={12} style={{ marginTop: "0.5rem" }} justify={"space-between"}>
                                    <IconBox onClick={addCartOnClick}>
                                        <AddCart width={"55%"} height={"55%"} />
                                    </IconBox>
                                    <Col span={10} style={{ padding: 0 }} justify={"flex-end"}>
                                        <Btn types={"primary"} value={"구매하기"} width={"100%"} onClick={paymentBtnOnClick}></Btn>
                                    </Col>
                                </Col>
                                <Modal
                                    open={isCartAlertVisible}
                                    onClose={(e) => { e.stopPropagation(); cartAlertModal.close(); }}
                                >
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '45%',
                                        bgcolor: 'background.paper',
                                        boxShadow: 24,
                                        borderRadius: '5px',
                                        p: 4,
                                        overflow: 'auto',
                                        maxHeight: ' 80%',
                                        padding: "2rem 2rem 1.3rem 2rem",
                                    }}>
                                        <Row>
                                            <Col xs={0} span={12}>
                                                <Typo full size={'1.1rem'}>선택한 상품이 성공적으로 장바구니에 담겼습니다.</Typo>
                                            </Col>
                                            <Col span={12}>
                                                <Typo full size={'1.1rem'}>장바구니로 이동하시겠습니까?</Typo>
                                            </Col>
                                            <Col span={12} >
                                                <Divider marginBottom={"10px"} marginTop={'10px'}></Divider>
                                            </Col>
                                            <Col span={12} justify={'flex-end'} >
                                                <Typo size={'1.1rem'} color={'#0d7000'} weight={'500'}
                                                    style={{ marginRight: "2rem", cursor: "pointer" }}
                                                    onClick={cartAlertModal.close}>
                                                    취소
                                                </Typo>
                                                <Typo size={'1.1rem'} color={'#0d7000'} weight={'500'}
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => { navigate('/cart') }}>
                                                    확인
                                                </Typo>

                                            </Col>
                                        </Row>
                                    </Box>
                                </Modal>
                                {/* //!SECTION 장바구니 결제하기 */}

                            </Col>
                        </Row>

                    </Col>
                    {/* //!SECTION */}

                    {/* ------------------------------------------------------------------------------------------------------------------------ */}

                    {/* //SECTION - 상세정보  */}
                    <Col span={12} justify={"center"} style={{ padding: "2rem 0" }}>
                        <Image src={detailView} width={"70%"} fit={"contain"} ></Image>
                    </Col>
                    {/* //!SECTION */}



                    {/* ------------------------------------------------------------------------------------------------------------------------ */}


                    {/* //SECTION - 제품후기  */}
                    <Col span={12} justify={"center"} align={"center"} style={{ padding: "3rem 0", borderTop: "1px solid #ddd" }}>
                        <Col span={10} align={"center"}   >
                            <Row align={"center"} >
                                <Col span={6} justify={"flex-start"}>
                                    <Image src={reviewTitle} width={"15rem"}></Image>

                                </Col>
                                {/* <Col span={6} justify={"flex-end"}>
                                    <Btn size={"large"} width={"10rem"} types={"primary"} value={"글쓰기"} ></Btn>
                                </Col> */}
                            </Row>
                        </Col>

                        <Col span={10} justify={"space-between"} style={{
                            marginTop: "1rem",
                            borderTop: "1px solid rgb(51, 51, 51)"
                        }}>
                            {
                                productReview.length !== 0 ?
                                    <StarRating>
                                        <Typo color={"rgb(111, 111, 111)"} size={'1.3rem'}>만족도</Typo>
                                        <Rate disabled value={starRating} style={{ fontSize: '1.8rem' }} />
                                    </StarRating>
                                    :
                                    null
                            }

                        </Col>
                        <Col span={10} justify={"space-between"} >
                            {
                                productReview.length !== 0 ?
                                    productReview.map((review, index) => (
                                        <Row key={index} gutter={[3, 0]} style={{
                                            padding: "2rem",
                                            borderBottom: "1px solid rgb(238, 238, 238)"
                                        }} justify={"center"} align={"flex-start"}>
                                            <Col xs={12} span={3} >
                                                <Rate disabled value={review.starRating} style={{ fontSize: "1.5rem", color: "#0d7000" }} />
                                            </Col>
                                            <Col xs={12} span={9}>
                                                <Col xs={12} span={12}>
                                                    <Typo >
                                                        {review.content}
                                                    </Typo>
                                                </Col>
                                                <Col xs={8} span={12}>
                                                    {
                                                        onClickReviewImg.focus === true && onClickReviewImg.index === index ?
                                                            <Image src={require(`../../../mocks/${thumbnailImg}.jpg`)} onClick={() => reviewImgOnCLick(index)} width={"100%"} height={"fit-content"} cursor={'pointer'} />
                                                            :
                                                            <Image src={require(`../../../mocks/${thumbnailImg}.jpg`)} onClick={() => reviewImgOnCLick(index)} width={"20%"} height={"fit-content"} cursor={'pointer'} />
                                                    }
                                                </Col>
                                            </Col>
                                            <Col span={12} justify={'center'}>
                                                <Pagination count={totalReviewPageNum} onChange={reviewPagingClick} key={reviewPagingNum} defaultPage={reviewPagingNum} shape="rounded" />
                                            </Col>
                                        </Row>
                                    ))

                                    :
                                    <>
                                        <Row gutter={[2, 0]} style={{
                                            padding: "2rem",
                                        }} justify={"center"} align={"center"}>
                                            <Col span={12} justify={'center'}>
                                                <Typo size={"1.5rem"} backColor={'none'} weight={'500'} color={'#999999'}>
                                                    작성된 리뷰가 없습니다.
                                                </Typo>
                                            </Col>
                                        </Row>
                                    </>
                            }
                        </Col>
                    </Col>
                    {/* //!SECTION */}
                    {/* ------------------------------------------------------------------------------------------------------------------------ */}


                    {/* //SECTION - 제품문의  */}
                    <Col span={12} justify={"center"} style={{ padding: "1rem 0" }}>
                        <Col span={10} justify={"center"} style={{ padding: "3rem 0", }}>
                            <Col span={12} align={"center"}  >
                                <Row align={"center"} >
                                    <Col span={6} justify={"flex-start"}>
                                        <Image src={inquiryTitle} width={"15rem"}></Image>

                                    </Col>
                                    <Col span={6} justify={"flex-end"}>
                                        {/* {
                                            role === "GUEST" ?
                                                null :
                                                <Btn size={"large"} width={"100%"} types={"primary"} value={"문의 하기"} onClick={productQuestionOnClick} style={{ fontSize: "1.5rem" }} ></Btn>
                                        } */}

                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12} justify={"space-between"} style={{
                                marginTop: "2rem",
                                borderTop: "1px solid rgb(51, 51, 51)"
                            }}>
                                <Row style={{ marginTop: "2rem" }}>
                                    <Col span={12} align={"center"} justify={'center'}>
                                        <Typo size={"2rem"} backColor={'none'} weight={'bold'} >상품에 대해 궁금한 것이 있으신가요?</Typo>
                                    </Col>
                                    <Col span={12} justify={"center"} style={{ marginTop: "1rem" }}>
                                        {
                                            role === "GUEST" ?
                                                null
                                                :
                                                <Col span={6}>
                                                    <Btn width={'100%'} size={"large"} types={"primary"} value={"문의 하기"} onClick={productQuestionOnClick} style={{ fontSize: "1.5rem" }} ></Btn>
                                                </Col>
                                        }
                                    </Col>
                                    {
                                        role === "GUEST" ?
                                            <Col span={12} align={"center"} justify={'center'} style={{ marginTop: "1rem" }}>
                                                <Typo color={'#999999'} weight={'500'} size={'1.3rem'} style={{ wordBreak: 'keep-all' }}>
                                                    로그인 후 문의를 남겨주세요.
                                                </Typo>
                                            </Col>
                                            :
                                            <>
                                                <Col span={12} align={"center"} justify={'center'} style={{ marginTop: "2rem" }}>
                                                    <Typo size={"1.5rem"} backColor={'none'} weight={'500'} color={'#999999'}>
                                                        상품에 대한 문의를 남기는 공간입니다.
                                                    </Typo>
                                                </Col>
                                                <Col span={12} align={"center"} justify={'center'} style={{ marginTop: "1rem" }}>
                                                    <Typo size={"1.5rem"} backColor={'none'} weight={'500'} color={'#999999'} >
                                                        구매하시려는 상품에 대해 궁금한 점이 있으신 경우 문의 주세요.
                                                    </Typo>
                                                </Col>
                                            </>
                                    }

                                </Row>

                            </Col>
                        </Col>
                    </Col>
                    {/* //!SECTION - 제품문의*/}





                    {/* //SECTION - 문의 하기 모달 */}
                    <Modal
                        open={isQuestionModalOpen}
                        closable={'true'}
                        onClose={(e) => { e.stopPropagation(); questionModalHandler.close(); }}
                    >
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: {
                                xs: "90%",
                                sm: "80%",
                                md: "70%",
                                lg: "70%",
                                xl: "70%",
                            },
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            borderRadius: '5px',
                            p: 4,
                            overflow: 'auto',
                            maxHeight: ' 80%',
                            padding: "2rem 2rem 1.3rem 2rem",
                        }}>
                            <QuestionModalForm
                                productName={name}
                                productQuestionData={productQuestionData}
                                productQuestionFunc={productQuestionFunc}
                                questionModalHandler={questionModalHandler}
                                productQuestionSaveOnClick={productQuestionSaveOnClick}
                            />
                        </Box>
                    </Modal>
                    {/* //!SECTION - 문의 하기 모달 */}


                </Row >

            </ContentStyle>


        </>

    )


}

export default GoodsContent