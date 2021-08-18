import React, {useEffect, useRef} from 'react';
import classes from "./messages.module.css";
import UserMessage from "../UserMessage/UserMessage";
import {USER, OTHER} from "../../constants";
import {useSelector} from "react-redux";
import {LOGOUT} from "../../store/types";

function Messages({messages, divRef}) {

    const {user} = useSelector(state => state.userReducer)

    useEffect(() => {
        divRef.current.scrollIntoView()
    }, [])
    return (
        <div className={classes.wrapper}>
            {messages.length > 0 && messages?.map((data, key) => {

                return <UserMessage key={key} timestamp={data.timestamp} avatar={data.author.avatar}
                                    message={data.content}
                                    sender={data.author.username === user.username ? USER : OTHER}/>
            })}
            <div ref={divRef}/>
        </div>
    );
}

export default Messages;