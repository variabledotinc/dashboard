import styled from 'styled-components'

export const Label = styled.div`
    margin-bottom: ${props => props.marginBottom ? props.marginBottom + "px" : "0"}
    display: flex;
    font-size: 23px;
    font-weight: 600;
    letter-spacing: 2px;
    justify-content: space-between;
`