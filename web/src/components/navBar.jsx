import React, {Component} from 'react'
import {Wrapper, Favicon} from '../ui/Layout'

import Image from '../../assets/Avatar.png'

export default class extends Component{
    render(){
        return (
            <React.Fragment>
                <Wrapper
                style={{justifyContent: "center", padding: "0 20px"}}
                direction="column"
                background="white"
                h="70">
                    <Wrapper self="flex-end"> 
                        <Favicon  src={Image}/>
                    </Wrapper> 
                </Wrapper>
            </React.Fragment>
        )
    }
}