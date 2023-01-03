import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: flex;
  justify-items:center ;
  vertical-align: middle;
  margin-right: 0.8rem;
`

const Icon = styled.svg`
  fill: none;
  stroke: #c7cacd;
  stroke-width: 2px;
  visibility: visible;
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width:  ${props => props.size || `16px`};
  height: ${props => props.size || `16px`};
  background: ${props => (props.checked ? '#0d7000' : '#ffffff')};
  transition: all 150ms;
  border: ${props => (props.checked ? '1px solid #0d7000' : '1px solid #c7cacd')};
  border-radius: 2px;


  ${Icon} {
    stroke : ${props => (props.checked ? '#ffffff' : '#c7cacd')};
  }
`

const Checkbox = ({ className, size, checked, onChange, ...props }) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} onChange={onChange} {...props} />
        <StyledCheckbox size={size} checked={checked} >
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
)

export default Checkbox
