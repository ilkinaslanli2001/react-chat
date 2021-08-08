import React, {useEffect, useState} from 'react';
import classes from './userMessage.module.css'
import {USER} from "../../constants";
import {useSelector} from "react-redux";
import Image from 'next/image'

function UserMessage({sender, message, avatar, timestamp}) {
    const [userAvatar, setAvatar] = useState()
    const {user} = useSelector(state => state.userReducer)
    useEffect(() => {

        if (sender === USER) {

            if (user.avatar === null) {
                setAvatar('/images/user.png')
            } else
                setAvatar(user.avatar)

        } else {
            if (avatar !== null) {
                setAvatar(avatar)
            } else setAvatar('/images/user.png')
        }

    }, [])

    return (
        <div className={classes.wrapper}>
            <div className={sender === USER ? classes.u_container : classes.o_container}>
                <div className={classes.message_wrapper}>
                    <p>{message}</p>
                    <span className={sender === USER ? classes.u_timestamp : classes.o_timestamp}>{timestamp}</span>
                </div>
                {userAvatar ?
                    <Image height={50} width={50} quality={100} alt={'profile'} src={userAvatar}/> : undefined}
            </div>
        </div>
    );
}

export default UserMessage;