/**
 * @Author : chaeeun
 * @Date : 2020-12-30 18:37:07
 * @Last Modified by: euncherry
 * @Last Modified time: 2021-05-24 08:26:33
 */

import React from 'react'
import styled from 'styled-components'
import Col from '../../../layout/Grid/Column'
import Row from '../../../layout/Grid/Row'

const ModalWrapper = styled.div`
 display : ${props => (props.visible) ? `flex` : `none`};
 justify-content: center;
 align-items: center;
 flex-direction : column;
 top:0;
 right : 0;
 left : 0;
 bottom : 0;
 position : fixed;
 
 background-color: rgba(0, 0, 0,0.12);
 z-index : ${props => (props.zIndex) - 1 || 100};
`



const ModalContainer = styled.div`
 display : ${props => (props.visible) ? `flex` : `none`};
 flex-direction : column;
 justify-content: center;
 align-items: center;
 width : 100%; 
 height : auto;
 max-height : 60%;
 background-color: white;
 border-radius: 3px;
// antd
 position : relative;
 margin : auto auto;
z-index : ${props => (props.zIndex) || null};
`
const CloseButton = styled.button`
position : absolute;
top : 0;
right : 0;
padding : 0;

background-color : rgba(0,0,0,0);
border : 0;
outline : 0;
cursor : pointer;
display :block;
width : 50px;
height : 50px;

`

const ModalHeader = styled.div`
display : ${props => (props.headerClose) ? `none` : `flex`};
padding: 16px 24px;
color: rgba(0,0,0,.85);
background: #fff;
border-bottom: 1px solid #f0f0f0;
border-radius: 2px 2px 0 0;
line-height: 22px;
font-size: 16px;
font-weight: 600;
width : 100%;
box-sizing : border-box;
min-height : 52px;
`


const ModalContent = styled.div`
padding: 24px;
width : inherit;
box-sizing : border-box;

`


const stopBubbling = (e) => {
    e.stopPropagation()
}

/**
 * @param title - modal title
 * @param visible true - open Modal / false - close Modal
 * @param closable true - 닫기 버튼 있음 / false - 닫기버튼 없음
 * @param maskClosable true - 배경 클릭시 모달 꺼짐 / false - 배경 클릭시 모달 안꺼짐
 * @param onClose - 모달 닫는 함수넣어주기 
 * @param size - 가로 크기 조절 
 * @param children 컴포넌트 테그 사이에 값을 조회
 * @see antD Modal (사용법 antD 참조)
 */
const Modal = ({ zIndex, headerClose, title, visible, closable, maskClosable,
    onClose, children, size, xs, sm, md, lg, xl, xxl }) => {



    return (
        <>
            <ModalWrapper
                zIndex={zIndex}
                visible={visible}
                onClick={maskClosable ? onClose : null}
            >
                <Row justify="center">
                    <Col span={size} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>

                        <ModalContainer
                            visible={visible}
                            onClick={stopBubbling}
                        >
                            {closable && <CloseButton onClick={onClose}>< i className="fas fa-times" /></CloseButton>}

                            <ModalHeader headerClose={headerClose}>
                                {title}
                            </ModalHeader>

                            <ModalContent>
                                {children}
                            </ModalContent>
                        </ModalContainer>
                    </Col>
                </Row>

            </ModalWrapper>
        </>
    )
}

export default Modal;