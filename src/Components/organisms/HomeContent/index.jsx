import React, { useState } from "react"
import { Row, Col } from "../../../layout"
import { useNavigate } from "react-router-dom"
import { Image, Typo, GoodsImg } from "../../index"
import styled from "styled-components"
import mainImage from "../../../assets/images/mainImage.png"
import liveCommerceIcon from "../../../assets/icons/liveCommerceIcon.png"
import carousel_1 from "../../../assets/images/carousel_1.png"
import carousel_2 from "../../../assets/images/carousel_2.png"
import carousel_3 from "../../../assets/images/carousel_3.png"
import carousel_4 from "../../../assets/images/carousel_4.png"
import carousel_5 from "../../../assets/images/carousel_5.png"


import monkLists from "../../../mocks/lists"


import { Carousel } from 'antd';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const CarouselWrapper = styled.div`
position: relative;
  height:  0px;
  width : 100%;

  transform: translateY(-50%);
  overflow: inherit;
  /* transition : none; */
  transition: transform 1s, left 1s, opacity 1s, z-index 0s;
    opacity: 1;
    transform: translateY(-50%);

`
const CarouselImage = styled.img.attrs((props) => ({
    src: props.src
}))`
    top : 50%;
    position: absolute;
    transition: all 1s, left 1s, opacity 1s, z-index 0s;
    width: 150px;
    height : auto;
 
    opacity: 1;
    ${props => props.move === "prevLeftSecond" ? `
        z-index: 4;
        left: 15%;
        transform: translateY(50%) translateX(-50%);
        opacity: .7;
        width: 80px;
        cursor : pointer;
        `
        : null}
    ${props => props.move === "prev" ? `
        z-index: 5;
        left: 30%;
        transform: translateY(50px) translateX(-50%);
        width: 100px;
        cursor : pointer;
    `: null}
   

      ${props => props.move === "selected" ? `
        z-index: 10;
        left: 50%;
        transform: translateY(0px) translateX(-50%);
        `
        : null}
     
        ${props => props.move === "next" ? `
        z-index: 5;
      left: 70%;
      transform: translateY(50px) translateX(-50%);
      width : 100px;
      cursor : pointer;
      `: null}
        ${props => props.move === "nextRightSecond" ? `
        z-index: 4;
      left: 85%;
      transform: translateY(50%) translateX(-50%);
      opacity: .7;
      width: 80px;
      cursor : pointer;
    `: null}
            ${props => props.move === "hideLeft" ? `
        left: 0%;
        opacity: 0;
        transform: translateY(50%) translateX(-50%);
        width : 80px;
        cursor : pointer;
    `: null}
          ${props => props.move === "hideLeftSec" ? `
        left: 0%;
        opacity: 0;
        transform: translateY(50%) translateX(-50%);
        width : 80px;
        cursor : pointer;
        `: null}

    ${props => props.move === "hideRight" ? `
        left: 100%;
        opacity: 0;
        transform: translateY(50%) translateX(-50%);
        cursor : pointer;
        width: 80px;
    `: null}
   ${props => props.move === "hideRightSec" ? `
        left: 100%;
        opacity: 0;
        transform: translateY(50%) translateX(-50%);
        cursor : pointer;
        width: 80px;
    `: null}
`

//NOTE Carousel CSS
const CarouselCounters = styled.div`
   top : 50%;
   transform : translateY(2000%) translateX(-50%);
    position: absolute;
    transition: all 1s, left 1s, opacity 1s, z-index 0s;
    opacity: 1;
    border-radius : 100%;
    border : 2px solid rgb(13, 112, 0, 0.8);
    z-index: 112;
    left: 50%;
    width : 15px;
    height : 15px;
    cursor : pointer;

    ${props => props.count === 1 ? `
        // transform : translateY(2000%) translateX(-310%);
        margin : 0 -40px ;
        ` : null}
     ${props => props.count === 2 ? `
        // transform : translateY(2000%) translateX(-180%);
        margin : 0 -20px ;

        ` : null}
     ${props => props.count === 3 ? `
        // transform : translateY(2000%) translateX(-50%);
        

        ` : null}
     ${props => props.count === 4 ? `
        // transform : translateY(2000%) translateX(80%);
        margin : 0 20px;
        ` : null}
    ${props => props.count === 5 ? `
        // transform : translateY(2000%) translateX(210%);
        margin : 0 40px;
        ` : null}
    ${props => props.actived === true ? `
        background: rgb(13, 112, 0);
    ` : null}

`


const HomeContent = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(3);

    const hotItemArr = monkLists.slice(0, 2);
    const signatureArr = monkLists.slice(0, 3);
    const newArr = monkLists.slice(6, 10);
    const allArr = monkLists.slice(0, 8)

    let testObj = {
        prevLeftSecond: selected - 2,
        prev: selected - 1,
        selected: selected,
        next: selected + 1,
        nextRightSecond: selected + 2,
        hideLeft: selected - 3,
        hideLeftSec: selected - 4,
        hideRight: selected + 3,
        hideRightSec: selected + 4,
    };

    const MoveValue = (id) => {
        if (testObj["prevLeftSecond"] === id) return "prevLeftSecond";
        if (testObj["prev"] === id) return "prev";
        if (testObj["selected"] === id) return "selected";
        if (testObj["next"] === id) return "next";
        if (testObj["nextRightSecond"] === id) return "nextRightSecond";
        if (testObj["hideLeft"] === id) return "hideLeft";
        if (testObj["hideLeftSec"] === id) return "hideLeftSec";
        if (testObj["hideRight"] === id) return "hideRight";
        if (testObj["hideRightSec"] === id) return "hideRightSec";

    }


    const CarouselOnClick = (myId) => {
        if (testObj["next"] === myId) {
            setSelected(selected + 1)
        } else if (testObj["nextRightSecond"] === myId) {
            setSelected(selected + 2)
        } else if (testObj["prev"] === myId) {
            setSelected(selected - 1)
        } else if (testObj["prevLeftSecond"] === myId) {
            setSelected(selected - 2)
        }
        else if (testObj["hideLeft"] === myId) {
            setSelected(selected - 3)
        }
        else if (testObj["hideLeftSec"] === myId) {
            setSelected(selected - 4)
        }
        else if (testObj["hideRight"] === myId) {
            setSelected(selected + 3)
        }
        else if (testObj["hideRightSec"] === myId) {
            setSelected(selected + 4)
        }
    }

    const monkOnClick = (id) => {
        navigate(`/goods/${id}/monk`)
    }



    return (
        <>
            <Carousel autoplay>
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
            <Row justify={"center"}>
                <Col span={12}>


                </Col>
                <Col span={12} style={{ backgroundColor: "#e9e9e9", padding: "1rem 0", }}>
                    <Row>
                        <Col span={12}>
                            <Image src={liveCommerceIcon} width={"13rem"} />

                        </Col>
                        <Col span={12} style={{ width: "100%", padding: "1rem", height: "350px" }}>
                            {/*//NOTE Carousel */}
                            <CarouselWrapper>
                                <CarouselImage src={carousel_1} width={"10rem"} move={MoveValue(1)} onClick={() => { CarouselOnClick(1) }} />
                                <CarouselImage src={carousel_2} width={"10rem"} move={MoveValue(2)} onClick={() => { CarouselOnClick(2) }} />
                                <CarouselImage src={carousel_3} width={"10rem"} move={MoveValue(3)} onClick={() => { CarouselOnClick(3) }} />
                                <CarouselImage src={carousel_4} width={"10rem"} move={MoveValue(4)} onClick={() => { CarouselOnClick(4) }} />
                                <CarouselImage src={carousel_5} width={"10rem"} move={MoveValue(5)} onClick={() => { CarouselOnClick(5) }} />
                                <CarouselCounters count={1} actived={selected === 1} onClick={() => { CarouselOnClick(1) }} />
                                <CarouselCounters count={2} actived={selected === 2} onClick={() => { CarouselOnClick(2) }} />
                                <CarouselCounters count={3} actived={selected === 3} onClick={() => { CarouselOnClick(3) }} />
                                <CarouselCounters count={4} actived={selected === 4} onClick={() => { CarouselOnClick(4) }} />
                                <CarouselCounters count={5} actived={selected === 5} onClick={() => { CarouselOnClick(5) }} />
                            </CarouselWrapper>
                        </Col>
                    </Row>
                </Col>

                {/* SECTION 내용 전체 */}
                <Col xs={11} sm={10} md={10} lg={8} xl={8} xxl={8} span={8} justify={"center"} >
                    {/* SECTION  인기상품 - hot Item*/}
                    <Col span={12} justify={"center"} style={{ padding: "5rem 1rem 1rem 1rem", }}>
                        <Row justify={"center"}>
                            <Col span={12} justify={"center"} algin={"center"} style={{ padding: "5rem 0 3rem 0" }}>
                                <Typo cursor={"pointer"} fontFamily={'nixgon'} size={"2rem"}>인기상품&nbsp;{">"}</Typo>
                            </Col>

                            {
                                hotItemArr.map((lists, index) => {
                                    return (

                                        <Col key={index} span={6} justify={"center"} align={"center"} style={{ padding: "1.5rem 1rem" }} >
                                            <div
                                                onClick={() => { monkOnClick(lists.id) }}
                                                key={lists.id}

                                                style={{
                                                    display: "flex",
                                                    boxSizing: 'border-box',
                                                    cursor: "pointer"
                                                }}>
                                                <Row justify={"center"} align={"center"}>

                                                    <Col span={12} justify={"center"} align={"center"}>
                                                        <GoodsImg imgSrc={lists.img} height={"15rem"} ></GoodsImg>

                                                    </Col>
                                                    <Col span={12} justify={"flex-start"} align={"center"} style={{ marginTop: "1rem", }}>
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
                                            </div>
                                        </Col>


                                    )
                                })
                            }
                        </Row>
                    </Col>
                    {/* //!SECTION */}

                    {/* SECTION 시그니처 - signature */}
                    <Col span={12} style={{ padding: "5rem 1rem 1rem 1rem", }}>
                        <Row>
                            <Col span={12} justify={"center"} style={{ padding: "5rem 0 3rem 0" }} >
                                <Typo cursor={"pointer"} size={"2rem"} fontFamily={"nixgon"}>영동언니의 시그니처&nbsp;{">"}</Typo>
                            </Col>
                            {
                                signatureArr.map((lists) => {
                                    return (
                                        <Col key={lists.id} span={4} justify={"center"} align={"center"} style={{ padding: "1.5rem 1rem" }} >
                                            <Row justify={"center"} align={"center"}>
                                                <Col span={12} justify={"center"} align={"center"}>
                                                    <GoodsImg imgSrc={lists.img} ></GoodsImg>
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
                            }
                        </Row>
                    </Col>
                    {/* //!SECTION */}

                    {/* SECTION 신상품 - newItem*/}
                    <Col span={12} style={{ padding: "5rem 1rem 1rem 1rem", }}>
                        <Row >
                            <Col span={12} justify={"center"} style={{ padding: "5rem 0 3rem 0" }} >
                                <Typo cursor={"pointer"} size={"2rem"} fontFamily={"nixgon"}>따끈따끈 신상품&nbsp;{">"}</Typo>
                            </Col>

                            {
                                newArr.map((lists) => {
                                    return (
                                        <Col key={lists.id}
                                            xs={6} sm={3} md={3} lg={3} xl={3} xxl={3} span={3}
                                            justify={"center"} align={"center"} style={{ padding: "1.5rem 1rem" }} >
                                            <Row justify={"center"} align={"center"}>
                                                <Col span={12} justify={"center"} align={"center"}>
                                                    <GoodsImg imgSrc={lists.img} ></GoodsImg>
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
                            }
                        </Row>
                    </Col>
                    {/* //!SECTION */}

                    {/* SECTION 전체상품*/}

                    <Col span={12} style={{ padding: "5rem 1rem 1rem 1rem", }}>
                        <Row  >
                            <Col span={12} justify={"center"} style={{ padding: "5rem 0 3rem 0" }} >
                                <Typo cursor={"pointer"} size={"2rem"} fontFamily={"nixgon"} onClick={() => navigate('/collections')}  >전체상품&nbsp;{">"} </Typo>
                            </Col>
                            {
                                allArr.map((lists) => {
                                    return (
                                        <Col key={lists.id}
                                            xs={6} sm={3} md={3} lg={3} xl={3} xxl={3} span={3}
                                            justify={"center"} align={"center"} style={{ padding: "1.5rem 1rem" }} >
                                            <Row justify={"center"} align={"center"}>
                                                <Col span={12} justify={"center"} align={"center"}>
                                                    <GoodsImg imgSrc={lists.img} ></GoodsImg>
                                                </Col>
                                                <Col span={12} justify={"flex-start"} align={"center"} style={{ marginTop: "1rem" }}>
                                                    <Typo fontFamily={'Noto Sans KR'} size={"1rem"} weight={"normal"} >{lists.title}</Typo>
                                                </Col>

                                                {
                                                    (lists.discountRate !== 0) ?
                                                        <Col span={12} justify={"flex-start"} align={"center"} style={{ marginTop: "0.8rem", }}>
                                                            <Typo color={"#f03f45"} size={"1.1rem"} fontFamily={'Noto Sans KR'} weight={'700'}>{lists.discountRate}%</Typo>
                                                            <ArrowDownwardIcon style={{ color: "#f03f45", fontSize: "1.2rem", marginRight: "6px" }}></ArrowDownwardIcon>
                                                            <Typo color={"#333333"} size={"1.1rem"} weight={"800"} >{lists.discountPrice}원</Typo>
                                                        </Col>
                                                        :
                                                        <Col span={12} justify={"flex-start"} align={"center"} style={{ marginTop: "0.8rem", }}>
                                                            <Typo color={"#333333"} size={"1.1rem"} weight={"800"} >{lists.discountPrice}원</Typo>
                                                        </Col>
                                                }
                                                <Col span={12} justify={"flex-start"} align={"center"} style={{ marginTop: "1rem" }}>
                                                    <Typo fontFamily={'Noto Sans KR'} size={"1rem"} color={"#999999"} >{lists.desc}</Typo>
                                                </Col>

                                            </Row>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                    {/* //!SECTION */}

                </Col>
                {/* //!SECTION 내용 전체 */}

            </Row >


        </>

    )


}

export default HomeContent