import React from "react"
import styled from "styled-components"


const ButtonComponent = styled.input.attrs(props => ({ type: "button" }))`
    ${props => {
        switch (props.size) {
            case "small":
                return `
                    padding : 2px 8px;
                `
            case "large":
                return `
                    padding : 12px 20px;
                `
            default:
                return `
                    padding : 8px 16px;
                `
        }
    }}
${props => {
        switch (props.types) {
            case "primary":
                return `
                background-color: rgb(95,0,128);
                border : none;
                border-radius : 3px;
                color : #FFFFFF;
                font-weight : bold;
            `
            case "text":
                return `
                background-color: rgba(255,255,255,0);
                border: none;
                outline : 0;
                color : #000000;
            `
            default:
                return `
                background-color: #FFFFFF;
                border: 1px solid #000000;
                border-radius : 3px;
                color : #000000;
            `
        }
    }}
    ${props => (props.block) ? `width : 100%;` : null}
    ${props => props.bold ? `font-weight : bold` : null};
    min-width : ${props => props.minWidth ? props.minWidth : null};
    font-family : 'Noto Sans KR';
    font-size: 1rem;
    cursor: pointer;
`

const Button = ({ href, size, types, block, value, onClick, bold, minWidth, }) => (
    <>
        <ButtonComponent minWidth={minWidth} href={href} size={size} types={types} block={block} value={value} bold={bold} onClick={onClick}>

        </ButtonComponent>
    </>
)



export default Button