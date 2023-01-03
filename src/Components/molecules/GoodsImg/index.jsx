import React, { memo } from "react"
import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ImgWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    transition: all 0.5s ease-in-out 0s;
`
const ImgContainer = styled.div`
position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    transition: all 0.5s ease-in-out 0s;
    cursor : pointer;
`

const ImgContent = styled.img.attrs((props) => ({
    src: props.src,
}))`
    transition: all 0.5s ease-in-out 0s;
    width:100%;
    height : ${props => props.height || `auto`};
    /* overflow: hidden; */
    object-fit: cover;
    object-position: center;
    ${ImgContainer}:hover & {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out 0s;
  }

`

const BasketIcon = styled.div`
    position:absolute;
    right : 1rem;
    bottom : 1rem;
    width : 2.5rem;
    height : 2.5rem;
    border-radius: 50%;
    background-color: rgba(0 , 128 ,16 , 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

const GoodsImg = ({ imgSrc, height }) => {

    return (
        <>
            <ImgWrapper>
                <ImgContainer>
                    <ImgContent src={imgSrc} height={height} >
                    </ImgContent>
                    <BasketIcon >
                        <ShoppingCartOutlinedIcon style={{
                            width: '60%',
                            height: 'auto',
                            color: "#fff",
                        }} />
                    </BasketIcon>
                </ImgContainer>

            </ImgWrapper>


        </>
    )

}

export default memo(GoodsImg);
