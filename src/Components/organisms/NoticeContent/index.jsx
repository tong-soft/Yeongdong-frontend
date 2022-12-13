import React from "react"
import { Row, Col, ContentStyle } from "../../../layout"
import { Image, Typo, NumberField, Btn } from "../../index"
import { useParams } from "react-router-dom"
import monkDetailProduct from "../../../assets/images/monkDetailProduct.png"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import monkPrice from "../../../assets/images/monkPrice.png"
import monkRealPrice from "../../../assets/images/monkRealPrice.png"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import detailView from "../../../assets/images/detailView.png"
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import reviewTitle from "../../../assets/images/reviewTitle.png"
import inquiryTitle from "../../../assets/images/inquiryTitle.png"


const HomeContent = ({ role, productOptions, selectOption, userProductObj, selectHandleFunc, amountHandleFunc,
    amountIconHandleFunc, productDeleteHandleFunc
}) => {

    const { id, product } = useParams();
    const productKeys = Object.keys(userProductObj)
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
                    {/* //SECTION - 장바구니 구매하기 개수 가격  */}

                    <Col span={12} >
                        <Row gutter={[10, 10]} align={"stretch"}>
                            <Col span={6}>
                                <Image src={monkDetailProduct} width={"100%"} height={"fit-content"} />
                            </Col>
                            <Col span={6} justify={"center"}>
                                <Col span={12} >
                                    <Typo fontFamily={"nixgon"} size={"3rem"} weight={"bold"}>
                                        [영동언니]도자기 미니 흔들화분 무드등 티라이트 홀더
                                    </Typo>
                                </Col>
                                <Col span={12} align={"center"}>
                                    <Row align={"center"}>
                                        <Col span={2} justify={"flex-start"} align={"center"}>
                                            <Typo fontFamily={"nixgon"} color={"#e64937"} size={"2.8rem"}>
                                                50%
                                            </Typo>
                                        </Col>
                                        <Col span={9} justify={"flex-end"} align={"center"}>
                                            <Image src={monkRealPrice} width={"10rem"}></Image>
                                            <Image src={monkPrice} width={"10rem"}></Image>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={12}>
                                    <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="normal">
                                        <Select

                                            displayEmpty
                                            value={selectOption}
                                            onChange={selectHandleFunc}
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
                                                >
                                                    {product}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Col>

                                <Col span={12}>
                                    {
                                        (productKeys) ?
                                            productKeys.map((key) => (
                                                <Row key={key} gutter={[5, 0]} align={"center"} style={{ backgroundColor: "#f3f3f3", padding: "10px 1.5rem", marginTop: "10px" }}>
                                                    <Col span={12} justify={"space-between"} style={{ borderBottom: "1px solid #979797", paddingBottom: "12px" }} align={"center"}>
                                                        <Typo padding={"0 0 0 1rem"} size={"1.3rem"} weight={"bold"}>
                                                            {key}
                                                        </Typo>
                                                        <ClearIcon onClick={() => productDeleteHandleFunc(key)} style={{ fontSize: "2rem" }} />


                                                    </Col>
                                                    <Col span={6} justify={"flex-start"} align={"center"} >
                                                        <RemoveCircleIcon style={{ fontSize: "2.5rem", color: "#505050", cursor: "pointer" }}
                                                            onClick={() => (amountIconHandleFunc.minus(key))} />
                                                        <NumberField value={userProductObj[key]} onChange={(e) => (amountHandleFunc(e, key))} />
                                                        <AddCircleIcon style={{ fontSize: "2.5rem", color: "#505050", cursor: "pointer" }}
                                                            onClick={() => (amountIconHandleFunc.plus(key))} />
                                                    </Col>
                                                    <Col span={6} justify={"flex-end"} align={"center"}>
                                                        <Typo size={"2rem"} fontFamily={"Jeju"}>10000원</Typo>
                                                    </Col>
                                                </Row>

                                            ))
                                            : null
                                    }
                                </Col>
                                <Col span={12} style={{ paddingTop: "0px" }}>
                                    <Typo size={"1.2rem"} fontFamily={"nixgon"}>택배배송 | 3000원</Typo>
                                    <Typo size={"1.2rem"} fontFamily={"nixgon"} color={"#db291f"}>(주문시 결제)</Typo>
                                </Col>
                            </Col>
                        </Row>

                    </Col>
                    {/* //!SECTION */}
                    {/* //SECTION - 상세정보  */}
                    <Col span={12} justify={"center"} style={{ padding: "2rem 0" }}>
                        <Image src={detailView} width={"90%"}></Image>
                    </Col>
                    {/* //!SECTION */}
                    {/* //SECTION - 제품후기  */}
                    <Col span={12} justify={"center"} align={"center"} style={{ padding: "2rem 0", borderTop: "#ededed 3px solid " }}>
                        <Col span={10} align={"center"}  >
                            <Row align={"center"} >
                                <Col span={6} justify={"flex-start"}>
                                    <Image src={reviewTitle} width={"15rem"}></Image>

                                </Col>
                                <Col span={6} justify={"flex-end"}>
                                    <Btn size={"large"} minWidth={"10rem"} types={"primary"} value={"글쓰기"} ></Btn>

                                </Col>
                            </Row>
                        </Col>
                        <Col span={10} justify={"space-between"} style={{
                            marginTop: "34px",
                            borderTop: "1px solid rgb(51, 51, 51)"
                        }}>
                            {
                                <>
                                    <Row style={{
                                        padding: "2rem",
                                        borderBottom: "1px solid rgb(238, 238, 238)"
                                    }} justify={"center"} align={"center"}>
                                        <Col span={3}>
                                            <Typo color={"rgb(153, 153, 153)"}>TEST</Typo>
                                        </Col>
                                        <Col span={9}>
                                            <Typo >
                                                테스트중입니다...테스트중입니다...테스트중입니다...테스트중입니다...테스트중입니다...테스트중입니다...테스트중입니다...테스트중입니다...테스트중입니다...
                                            </Typo>
                                        </Col>
                                    </Row>

                                    <Row style={{
                                        padding: "2rem",
                                        borderBottom: "1px solid rgb(238, 238, 238)"
                                    }} justify={"center"} align={"center"}>
                                        <Col span={3}>
                                            <Typo color={"rgb(153, 153, 153)"}>TEST</Typo>
                                        </Col>
                                        <Col span={9}>
                                            <Typo >테스트중입니다...</Typo>
                                        </Col>
                                    </Row>
                                </>
                            }
                        </Col>
                    </Col>
                    {/* //!SECTION */}
                    {/* //SECTION - 제품문의  */}
                    <Col span={12} justify={"center"} style={{ padding: "2rem 0" }}>
                        <Col span={12} justify={"center"} style={{ padding: "2rem 0", borderTop: "#ededed 3px solid " }}>
                            <Col span={10} align={"center"}  >
                                <Row align={"center"} >
                                    <Col span={6} justify={"flex-start"}>
                                        <Image src={inquiryTitle} width={"15rem"}></Image>

                                    </Col>
                                    <Col span={6} justify={"flex-end"}>
                                        <Btn size={"large"} minWidth={"10rem"} types={"primary"} value={"글쓰기"} ></Btn>

                                    </Col>
                                </Row>
                            </Col>
                            <Col span={10} justify={"space-between"} style={{
                                marginTop: "34px",
                                borderTop: "1px solid rgb(51, 51, 51)"
                            }}>
                                {
                                    <>
                                        <Row style={{
                                            padding: "2rem",
                                            borderBottom: "1px solid rgb(238, 238, 238)"
                                        }} justify={"center"} align={"center"}>
                                            <Col span={3}>
                                                <Typo color={"rgb(153, 153, 153)"}>TEST</Typo>
                                            </Col>
                                            <Col span={9}>
                                                <Typo >
                                                    테스트중입니다...테스트중입니다...테스트중입니다...테스트중입니다...테스트중입니다...테스트중입니다...테스트중입니다...테스트중입니다...테스트중입니다...
                                                </Typo>
                                            </Col>
                                        </Row>

                                        <Row style={{
                                            padding: "2rem",
                                            borderBottom: "1px solid rgb(238, 238, 238)"
                                        }} justify={"center"} align={"center"}>
                                            <Col span={3}>
                                                <Typo color={"rgb(153, 153, 153)"}>TEST</Typo>
                                            </Col>
                                            <Col span={9}>
                                                <Typo >테스트중입니다...</Typo>
                                            </Col>
                                        </Row>
                                    </>
                                }
                            </Col>
                        </Col>
                    </Col>
                    {/* //!SECTION */}
                </Row >

            </ContentStyle>


        </>

    )


}

export default HomeContent