import React,{ Component } from "react";
import styled from "styled-components";
import { Wrapper } from '../ui/layout';
import { Button } from '../ui/interactives'
const ModalWrapper = styled.div`
        top: 0; left: 0; right: 0; bottom: 0;
        position: fixed;
        z-index: 1001;
        background-color: rgba(0,0,0,0.3);
        display:flex;
        align-items: center;
        justify-content: center;

        & > div {
            width: 600px;
            padding: 40px;
            background: white;
            display:flex;
            flex-direction: column;

            & > .modalClose {
                margin-right: -40px;
                margin-top: -70px;
                margin-bottom: 50px;
                align-self: flex-end;
                cursor: pointer;
            }
        }
    `

const InputContainer =  styled.div`
        background: red;
        display: flex;
        flex: 1;
        & > input{
            width: 100%;
            padding: 10px;
            border: 0;
            font-size: 14px;
            color: black;
        }
`

export default class Modal extends Component{
    state={
        taskTitle: "",
        taskDescription: ""
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        let data = this.state
        this.setState({taskTitle: "", taskDescription: ""})
        this.props.onSubmit(data)
    }
    
    render(){
        return (
            <ModalWrapper>
                <div>
                    <p onClick={this.props.onClose} className="modalClose">close</p>
                    <div
                        
                        direction="column">
                        <InputContainer>
                            <input
                                autoFocus
                                name="taskTitle"
                                onChange={this.handleChange}
                                value={this.state.taskTitle}
                                placeholder="Task title"/>
                        </InputContainer>

                        <Wrapper
                            content="flex-end"
                            self="flex-end">
                            <Button
                                onClick={this.handleSubmit}
                                theme="dark"
                                text="create" />
                        </Wrapper>
                       
                    </div>
                </div>
            </ModalWrapper>
        )
    }
}