import React from 'react';
import classes from "./user.module.css";
import RightArrow from "../../src/assets/svg/right-arrow.svg";
import {useDispatch, useSelector} from "react-redux";
import {setOtherUser} from "../../store/actions/otherUserAction";
import Image from 'next/image'

function User({data}) {
    const dispatch = useDispatch()

    const {other_user} = useSelector(state => state.otherUserReducer)
    const onUserClick = () => {
        if (data.username !== other_user.username) {
            dispatch(setOtherUser(data))
        }
    }

    return (
        <div onClick={onUserClick} className={classes.user}>
            <Image alt={data.username} width={50} height={50} quality={100}
                   className={data?.avatar === null ? classes.noProfileImage : undefined}
                   src={data?.avatar !== null ? data?.avatar : '/images/user.png'}/>
            <div className={classes.info}>
                <h1>@{data.username}</h1>
                <p>{data.status}</p>
            </div>
            <i><RightArrow/></i>
        </div>
    );
}

export default User;