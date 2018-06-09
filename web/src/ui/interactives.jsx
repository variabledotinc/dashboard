import React from 'react'
import styled from 'styled-components'

export const Input = props => {
    const InputContainer = styled.div`
        display: flex;
        background: red;
        & > input {
            width: 100%;
            padding: 5px 10px;
            border: 0;
            font-size: 13px;
            font-weight: 500;
        }
    `
    return (
        <InputContainer>
            <input
                type="text"
                key={props.name}
                name={props.name}
                value={props.value}
                onChange={props.onInputChange}
                placeholder={props.placeholder}/>   
        </InputContainer>
    )
}

export const Button = props => {

    const theme = {
        color: "black",
        background: "white",
    }
    switch(props.theme){
        case "dark":
            theme.color = "white";
            theme.background = "black";
            break
    }

    const ButtonWrapper = styled.button`
        min-width: 100px;
        height: 30px;
        border: 0;
        background: ${theme.background};
        color: ${theme.color}
    `

    return <ButtonWrapper onClick={props.onClick}>{props.text}</ButtonWrapper>
}