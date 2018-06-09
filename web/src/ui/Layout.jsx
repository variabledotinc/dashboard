import React from 'react';
import styled from "styled-components";

export const Wrapper = styled.div`
    align-self: ${props => props.self ? props.self : "auto"};
    height: ${props => props.h ? props.h : "auto"};
    width: ${props => props.width ? props.width : "auto"};
    background: ${props => props.background ? props.background : "transparent"};
    display: flex;
    margin: ${props => props.margin ? props.margin : "0"}
    padding: ${props => props.padding ? props.padding : "0"};
    flex-grow: ${props => props.grow ? props.grow : "0"};
    flex-direction: ${props => props.direction ? props.direction : "row"};
    justify-content: ${props => props.content ? props.content : "auto"};
    align-items: ${props => props.alignItems ? props.alignItems : "auto"};
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
    const ImageContainer = styled.div`

    `
    return (
        <ImageContainer>
            <img src={props.src} alt=""/>
        </ImageContainer>
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

export const Task = props => {
    const {data} = props

    const Circle = styled.div`
        font-size:10px;
        background: #D1D1D1;
        height: 23px;
        width: 23px;
        border-radius: 23px;
        display:flex;
        align-items: center;
        justify-content:center;
        margin-top:15px;
        margin-right: 20px;
        color:white;
    `
    return (
        <Wrapper
            margin="0 0 40px 0">
            <Circle>{props.i}</Circle>
            <Wrapper
            grow="1"
            alignItems="center"
            h="50px"
            padding="0 30px"
            background="rgba(203, 201, 201, 0.20)">
                <p>{data.taskTitle}</p>
            </Wrapper>
        </Wrapper>
    )

}