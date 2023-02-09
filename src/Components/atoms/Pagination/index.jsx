import React, { useState } from "react"
import styled from "styled-components"

const PaginationWrapper = styled.ul`
    padding: 0;
    width : auto;
    height: auto;
    display : flex;
    margin : 2rem 0;
`

const PaginationItem = styled.li`
    margin : 0 0.5rem;
    padding : 1rem;
    width: 2rem;
    height: 2rem;
    list-style-type: none;
    cursor: pointer;
    font-size : 1.3rem;
    display : flex;
    justify-content: center;
    align-items: center;
    border : solid rgba(255,255,255,0) 1px;
    border-radius: 5px;
    ${props => {
        return `
            &:nth-child(`+ props.num + `){
                background-color : #0d7000;
                color : #ffffff;
            }
        `

    }
    }
`

const Pagination = ({ num, onClick, defaultPage }) => {

    const [currentPage, setCurrentPage] = useState(defaultPage)

    const pageOnClick = (e) => {
        onClick(e)
        setCurrentPage(e.target.innerText)
    }

    const pageNum = []
    for (let i = 0; i < num; i++) {
        pageNum.push(i + 1)
    }
    return (
        <>
            <PaginationWrapper>
                {
                    pageNum.map((i, index) => {
                        return <PaginationItem key={index} num={currentPage} onClick={pageOnClick}>{pageNum[index]}</PaginationItem>
                    })
                }
            </PaginationWrapper>
        </>
    )
}

Pagination.defaultProps = {
    defaultPage: 1
};

export default Pagination