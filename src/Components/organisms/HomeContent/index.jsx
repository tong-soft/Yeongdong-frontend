import React, { useState } from "react"
import { Row, Col } from "../../../layout"
import { useNavigate } from "react-router-dom"
import { Image, Typo } from "../../index"
import styled from "styled-components"
import mainImage from "../../../assets/images/mainImage.png"
import testImg from "../../../assets/images/testImg.jpeg"
import liveCommerceIcon from "../../../assets/icons/liveCommerceIcon.png"
import carousel_1 from "../../../assets/images/carousel_1.png"
import carousel_2 from "../../../assets/images/carousel_2.png"
import carousel_3 from "../../../assets/images/carousel_3.png"
import carousel_4 from "../../../assets/images/carousel_4.png"
import carousel_5 from "../../../assets/images/carousel_5.png"
import exhibitImg from "../../../assets/images/test1.png"
import popularImg from "../../../assets/images/test2.png"
import sig1 from "../../../assets/images/sig1.png"
import sig2 from "../../../assets/images/sig2.png"
import sig3 from "../../../assets/images/sig3.png"
import new1 from "../../../assets/images/new1.png"
import new2 from "../../../assets/images/new2.png"
import new3 from "../../../assets/images/new3.png"
import new4 from "../../../assets/images/new4.png"
import { Carousel } from 'antd';
import { flexbox } from "@mui/system"


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
    transition: transform 1s, left 1s, opacity 1s, z-index 0s;
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
    border : 2px solid rgba(6, 64, 68, 0.8);
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
        background: rgba(6,64,68,1);
    ` : null}

`




const HomeContent = () => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState(3)
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
        console.log(myId)
        if (testObj["next"] === myId) {
            setSelected(selected + 1)
        } else if (testObj["nextRightSecond"] === myId) {
            setSelected(selected + 2)
            console.log(testObj)
        } else if (testObj["prev"] === myId) {
            setSelected(selected - 1)
        } else if (testObj["prevLeftSecond"] === myId) {
            setSelected(selected - 2)
            console.log(testObj)
        }
        else if (testObj["hideLeft"] === myId) {
            setSelected(selected - 3)
            console.log(testObj)
        }
        else if (testObj["hideLeftSec"] === myId) {
            setSelected(selected - 4)
            console.log(testObj)
        }
        else if (testObj["hideRight"] === myId) {
            setSelected(selected + 3)
            console.log(testObj)
        }
        else if (testObj["hideRightSec"] === myId) {
            setSelected(selected + 4)
            console.log(testObj)
        }
    }

    const monkOnClick = () => {
        navigate('/goods/0/monk')
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
                <Col span={9} justify={"center"} >
                    {/* SECTION  인기상품*/}
                    <Col span={12} style={{ padding: "5rem 1rem 1rem 1rem", }}>
                        <Row>
                            <Col span={12} justify={"center"} algin={"center"} style={{ padding: "5rem 0 3rem 0" }}>
                                <Typo cursor={"pointer"} fontFamily={'nixgon'} size={"2rem"}>인기상품&nbsp;{">"}</Typo>
                            </Col>
                            <Col span={6}>
                                <Image src={exhibitImg} width={"90%"} onClick={monkOnClick} cursor={"pointer"}></Image>
                            </Col>
                            <Col span={6}>
                                <Image src={popularImg} width={"90%"}></Image>
                            </Col>
                        </Row>
                    </Col>
                    {/* //!SECTION */}

                    {/* SECTION 영동언니의 시그니처 */}
                    <Col span={12} style={{ padding: "5rem 1rem 1rem 1rem", }}>
                        <Row>
                            <Col span={12} justify={"center"} style={{ padding: "5rem 0 3rem 0" }} >
                                <Typo cursor={"pointer"} size={"2rem"} fontFamily={"nixgon"}>영동언니의 시그니처&nbsp;{">"}</Typo>
                            </Col>
                            <Col span={4}>
                                <Image src={sig1} width={"90%"}></Image>
                            </Col>
                            <Col span={4}>
                                <Image src={sig2} width={"90%"}></Image>
                            </Col>
                            <Col span={4}>
                                <Image src={sig3} width={"90%"}></Image>
                            </Col>
                        </Row>
                    </Col>
                    {/* //!SECTION */}

                    {/* SECTION 따끈따끈 신상품*/}
                    <Col span={12} style={{ padding: "5rem 1rem 1rem 1rem", }}>
                        <Row >
                            <Col span={12} justify={"center"} style={{ padding: "5rem 0 3rem 0" }} >
                                <Typo cursor={"pointer"} size={"2rem"} fontFamily={"nixgon"}>따끈따끈 신상품&nbsp;{">"}</Typo>
                            </Col>
                            <Col span={3} >
                                <Image src={new1} width={"90%"}></Image>
                            </Col>
                            <Col span={3}>
                                <Image src={new2} width={"90%"} ></Image>
                            </Col>
                            <Col span={3}>
                                <Image src={new3} width={"90%"}></Image>
                            </Col>
                            <Col span={3}>
                                <Image src={new4} width={"90%"}></Image>
                            </Col>
                        </Row>
                    </Col>
                    {/* //!SECTION */}

                    {/* SECTION 전체상품*/}

                    <Col span={12} style={{ padding: "5rem 1rem 1rem 1rem", }}>
                        <Row  >
                            <Col span={12} justify={"center"} style={{ padding: "5rem 0 3rem 0" }} >
                                <Typo cursor={"pointer"} size={"2rem"} fontFamily={"nixgon"}>전체상품&nbsp;{">"}</Typo>
                            </Col>
                            <Col span={12}>
                                <Col span={3}>
                                    <Image src={new1} width={"90%"}></Image>
                                </Col>
                                <Col span={3}>
                                    <Image src={new2} width={"90%"}></Image>
                                </Col>
                                <Col span={3}>
                                    <Image src={new3} width={"90%"}></Image>
                                </Col>
                                <Col span={3}>
                                    <Image src={new4} width={"90%"}></Image>
                                </Col>
                            </Col>
                            <Col span={12} style={{ marginTop: "2rem" }} >
                                <Col span={3}>
                                    <Image src={new1} width={"90%"}></Image>
                                </Col>
                                <Col span={3}>
                                    <Image src={new2} width={"90%"}></Image>
                                </Col>
                                <Col span={3}>
                                    <Image src={new3} width={"90%"}></Image>
                                </Col>
                                <Col span={3}>
                                    <Image src={new4} width={"90%"}></Image>
                                </Col>
                            </Col>
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