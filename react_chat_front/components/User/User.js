import React from 'react';
import classes from "./user.module.css";
import RightArrow from "../../src/assets/svg/right-arrow.svg";
import {useDispatch, useSelector} from "react-redux";
import {setOtherUser} from "../../store/actions/otherUserAction";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Router from "next/router";


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
            <img className={data?.avatar === null ? classes.noProfileImage : undefined}
                 src={data?.avatar !== null ? data?.avatar : '/images/user.png'}/>
            <div>
                <h1>@{data.username}</h1>
                <p>{data.status}</p>
            </div>
            <i><RightArrow/></i>
        </div>
    );
}

export default User;