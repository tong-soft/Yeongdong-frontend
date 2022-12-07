import React, { useState } from "react"
import { Row, Col } from "../../../layout"
import { useNavigate } from "react-router-dom"
import { Image, Typo } from "../../index"
import styled from "styled-components"
import mainImage from "../../../assets/images/mainImage.png"
import liveCommerceIcon from "../../../assets/icons/liveCommerceIcon.png"
import carousel_1 from "../../../assets/images/carousel_1.png"
import carousel_2 from "../../../assets/images/carousel_2.png"
import carousel_3 from "../../../assets/images/carousel_3.png"
import carousel_4 from "../../../assets/images/carousel_4.png"
import carousel_5 from "../../../assets/images/carousel_5.png"
import carouselIcon from "../../../assets/icons/carouselIcon.png"
import carouselLeft from "../../../assets/icons/carousel_left.png"
import carouselRight from "../../../assets/icons/carousel_right.png"
import exhibitImg from "../../../assets/images/test1.png"
import popularImg from "../../../assets/images/test2.png"
import sig1 from "../../../assets/images/sig1.png"
import sig2 from "../../../assets/images/sig2.png"
import sig3 from "../../../assets/images/sig3.png"
import new1 from "../../../assets/images/new1.png"
import new2 from "../../../assets/images/new2.png"
import new3 from "../../../assets/images/new3.png"
import new4 from "../../../assets/images/new4.png"

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
        width: 80px`
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
    `: null}
            ${props => props.move === "hideLeft" ? `
        left: 0%;
      opacity: 0;
      transform: translateY(50%) translateX(-50%);
      width : 80px;
    `: null}
     ${props => props.move === "hideRight" ? `
       left: 100%;
      opacity: 0;
      transform: translateY(50%) translateX(-50%);
      
        width: 80px;
    `: null}
  
     ${props => props.move === "Icon2" ? `
        z-index: 12;
        left: 50%;
        width: 30px;
        transform : translateY(120px) translateX(-460%);
        cursor : pointer;
    ` : null}

     ${props => props.move === "Icon4" ? `
        z-index: 12;
        left: 50%;
        width: 30px;
        transform : translateY(120px) translateX(360%);
        cursor : pointer;
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
        nextRightSecond: selected + 2
    };

    const MoveValue = (id) => {
        if (testObj["prevLeftSecond"] === id) return "prevLeftSecond";
        if (testObj["prev"] === id) return "prev";
        if (testObj["selected"] === id) return "selected";
        if (testObj["next"] === id) return "next";
        if (testObj["nextRightSecond"] === id) return "nextRightSecond";
        if (id < 3) return "hideLeft";
        if (id > 3) return "hideRight"
    }


    const CarouselOnClick = (myId) => {
        console.log(myId)
        if (testObj["next"] === myId) {
            setSelected(selected + 1)
        } else if (testObj["prev"] === myId) {
            setSelected(selected - 1)
        }
        console.log(testObj)
    }

    const monkOnClick = () => {
        navigate('/notice/0/monk')
    }

    return (
        <>
            <Row>
                <Col span={12}>
                    <Image src={mainImage} width={"100%"} />
                </Col>
                <Col span={12} style={{ backgroundColor: "#e9e9e9", padding: "1rem 0", }}>
                    <Row>
                        <Col span={12}>
                            <Image src={liveCommerceIcon} width={"13rem"} />

                        </Col>
                        <Col span={12} style={{ width: "100%", padding: "1rem", height: "350px" }}>
                            <CarouselWrapper>
                                <CarouselImage src={carousel_1} width={"10rem"} move={MoveValue(1)} onClick={() => { CarouselOnClick(1) }} />
                                <CarouselImage src={carousel_2} width={"10rem"} move={MoveValue(2)} onClick={() => { CarouselOnClick(2) }} />
                                <CarouselImage src={carousel_3} width={"10rem"} move={MoveValue(3)} onClick={() => { CarouselOnClick(3) }} />
                                <CarouselImage src={carousel_4} width={"10rem"} move={MoveValue(4)} onClick={() => { CarouselOnClick(4) }} />
                                <CarouselImage src={carousel_5} width={"10rem"} move={MoveValue(5)} onClick={() => { CarouselOnClick(5) }} />
                                <CarouselImage src={carouselLeft} width={"3rem"} move={"Icon2"} onClick={() => { CarouselOnClick(selected - 1) }} />
                                <CarouselImage src={carouselRight} width={"3rem"} move={"Icon4"} onClick={() => { CarouselOnClick(selected + 1) }} />
                            </CarouselWrapper>
                        </Col>
                    </Row>
                </Col>

                <Col span={12} style={{ padding: "5rem 1rem 1rem 1rem", }}>
                    <Row gutter={[10, 45]} >
                        <Col span={6}>
                            <Typo padding={"0 0 1.5rem 0"} size={"2rem"} fontFamily={"Jeju"} weight={"bold"}>기획전</Typo>
                            <Image src={exhibitImg} width={"100%"} onClick={monkOnClick}></Image>
                        </Col>
                        <Col span={6}>
                            <Typo padding={"0 0 1.5rem 0"} size={"2rem"} fontFamily={"Jeju"} weight={'bold'}>인기상품</Typo>
                            <Image src={popularImg} width={"100%"}></Image>
                        </Col>
                    </Row>
                </Col>

                <Col span={12} style={{ padding: "5rem 1rem 1rem 1rem", }}>
                    <Row gutter={[10, 45]} >
                        <Col span={12} justify={"center"} >
                            <Typo padding={"0 0 1.5rem 0"} size={"2rem"} fontFamily={"Jeju"} weight={'bold'}>영동언니의 시그니처</Typo>
                        </Col>
                        <Col span={4}>
                            <Image src={sig1} width={"100%"}></Image>
                        </Col>
                        <Col span={4}>
                            <Image src={sig2} width={"100%"}></Image>
                        </Col>
                        <Col span={4}>
                            <Image src={sig3} width={"100%"}></Image>
                        </Col>
                    </Row>
                </Col>

                <Col span={12} style={{ padding: "5rem 1rem 1rem 1rem", }}>
                    <Row gutter={[10, 45]} >
                        <Col span={12} justify={"center"} >
                            <Typo padding={"0 0 1.5rem 0"} size={"2rem"} fontFamily={"Jeju"} weight={'bold'}>따끈 따끈 신상품</Typo>
                        </Col>
                        <Col span={3}>
                            <Image src={new1} width={"100%"}></Image>
                        </Col>
                        <Col span={3}>
                            <Image src={new2} width={"100%"}></Image>
                        </Col>
                        <Col span={3}>
                            <Image src={new3} width={"100%"}></Image>
                        </Col>
                        <Col span={3}>
                            <Image src={new4} width={"100%"}></Image>
                        </Col>
                    </Row>
                </Col>

                <Col span={12} style={{ padding: "5rem 1rem 1rem 1rem", }}>
                    <Row gutter={[10, 45]} >
                        <Col span={12} justify={"center"} >
                            <Typo padding={"0 0 1.5rem 0"} size={"2.5rem"} fontFamily={"Jeju"} weight={'bold'}>전체상품</Typo>
                        </Col>
                        <Col span={3}>
                            <Image src={new1} width={"100%"}></Image>
                        </Col>
                        <Col span={3}>
                            <Image src={new2} width={"100%"}></Image>
                        </Col>
                        <Col span={3}>
                            <Image src={new3} width={"100%"}></Image>
                        </Col>
                        <Col span={3}>
                            <Image src={new4} width={"100%"}></Image>
                        </Col>
                        <Col span={3}>
                            <Image src={new1} width={"100%"}></Image>
                        </Col>
                        <Col span={3}>
                            <Image src={new2} width={"100%"}></Image>
                        </Col>
                        <Col span={3}>
                            <Image src={new3} width={"100%"}></Image>
                        </Col>
                        <Col span={3}>
                            <Image src={new4} width={"100%"}></Image>
                        </Col>
                        <Col span={12} justify={"flex-end"} >
                            <Typo cursor={"pointer"}>더보기 ⟫ </Typo>
                        </Col>
                    </Row>
                </Col>


            </Row >


        </>

    )


}

export default HomeContent