import React, { memo } from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';
import RowContext from "./RowContext";

const RowLayout = styled.div`
    width: 100%;
    height : auto;
    display: flex;
    flex-wrap : wrap;
    
    ${props => props.justify ? 'justify-content : ' + props.justify + ';' : null}
    ${props => props.align ? 'align-items : ' + props.align + ';' : null}
    ${props => props.border ? `border-top: 1px solid #ccd4e0; border-bottom: 1px solid #ccd4e0;` : null}

    
`


/**
 * @param {Row} justify - 수평 배열 === justify-content
 * @param {Row} align - 수직 배열  === align-items
 * @param {Row} gutter - 그리드 사이의 간격 [수평 , 수직 ]
 */
const Row = ({ style, justify, align, border, gutter, children }) => (
    <>
        <RowContext.Provider value={gutter}>
            <RowLayout style={style} justify={justify} border={border} align={align}>
                {children}
            </RowLayout>
        </RowContext.Provider>

    </>
)

Row.propTypes = {
    justify: PropTypes.string,
    align: PropTypes.string,
    gutter: PropTypes.array,
    border: PropTypes.bool,
}

Row.defaultProps = {
    justify: "start",
    align: "start",
    gutter: [0, 0],
};

export default memo(Row)