import React from "react"
import { Row, Col, ContentStyle } from "../../../layout"
import { Image, Typo, Btn } from "../../index"
import counselingExp from "../../../assets/images/counselingExp.png"
import inquiryIcon from "../../../assets/icons/inquiryIcon.png"
import announceIcon from "../../../assets/icons/announceIcon.png"
import { Table, } from 'antd';
import { useNavigate, useParams } from "react-router-dom"
const inquirySource = [
    {
        key: '1',
        title: '1대1문의입니다.',
        userName: "홍길동",
        date: '2023.01.02',
    },
    {
        key: '2',
        title: '1대1문의입니다.',
        userName: "홍길동",
        date: '2023.01.03',
    },
];

const announceSource = [
    {
        key: '1',
        title: '공지사항입니다.',
        userName: "관리자",
        date: '2023.01.02',
    },
    {
        key: '2',
        title: '공지사항입니다.',
        userName: "관리자",
        date: '2023.01.03',
    },
];

const columns = [
    {
        title: '제목',
        dataIndex: 'title',
        key: ' title',
        width: "50%"

    },
    {
        title: '작성자',
        dataIndex: 'userName',
        key: '작성자',
        width: "25%"
    },
    {
        title: '작성일',
        dataIndex: 'date',
        key: '작성일',
        width: "25%"

    },
];


const HomeContent = ({
    role,
}) => {

    const navigate = useNavigate();

    const { service } = useParams();

    return (
        <ContentStyle>
            <Row justify={"center"} align={"center"} >
                {/* //SECTION -  */}
                {/* //!SECTION*/}
                <Col span={8} justify={"center"} align={"center"} style={{ marginTop: "50px" }}>
                    <Row justify={"center"} align={"center"} >
                        <Col span={12} style={{ borderBottom: "3px solid #ededed", padding: "1rem 0" }}>
                            <Typo size={"3.5rem"} fontFamily={'nixgon'} >상담시간</Typo>
                        </Col>
                        <Col span={12} justify={"center"} align={"center"} style={{ padding: "2rem 0" }}>
                            <Image src={counselingExp} alt={"Counseling Time"} width={"80%"} />
                        </Col>
                    </Row>
                </Col>
                <Col span={8} style={{ borderTop: "3px solid #ededed", padding: "3rem 0" }}>
                    <Row>
                        {/* <Col span={3}>
                            <Btn value={"공지사항"} size={"large"} width={"80%"} onClick={() => navigate("/servicecenter")} />
                            <div style={{ marginTop: "1rem", width: "100%" }}></div>
                            <Btn value={"1:1문의"} size={"large"} width={"80%"} onClick={() => navigate("/servicecenter/inquiry")} />
                        </Col> */}
                        <Col span={12}>
                            <Col span={12} style={{ padding: '1rem 0', transitionDuration: "0s" }} align={"center"}>
                                {
                                    service === "inquiry" ?
                                        <>
                                            <Image src={inquiryIcon} width={"4rem"} height={"4rem"} />
                                            <Typo padding={"0 0 0 5px"} fontFamily={'nixgon'} size={"2rem"} >1:1 문의</Typo>
                                        </>
                                        :
                                        <>
                                            <Image src={announceIcon} width={"4rem"} height={"4rem"} />
                                            <Typo padding={"0 0 0 5px"} fontFamily={'nixgon'} size={"2rem"} >공지사항</Typo>
                                        </>
                                }
                            </Col>

                            <Col span={12}>
                                {
                                    service === "inquiry" ?
                                        <Table
                                            style={{ width: "100%" }}
                                            columns={columns}
                                            pagination={{
                                                position: ["bottomCenter"],
                                            }}
                                            dataSource={inquirySource}
                                        />
                                        :
                                        <Table
                                            style={{ width: "100%" }}
                                            columns={columns}
                                            pagination={{
                                                position: ["bottomCenter"],
                                            }}
                                            dataSource={announceSource}
                                        />
                                }
                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </ContentStyle>
    )


}

export default HomeContent