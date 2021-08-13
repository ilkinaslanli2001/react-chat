import React, {useEffect, useState} from 'react';
import classes from "./sidebox.module.css";
import UserProfile from "../UserProfile/UserProfile";
import SearchLogo from '../../src/assets/svg/loupe.svg'
import MessageLogo from '../../src/assets/svg/messenger.svg'
import {MESSAGE, SEARCH} from "../../constants";
import Users from "../Users/Users";
import SearchBox from "../SearchBox/SearchBox";
import {useSelector} from "react-redux";

function SideBox() {

    const {user} = useSelector(state => state.userReducer)

    const [usersData, setUsersData] = useState({})
    const [currentTab, setCurrentTab] = useState(MESSAGE)

    useEffect(() => {
        const socket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/?${user.id}`,)
        socket.onmessage = function (event) {
            setUsersData(JSON.parse(event.data).users.reverse())
            socket.close()
        };
    }, [currentTab])

    return (
        <div className={[classes.wrapper, "glass"].join(" ")}>
            <UserProfile/>
            <div className={classes.line}/>
            <div className={classes.tabs}>
                <p onClick={() => {
                    setCurrentTab(MESSAGE)
                }} className={currentTab === MESSAGE ? classes.active : undefined}><i><MessageLogo/></i>Messages</p>
                <p onClick={() => {
                    setCurrentTab(SEARCH)
                }} className={currentTab === SEARCH ? classes.active : undefined}><i><SearchLogo/></i>Search</p>
            </div>
            {currentTab === MESSAGE ? <Users results={usersData}/> : <SearchBox/>}
        </div>
    );
}

export default SideBox;