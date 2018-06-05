import React from 'react'
import styled from "styled-components";

export const Wrapper = styled.div`
    align-self: ${props => props.self ? props.self : "auto"};
    height: ${props => props.h ? props.h + "px" : "auto"};
    width: ${props => props.width ? props.width + "px" : "auto"};
    background: ${props => props.background ? props.background : "transparent"};
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : "row"};
`

const ListWrapper = styled.div`
    & > div {
        background: #2c2c2c;
        opacity: 0.2;
        height: 50px;
        width: 100%;
        color: white;
        font-weight: 400;
        display: flex;
        align-items: center;
        padding: 0 35px;
        margin-bottom: ${props => props.mb ? props.mb + "px" : 0};
        cursor: pointer;

        :hover {
            opacity: 1;
            background: rgba(255, 255, 255, 0.06);
        }

        & > img {
            margin-top: -2px;
            margin-right: 10px;
            height: 15px;
        }
    }

    & > .active{
        opacity: 1
    }
`

export const Favicon = props => {
    const imageContainer = styled.div`

    `
    return (
        <imageContainer>
            <img src={props.src} alt=""/>
        </imageContainer>
    )
}


export const List = props => (
    <ListWrapper {...props}>
        {
            props.content.map((el, i)=>{
                return <props.ListEl key={el.value + i} data={el}/>
            })
        }
    </ListWrapper> 
) 