import React, {useEffect} from 'react';
import classes from "./infobox.module.css";
import {SUCCESS, ERROR} from "../../constants";
import {useDispatch} from "react-redux";
import {setInfoBox} from "../../store/actions/simpleActions";

function InfoBox({type = SUCCESS}) {
    const  dispatch = useDispatch()
    useEffect(()=>{
        setTimeout(()=>{
            dispatch(setInfoBox(0))
        },1000)
    },[])
    return (
        <div className={classes.wrapper}>
            <div className={classes.toast}>
                <p className={type === SUCCESS ? classes.success : classes.error}>{type === SUCCESS ? "successfully saved" : "something went wrong"}</p>
            </div>
        </div>
    );
}

export default InfoBox;