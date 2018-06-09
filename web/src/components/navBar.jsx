import React, {Component} from 'react'
import {Wrapper, Favicon} from '../ui/layout'

import Image from '../../assets/Avatar.png'

export default class extends Component{
    render(){
        return (
            <React.Fragment>
                <Wrapper
                style={{justifyContent: "center", padding: "0 20px"}}
                direction="column"
                background="white"
                h="70px">
                    <Wrapper self="flex-end">
                        
                        <Favicon  src={Image}/>
                    </Wrapper> 
                </Wrapper>
            </React.Fragment>
        )
    }
}