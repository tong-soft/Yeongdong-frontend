import React from "react"
import styled from "styled-components"

const Check = styled.input.attrs((props) => ({ type: "checkbox" }))`
margin-right: 5px;
`
const CheckBoxGroup = styled.div`
justify-content : ${props => (props.justify) || null};
${props => props.justify ? `
        width : 100%;
        display: flex;
`
        :
        null
    }
`
const CheckBoxLabel = styled.label`
${props => {
        switch (props.size) {
            case "small":
                return `
                font-size:  0.75rem;
            `
            case "large":
                return `
                font-size:  1.25rem;
            `
            default:
                return `
                font-size: 1rem;;
                
            `
        }
    }
    }
    display: flex;
    align-items: center;

color: #707070;
`


const CheckBox = ({ name, style, justify, size, defaultChecked, onChange, options }) => (

    //options = selectBox 목록 DataType = Array
    <>
        <CheckBoxGroup justify={justify}>
            {options.map((i, index) =>
                <CheckBoxLabel style={style} name={name} key={index} size={size}>
                    <Check onChange={onChange} value={i} key={index} checked={(defaultChecked.includes(i)) ? true : false} />
                    {i}
                </CheckBoxLabel>
            )}

        </CheckBoxGroup>
    </>
)

export default CheckBox