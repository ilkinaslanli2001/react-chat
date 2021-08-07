import React from 'react';
import classes from "./infobox.module.css";
import {SUCCESS, ERROR} from "../../constants";

function InfoBox({text, type = SUCCESS}) {
    return (
        <div className={classes.wrapper}>
            <p className={type === SUCCESS ? classes.success : classes.error}>{type === SUCCESS ? "successfully delivered" : "something went wrong"}</p>
        </div>
    );
}

export default InfoBox;