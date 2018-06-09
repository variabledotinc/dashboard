import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { Wrapper, Task } from '../ui/layout';
import { Label } from '../ui/typography';
import Modal from '../components/modal'
import Plus from '../../assets/add.svg'
import Minus from '../../assets/remove.svg'

@inject("appState")
@observer
export default class extends Component{
    
    onModalChange = e => {
        this.props.appState.modal[e.target.name] = e.target.value
    }

    onModalSubmit = e => {
        this.props.appState.saveTask(e)
    }

    render(){
        let {appState} = this.props
        return(
            <React.Fragment>
            <Wrapper
                padding="30px" 
                direction="column">
                <Label
                    marginBottom="20">
                    <p>Tasks:</p>
                    <div style={{width: "auto", marginTop: 4}}>
                        <img src={Minus} height="25px" style={{marginRight: 10}}/>
                        <img src={Plus}  onClick={() => appState.toggleTaskModal()}height="25px"/>
                    </div>
                </Label>
                <Wrapper
                    direction="column">
                    {appState.userData.userTasks.map((el, i)=>{
                        return <Task
                                    i={i}
                                    key={el.taskTitle[4] + i} 
                                    data={el}/>
                    })}
                </Wrapper>
            </Wrapper>
            {
                appState.tasksModalToggled && 
                <Modal
                    onSubmit={this.onModalSubmit}
                    onClose={appState.toggleTaskModal} />  
            }
            </React.Fragment>  
        )
    }
}