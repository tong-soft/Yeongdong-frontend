import React, { memo } from "react"
import styled from "styled-components"

const ImageStyle = styled.img.attrs((props) => ({
    transition: `all 0.5s ease`,
    src: props.src
}))`
    transition: all 0.5s ease  ;
    ${(props) => (props.circle) ? ` border-radius : 50%; ` : null};
    height :  ${props => props.height || null} ;
    ${(props) => (props.cursor) ? ` cursor : ${props.cursor}` : null};
    width : ${props => props.width};
    ${(props) => (props.circle) ? ` border-radius : 100%; ` : null};
    border : ${props => (props.border) || null};
    padding : ${props => (props.padding) || null};
`

const Image = ({ src, width, circle, height, cursor, border, onClick, padding }) => (
    <>
        <ImageStyle src={src} width={width} cursor={cursor} border={border} onClick={onClick} padding={padding}
            height={height} circle={circle} ></ImageStyle>
    </>
)

export default memo(Image)

