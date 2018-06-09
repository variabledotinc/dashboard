import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
import {Wrapper, List} from '../ui/layout'
import styled from 'styled-components'

import Home from '../../assets/icon_home.svg'
import Data from '../../assets/icon_data.svg'
import Mail from '../../assets/icon_mail.svg'

const routes = [
    {value: "Team Dash", path:"/team", img: Home},
    {value: "Your Dash", path:"/dash", img: Data},
    {value: "Notes", path:"/notes", img:Mail}
        
]

const team = [
    {value: "James", status: "active"},
    {value: "Sasha", status: "4 min ago"},
    {value: "Akash", status: "5 min ago"},
    {value: "Alessandro", status: "18 min ago"},
]

const Title = styled.div`
    display: flex;
    color: white;
    height: 70px;
    align-items: center;
    padding: 0 35px;
    font-weight: 700;
    letter-spacing: 4px
`


class Sidebar extends Component{
    render(){
        const {history} = this.props
        console.log(history)
        const dashMenuItem = ({data}) => {
            return (
                <div className={this.props.location.pathname === data.path ? "active" : ""} onClick={()=>history.push(data.path)}>
                    {data.img ? <img src={data.img}/> : ""} {data.value}
                </div>
            )
        }

        const teamMenuItem = ({data}) => {
            return (
                <div>
                    {data.value}
                </div>
            )
        }

        return(
            <Wrapper 
                direction="column"
                style={{justifyContent: "space-between"}}
                width="260"
                background="#1D1D1D">
                <Wrapper
                    width="260"
                    direction="column"
                    >
                    <Title>
                        VARIABLE
                    </Title>

                    <List
                        ListEl={dashMenuItem}
                        mb="5" 
                        content={routes}/>
                </Wrapper>

                <Wrapper direction="column">

                    <Title>
                        Team
                    </Title>
                    <List
                        ListEl={teamMenuItem}
                        content={team} />

                </Wrapper> 
            </Wrapper>
        )
    }
}

export default withRouter(Sidebar)