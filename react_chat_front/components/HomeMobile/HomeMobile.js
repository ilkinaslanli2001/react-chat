import React from 'react';
import classes from './homeMobile.module.css'
import SideBox from "../SideBox/SideBox";
import MessageField from "../MessageField/MessageField";
import {useSelector} from "react-redux";

function HomeMobile(props) {
    const {other_user} = useSelector(state => state.otherUserReducer)
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                {Object.keys(other_user).length === 0 ? <SideBox/> : <MessageField/>}
            </div>
        </div>
    );
}

export default HomeMobile;